export interface SkeletonVariant {
  cardWidth: string
  cardHeight: string
  imageWidth: string
  imageHeight: string
  textLines: number
  gridCount: string
}

const skeletonVariants: Record<string, SkeletonVariant> = {
  primary: {
    cardWidth: "w-[30rem]",
    cardHeight: "h-[30rem]",
    imageWidth: "w-[15rem]",
    imageHeight: "h-[15rem]",
    gridCount: "grid-cols-3",
    textLines: 6,
  },
  secondary: {
    cardWidth: "w-[15rem]",
    cardHeight: "h-[15rem]",
    imageWidth: "w-[10rem]",
    imageHeight: "h-[10rem]",
    gridCount: "grid-cols-5",
    textLines: 2,
  },
}

export default skeletonVariants
