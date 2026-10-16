import prisma from "@/lib/prisma"
import ListPage from "@/components/admin/ListPage"

export default async function ExperienceAdmin() {
  const items = await prisma.experience.findMany()
  return (
    <ListPage
      title="Experience"
      newHref="/admin/experience/new"
      rows={items.map((e) => ({
        id: e.id,
        href: `/admin/experience/${e.id}`,
        primary: `${e.title} · ${e.company}`,
        secondary: `${e.startDate} – ${e.endDate}`,
      }))}
    />
  )
}
