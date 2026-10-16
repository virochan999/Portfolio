import prisma from "@/lib/prisma"
import ListPage from "@/components/admin/ListPage"

export default async function PostsAdmin() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } })
  return (
    <ListPage
      title="Blog posts"
      newHref="/admin/posts/new"
      rows={posts.map((p) => ({
        id: p.id,
        href: `/admin/posts/${p.id}`,
        primary: p.title,
        secondary: `${p.published ? "Published" : "Draft"} · /blog/${p.slug}`,
      }))}
    />
  )
}
