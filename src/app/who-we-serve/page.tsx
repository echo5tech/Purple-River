import type { Metadata } from 'next'
import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import TierCard from '@/components/tiers/TierCard'
import Button from '@/components/ui/Button'
import RiverFlow from '@/components/brand/RiverFlow'
import { AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    'Purple River serves 501(c)(3) non-profits with 5–100 staff and volunteers — childcare, food banks, shelters, faith-based organizations, and community health.',
}

const painPoints = [
  {
    title: 'Identity lifecycle chaos from volunteer turnover',
    body: 'When volunteers cycle in and out every few months, account management becomes a full-time job no one has. The result: orphaned accounts, shared passwords, and access that outlives the relationship — sometimes by years.',
  },
  {
    title: 'Compliance gaps that block grant eligibility',
    body: 'An increasing number of funders — federal, foundation, and corporate — require cybersecurity attestation as part of the application process. Organizations that can\'t answer basic questions about their security posture are getting passed over.',
  },
  {
    title: 'Unclaimed cyber insurance coverage',
    body: "Many non-profits carry cyber insurance they've never fully read. Coverage sits unused because no one knows how to file a claim, what the policy actually covers, or whether their current practices even qualify for a payout when the time comes.",
  },
  {
    title: 'Shadow IT from donated software',
    body: "Donated or discounted software is a lifeline for under-resourced organizations — and a security blind spot. Tools adopted outside of any formal IT process accumulate over time, often storing sensitive data in systems no one is monitoring.",
  },
  {
    title: 'No incident response capability',
    body: "When something goes wrong — ransomware, a data breach, a compromised volunteer account — most non-profits have no plan. No incident response contact. No documented process. No insurance-ready documentation. The first hour of a breach is the most important, and most organizations spend it in confusion.",
  },
  {
    title: 'Board-level blind spots around cyber risk',
    body: "Boards ask about financial risk, reputational risk, and legal risk. Cyber risk sits in a different category — one that most board members don't feel equipped to ask about. That gap creates institutional blind spots that attackers exploit.",
  },
]

const tiers = [
  {
    label: 'Tier A',
    name: 'Smallest Mission Partners',
    budget: 'Under $100K annual operating budget',
    rate: '75–100% subsidized',
    description:
      'The organizations doing the hardest work with the fewest resources. Childcare centers, emergency shelters, mutual aid networks, small faith communities. These partners receive our most accessible pricing — made possible by commercial-rate engagements.',
    included: [
      'Core identity governance and MFA implementation',
      'Threat assessment and prioritized risk roadmap',
      'Board-level risk briefing (annual)',
      'Incident response planning and basic playbook',
      'Access to Purple River knowledge base and resources',
    ],
    accentColor: 'border-pr-cyan-400',
    badgeColor: 'bg-pr-cyan-400/20 text-pr-cyan-400',
    cta: true,
  },
  {
    label: 'Operations Core',
    name: 'Mid-Tier Partners',
    budget: '$100K–$1M annual operating budget',
    rate: 'Sliding scale',
    description:
      'Organizations with growing capacity and complexity. More staff, more systems, more regulatory exposure. Pricing scales transparently with your operating budget — you pay what you can, and the subsidy fills the gap.',
    included: [
      'Everything in Tier A',
      'Full identity lifecycle management',
      'Quarterly threat-informed defense reviews',
      'Cyber insurance gap analysis and optimization',
      'Compliance mapping (SOC 2, HIPAA basics, funder requirements)',
      'Staff security awareness program',
    ],
    accentColor: 'border-pr-lavender-300',
    badgeColor: 'bg-pr-lavender-300/20 text-pr-lavender-300',
    cta: true,
  },
  {
    label: 'Tier C',
    name: 'Large Mission Partners',
    budget: '$1M+ annual operating budget',
    rate: 'Commercial rates',
    description:
      'Larger non-profits and social enterprises with the capacity to pay market-rate pricing. Your engagement cross-subsidizes Tier A partners. This is the engine that makes the whole model work.',
    included: [
      'Everything in Operations Core',
      'Fractional vCISO (named CISO, not a ticket queue)',
      '24/7 MSSP monitoring via open-source SIEM stack',
      'Monthly board-ready security reporting',
      'Incident response retainer with defined SLAs',
      'Annual purple team exercise',
    ],
    accentColor: 'border-pr-blue-600',
    badgeColor: 'bg-pr-blue-600/20 text-pr-blue-500',
    cta: true,
  },
]

export default function WhoWeServePage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>Who We Serve</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            501(c)(3) non-profits doing the work that matters.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            Five to one hundred staff and volunteers. Childcare, food banks, shelters,
            faith communities, community health. Operating without dedicated IT security
            staff — and managing highly sensitive data every day.
          </p>
        </div>
      </div>

      {/* Pain points */}
      <Section>
        <div className="text-center mb-14">
          <EyebrowLabel>What We Keep Seeing</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Six pain points. Every organization. Every time.
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            These aren&apos;t edge cases. They&apos;re the baseline for non-profits
            operating below the Security Poverty Line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className="flex gap-5 rounded-2xl border border-pr-indigo-800 bg-pr-indigo-800/30 p-6"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                  <AlertTriangle size={16} className="text-red-400" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-2">
                  {i + 1}. {point.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section className="bg-pr-indigo-900/40">
        <div className="text-center mb-14">
          <EyebrowLabel>Pricing Model</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Cross-Subsidy Tier Model
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Your tier is based on your operating budget — not a sales call. Larger
            organizations fund smaller organizations. That&apos;s the whole model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <TierCard key={tier.label} {...tier} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-pr-ink-500">
          All pricing is determined transparently. We&apos;ll show you exactly what your
          tier is and why before any engagement begins.
        </p>
      </Section>

      {/* Closing CTA */}
      <Section tight>
        <div className="rounded-3xl border border-pr-cyan-400/20 bg-pr-cyan-400/5 p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            We&apos;re starting with three to five mission partners.
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto leading-relaxed">
            We&apos;re selecting those partners now — at cost, in exchange for candid
            feedback as we build. If your organization fits the profile, we want to hear
            from you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary" size="md">
              Start a Conversation
              <ArrowRight size={16} />
            </Button>
            <Button href="/approach" variant="secondary" size="md">
              See How We Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
