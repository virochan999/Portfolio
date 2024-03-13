import React, { Suspense } from "react"
import Await from "@/lib/await"
import fetchSkills from "@/app/actions/fetchSkills"
import SkillSection from "./SkillSection"
import { skills } from "@/Assets/local.json"
import PageWrapper from "@/components/organisms/PageWrapper"
import SectionLoader from "@/components/organisms/SectionLoader"
import Heading from "@/components/atoms/Heading"

const Skills = async () => {
  let promise = fetchSkills()
  return (
    <>
      <Heading heading={skills.heading} />
      {/* <Suspense
        fallback={
          <SectionLoader
            variant="secondary"
            count={5}
          />
        }
      >
        <Await promise={promise}>
          {({ skills }) => (
            <PageWrapper>
              <SkillSection skills={skills} />
            </PageWrapper>
          )}
        </Await>
      </Suspense> */}
    </>
  )
}

export default Skills
