import React from "react"
import { Skeleton } from "../ui/skeleton"
import CardSkeleton from "../molecules/CardSkeleton"
import skeletonVariants, { SkeletonVariant } from "@/config/skeletonConfig"

type SectionLoaderProps = {
  count: number
  variant: keyof typeof skeletonVariants
}

const SectionLoader = ({ count, variant }: SectionLoaderProps) => {
  const variantConfig: SkeletonVariant = skeletonVariants[variant]

  return (
    <div
      className={` grid grid-cols-1 md:${variantConfig.gridCount} gap-4 p-2`}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => {
          return (
            <CardSkeleton
              key={index}
              variantConfig={variantConfig}
              variant={variant}
            />
          )
        })}
    </div>
  )
}

export default SectionLoader
