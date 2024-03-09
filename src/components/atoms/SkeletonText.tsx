import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { skeletonWidth, skeletonHeight } from "@/styles/variables"

type SkeletonTextProps = {
  count: number
  width?: string
  height?: string
}

const SkeletonText = ({ count, width, height }: SkeletonTextProps) => {
  const skeletonCount = Array(count).fill(0)
  return (
    <>
      {skeletonCount.map((_, index) => (
        <Skeleton
          key={index}
          className={`${height} ${width} w-full rounded-full bg-primary/10`}
        />
      ))}
    </>
  )
}

export default SkeletonText
