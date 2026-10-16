import Link from "next/link"
import React from "react"

const AppLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-bold tracking-tight"
    >
      <span className="bg-brand flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold text-white">
        VS
      </span>
      <span className="hidden sm:inline">Virochan</span>
    </Link>
  )
}

export default AppLogo
