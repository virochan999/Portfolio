"use client"
import { useState } from "react"
import AppLogo from "../molecules/App-logo"
import { ModeToggle } from "../molecules/ModeToggle"
import Navbar from "../molecules/Navbar"
// import Profile from "../molecules/Profile"
// import SearchBar from "../molecules/SearchBar"
import { MenuIcon, X } from "lucide-react"
import { Button } from "../ui/button"

export default function Header() {
  const [isBarOpen, setIsBarOpen] = useState(false)

  const handleCloseBar = () => {
    setIsBarOpen(false)
  }

  return (
    <header className="p-2 lg:px-6 flex justify-between items-center bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className={`flex items-center gap-y-28`}>
        <Button
          variant="secondary"
          onClick={() => setIsBarOpen(true)}
          className="md:hidden"
        >
          {!isBarOpen && <MenuIcon />}
        </Button>
        <div
          className={`${
            isBarOpen
              ? "absolute w-screen gap-4 flex-col px-2 py-4 items-start top-0 left-0 h-[100vh] md:bg-none bg-black opacity-80 z-50 md:z-0"
              : ""
          } flex md:flex-row md:gap-20 md:opacity-100`}
        >
          <AppLogo isBarOpen={isBarOpen} />
          <Navbar
            isBarOpen={isBarOpen}
            handleCloseBar={handleCloseBar}
          />
          {isBarOpen && (
            <X
              className="absolute right-2 top-4"
              onClick={handleCloseBar}
            />
          )}
        </div>
      </div>
      {/* <SearchBar /> */}
      <div className="flex items-center">
        <ModeToggle />
        {/* <Profile /> */}
      </div>
    </header>
  )
}
