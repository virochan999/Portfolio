import { SkillTypes } from "@/types/skill"
import pageInfo from "@/Assets/local.json"
import SkillCard from "@/components/organisms/SkillCard"

type SkillSectionProps = {
  skills: SkillTypes
}

const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">{pageInfo.skills.technical}</h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.technical?.map((skill) => (
          <SkillCard
            skill={skill}
            key={skill.id}
          />
        ))}
      </div>
      <h4 className="mt-6 text-xl font-bold">{pageInfo.skills.other}</h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.other?.map((skill) => (
          <SkillCard
            skill={skill}
            key={skill.id}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillSection
