import { z } from "zod"

const text = (max = 200) => z.string().trim().min(1, "Required").max(max)

const optional = (max = 2000) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((v) => (v === "" ? null : v))

const list = z.string().transform((v) =>
  v
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
)

const isUrl = (v: string) => /^(https?:\/\/|\/)/.test(v)
const url = optional(1000).refine(
  (v) => v === null || isUrl(v),
  "Must start with http(s):// or /"
)
const requiredUrl = text(1000).refine(isUrl, "Must start with http(s):// or /")

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

export const ProfileSchema = z.object({
  name: text(100),
  email: z.email(),
  image: url,
  resume: url,
  designation: list,
  description: optional(3000),
  contactEmail: z
    .union([z.email(), z.literal("")])
    .transform((v) => v || null),
  phone: optional(40),
  address: optional(300),
})

export const ProjectSchema = z.object({
  name: text(100),
  description: text(3000),
  hostedLink: requiredUrl,
  githubLink: requiredUrl,
  image: requiredUrl,
  technologies: list,
  order: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.coerce.number().int().optional()
  ),
})

export const ExperienceSchema = z.object({
  title: text(120),
  company: text(120),
  location: text(120),
  startDate: text(40),
  endDate: text(40),
  description: text(8000),
})

export const EducationSchema = z.object({
  name: text(150),
  college: text(150),
  startDate: text(40),
  endDate: text(40),
  percentage: text(40),
  description: optional(3000),
})

export const SKILL_CATEGORIES = ["technical", "professional", "other"] as const

export const SkillItemSchema = z.object({
  category: z.enum(SKILL_CATEGORIES),
  name: text(80),
  proficiency: text(40),
  logo: text(1000),
  level: z.coerce.number().int().min(0).max(100),
})

export const PostSchema = z.object({
  title: text(200),
  slug: z.string().transform(slugify),
  excerpt: optional(400),
  content: text(100000),
  coverImage: url,
  tags: list,
  published: z.preprocess((v) => v === "on", z.boolean()),
})

export const ContactMessageSchema = z.object({
  name: text(100),
  email: z.email(),
  message: text(5000),
})

// FormData -> plain object. Missing checkboxes simply have no key.
export const formToObject = (fd: FormData) =>
  Object.fromEntries(
    [...fd.entries()].filter(([, v]) => typeof v === "string")
  ) as Record<string, string>

export const firstError = (e: z.ZodError) =>
  e.issues.map((i) => `${i.path.join(".") || "form"}: ${i.message}`).join("; ")
