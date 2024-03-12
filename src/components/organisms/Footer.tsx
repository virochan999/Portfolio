import React from "react"
import { appInformation } from "@/Assets/local.json"
import Navlink from "@/components/atoms/Navlink"
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

const SocialIcons = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/virochan-sharma-57675b151/",
    logo: (
      <LinkedInLogoIcon
        height={20}
        width={20}
      />
    ),
  },
  {
    name: "Github",
    path: "https://github.com/virochan999/",
    logo: (
      <GitHubLogoIcon
        height={20}
        width={20}
      />
    ),
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/virochan__sharma/",
    logo: (
      <InstagramLogoIcon
        height={20}
        width={20}
      />
    ),
  },
  {
    name: "Twitter",
    path: "https://twitter.com/VirochanSharma",
    logo: (
      <TwitterLogoIcon
        height={20}
        width={20}
      />
    ),
  },
]
const Footer = () => {
  return (
    <footer className="border-t py-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="flex justify-around flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-lg mb-1 font-semibold">
            {appInformation.socialHeading}
          </h3>
          <div className="flex md:flex-col gap-4 md:gap-2">
            {SocialIcons.map((social) => (
              <div
                key={social.name}
                className="flex items-center justify-between gap-2 w-1/4"
              >
                <div className="text-2xl">{social.logo}</div>
                <Navlink
                  linkText={social.name}
                  href={social.path}
                  className="text-sm hover:underline hover:decoration-sky-500 hidden md:block"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="min-w-[8rem] min-h-[8rem] px-2 flex flex-col justify-center items-center rounded-md bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] shadow-[5px_5px_1px_1px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_1px_1px_rgba(255,255,255,0.3)]">
            <p className="text-sm font-semibold">{appInformation.contact}</p>
            <a
              href={`mailto:${appInformation.email}`}
              className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Email
            </a>
          </div>
          <div className="min-w-[8rem] min-h-[8rem]px-2 flex flex-col justify-center items-center rounded-md bg-[rgba(255,255,255,0.3)] dark:bg-[rgba(0,0,0,0.3)] shadow-[5px_5px_1px_1px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_1px_1px_rgba(255,255,255,0.3)]">
            <p className="text-sm font-semibold">{appInformation.work}</p>
            <Navlink
              linkText="Github"
              href={appInformation.githubUrl}
              className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
