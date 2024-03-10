import { Project } from "@/types/project"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import NextImage from "../atoms/Image"
import { imageDimentions } from "@/styles/variables"
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import ProjectInfo from "@/Assets/local.json"
export const dynamic = "force-dynamic"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <Card className="max-w-[30rem] h-full flex flex-col">
        <CardHeader className="flex flex-col items-center p-4">
          <div className="relative w-[15rem] h-[15rem] shadow-lg">
            <NextImage
              src={project.image}
              alt={project.name}
              width={imageDimentions.md}
              height={imageDimentions.md}
              fill={true}
              className="w-full h-full object-cover rounded-md"
              placeholder="blur"
              blurDataURL="LDA^q5?]4U8xFqS|r]rZ4nNFxbw}"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center flex-grow">
          <CardTitle> {project.name}</CardTitle>
          <CardContent className="p-0 text-sm">
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="font-semibold"
              >
                {" "}
                {`${tech} ${
                  index !== project.technologies.length - 1 ? "," : ""
                }`}{" "}
              </span>
            ))}
          </CardContent>
          <CardDescription className="whitespace-pre-wrap">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-4 font-semibold justify-evenly">
          <Link
            href={project.hostedLink}
            prefetch={false}
            target="_blank"
            className="flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            <Link1Icon />
            <span>{ProjectInfo.projectPageData.link}</span>
          </Link>
          <Link
            href={project.githubLink}
            prefetch={false}
            target="_blank"
            className="flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          >
            <GitHubLogoIcon />
            <span>{ProjectInfo.projectPageData.github}</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard
