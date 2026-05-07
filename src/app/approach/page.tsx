import type { Metadata } from 'next'
import { KeyRound, Target, Radio, Server } from 'lucide-react'
import Section from '@/components/layout/Section'
import PillarDetail from '@/components/pillars/PillarDetail'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import RiverFlow from '@/components/brand/RiverFlow'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Three integrated service pillars built specifically for non-profit cybersecurity needs. Identity governance, threat-informed defense, and fractional vCISO services.',
}

const techStack = [
  {
    name: 'HubSpot for Startups',
    role: 'CRM & relationship management',
    detail:
      'Mission partner onboarding, engagement tracking, and reporting — without enterprise licensing costs.',
  },
  {
    name: 'Syncro RMM/PSA',
    role: 'Operations & billing',
    detail:
      'Remote monitoring, ticketing, and professional services automation built for managed security providers.',
  },
  {
    name: 'OpenEDR & Wazuh',
    role: 'Telemetry & open-source defense',
    detail:
      'Open-source endpoint detection and SIEM that rivals commercial platforms at a fraction of the cost.',
  },
]

export default function ApproachPage() {
  return (
    <>
      {/* Page header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>Our Approach</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Three pillars. Built for mission-first organizations.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            We don&apos;t sell a stack and walk away. We work alongside your organization,
            starting where the risk is highest and growing with your capacity.
          </p>
        </div>
      </div>

      <Section>
        <PillarDetail
          id="identity"
          eyebrow="The Hook · Pillar One"
          title="Identity & Access Governance"
          icon={KeyRound}
          what="A structured process for controlling who has access to what — and making sure that access ends when someone leaves. Covers accounts, permissions, credentials, and multi-factor authentication across all your tools."
          why="Non-profits run on trust and volunteers. That's also the source of most breaches. Accounts are created for short-term needs and never deprovisioned. Shared passwords live in email threads. MFA is 'on the roadmap.' Access sprawl is the norm."
          whyExample="A volunteer leaves in March and their Google Workspace account stays active until January. Over those 11 months, they still have access to donor records, grant documents, and the shared drive. No one notices until an audit — or worse, a breach."
          included={[
            'Full identity inventory across all SaaS and on-prem systems',
            'Privileged account audit and cleanup',
            'MFA rollout planning and implementation support',
            'Offboarding playbook tailored to your volunteer lifecycle',
            'Ongoing access review cadence (quarterly minimum)',
            'Role-based access control (RBAC) design',
          ]}
          outcome="Within 90 days, you know exactly who has access to what. Offboarding is a documented, repeatable process. MFA is live on every critical system. Orphaned accounts are closed. Your team knows what to do when someone leaves — before they leave."
        />

        <PillarDetail
          id="threat"
          eyebrow="The Differentiator · Pillar Two"
          title="Threat-Informed Defense & Purple Teaming"
          icon={Target}
          what="Defense built around how attackers actually move — not what compliance checklists say to check. We use the MITRE ATT&CK framework to map real attack techniques to your specific environment and close the gaps that matter most."
          why="Generic security checklists are built for the average organization. Your organization is not average — you have a specific data profile, a specific threat landscape, and specific constraints. Cookie-cutter compliance doesn't close the doors attackers actually use."
          whyExample="A phishing email targeting childcare workers arrives with a fake 'parent portal' login. Without threat-informed training tied to your sector, staff treat it like any other phishing test. With it, they recognize the specific tactic — impersonating a service they actually use — and report it before anyone clicks."
          included={[
            'Threat landscape assessment specific to your sector and data profile',
            'MITRE ATT&CK mapping against your current controls',
            'Tabletop exercise design and facilitation (board and staff levels)',
            'Prioritized remediation roadmap based on likely attacker paths',
            'Purple team exercises — simulated attacker techniques with live defense feedback',
            'Annual threat model refresh',
          ]}
          outcome="Within 90 days, you have a prioritized security roadmap that reflects how real attackers target organizations like yours — not a generic framework checklist. Your leadership understands the actual risk in terms they can act on."
          reverse
        />

        <PillarDetail
          id="vciso"
          eyebrow="The Recurring Engine · Pillar Three"
          title="Fractional vCISO & MSSP"
          icon={Radio}
          what="Continuous security monitoring, board-level strategy, and the experienced security leadership your organization couldn't afford to hire full-time. We become the security function you don't have."
          why="Non-profits can't hire a CISO. The role commands $200K–$400K annually, requires deep specialization, and demands full-time attention. But the board still asks about risk. Funders still want assurance. Regulators still have requirements. Something has to fill that gap."
          whyExample="A board member asks the ED: 'What would happen if we had a ransomware incident tomorrow?' Without a security function, that question goes unanswered — or gets a hand-wave. With a fractional vCISO, there's a real answer, a tested incident response plan, and a board-ready risk report."
          included={[
            'Dedicated fractional CISO point of contact (named individual, not a ticket queue)',
            '24/7 endpoint and network monitoring via open-source SIEM stack',
            'Monthly security status reports formatted for board consumption',
            'Cyber insurance review and gap analysis',
            'Incident response retainer with defined SLAs',
            'Annual security program review and roadmap update',
            'Staff for regulatory inquiries and funder security questionnaires',
          ]}
          outcome="Within 90 days, you have a named security lead who knows your environment, a monitoring baseline that catches anomalies in real time, and board-ready reporting. You can answer the hard questions — from funders, from auditors, from your board — with confidence."
        />
      </Section>

      {/* Bootstrapped Tech Architecture */}
      <Section className="bg-pr-indigo-900/40" tight>
        <div className="max-w-3xl">
          <EyebrowLabel>The Bootstrapped Tech Architecture</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Enterprise capability. Without the licensing tax.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We built our own infrastructure using the same cost discipline we bring to
            our mission partners. Every tool we use has to earn its place — and most of
            it is open-source.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tool) => (
            <div
              key={tool.name}
              className="rounded-2xl border border-pr-indigo-800 bg-pr-indigo-800/40 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pr-blue-600/20 mb-4">
                <Server size={18} className="text-pr-blue-500" />
              </div>
              <h3 className="font-display font-bold text-white mb-1">{tool.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-3">
                {tool.role}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">{tool.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tight>
        <div className="rounded-3xl border border-pr-indigo-800 bg-pr-indigo-900/60 p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Ready to talk about where to start?
          </h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            We&apos;ll start with a conversation — no pitch, no sales deck. Just an honest
            look at where your biggest risks are.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary" size="md">
              Start a Conversation
            </Button>
            <Button href="/who-we-serve" variant="secondary" size="md">
              See Who We Work With
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
