import { redirect } from "next/navigation"
import { auth } from "@/auth"

export const isAdminEmail = (email?: string | null) => {
  if (!email) return false
  const allowed = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  return allowed.includes(email.toLowerCase())
}

// Call at the top of every admin page and Server Action. The proxy is only a
// first line of defence; this check is the one that actually protects writes.
export const requireAdmin = async () => {
  const session = await auth()
  if (!isAdminEmail(session?.user?.email)) redirect("/admin/login")
  return session!
}
