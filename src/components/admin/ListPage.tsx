import Link from "next/link"
import { Button } from "@/components/ui/button"

export type ListRow = {
  id: string
  href: string
  primary: string
  secondary?: string
}

export default function ListPage({
  title,
  newHref,
  rows,
  empty = "Nothing here yet.",
}: {
  title: string
  newHref?: string
  rows: ListRow[]
  empty?: string
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        {newHref && (
          <Button asChild>
            <Link href={newHref}>Add new</Link>
          </Button>
        )}
      </div>
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">{empty}</p>
      ) : (
        <ul className="divide-y rounded-md border">
          {rows.map((row) => (
            <li key={row.id}>
              <Link
                href={row.href}
                className="flex flex-col px-4 py-3 hover:bg-accent"
              >
                <span className="font-medium">{row.primary}</span>
                {row.secondary && (
                  <span className="truncate text-sm text-muted-foreground">
                    {row.secondary}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
