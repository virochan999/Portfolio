import { Project } from "@/types/project"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import ProjectInfo from "@/Assets/local.json"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image ?? "/icon.png"}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col gap-3 p-5">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="flex-grow whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href={project.hostedLink}
            prefetch={false}
            target="_blank"
            className="bg-brand inline-flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <ExternalLink size={14} />
            {ProjectInfo.projectPageData.link}
          </Link>
          <Link
            href={project.githubLink}
            prefetch={false}
            target="_blank"
            className="inline-flex h-9 items-center gap-2 rounded-lg border px-4 text-sm font-semibold transition hover:bg-accent"
          >
            <GitHubLogoIcon />
            {ProjectInfo.projectPageData.github}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
