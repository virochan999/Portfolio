"use server"

import { API_URL } from "@/config/apiUrls"
import { Contact, ContactSchema } from "@/lib/types"
import prisma from "@/lib/prisma"

const HOUR = 60 * 60 * 1000
const MAX_PER_EMAIL_PER_HOUR = 3
const MAX_TOTAL_PER_HOUR = 30

export const sendEmail = async (formData: Contact) => {
  const validateData = ContactSchema.safeParse(formData)

  if (!validateData.success) {
    const errorMessage = validateData.error.issues
      .map((e) => e.message)
      .join(", ")
    throw new Error(errorMessage)
  }
  const { name, email, message, website } = validateData.data

  // Honeypot filled in: pretend success so bots learn nothing.
  if (website) return { success: "Message sent" }

  // Basic rate limiting, backed by the messages we store anyway.
  const since = new Date(Date.now() - HOUR)
  const [fromEmail, total] = await Promise.all([
    prisma.message.count({ where: { email, createdAt: { gte: since } } }),
    prisma.message.count({ where: { createdAt: { gte: since } } }),
  ])
  if (fromEmail >= MAX_PER_EMAIL_PER_HOUR || total >= MAX_TOTAL_PER_HOUR) {
    throw new Error("Too many messages, please try again later")
  }

  // The database copy is the source of truth; it shows up in /admin/messages.
  await prisma.message.create({ data: { name, email, message } })

  // Email notification is best effort: a failure here must not lose the message.
  try {
    const response = await fetch(API_URL.WEBFORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEBFORM_ACCESS_KEY,
        name,
        email,
        message,
      }),
    })
    const result = await response.json()
    if (!result.success) console.error("Web3Forms rejected the message")
  } catch (error) {
    console.error("Web3Forms request failed", error)
  }

  return { success: "Message sent" }
}
