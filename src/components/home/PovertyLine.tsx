import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { ShieldAlert, ShieldCheck, ArrowRight } from 'lucide-react'

const enterpriseItems = [
  'Dedicated security operations teams',
  'Seven-figure annual security budgets',
  'Full-time CISOs with regulatory teams',
  'Enterprise tool sprawl across 50+ vendors',
  'Incident response on retainer 24/7',
  'Cyber insurance with active monitoring requirements',
]

const nonprofitItems = [
  'Donor records, beneficiary data, family PII',
  'Zero dedicated IT security staff',
  'No security budget line in the annual plan',
  'Volunteers cycling in and out of shared accounts',
  'Same ransomware exposure as a hospital',
  '1.8M+ U.S. organizations in this position',
]

export default function PovertyLine() {
  return (
    <Section id="poverty-line" className="bg-grid-dots">
      <div className="max-w-2xl mb-16">
        <EyebrowLabel>The Problem</EyebrowLabel>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-[-0.02em]">
          The Security Poverty Line
        </h2>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed">
          The threshold below which organizations face real threats — ransomware, phishing,
          data theft — without the tools or staff to respond.
        </p>
      </div>

      {/* Above the line */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-6">
          <ShieldCheck size={16} className="text-pr-blue-500" />
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-pr-blue-500">
            Fortune 500 — Above the Line
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
          {enterpriseItems.map((item) => (
            <p key={item} className="text-sm text-slate-400 flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-pr-blue-500/50" />
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* The Line */}
      <div className="relative flex items-center gap-5 my-4">
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5) 40%, rgba(34,211,238,0.5))' }}
        />
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full font-display font-bold text-sm text-pr-cyan-400 border border-pr-cyan-400/40"
            style={{
              background: 'rgba(10,11,20,0.97)',
              boxShadow: '0 0 24px rgba(34,211,238,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            PR
          </div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-pr-cyan-400 whitespace-nowrap">
            Security Poverty Line
          </span>
        </div>
        <div
          className="flex-1 h-px"
          style={{ background: 'linear-gradient(270deg, transparent, rgba(34,211,238,0.5) 40%, rgba(34,211,238,0.5))' }}
        />
      </div>

      {/* Below the line */}
      <div className="mt-12">
        <div className="flex items-center gap-2.5 mb-6">
          <ShieldAlert size={16} className="text-red-400" />
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-red-400">
            Most Non-Profits — Below the Line
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
          {nonprofitItems.map((item) => (
            <p key={item} className="text-sm text-red-300/70 flex items-start gap-2.5">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-red-400/50" />
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <a
          href="/who-we-serve"
          className="inline-flex items-center gap-2 text-sm text-pr-cyan-400 hover:text-pr-cyan-300 font-medium transition-colors"
        >
          See who we work with
          <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  )
}
