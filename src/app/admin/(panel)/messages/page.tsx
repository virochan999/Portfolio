import prisma from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { deleteMessage, setMessageRead } from "../../actions"

export default async function MessagesAdmin() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  })

  return (
    <>
      <h1 className="text-2xl font-bold">Messages</h1>
      {messages.length === 0 && (
        <p className="text-sm text-muted-foreground">No messages yet.</p>
      )}
      <ul className="flex flex-col gap-3">
        {messages.map((m) => (
          <li
            key={m.id}
            className={`rounded-md border p-4 ${m.read ? "" : "border-primary"}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">
                {m.name}{" "}
                <a
                  href={`mailto:${m.email}`}
                  className="text-sm font-normal underline"
                >
                  {m.email}
                </a>
              </p>
              <time className="text-xs text-muted-foreground">
                {m.createdAt.toLocaleString("en-GB", { timeZone: "UTC" })} UTC
              </time>
            </div>
            <p className="mt-2 whitespace-pre-wrap text-sm">{m.message}</p>
            <div className="mt-3 flex gap-2">
              <form action={setMessageRead.bind(null, m.id, !m.read)}>
                <Button type="submit" size="sm" variant="outline">
                  Mark as {m.read ? "unread" : "read"}
                </Button>
              </form>
              <form action={deleteMessage.bind(null, m.id)}>
                <Button type="submit" size="sm" variant="destructive">
                  Delete
                </Button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
