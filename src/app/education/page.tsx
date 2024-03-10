import React, { Suspense } from "react"
import fetchEducation from "@/app/actions/fetchEducation"
import Await from "@/lib/await"
import EducationCard from "@/components/organisms/EducationCard"
import { Education } from "@/types/education"
import { education } from "@/Assets/local.json"
import Heading from "@/components/atoms/Heading"
import CardLoader from "@/components/organisms/CardLoader"
import PageWrapper from "@/components/organisms/PageWrapper"
export const dynamic = "force-dynamic"

const Education = () => {
  const promise = fetchEducation()
  return (
    <>
      <Heading heading={education.heading} />
      <Suspense fallback={<CardLoader count={4} />}>
        <Await promise={promise}>
          {({ education }) => (
            <PageWrapper>
              {education.map((education: Education) => (
                <EducationCard
                  education={education}
                  key={education.id}
                />
              ))}
            </PageWrapper>
          )}
        </Await>
      </Suspense>
    </>
  )
}

export default Education
