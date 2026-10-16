import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { deletePost, savePost } from "../../../actions"
import { Field, FormShell, ImageField, Notice } from "@/components/admin/fields"

export default async function PostEdit({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
  const { error } = await searchParams
  const isNew = id === "new"
  const post = isNew ? null : await prisma.post.findUnique({ where: { id } })
  if (!isNew && !post) notFound()

  return (
    <>
      <h1 className="text-2xl font-bold">{isNew ? "New post" : "Edit post"}</h1>
      <Notice error={error} />
      <FormShell
        action={savePost.bind(null, id)}
        deleteAction={isNew ? undefined : deletePost.bind(null, id)}
      >
        <Field label="Title" name="title" defaultValue={post?.title} required />
        <Field
          label="Slug"
          name="slug"
          defaultValue={post?.slug}
          hint="URL part, e.g. my-first-post. Leave empty to generate from the title."
        />
        <Field label="Excerpt" name="excerpt" rows={2} defaultValue={post?.excerpt} />
        <Field
          label="Content (Markdown)"
          name="content"
          rows={20}
          defaultValue={post?.content}
          required
          hint="Supports headings, lists, links, code blocks and tables (GitHub-flavoured Markdown)."
        />
        <ImageField label="Cover image" name="coverImage" defaultValue={post?.coverImage} />
        <Field label="Tags" name="tags" defaultValue={post?.tags.join(", ")} hint="Comma separated" />
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" name="published" defaultChecked={post?.published} />
          Published (visible on /blog)
        </label>
      </FormShell>
    </>
  )
}
