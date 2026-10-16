import { ExperienceTypes } from "@/types/experiences"
import React from "react"

// One entry of the vertical timeline; the line itself is drawn by the page.
const ExperienceCard = ({ experience }: { experience: ExperienceTypes }) => {
  return (
    <article className="relative">
      <span
        aria-hidden
        className="bg-brand absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full ring-4 ring-background"
      />
      <div className="glass flex flex-col gap-3 rounded-2xl p-5 transition hover:shadow-xl hover:shadow-indigo-500/10">
        <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
          <h3 className="text-xl font-bold md:text-2xl">{experience.title}</h3>
          <span className="w-fit rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
            {experience.startDate} – {experience.endDate}
          </span>
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          {experience.company}
        </p>
        <p className="whitespace-pre-wrap text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </article>
  )
}

export default ExperienceCard
