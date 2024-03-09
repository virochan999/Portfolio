import React from "react"
import Link from "next/link"

type NavlinkPropTypes = {
  href: string
  linkText: string
  className?: string
  target?: string
  onClick?: () => void
}

const Navlink = ({ linkText, ...props }: NavlinkPropTypes) => {
  return <Link {...props}>{linkText}</Link>
}

export default Navlink
