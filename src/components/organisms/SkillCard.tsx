import NextImage from "@/components/atoms/Image"
import { imageDimentions } from "@/styles/variables"
import { Skill } from "@/types/skill"

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div
      className="flex gap-4 p-4 rounded-md flex-col justify-center items-center  
        shadow-[0_10px_40px_0px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_0px_rgba(255,255,255,0.3)]
        hover:shadow-[0_10px_40px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_40px_0px_rgba(255,255,255,0.5)]"
    >
      {skill.logo && (
        <div className="relative w-[80px] h-[80px]">
          <NextImage
            src={skill.logo}
            alt={skill.name}
            width={imageDimentions.md}
            height={imageDimentions.md}
            fill={true}
            className="w-full h-full"
          />
        </div>
      )}
      <span
        className="md:text-lg font-semibold"
        key={skill.id}
      >
        {skill.name}
      </span>
    </div>
  )
}

export default SkillCard
