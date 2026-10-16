"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function ImageField({
  label,
  name,
  defaultValue,
}: {
  label: string
  name: string
  defaultValue?: string | null
}) {
  const [url, setUrl] = useState(defaultValue ?? "")
  const [status, setStatus] = useState("")

  const upload = async (file: File) => {
    setStatus("Uploading...")
    const body = new FormData()
    body.set("file", file)
    const res = await fetch("/api/admin/upload", { method: "POST", body })
    const json = await res.json()
    if (res.ok) {
      setUrl(json.url)
      setStatus("Uploaded.")
    } else {
      setStatus(json.error ?? "Upload failed")
    }
  }

  return (
    <div className="flex flex-col gap-2 text-sm font-medium">
      <label className="flex flex-col gap-1">
        {label}
        <Input
          name={name}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste an image/file URL, or upload below"
        />
      </label>
      <input
        type="file"
        onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
        className="text-xs font-normal"
      />
      {status && <span className="text-xs font-normal">{status}</span>}
      {url && /\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i.test(url) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="" className="h-24 w-24 rounded-md object-cover" />
      )}
    </div>
  )
}
