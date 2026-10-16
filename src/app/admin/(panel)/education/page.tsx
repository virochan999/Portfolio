import prisma from "@/lib/prisma"
import ListPage from "@/components/admin/ListPage"

export default async function EducationAdmin() {
  const items = await prisma.education.findMany()
  return (
    <ListPage
      title="Education"
      newHref="/admin/education/new"
      rows={items.map((e) => ({
        id: e.id,
        href: `/admin/education/${e.id}`,
        primary: `${e.name} · ${e.college}`,
        secondary: `${e.startDate} – ${e.endDate}`,
      }))}
    />
  )
}
