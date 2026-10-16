import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/data"
import { SITE_URL } from "@/config/site"

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/projects", "/experience", "/skills", "/education", "/blog", "/contact"]
  const posts = await getPublishedPosts()

  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
    })),
  ]
}
