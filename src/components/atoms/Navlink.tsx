import React, { ReactNode } from "react"
import Link from "next/link"

type NavlinkPropTypes = {
  href: string
  linkText: string
  className?: string
  target?: string
  onClick?: () => void
  children?: ReactNode
}

const Navlink = ({ linkText, children, ...props }: NavlinkPropTypes) => {
  return (
    <Link {...props}>
      {children}
      {linkText}
    </Link>
  )
}

export default Navlink
