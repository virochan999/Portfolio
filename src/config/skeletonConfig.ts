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
    cardHeight: "h-[26rem]",
    imageWidth: "w-full",
    imageHeight: "h-[12rem]",
    gridCount: "md:grid-cols-2 lg:grid-cols-3",
    textLines: 6,
  },
  secondary: {
    cardWidth: "w-full",
    cardHeight: "h-[9.5rem]",
    imageWidth: "w-14",
    imageHeight: "h-14",
    gridCount: "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    textLines: 1,
  },
}

export default skeletonVariants
