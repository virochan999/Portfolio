import Link from "next/link"
import { appInformation } from "@/Assets/local.json"
import SocialLinks from "@/components/molecules/SocialLinks"
import { Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-12 border-t bg-background/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center md:px-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          Let&apos;s build something <span className="text-gradient">great</span>{" "}
          together
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${appInformation.email}`}
            className="bg-brand inline-flex h-11 items-center gap-2 rounded-lg px-5 font-semibold text-white transition hover:opacity-90"
          >
            <Mail size={16} /> {appInformation.email}
          </a>
          <Link
            href="/contact"
            className="glass inline-flex h-11 items-center rounded-lg px-5 font-semibold transition hover:bg-accent"
          >
            Send a message
          </Link>
        </div>
        <SocialLinks />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Virochan Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
