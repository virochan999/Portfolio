import { EducationTypes } from "@/types/education"
import React from "react"

const EducationCard = ({ education }: { education: EducationTypes }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border-b">
      <div className="flex justify-between flex-col md:flex-row gap-2">
        <h3 className="text-2xl font-bold">{education.name}</h3>
        <p className="text-sm">
          {education.startDate} - {education.endDate}
        </p>
      </div>
      <p className="font-semibold">{education.college}</p>
    </div>
  )
}

export default EducationCard
