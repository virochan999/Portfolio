"use client"
import { useState } from "react"
import AppLogo from "../molecules/App-logo"
import { ModeToggle } from "../molecules/ModeToggle"
import Navbar from "../molecules/Navbar"
import { MenuIcon, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <AppLogo />

        <Navbar className="hidden items-center gap-1 md:flex" />

        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 hover:bg-accent md:hidden"
          >
            {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <Navbar
          onNavigate={() => setIsOpen(false)}
          className="mx-auto flex max-w-6xl flex-col gap-1 border-t px-4 py-3 md:hidden"
        />
      )}
    </header>
  )
}
