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
    accentColor: 'border-pr-blue-600',
    badgeColor: 'bg-pr-blue-600/20 text-pr-blue-500',
    flow: 'Funds the cross-subsidy',
  },
  {
    label: 'Operations Core',
    name: 'Mid-Tier Partners',
    budget: '$100K–$1M annual budget',
    rate: 'Sliding scale',
    description:
      'Organizations with growing capacity. Pricing scales with mission size — more access as you grow.',
    accentColor: 'border-pr-lavender-300',
    badgeColor: 'bg-pr-lavender-300/20 text-pr-lavender-300',
    flow: 'Pays a fair portion',
  },
  {
    label: 'Tier A',
    name: 'Smallest Mission Partners',
    budget: '<$100K annual budget',
    rate: '75–100% subsidized',
    description:
      'The organizations that need security most and can afford it least. Childcare centers, food banks, shelters, faith communities.',
    accentColor: 'border-pr-cyan-400',
    badgeColor: 'bg-pr-cyan-400/20 text-pr-cyan-400',
    flow: 'Receives the benefit',
  },
]

export default function CrossSubsidy() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <EyebrowLabel>Business Model</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Cross-Subsidy Engine
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Commercial-rate engagements legally cross-subsidize mission-priced delivery.
            That&apos;s not a workaround — it&apos;s our public benefit purpose, written
            into our corporate charter.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
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

        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.label}
              className={`rounded-2xl border-l-4 ${tier.accentColor} bg-pr-indigo-800 p-5`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tier.badgeColor}`}
                    >
                      {tier.label}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{tier.budget}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-white">{tier.rate}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 leading-relaxed">{tier.description}</p>
              {index < tiers.length - 1 && (
                <div className="mt-3 flex items-center gap-1 text-xs text-pr-ink-500">
                  <ArrowRight size={12} />
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
