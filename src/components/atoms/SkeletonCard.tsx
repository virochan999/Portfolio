import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <Skeleton className="md:w-[25rem] w-[15rem] md:h-[25rem] h-[15rem] rounded-lg bg-primary/10" />
  )
}

export default SkeletonCard
