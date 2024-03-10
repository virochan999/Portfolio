import Image from "next/image"

type ImagePropTypes = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  placeholder?: "blur"
  blurDataURL?: string
}

const NextImage = ({
  width,
  height,
  alt,
  fill = false,
  ...props
}: ImagePropTypes) => {
  return (
    <Image
      fill={fill}
      alt={alt}
      {...props}
      priority
      sizes={`${width}`}
    />
  )
}

export default NextImage
