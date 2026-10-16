import Link from "next/link"
import Heading from "@/components/atoms/Heading"
import PageWrapper from "@/components/organisms/PageWrapper"
import { getPublishedPosts } from "@/lib/data"

export const metadata = {
  title: "Blog",
  description: "Articles and notes by Virochan Sharma",
}
export const dynamic = "force-dynamic"

export default async function BlogIndex() {
  const posts = await getPublishedPosts()

  return (
    <>
      <Heading heading="Blog" />
      <PageWrapper className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        {posts.length === 0 && (
          <p className="text-center text-muted-foreground">No posts yet.</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="rounded-md border p-4 transition hover:bg-accent"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.publishedAt && (
              <time className="text-xs text-muted-foreground">
                {post.publishedAt.toLocaleDateString("en-GB", {
                  dateStyle: "long",
                  timeZone: "UTC",
                })}
              </time>
            )}
            {post.excerpt && (
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            )}
            {post.tags.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">
                {post.tags.map((t) => `#${t}`).join(" ")}
              </p>
            )}
          </Link>
        ))}
      </PageWrapper>
    </>
  )
}
