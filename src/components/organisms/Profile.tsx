import { Button } from "@/components/ui/button"
import { Profile } from "@/types/profile"
import AnimatedTypingText from "../atoms/AnimatedText"
import PageWrapper from "./PageWrapper"
import Image from "next/image"
import Link from "next/link"
export const dynamic = "force-dynamic"

type ProfileProps = {
  profile: Profile[]
}

const HomeProfile = ({ profile }: ProfileProps) => {
  return (
    <PageWrapper className="flex flex-grow justify-between gap-2 flex-col md:flex-row">
      <div className="flex-[0.5] flex flex-col justify-center md:p-4 p-8 gap-2">
        <p>
          <span className="font-bold text-2xl">Hello</span>
          <span className="text-lg">, My name is </span>
          <span className="font-bold text-lg">{profile[0].name}</span>
        </p>
        <p className="text-xl md:text-3xl items-center flex gap-2 whitespace-nowrap">
          <span>I am a </span>{" "}
          <AnimatedTypingText designation={profile[0].designation} />
        </p>
        <p className="font-medium text-muted-foreground mt-4">
          {profile[0].description}
        </p>
        <div className="flex gap-8 mt-8">
          <Link
            href="contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-bold"
          >
            Hire me
          </Link>
          <a
            href={profile[0].resume}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-bold"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex-[0.5] flex justify-center items-center overflow-hidden p-2">
        <Image
          src={profile[0].image}
          alt="Profile image"
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8w8AAoMBQGYBhLwAAAAASUVORK5CYII="
          className="md:w-[25rem] md:h-[25rem] w-[20rem] h-[20rem] rounded-md shadow-[5px_5px_0px_2px_#e2eafc] translate-x-[300%] animate-[image-forward_2s_forwards]"
        />
      </div>
    </PageWrapper>
  )
}

export default HomeProfile
