import prisma from "@/lib/prisma"
import ListPage from "@/components/admin/ListPage"
import { SKILL_CATEGORIES } from "@/lib/validation"

export default async function SkillsAdmin() {
  const skill = await prisma.skill.findFirst({
    include: { technical: true, professional: true, other: true },
  })

  return (
    <>
      {SKILL_CATEGORIES.map((category) => (
        <div key={category} className="flex flex-col gap-4">
          <ListPage
            title={`Skills: ${category}`}
            newHref={`/admin/skills/${category}/new`}
            rows={(skill?.[category] ?? []).map((s) => ({
              id: s.id,
              href: `/admin/skills/${category}/${s.id}`,
              primary: s.name,
              secondary: `${s.proficiency} · ${s.level}%`,
            }))}
          />
        </div>
      ))}
    </>
  )
}
