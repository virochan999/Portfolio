import React from "react"
import { Skeleton } from "../ui/skeleton"

type CardLoaderProps = {
  count: number
}

const CardLoader = ({ count }: CardLoaderProps) => {
  const cards = Array(count).fill(0)
  return (
    <>
      {cards.map((_, index) => (
        <div
          className="w-full p-4 border-b"
          key={index}
        >
          <div className="flex justify-between flex-col md:flex-row gap-2">
            <Skeleton className="w-full md:w-2/5 h-4" />
            <Skeleton className="w-2/5 md:w-1/5 h-4" />
          </div>
          <Skeleton className="w-2/5 md:w-1/5 h-4 mt-2" />
        </div>
      ))}
    </>
  )
}

export default CardLoader
