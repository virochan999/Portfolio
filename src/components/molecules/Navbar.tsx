"use client"

import React from "react"
import { navlinks } from "@/Assets/navlinks"
import Navlink from "../atoms/Navlink"
import { usePathname } from "next/navigation"

type NavbarProps = {
  onNavigate?: () => void
  className?: string
}

const Navbar = ({ onNavigate, className = "" }: NavbarProps) => {
  const pathName = usePathname()

  return (
    <nav
      aria-label="Main"
      className={className}
    >
      {navlinks.map((link) => {
        const active =
          link.path === "/" ? pathName === "/" : pathName.startsWith(link.path)
        return (
          <Navlink
            href={link.path}
            linkText={link.name}
            key={link.name}
            onClick={onNavigate}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          />
        )
      })}
    </nav>
  )
}

export default Navbar
