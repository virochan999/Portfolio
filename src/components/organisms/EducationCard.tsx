import { EducationTypes } from "@/types/education"
import React from "react"
import { GraduationCap } from "lucide-react"

const EducationCard = ({ education }: { education: EducationTypes }) => {
  return (
    <article className="glass flex gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/10">
      <span className="bg-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
        <GraduationCap size={22} />
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
          <h3 className="text-lg font-bold md:text-xl">{education.name}</h3>
          <span className="text-xs font-medium text-muted-foreground">
            {education.startDate} – {education.endDate}
          </span>
        </div>
        <p className="font-medium">{education.college}</p>
        {education.description && (
          <p className="text-sm text-muted-foreground">
            {education.description}
          </p>
        )}
      </div>
    </article>
  )
}

export default EducationCard
