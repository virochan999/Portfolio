import React from "react"

const AppLogo = ({ isBarOpen }: { isBarOpen: boolean }) => {
  return (
    <div className={`${isBarOpen ? "flex" : "hidden"} md:flex`}>
      <h1 className="font-bold flex items-center text-xl cursor-pointer">
        Portfolio
      </h1>
    </div>
  )
}

export default AppLogo
