import PageWrapper from "@/components/organisms/PageWrapper"
import React, { Suspense } from "react"
import fetchExperiences from "../actions/fetchExperience"
import Await from "@/lib/await"
import ExperienceCard from "@/components/organisms/ExperienceCard"
import { ExperienceTypes } from "@/types/experiences"
import { experience } from "@/Assets/local.json"
import Heading from "@/components/atoms/Heading"
import CardLoader from "@/components/organisms/CardLoader"
export const dynamic = "force-dynamic"

const Experience = async () => {
  const promise = fetchExperiences()
  return (
    <>
      <Heading heading={experience.heading} />
      <Suspense fallback={<CardLoader count={5} />}>
        <Await promise={promise}>
          {({ experiences }) => (
            <PageWrapper>
              {experiences.map((experience: ExperienceTypes) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </PageWrapper>
          )}
        </Await>
      </Suspense>
    </>
  )
}

export default Experience
