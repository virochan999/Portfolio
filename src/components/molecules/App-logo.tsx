import Link from "next/link"
import React from "react"

const AppLogo = ({ isBarOpen }: { isBarOpen: boolean }) => {
  return (
    <div className={`${isBarOpen ? "flex" : "hidden"} md:flex`}>
      <Link
        href={"/"}
        className="font-bold flex items-center text-xl cursor-pointer uppercase font-serif"
      >
        Portfolio
      </Link>
    </div>
  )
}

export default AppLogo
