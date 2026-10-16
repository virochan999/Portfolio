import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { isAdminEmail } from "@/lib/admin"

const MAX_BYTES = 5 * 1024 * 1024
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml", "image/avif", "application/pdf"]

export async function POST(req: Request) {
  const session = await auth()
  if (!isAdminEmail(session?.user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Uploads are not configured (BLOB_READ_WRITE_TOKEN missing). Paste a URL instead." },
      { status: 501 }
    )
  }
  const file = (await req.formData()).get("file")
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 413 })
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 415 })
  }
  const blob = await put(`portfolio/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  })
  return NextResponse.json({ url: blob.url })
}
