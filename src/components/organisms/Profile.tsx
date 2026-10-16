import Link from "next/link"
import Image from "next/image"
import { Profile } from "@/types/profile"
import AnimatedTypingText from "../atoms/AnimatedText"
import PageWrapper from "./PageWrapper"
import SocialLinks from "../molecules/SocialLinks"
import { ArrowRight, Download } from "lucide-react"

type ProfileProps = {
  profile: Profile | null
}

const HomeProfile = ({ profile }: ProfileProps) => {
  if (!profile) return null

  return (
    <PageWrapper className="flex flex-grow flex-col-reverse items-center justify-center gap-12 py-6 md:flex-row md:gap-16">
      <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </span>

        <div className="space-y-2">
          <p className="text-lg text-muted-foreground">Hi, I&apos;m</p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-2xl font-semibold md:text-3xl">
            <AnimatedTypingText designation={profile.designation} />
          </p>
        </div>

        {profile.description && (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link
            href="/contact"
            className="bg-brand inline-flex h-12 items-center gap-2 rounded-lg px-6 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Hire me <ArrowRight size={18} />
          </Link>
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex h-12 items-center gap-2 rounded-lg px-6 font-semibold transition hover:-translate-y-0.5 hover:bg-accent"
            >
              <Download size={18} /> Download CV
            </a>
          )}
        </div>

        <SocialLinks />
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <div
          aria-hidden
          className="bg-brand absolute h-72 w-72 rounded-full opacity-30 blur-3xl md:h-96 md:w-96"
        />
        <div className="bg-brand relative rounded-[2rem] p-1 shadow-2xl shadow-indigo-500/20">
          <Image
            src={profile.image ?? "/icon.png"}
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={400}
            priority
            className="h-60 w-60 rounded-[1.8rem] bg-background object-cover sm:h-72 sm:w-72 md:h-96 md:w-96"
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default HomeProfile
