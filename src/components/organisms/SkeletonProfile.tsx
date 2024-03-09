import React from "react"
import SkeletonText from "@/components/atoms/SkeletonText"
import SkeletonHeading from "@/components/atoms/SkeletonHeading"
import { skeletonHeight, skeletonWidth } from "@/styles/variables"
import SkeletonCard from "@/components/atoms/SkeletonCard"

const SkeletonProfile = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center h-full flex-grow">
      <div className="flex flex-col space-y-4 md:w-2/4 w-3/4 items-center">
        <div className="w-full flex justify-center">
          <SkeletonHeading
            count={1}
            width={skeletonWidth.md}
            height={skeletonHeight.md}
          />
        </div>
        <div className="flex flex-col space-y-3 w-full items-center">
          <SkeletonText
            count={8}
            width={skeletonWidth.md}
            height={skeletonHeight.sm}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:w-2/4 w-3/4 items-center">
        <SkeletonCard />
      </div>
    </div>
  )
}

export default SkeletonProfile
