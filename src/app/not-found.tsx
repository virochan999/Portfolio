import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">That page does not exist.</p>
      <Link href="/" className="underline">
        Back to home
      </Link>
    </div>
  )
}
