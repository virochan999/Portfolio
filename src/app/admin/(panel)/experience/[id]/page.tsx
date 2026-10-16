import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { deleteExperience, saveExperience } from "../../../actions"
import { Field, FormShell, Notice } from "@/components/admin/fields"

export default async function ExperienceEdit({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
  const { error } = await searchParams
  const isNew = id === "new"
  const item = isNew ? null : await prisma.experience.findUnique({ where: { id } })
  if (!isNew && !item) notFound()

  return (
    <>
      <h1 className="text-2xl font-bold">{isNew ? "New experience" : "Edit experience"}</h1>
      <Notice error={error} />
      <FormShell
        action={saveExperience.bind(null, id)}
        deleteAction={isNew ? undefined : deleteExperience.bind(null, id)}
      >
        <Field label="Job title" name="title" defaultValue={item?.title} required />
        <Field label="Company" name="company" defaultValue={item?.company} required />
        <Field label="Location" name="location" defaultValue={item?.location} required />
        <Field label="Start date" name="startDate" defaultValue={item?.startDate} required hint="e.g. Jan 2022" />
        <Field label="End date" name="endDate" defaultValue={item?.endDate} required hint="e.g. Present" />
        <Field label="Description" name="description" rows={8} defaultValue={item?.description} required />
      </FormShell>
    </>
  )
}
