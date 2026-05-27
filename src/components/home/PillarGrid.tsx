import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Card from '@/components/ui/Card'
import { ArrowRight, KeyRound, Target, Radio } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  {
    eyebrow: 'Access & Identity',
    icon: KeyRound,
    title: 'Identity & Access Governance',
    body: "Most breaches start with a forgotten volunteer account or a missing MFA prompt. We close those doors first — before anything else.",
    href: '/approach#identity',
    iconColor: 'text-pr-cyan-400',
    iconBg: 'bg-pr-cyan-400/10',
    stat: '74%',
    statLabel: 'of breaches involve compromised or stolen credentials',
    statSource: 'Verizon DBIR',
  },
  {
    eyebrow: 'Threat Defense',
    icon: Target,
    title: 'Threat-Informed Defense',
    body: 'We build your defenses around how real attackers move — using the MITRE ATT&CK framework — not generic compliance checklists.',
    href: '/approach#threat',
    iconColor: 'text-pr-lavender-300',
    iconBg: 'bg-pr-lavender-300/10',
  },
  {
    eyebrow: 'Ongoing Coverage',
    icon: Radio,
    title: 'Fractional vCISO & Managed Security',
    body: 'Continuous monitoring, board-level reporting, and a security leader embedded in your team — without the full-time hire.',
    href: '/approach#vciso',
    iconColor: 'text-pr-blue-500',
    iconBg: 'bg-pr-blue-500/10',
  },
]

export default function PillarGrid() {
  const [featured, ...secondary] = pillars
  const FeaturedIcon = featured.icon

  return (
    <Section className="bg-pr-indigo-900/40">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <EyebrowLabel>How We Work</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-[-0.02em]">
            Three services,
            <br />
            one practice.
          </h2>
        </div>
        <p className="text-slate-400 max-w-xs text-base leading-relaxed md:text-right">
          We start where the risk is highest and build from there. Every engagement connects
          to the next.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured primary card */}
        <Card hover className="flex flex-col group lg:row-span-2">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${featured.iconBg} mb-6`}>
            <FeaturedIcon size={28} className={featured.iconColor} />
          </div>
          <EyebrowLabel className="mb-3">{featured.eyebrow}</EyebrowLabel>
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            {featured.title}
          </h3>
          <p className="text-slate-400 leading-relaxed flex-1">{featured.body}</p>

          {featured.stat && (
            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <span
                className="block font-display font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1, letterSpacing: '-0.02em' }}
              >
                {featured.stat}
              </span>
              <p className="text-sm text-slate-400 mt-2 max-w-xs">{featured.statLabel}</p>
              {featured.statSource && (
                <p className="text-xs text-slate-600 font-mono mt-1">{featured.statSource}</p>
              )}
            </div>
          )}

          <Link
            href={featured.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pr-cyan-400 hover:text-pr-cyan-300 transition-colors group-hover:gap-3"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </Card>

        {/* Secondary cards */}
        {secondary.map((pillar) => {
          const Icon = pillar.icon
          return (
            <Card key={pillar.title} hover className="flex flex-col group">
              <div className="flex-1">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg} mb-5`}>
                  <Icon size={22} className={pillar.iconColor} />
                </div>
                <EyebrowLabel className="mb-3">{pillar.eyebrow}</EyebrowLabel>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.body}</p>
              </div>
              <Link
                href={pillar.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pr-cyan-400 hover:text-pr-cyan-300 transition-colors group-hover:gap-3"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
