import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { ArrowRight } from 'lucide-react'

const tiers = [
  {
    label: 'Tier C',
    name: 'Large Mission Partners',
    budget: '$1M+ annual budget',
    rate: 'Commercial rates',
    description:
      'Larger non-profits and social enterprises with the capacity to pay market-rate pricing.',
    accentColor: 'border-l-pr-blue-600',
    accentBg: 'bg-pr-blue-600/8',
    badgeColor: 'bg-pr-blue-600/15 text-pr-blue-500 border border-pr-blue-600/20',
    flow: 'Funds the cross-subsidy',
  },
  {
    label: 'Operations Core',
    name: 'Mid-Tier Partners',
    budget: '$100K–$1M annual budget',
    rate: 'Sliding scale',
    description:
      'Organizations with growing capacity. Pricing scales with mission size — more access as you grow.',
    accentColor: 'border-l-pr-lavender-300',
    accentBg: 'bg-pr-lavender-300/8',
    badgeColor: 'bg-pr-lavender-300/15 text-pr-lavender-300 border border-pr-lavender-300/20',
    flow: 'Pays a fair portion',
  },
  {
    label: 'Tier A',
    name: 'Smallest Mission Partners',
    budget: '<$100K annual budget',
    rate: '75–100% subsidized',
    description:
      'The organizations that need security most and can afford it least. Childcare centers, food banks, shelters, faith communities.',
    accentColor: 'border-l-pr-cyan-400',
    accentBg: 'bg-pr-cyan-400/8',
    badgeColor: 'bg-pr-cyan-400/15 text-pr-cyan-400 border border-pr-cyan-400/20',
    flow: 'Receives the benefit',
  },
]

export default function CrossSubsidy() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <EyebrowLabel>Business Model</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-[-0.03em]">
            The Cross-Subsidy Engine
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed tracking-[-0.01em]">
            Commercial-rate engagements legally cross-subsidize mission-priced delivery.
            That&apos;s not a workaround — it&apos;s our public benefit purpose, written
            into our corporate charter.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed tracking-[-0.01em]">
            When a larger organization pays commercial rates for our services, that
            revenue directly funds deeply discounted and free services for the smallest
            community organizations. No grants required. No strings attached.
          </p>
          <a
            href="/who-we-serve"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pr-cyan-400 hover:text-pr-cyan-300 transition-colors"
          >
            See who qualifies for each tier <ArrowRight size={16} />
          </a>
        </div>

        <div className="space-y-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.label}
              className={`rounded-2xl border-l-4 ${tier.accentColor} border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold ${tier.badgeColor}`}
                  >
                    {tier.label}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-bold text-white tracking-[-0.02em]">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono">{tier.budget}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-sm font-semibold text-white">{tier.rate}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">{tier.description}</p>
              {index < tiers.length - 1 && (
                <div className="mt-3 flex items-center gap-1 text-xs text-slate-600 font-mono">
                  <ArrowRight size={10} />
                  <span>{tier.flow}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
