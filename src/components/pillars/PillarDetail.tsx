import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { CheckCircle2, type LucideIcon } from 'lucide-react'

type PillarDetailProps = {
  id: string
  eyebrow: string
  title: string
  icon: LucideIcon
  what: string
  why: string
  whyExample: string
  included: string[]
  outcome: string
  reverse?: boolean
}

export default function PillarDetail({
  id,
  eyebrow,
  title,
  icon: Icon,
  what,
  why,
  whyExample,
  included,
  outcome,
  reverse = false,
}: PillarDetailProps) {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 border-t border-pr-indigo-800 ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Content column */}
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-2">
              What It Is
            </h3>
            <p className="text-slate-300 leading-relaxed">{what}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-2">
              Why Non-Profits Need It
            </h3>
            <p className="text-slate-300 leading-relaxed">{why}</p>
            <blockquote className="mt-4 rounded-r-xl border-l-4 border-pr-lavender-300 pl-4 py-2 italic text-pr-lavender-200 text-sm leading-relaxed bg-pr-indigo-800/40">
              {whyExample}
            </blockquote>
          </div>
        </div>
      </div>

      {/* Detail column */}
      <div className={reverse ? 'lg:col-start-1' : ''}>
        <div className="rounded-2xl border border-pr-indigo-800 bg-pr-indigo-800/40 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pr-blue-600/20 mb-6">
            <Icon size={24} className="text-pr-cyan-400" />
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-3">
              What&apos;s Included
            </h3>
            <ul className="space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-pr-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-pr-indigo-800 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-2">
              What Changes in 90 Days
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{outcome}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
