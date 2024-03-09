import React from "react"
import { Skeleton } from "../ui/skeleton"
import { SkeletonVariant } from "@/config/skeletonConfig"

type CardSkeletonProps = {
  variant: string
  variantConfig: SkeletonVariant
}

const CardSkeleton = ({ variantConfig }: CardSkeletonProps) => {
  const { cardHeight, textLines, imageWidth, imageHeight } = variantConfig
  return (
    <div className={`${cardHeight} flex flex-col gap-4 border p-4`}>
      <div className="w-full flex justify-center">
        <Skeleton className={`${imageWidth} ${imageHeight}`} />
      </div>

      <div className="flex flex-col items-center gap-2 p-4">
        {Array(textLines)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              className="w-3/4 h-4"
            />
          ))}
      </div>
    </div>
  )
}

export default CardSkeleton
