import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { deleteSkill, saveSkill } from "../../../../actions"
import {
  Field,
  FormShell,
  ImageField,
  Notice,
  SelectField,
} from "@/components/admin/fields"
import { SKILL_CATEGORIES } from "@/lib/validation"

type Category = (typeof SKILL_CATEGORIES)[number]

const findSkill = (category: Category, id: string) => {
  if (category === "technical") return prisma.technical.findUnique({ where: { id } })
  if (category === "professional") return prisma.professional.findUnique({ where: { id } })
  return prisma.other.findUnique({ where: { id } })
}

export default async function SkillEdit({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { category, id } = await params
  const { error } = await searchParams
  if (!(SKILL_CATEGORIES as readonly string[]).includes(category)) notFound()
  const cat = category as Category

  const isNew = id === "new"
  const item = isNew ? null : await findSkill(cat, id)
  if (!isNew && !item) notFound()

  return (
    <>
      <h1 className="text-2xl font-bold">{isNew ? "New skill" : "Edit skill"}</h1>
      <Notice error={error} />
      <FormShell
        action={saveSkill.bind(null, cat, id)}
        deleteAction={isNew ? undefined : deleteSkill.bind(null, cat, id)}
      >
        <SelectField
          label="Category"
          name="category"
          options={[...SKILL_CATEGORIES]}
          defaultValue={cat}
        />
        <Field label="Name" name="name" defaultValue={item?.name} required />
        <Field
          label="Proficiency label"
          name="proficiency"
          defaultValue={item?.proficiency}
          required
          hint="e.g. Beginner, Intermediate, Expert"
        />
        <Field label="Level (0-100 %)" name="level" type="number" defaultValue={item?.level ?? 70} required hint="Shown as the percentage on the skill card." />
        <ImageField label="Logo" name="logo" defaultValue={item?.logo} />
      </FormShell>
    </>
  )
}
