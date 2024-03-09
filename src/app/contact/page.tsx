import Heading from "@/components/atoms/Heading"
import PageWrapper from "@/components/organisms/PageWrapper"
import React from "react"
import ContactForm from "./ContactForm"
import { contact } from "@/Assets/local.json"
export const dynamic = "force-dynamic"

const Contact = () => {
  return (
    <PageWrapper className="flex flex-col gap-8 flex-grow">
      <Heading heading={contact.heading} />
      <div className="flex justify-center p-4">
        <ContactForm />
      </div>
    </PageWrapper>
  )
}

export default Contact
