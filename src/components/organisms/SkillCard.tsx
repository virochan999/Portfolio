import NextImage from "@/components/atoms/Image"
import { imageDimentions } from "@/styles/variables"
import { Skill } from "@/types/skill"
import FlipCard from "../molecules/FlipCard"
import CircularProgressBar from "../molecules/CircularProgressBar"

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <>
      <FlipCard
        front={
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
                  placeholder="blur"
                  blurDataURL="LDA^q5?]4U8xFqS|r]rZ4nNFxbw}"
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
        }
        back={
          <div className="flex flex-col gap-4 h-full items-center justify-center p-4 border-2 rounded-lg">
            <CircularProgressBar percentage={skill.level} />
            <p className="text-sm font-bold">Proficiency</p>
          </div>
        }
      />
    </>
  )
}

export default SkillCard
