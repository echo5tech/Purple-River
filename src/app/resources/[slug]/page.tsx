import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPost } from '@/lib/posts'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import { ArrowLeft, Clock, Tag, Quote } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-pr-indigo-950 pt-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm text-pr-ink-500 hover:text-pr-cyan-400 transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          All resources
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pr-lavender-300/10 px-3 py-1 text-xs font-semibold text-pr-lavender-300">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-pr-ink-500">
              <Clock size={10} />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-4">{post.dek}</p>
          <time dateTime={post.date} className="text-sm text-pr-ink-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {/* Pull quote */}
        {post.pullQuote && (
          <div className="my-8 flex gap-4 rounded-2xl border-l-4 border-pr-lavender-300 bg-pr-indigo-800/40 px-6 py-5">
            <Quote size={20} className="flex-shrink-0 text-pr-lavender-300 mt-1" />
            <p className="text-pr-lavender-200 italic text-lg leading-relaxed">{post.pullQuote}</p>
          </div>
        )}

        {/* Body */}
        <div className="prose prose-lg max-w-none mt-8">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 border-t border-pr-indigo-800 pt-10">
          <EyebrowLabel>Ready to act on this?</EyebrowLabel>
          <p className="mt-3 text-slate-400 leading-relaxed max-w-md">
            Reading about the problem is step one. Purple River can help you close the
            gap — starting with a conversation.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="primary" size="md">
              Start a Conversation
            </Button>
            <Button href="/resources" variant="secondary" size="md">
              More Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
