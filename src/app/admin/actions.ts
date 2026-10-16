"use server"

import { redirect } from "next/navigation"
import { revalidatePath, updateTag } from "next/cache"
import type { ZodType } from "zod"
import prisma from "@/lib/prisma"
import { requireAdmin } from "@/lib/admin"
import { CONTENT_TAG } from "@/lib/data"
import {
  EducationSchema,
  ExperienceSchema,
  PostSchema,
  ProfileSchema,
  ProjectSchema,
  SkillItemSchema,
  firstError,
  formToObject,
  slugify,
} from "@/lib/validation"

const back = (path: string, params: Record<string, string>): never =>
  redirect(`${path}?${new URLSearchParams(params)}`)

// Public pages read through a cache tag; bust it so edits show immediately.
const refresh = () => {
  updateTag(CONTENT_TAG)
  revalidatePath("/", "layout")
}

// Parse the form, or bounce back to it with the validation message.
const parse = <T>(schema: ZodType<T>, fd: FormData, errorPath: string): T => {
  const result = schema.safeParse(formToObject(fd))
  if (!result.success) return back(errorPath, { error: firstError(result.error) })
  return result.data
}

const ownerProfile = async () => {
  const profile = await prisma.profile.findFirst()
  if (!profile) throw new Error("No profile exists in the database yet.")
  return profile
}

/* ---------- Profile + contact ---------- */

export async function saveProfile(fd: FormData) {
  await requireAdmin()
  const path = "/admin/profile"
  const { contactEmail, phone, address, ...data } = parse(ProfileSchema, fd, path)
  const profile = await ownerProfile()
  await prisma.profile.update({ where: { id: profile.id }, data })
  if (contactEmail) {
    await prisma.contact.upsert({
      where: { profileId: profile.id },
      update: { email: contactEmail, phone, address },
      create: { email: contactEmail, phone, address, profileId: profile.id },
    })
  }
  refresh()
  back(path, { saved: "1" })
}

/* ---------- Projects ---------- */

export async function saveProject(id: string, fd: FormData) {
  await requireAdmin()
  const { order, ...data } = parse(ProjectSchema, fd, `/admin/projects/${id}`)
  const withOrder = { ...data, ...(order !== undefined && { order }) }
  if (id === "new") {
    await prisma.project.create({
      data: { ...withOrder, profileId: (await ownerProfile()).id },
    })
  } else {
    await prisma.project.update({ where: { id }, data: withOrder })
  }
  refresh()
  redirect("/admin/projects")
}

export async function deleteProject(id: string) {
  await requireAdmin()
  await prisma.project.delete({ where: { id } })
  refresh()
  redirect("/admin/projects")
}

/* ---------- Experience ---------- */

export async function saveExperience(id: string, fd: FormData) {
  await requireAdmin()
  const data = parse(ExperienceSchema, fd, `/admin/experience/${id}`)
  if (id === "new") {
    await prisma.experience.create({
      data: { ...data, profileId: (await ownerProfile()).id },
    })
  } else {
    await prisma.experience.update({ where: { id }, data })
  }
  refresh()
  redirect("/admin/experience")
}

export async function deleteExperience(id: string) {
  await requireAdmin()
  await prisma.experience.delete({ where: { id } })
  refresh()
  redirect("/admin/experience")
}

/* ---------- Education ---------- */

export async function saveEducation(id: string, fd: FormData) {
  await requireAdmin()
  const data = parse(EducationSchema, fd, `/admin/education/${id}`)
  if (id === "new") {
    await prisma.education.create({
      data: { ...data, profileId: (await ownerProfile()).id },
    })
  } else {
    await prisma.education.update({ where: { id }, data })
  }
  refresh()
  redirect("/admin/education")
}

export async function deleteEducation(id: string) {
  await requireAdmin()
  await prisma.education.delete({ where: { id } })
  refresh()
  redirect("/admin/education")
}

/* ---------- Skills (three identical tables, one form) ---------- */

type SkillCategory = "technical" | "professional" | "other"
type SkillData = {
  name: string
  proficiency: string
  logo: string
  level: number
}

const createSkill = (category: SkillCategory, data: SkillData, skillId: string) => {
  const args = { data: { ...data, skillId } }
  if (category === "technical") return prisma.technical.create(args)
  if (category === "professional") return prisma.professional.create(args)
  return prisma.other.create(args)
}

const updateSkill = (category: SkillCategory, id: string, data: SkillData) => {
  const args = { where: { id }, data }
  if (category === "technical") return prisma.technical.update(args)
  if (category === "professional") return prisma.professional.update(args)
  return prisma.other.update(args)
}

const removeSkill = (category: SkillCategory, id: string) => {
  const args = { where: { id } }
  if (category === "technical") return prisma.technical.delete(args)
  if (category === "professional") return prisma.professional.delete(args)
  return prisma.other.delete(args)
}

export async function saveSkill(category: SkillCategory, id: string, fd: FormData) {
  await requireAdmin()
  const { category: newCategory, ...data } = parse(
    SkillItemSchema,
    fd,
    `/admin/skills/${category}/${id}`
  )
  const profile = await ownerProfile()
  const skill = await prisma.skill.upsert({
    where: { profileId: profile.id },
    update: {},
    create: { profileId: profile.id },
  })

  if (id === "new") {
    await createSkill(newCategory, data, skill.id)
  } else if (newCategory === category) {
    await updateSkill(category, id, data)
  } else {
    // Category changed: move the row to the other table.
    await prisma.$transaction([
      removeSkill(category, id),
      createSkill(newCategory, data, skill.id),
    ])
  }
  refresh()
  redirect("/admin/skills")
}

export async function deleteSkill(category: SkillCategory, id: string) {
  await requireAdmin()
  await removeSkill(category, id)
  refresh()
  redirect("/admin/skills")
}

/* ---------- Blog posts ---------- */

export async function savePost(id: string, fd: FormData) {
  await requireAdmin()
  const path = `/admin/posts/${id}`
  const raw = parse(PostSchema, fd, path)
  const slug = raw.slug || slugify(raw.title)
  if (!slug) back(path, { error: "slug: could not generate a slug" })

  const existing =
    id === "new" ? null : await prisma.post.findUnique({ where: { id } })
  const clash = await prisma.post.findUnique({ where: { slug } })
  if (clash && clash.id !== id) {
    back(path, { error: `slug: "${slug}" is already used` })
  }

  const data = {
    ...raw,
    slug,
    // Stamp the publish date the first time a post goes live.
    publishedAt: raw.published ? (existing?.publishedAt ?? new Date()) : null,
  }
  if (id === "new") await prisma.post.create({ data })
  else await prisma.post.update({ where: { id }, data })
  refresh()
  redirect("/admin/posts")
}

export async function deletePost(id: string) {
  await requireAdmin()
  await prisma.post.delete({ where: { id } })
  refresh()
  redirect("/admin/posts")
}

/* ---------- Messages ---------- */

export async function setMessageRead(id: string, read: boolean) {
  await requireAdmin()
  await prisma.message.update({ where: { id }, data: { read } })
  revalidatePath("/admin/messages")
}

export async function deleteMessage(id: string) {
  await requireAdmin()
  await prisma.message.delete({ where: { id } })
  revalidatePath("/admin/messages")
}
