import prisma from "@/lib/prisma"
import ListPage from "@/components/admin/ListPage"

export default async function ProjectsAdmin() {
  // Same order the public site uses (highest "order" first).
  const projects = await prisma.project.findMany({ orderBy: { order: "desc" } })
  return (
    <ListPage
      title="Projects"
      newHref="/admin/projects/new"
      rows={projects.map((p) => ({
        id: p.id,
        href: `/admin/projects/${p.id}`,
        primary: p.name,
        secondary: `Order ${p.order} · ${p.technologies.join(", ")}`,
      }))}
    />
  )
}
