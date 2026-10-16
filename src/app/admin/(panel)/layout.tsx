import Link from "next/link"
import { signOut } from "@/auth"
import { requireAdmin } from "@/lib/admin"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Admin", robots: { index: false } }
export const dynamic = "force-dynamic"

const links = [
  ["Dashboard", "/admin"],
  ["Profile", "/admin/profile"],
  ["Projects", "/admin/projects"],
  ["Experience", "/admin/experience"],
  ["Education", "/admin/education"],
  ["Skills", "/admin/skills"],
  ["Blog posts", "/admin/posts"],
  ["Messages", "/admin/messages"],
] as const

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdmin()

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <aside className="flex shrink-0 flex-row flex-wrap gap-1 md:w-48 md:flex-col">
        <p className="mb-2 w-full truncate text-xs text-muted-foreground">
          {session.user?.email}
        </p>
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            {label}
          </Link>
        ))}
        <form
          className="mt-2"
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}
        >
          <Button type="submit" variant="outline" size="sm">
            Sign out
          </Button>
        </form>
      </aside>
      <section className="flex min-w-0 flex-1 flex-col gap-4">{children}</section>
    </div>
  )
}
