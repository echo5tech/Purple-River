import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Card from '@/components/ui/Card'
import { ArrowRight, KeyRound, Target, Radio } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  {
    eyebrow: 'The Hook',
    icon: KeyRound,
    title: 'Identity & Access Governance',
    body: "Most non-profit breaches start with a forgotten volunteer account or a missing MFA prompt. We close those doors first.",
    href: '/approach#identity',
    iconColor: 'text-pr-cyan-400',
    iconBg: 'bg-pr-cyan-400/10',
  },
  {
    eyebrow: 'The Differentiator',
    icon: Target,
    title: 'Threat-Informed Defense & Purple Teaming',
    body: 'Defense built around how attackers actually move — using the MITRE ATT&CK framework — not generic checklists.',
    href: '/approach#threat',
    iconColor: 'text-pr-lavender-300',
    iconBg: 'bg-pr-lavender-300/10',
  },
  {
    eyebrow: 'The Recurring Engine',
    icon: Radio,
    title: 'Fractional vCISO & MSSP',
    body: 'Ongoing monitoring, board-level strategy, and the security leader you couldn\'t afford to hire.',
    href: '/approach#vciso',
    iconColor: 'text-pr-blue-500',
    iconBg: 'bg-pr-blue-500/10',
  },
]

export default function PillarGrid() {
  return (
    <Section className="bg-pr-indigo-900/40">
      <div className="text-center mb-16">
        <EyebrowLabel>How We Work</EyebrowLabel>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
          Three pillars. One integrated practice.
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
          Each service builds on the last. We start where the risk is highest, then grow
          with your mission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <Card key={pillar.title} hover className="flex flex-col group">
              <div className="flex-1">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg} mb-5`}>
                  <Icon size={24} className={pillar.iconColor} />
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
