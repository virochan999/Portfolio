import { ReactNode } from "react"

type FlipCardPropTypes = {
  front: ReactNode
  back: ReactNode
}
const FlipCard = ({ front, back }: FlipCardPropTypes) => {
  return (
    <div className="cursor-pointer group perspective min-h-[9.5rem] w-full ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700 transition-transform">
        <div className="absolute backface-hidden w-full h-full">{front}</div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
          {back}
        </div>
      </div>
    </div>
  )
}

export default FlipCard
