import React from "react"

type HeadingProps = {
  heading: string
  subtitle?: string
}

const Heading = ({ heading, subtitle }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="text-gradient text-3xl font-extrabold tracking-tight md:text-5xl">
        {heading}
      </h2>
      <span className="bg-brand h-1 w-16 rounded-full" />
      {subtitle && (
        <p className="max-w-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}

export default Heading
