"use server"

import { API_URL } from "@/config/apiUrls"
import { Contact, ContactSchema } from "@/lib/types"
import appData from "@/Assets/local.json"

export const sendEmail = async (formData: Contact) => {
  const validateData = ContactSchema.safeParse(formData)

  if (!validateData.success) {
    const errorMessage = validateData.error.issues
      .map((e) => e.message)
      .join(", ")
    throw new Error(errorMessage)
  }
  const response = await fetch(API_URL.WEBFORM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.WEBFORM_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  })
  const result = await response.json()
  if (result.success) {
    return {
      success: result.message,
    }
  } else {
    throw new Error(appData.errors.serverErrorMessage)
  }
}
