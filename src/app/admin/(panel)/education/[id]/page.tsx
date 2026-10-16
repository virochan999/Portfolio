import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { deleteEducation, saveEducation } from "../../../actions"
import { Field, FormShell, Notice } from "@/components/admin/fields"

export default async function EducationEdit({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
  const { error } = await searchParams
  const isNew = id === "new"
  const item = isNew ? null : await prisma.education.findUnique({ where: { id } })
  if (!isNew && !item) notFound()

  return (
    <>
      <h1 className="text-2xl font-bold">{isNew ? "New education" : "Edit education"}</h1>
      <Notice error={error} />
      <FormShell
        action={saveEducation.bind(null, id)}
        deleteAction={isNew ? undefined : deleteEducation.bind(null, id)}
      >
        <Field label="Degree / course" name="name" defaultValue={item?.name} required />
        <Field label="College / school" name="college" defaultValue={item?.college} required />
        <Field label="Start date" name="startDate" defaultValue={item?.startDate} required />
        <Field label="End date" name="endDate" defaultValue={item?.endDate} required />
        <Field label="Percentage / grade" name="percentage" defaultValue={item?.percentage} required />
        <Field label="Description" name="description" rows={4} defaultValue={item?.description} />
      </FormShell>
    </>
  )
}
