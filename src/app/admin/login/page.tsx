import { redirect } from "next/navigation"
import { auth, signIn } from "@/auth"
import { isAdminEmail } from "@/lib/admin"
import { Button } from "@/components/ui/button"

export const metadata = { title: "Admin sign in", robots: { index: false } }

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const session = await auth()
  if (isAdminEmail(session?.user?.email)) redirect("/admin")
  const { error } = await searchParams

  return (
    <div className="mx-auto mt-16 flex w-full max-w-sm flex-col gap-4">
      <h1 className="text-2xl font-bold">Admin sign in</h1>
      {error && (
        <p className="rounded-md bg-red-600/15 px-3 py-2 text-sm text-red-700 dark:text-red-400">
          That account is not allowed to sign in.
        </p>
      )}
      {(["github", "google"] as const).map((provider) => (
        <form
          key={provider}
          action={async () => {
            "use server"
            await signIn(provider, { redirectTo: "/admin" })
          }}
        >
          <Button type="submit" className="w-full capitalize">
            Continue with {provider}
          </Button>
        </form>
      ))}
    </div>
  )
}
