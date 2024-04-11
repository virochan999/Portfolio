import { ReactNode } from "react"

type FlipCardPropTypes = {
  front: ReactNode
  back: ReactNode
}
const FlipCard = ({ front, back }: FlipCardPropTypes) => {
  return (
    <div className="cursor-pointer group perspective min-w-[10rem] min-h-[10rem] ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden w-full h-full">{front}</div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
          {back}
        </div>
      </div>
    </div>
  )
}

export default FlipCard
