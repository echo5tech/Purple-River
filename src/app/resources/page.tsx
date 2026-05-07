import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import RiverFlow from '@/components/brand/RiverFlow'
import { getAllPostMeta } from '@/lib/posts'
import { ArrowRight, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Security guidance written for non-profit executive directors, operations leaders, and boards — not for IT professionals.',
}

const categoryColors: Record<string, string> = {
  Identity: 'bg-pr-cyan-400/10 text-pr-cyan-400',
  Compliance: 'bg-pr-lavender-300/10 text-pr-lavender-300',
  'Incident Response': 'bg-red-400/10 text-red-400',
  'Board Communication': 'bg-pr-blue-500/10 text-pr-blue-500',
  'Tools & Tactics': 'bg-green-400/10 text-green-400',
}

export default async function ResourcesPage() {
  const posts = await getAllPostMeta()

  return (
    <>
      {/* Header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>Resources</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Security guidance, written plainly.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            For executive directors, operations leads, and board members — not IT
            professionals. If it takes a security background to read it, we rewrote it.
          </p>
        </div>
      </div>

      <Section>
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500">Posts coming soon. Join the waitlist for updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const catColor =
                categoryColors[post.category] ?? 'bg-pr-lavender-300/10 text-pr-lavender-300'
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-pr-indigo-800 bg-pr-indigo-800/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pr-lavender-300/40 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${catColor}`}
                    >
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-pr-ink-500">
                      <Clock size={10} />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-pr-cyan-300 transition-colors leading-snug">
                    <Link href={`/resources/${post.slug}`} className="focus:outline-none focus-visible:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="flex-1 text-sm text-slate-400 leading-relaxed mb-5">{post.dek}</p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-pr-ink-500"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={`/resources/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-pr-cyan-400 hover:text-pr-cyan-300 transition-colors group-hover:gap-2"
                      aria-label={`Read ${post.title}`}
                    >
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </Section>
    </>
  )
}
