import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { deleteProject, saveProject } from "../../../actions"
import { Field, FormShell, ImageField, Notice } from "@/components/admin/fields"

export default async function ProjectEdit({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
  const { error } = await searchParams
  const isNew = id === "new"
  const project = isNew ? null : await prisma.project.findUnique({ where: { id } })
  if (!isNew && !project) notFound()

  return (
    <>
      <h1 className="text-2xl font-bold">{isNew ? "New project" : "Edit project"}</h1>
      <Notice error={error} />
      <FormShell
        action={saveProject.bind(null, id)}
        deleteAction={isNew ? undefined : deleteProject.bind(null, id)}
      >
        <Field label="Name" name="name" defaultValue={project?.name} required />
        <Field
          label="Description"
          name="description"
          rows={5}
          defaultValue={project?.description}
          required
        />
        <Field
          label="Technologies"
          name="technologies"
          defaultValue={project?.technologies.join(", ")}
          hint="Comma separated"
        />
        <Field label="Live link" name="hostedLink" defaultValue={project?.hostedLink} required />
        <Field label="GitHub link" name="githubLink" defaultValue={project?.githubLink} required />
        <ImageField label="Image" name="image" defaultValue={project?.image} />
        <Field
          label="Order"
          name="order"
          type="number"
          defaultValue={project?.order}
          hint="Higher numbers appear first on the Projects page. Leave empty for automatic."
        />
      </FormShell>
    </>
  )
}
