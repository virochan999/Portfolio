"use client"

import React from "react"
import { navlinks } from "@/Assets/navlinks"
import Navlink from "../atoms/Navlink"
import { usePathname } from "next/navigation"

type NavbarProps = {
  isBarOpen: boolean
  handleCloseBar: () => void
}

const Navbar = ({ isBarOpen, handleCloseBar }: NavbarProps) => {
  const pathName = usePathname()

  return (
    <div
      className={`${
        isBarOpen ? "flex gap-2 flex-col md:flex-row w-3/4 md:w-full" : "hidden"
      } md:flex gap-2`}
    >
      {navlinks.map((links) => {
        return (
          <Navlink
            href={links.path}
            linkText={links.name}
            key={links.name}
            onClick={handleCloseBar}
            className={`${
              pathName === links.path
                ? "bg-black text-white dark:text-black dark:bg-white"
                : ""
            } px-2 py-1 rounded-sm font-semibold hover:text-blue-400 text-sm`}
          />
        )
      })}
    </div>
  )
}

export default Navbar
