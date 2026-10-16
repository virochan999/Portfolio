import { unstable_cache } from "next/cache"
import prisma from "@/lib/prisma"

// Every public read is cached under this tag. Admin Server Actions call
// revalidateTag(CONTENT_TAG) after a write so the site updates immediately.
export const CONTENT_TAG = "portfolio-content"

const cached = <T>(key: string, fn: () => Promise<T>) =>
  unstable_cache(fn, [key], { tags: [CONTENT_TAG] })()

// The site belongs to a single owner: the first profile is "the" profile.
const getProfileId = async () => (await prisma.profile.findFirst())?.id

export const getProfile = () =>
  cached("profile", () => prisma.profile.findFirst())

export const getExperiences = () =>
  cached("experiences", async () => {
    const profileId = await getProfileId()
    return prisma.experience.findMany({ where: { profileId } })
  })

export const getEducation = () =>
  cached("education", async () => {
    const profileId = await getProfileId()
    return prisma.education.findMany({ where: { profileId } })
  })

export const getProjects = () =>
  cached("projects", async () => {
    const profileId = await getProfileId()
    return prisma.project.findMany({
      where: { profileId },
      orderBy: { order: "desc" },
    })
  })

export const getSkills = () =>
  cached("skills", async () => {
    const profileId = await getProfileId()
    if (!profileId) return null
    return prisma.skill.findUnique({
      where: { profileId },
      include: {
        professional: { orderBy: { name: "asc" } },
        technical: { orderBy: { order: "asc" } },
        other: true,
      },
    })
  })

/* ---------- Blog ---------- */

export const getPublishedPosts = () =>
  cached("posts", () =>
    prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    })
  )

export const getPublishedPost = (slug: string) =>
  unstable_cache(
    () => prisma.post.findFirst({ where: { slug, published: true } }),
    ["post", slug],
    { tags: [CONTENT_TAG] }
  )()
