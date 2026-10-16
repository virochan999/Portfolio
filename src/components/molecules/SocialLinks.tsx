import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/virochan-sharma-57675b151/",
    Icon: LinkedInLogoIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/virochan999/",
    Icon: GitHubLogoIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/virochan__sharma/",
    Icon: InstagramLogoIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/VirochanSharma",
    Icon: TwitterLogoIcon,
  },
]

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <ul className={`flex items-center gap-2 ${className}`}>
    {socialLinks.map(({ name, href, Icon }) => (
      <li key={name}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-0.5 hover:bg-accent"
        >
          <Icon width={18} height={18} />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialLinks
