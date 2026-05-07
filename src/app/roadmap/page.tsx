import type { Metadata } from 'next'
import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ProductCard from '@/components/roadmap/ProductCard'
import RiverFlow from '@/components/brand/RiverFlow'
import { LayoutDashboard, KeyRound, FileCheck, BookOpen, PhoneCall, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roadmap',
  description:
    "What Purple River is building next — six product concepts under active development, from the Mission Shield dashboard to River Guide AI.",
}

const activeProducts = [
  {
    status: 'active' as const,
    name: 'Mission Shield',
    tagline: 'Non-profit security readiness dashboard.',
    description:
      'A purpose-built dashboard that gives executive directors and operations leaders a live, plain-language view of their security posture. No security degree required to read it. Designed around the six most common non-profit risk areas.',
    icon: <LayoutDashboard size={22} className="text-pr-cyan-400" />,
  },
  {
    status: 'active' as const,
    name: 'Identity Lifecycle Manager',
    tagline: 'Built for Google Workspace and the apps non-profits actually use.',
    description:
      'Automated identity lifecycle management — onboarding, access provisioning, and offboarding — for organizations running on Google Workspace, Microsoft 365, and common non-profit SaaS tools. Close the volunteer offboarding gap without a dedicated IT team.',
    icon: <KeyRound size={22} className="text-pr-cyan-400" />,
  },
  {
    status: 'active' as const,
    name: 'Cyber Compliance Passport',
    tagline: 'Portable compliance attestation for grant applications.',
    description:
      'A standardized, portable attestation of your security posture that travels with your grant applications. Built to answer the security questions funders are increasingly asking — before they ask them. Think of it as a security credit score for the non-profit sector.',
    icon: <FileCheck size={22} className="text-pr-cyan-400" />,
  },
]

const horizonProducts = [
  {
    status: 'horizon' as const,
    name: 'Clear & Secure',
    tagline: 'Non-profit-specific staff awareness and training.',
    description:
      'Security awareness training built around the scenarios non-profit staff actually face — volunteer phishing, donor impersonation, shared device risks — not the generic corporate modules that don\'t land.',
    icon: <BookOpen size={22} className="text-pr-lavender-300" />,
  },
  {
    status: 'horizon' as const,
    name: 'Incident Response Retainer + Playbook-as-a-Service',
    tagline: 'Hotline plus ready-to-run response playbooks.',
    description:
      'A dedicated incident response hotline and a library of customized playbooks — one for ransomware, one for data breach, one for compromised credentials — pre-built for your environment so the first hour of an incident isn\'t spent figuring out what to do.',
    icon: <PhoneCall size={22} className="text-pr-lavender-300" />,
  },
  {
    status: 'horizon' as const,
    name: 'River Guide',
    tagline: 'AI-powered non-profit cyber advisor.',
    description:
      'An AI assistant trained on non-profit security patterns, common grant funder requirements, and the MITRE ATT&CK techniques most relevant to the sector. Ask it anything — from "what does this policy clause mean" to "how do I explain this risk to my board."',
    icon: <Bot size={22} className="text-pr-lavender-300" />,
  },
]

export default function RoadmapPage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>What We&apos;re Building</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Roadmap
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
            These are concepts under active development — not shipped products. We&apos;re
            sharing them now because transparency is core to how we operate. Get notified
            when something ships.
          </p>
        </div>
      </div>

      {/* Active development */}
      <Section>
        <div className="mb-12">
          <EyebrowLabel>Priority</EyebrowLabel>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            In active development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Section>

      {/* Horizon */}
      <Section className="bg-pr-indigo-900/40">
        <div className="mb-12">
          <EyebrowLabel>On the Horizon</EyebrowLabel>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            Next in the queue
          </h2>
          <p className="mt-2 text-slate-500 text-sm">
            Concepts we&apos;re actively researching. Sequencing depends on mission
            partner feedback and development capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {horizonProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Section>
    </>
  )
}
