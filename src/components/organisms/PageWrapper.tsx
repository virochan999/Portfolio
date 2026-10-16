import React from "react"

type PagePropTypes = {
  children: React.ReactNode
  className?: string
}

// Pure CSS entrance animation (see .animate-fade-up in globals.css): content is
// server-rendered and never hidden behind JavaScript.
const PageWrapper = ({ children, className = "" }: PagePropTypes) => {
  return <div className={`animate-fade-up ${className}`}>{children}</div>
}

export default PageWrapper
