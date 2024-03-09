import { Experience } from "@/types/experiences"
import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value={experience.title}>
          <AccordionTrigger className="hover:no-underline md:items-start flex-col md:flex-row hover:bg-[#edf2fb] px-2 hover:rounded-sm dark:hover:text-black">
            <div className="flex gap-4 flex-col w-full">
              <div className="flex gap-4 px-2 pr-4 flex-col md:flex-row justify-between">
                <h3 className="font-bold text-2xl md:text-3xl">
                  {experience.title}
                </h3>
                <span className="text-sm">
                  ({experience.startDate} - {experience.endDate})
                </span>
              </div>
              <p className="text-sm md:text-left px-2">{experience.company}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="whitespace-pre-wrap px-4 py-2">
              {experience.description}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ExperienceCard
