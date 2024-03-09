import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { skeletonHeight, skeletonWidth } from "@/styles/variables"

type SkeletonHeadingProps = {
  count: number
  width?: string
  height?: string
}
const SkeletonHeading = ({ count, width, height }: SkeletonHeadingProps) => {
  const skeletonCount = Array(count).fill(0)
  return (
    <>
      {skeletonCount.map((_, index) => (
        <Skeleton
          key={index}
          className={`${width} w-full ${height} rounded-lg bg-primary/10`}
        />
      ))}
    </>
  )
}

export default SkeletonHeading
