import NextImage from "@/components/atoms/Image"
import { imageDimentions } from "@/styles/variables"
import { Skill } from "@/types/skill"
import FlipCard from "../molecules/FlipCard"
import CircularProgressBar from "../molecules/CircularProgressBar"

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <FlipCard
      front={
        <div className="glass flex h-full flex-col items-center justify-center gap-3 rounded-2xl p-4 transition hover:shadow-xl hover:shadow-indigo-500/10">
          {skill.logo && (
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <NextImage
                src={skill.logo}
                alt={skill.name}
                width={imageDimentions.md}
                height={imageDimentions.md}
                fill={true}
                className="h-full w-full object-contain"
                placeholder="blur"
                blurDataURL="LDA^q5?]4U8xFqS|r]rZ4nNFxbw}"
              />
            </div>
          )}
          <span className="text-center text-sm font-semibold md:text-base">
            {skill.name}
          </span>
        </div>
      }
      back={
        <div className="glass flex h-full flex-col items-center justify-center gap-2 rounded-2xl p-4">
          <CircularProgressBar percentage={skill.level} />
          <p className="text-xs font-semibold text-muted-foreground">
            {skill.proficiency}
          </p>
        </div>
      }
    />
  )
}

export default SkillCard
