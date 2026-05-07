import { CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

type TierCardProps = {
  label: string
  name: string
  budget: string
  rate: string
  description: string
  included: string[]
  accentColor: string
  badgeColor: string
  cta?: boolean
}

export default function TierCard({
  label,
  name,
  budget,
  rate,
  description,
  included,
  accentColor,
  badgeColor,
  cta = false,
}: TierCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border-t-4 ${accentColor} bg-pr-indigo-800 p-8 h-full`}
    >
      <div className="mb-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
        >
          {label}
        </span>
        <h3 className="mt-3 font-display text-2xl font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-pr-ink-500">{budget}</p>
      </div>

      <div className="mb-4 rounded-xl bg-pr-indigo-900/60 px-4 py-3">
        <p className="text-xs text-pr-ink-500 uppercase tracking-widest font-semibold">Pricing</p>
        <p className="mt-1 text-lg font-bold text-white">{rate}</p>
      </div>

      <p className="mb-6 text-sm text-slate-400 leading-relaxed">{description}</p>

      <ul className="flex-1 space-y-2.5 mb-8">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-pr-cyan-400" />
            {item}
          </li>
        ))}
      </ul>

      {cta && (
        <Button href="/contact" variant="primary" size="md" className="w-full">
          Start a Conversation
        </Button>
      )}
    </div>
  )
}
