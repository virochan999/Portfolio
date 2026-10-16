import Link from "next/link"
import prisma from "@/lib/prisma"

export default async function Dashboard() {
  const [projects, experience, education, posts, drafts, unread] =
    await Promise.all([
      prisma.project.count(),
      prisma.experience.count(),
      prisma.education.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.post.count({ where: { published: false } }),
      prisma.message.count({ where: { read: false } }),
    ])

  const cards = [
    ["Projects", projects, "/admin/projects"],
    ["Experience", experience, "/admin/experience"],
    ["Education", education, "/admin/education"],
    ["Published posts", posts, "/admin/posts"],
    ["Draft posts", drafts, "/admin/posts"],
    ["Unread messages", unread, "/admin/messages"],
  ] as const

  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {cards.map(([label, count, href]) => (
          <Link
            key={label}
            href={href}
            className="rounded-md border p-4 hover:bg-accent"
          >
            <p className="text-3xl font-bold">{count}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
