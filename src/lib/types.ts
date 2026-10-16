import { z } from "zod"

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(5000),
  // Honeypot: real users never fill this hidden field.
  website: z.string().optional(),
})

export type Contact = z.infer<typeof ContactSchema>
