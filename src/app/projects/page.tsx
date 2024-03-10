import PageWrapper from "@/components/organisms/PageWrapper"
import Await from "@/lib/await"
import React, { Suspense } from "react"
import fetchProjects from "../actions/fetchProjects"
import ProjectCard from "@/components/organisms/ProjectCard"
import { Project } from "@/types/project"
import { projectPageData } from "@/Assets/local.json"
import Heading from "@/components/atoms/Heading"
import SectionLoader from "@/components/organisms/SectionLoader"
export const dynamic = "force-dynamic"

const Projects = () => {
  const promise = fetchProjects()
  return (
    <>
      <Heading heading={projectPageData.heading} />
      <Suspense
        fallback={
          <SectionLoader
            count={3}
            variant="primary"
          />
        }
      >
        <Await promise={promise}>
          {({ projects }) => (
            <PageWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project: Project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </PageWrapper>
          )}
        </Await>
      </Suspense>
    </>
  )
}

export default Projects
