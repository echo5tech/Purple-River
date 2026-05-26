import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { ShieldAlert, ShieldCheck, ArrowRight } from 'lucide-react'

const enterpriseItems = [
  'Dedicated security operations teams',
  'Seven-figure annual security budgets',
  'Enterprise tool sprawl across 50+ vendors',
  'Full-time CISOs with regulatory teams',
  'Incident response on retainer 24/7',
]

const nonprofitItems = [
  '1.8M+ U.S. non-profits below the line',
  'Donor records, beneficiary data, family PII',
  'Zero dedicated IT security staff',
  'No security budget line in the annual plan',
  'Volunteers cycling in and out of shared accounts',
]

export default function PovertyLine() {
  return (
    <Section id="poverty-line" className="bg-grid-dots">
      <div className="text-center mb-16">
        <EyebrowLabel>The Gap We&apos;re Closing</EyebrowLabel>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-[-0.03em]">
          The Security Poverty Line
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light tracking-[-0.01em]">
          The threshold below which organizations face enterprise-level threats without
          enterprise-level defenses. Most non-profits never cross it alone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {/* Enterprise card */}
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pr-blue-600/15 border border-pr-blue-600/20">
              <ShieldCheck size={20} className="text-pr-blue-500" />
            </div>
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-pr-ink-500">
                Fortune 500 Reality
              </p>
              <h3 className="font-display text-xl font-bold text-white tracking-[-0.02em]">
                Enterprise Security
              </h3>
            </div>
          </div>
          <ul className="space-y-3">
            {enterpriseItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-pr-blue-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bridge indicator */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-2">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full font-display font-bold text-xs text-center text-pr-cyan-400 border border-pr-cyan-400/30"
            style={{
              background: 'rgba(10,11,20,0.9)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 0 32px rgba(34,211,238,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            PR
          </div>
          <p className="text-xs text-pr-cyan-400 font-mono font-medium tracking-wider whitespace-nowrap">
            We bridge the gap
          </p>
        </div>

        {/* Non-profit card */}
        <div className="rounded-2xl border border-red-500/20 bg-red-950/10 backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
              <ShieldAlert size={20} className="text-red-400" />
            </div>
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-pr-ink-500">
                Non-Profit Reality
              </p>
              <h3 className="font-display text-xl font-bold text-white tracking-[-0.02em]">
                Below the Line
              </h3>
            </div>
          </div>
          <ul className="space-y-3">
            {nonprofitItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-400/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/who-we-serve"
          className="inline-flex items-center gap-2 text-sm text-pr-cyan-400 hover:text-pr-cyan-300 font-medium transition-colors"
        >
          Learn about the organizations we serve
          <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  )
}
