import { describe, expect, it } from "vitest"
import { PostSchema, ProjectSchema, slugify } from "../validation"

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("  Hello, World! 2024 ")).toBe("hello-world-2024")
  })
})

describe("ProjectSchema", () => {
  const base = {
    name: "Site",
    description: "A site",
    hostedLink: "https://example.com",
    githubLink: "https://github.com/x/y",
    image: "/img.png",
    technologies: "React, Next.js\nTypeScript",
    order: "",
  }

  it("splits technologies and treats empty order as unset", () => {
    const parsed = ProjectSchema.parse(base)
    expect(parsed.technologies).toEqual(["React", "Next.js", "TypeScript"])
    expect(parsed.order).toBeUndefined()
  })

  it("rejects non-http links", () => {
    expect(
      ProjectSchema.safeParse({ ...base, hostedLink: "javascript:alert(1)" }).success
    ).toBe(false)
  })
})

describe("PostSchema", () => {
  it("reads the checkbox value", () => {
    const post = { title: "T", slug: "A B", content: "x", excerpt: "", coverImage: "", tags: "" }
    expect(PostSchema.parse({ ...post, published: "on" }).published).toBe(true)
    expect(PostSchema.parse(post).published).toBe(false)
    expect(PostSchema.parse(post).slug).toBe("a-b")
  })
})
