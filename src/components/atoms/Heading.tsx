import React from "react"

type HeadingProps = {
  heading: string
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <h2 className="text-3xl text-center font-bold text-sky-400">{heading}</h2>
  )
}

export default Heading
