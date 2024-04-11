import { SkillTypes } from "@/types/skill"
import pageInfo from "@/Assets/local.json"
import SkillCard from "@/components/organisms/SkillCard"

type SkillSectionProps = {
  skills: SkillTypes
}

const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h4 className="text-xl w-fit px-4 font-extrabold">
        {`${pageInfo.skills.technical} :-`}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 p-4 gap-12">
        {skills.technical?.map((skill) => (
          <SkillCard
            skill={skill}
            key={skill.id}
          />
        ))}
      </div>
      <h4 className="text-xl w-fit px-4 font-extrabold">{`${pageInfo.skills.other} :-`}</h4>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 p-4 gap-12">
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
