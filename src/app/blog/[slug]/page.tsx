import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPublishedPost } from "@/lib/data"

export const dynamic = "force-dynamic"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPublishedPost(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto w-full max-w-3xl">
      <Link href="/blog" className="text-sm text-muted-foreground underline">
        ← All posts
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      {post.publishedAt && (
        <time className="text-sm text-muted-foreground">
          {post.publishedAt.toLocaleDateString("en-GB", {
            dateStyle: "long",
            timeZone: "UTC",
          })}
        </time>
      )}
      {/* react-markdown does not render raw HTML by default, so post content is safe. */}
      <div className="mt-6 space-y-4 leading-7 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_img]:rounded-md [&_ol]:list-decimal [&_ol]:pl-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-muted [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
