import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import PovertyLine from '@/components/home/PovertyLine'
import PillarGrid from '@/components/home/PillarGrid'
import CrossSubsidy from '@/components/home/CrossSubsidy'
import PBCBlock from '@/components/home/PBCBlock'
import Section from '@/components/layout/Section'
import WaitlistForm from '@/components/forms/WaitlistForm'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import RiverFlow from '@/components/brand/RiverFlow'

export const metadata: Metadata = {
  title: 'Purple River — Cybersecurity for Non-Profits',
  description:
    '1.8 million U.S. non-profits sit below the Security Poverty Line. Purple River delivers enterprise-grade cybersecurity for the missions that need it most.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PovertyLine />
      <PillarGrid />
      <CrossSubsidy />
      <PBCBlock />

      {/* Final CTA */}
      <Section className="relative overflow-hidden bg-pr-indigo-900">
        <RiverFlow intensity="subtle" />
        <div className="relative max-w-2xl mx-auto text-center">
          <EyebrowLabel>Ready to Start?</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white tracking-tight">
            The current&apos;s already moving.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 60%, #C4B5FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Join us.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Get updates as products ship and as we open new mission partner spots.
          </p>
          <div className="mt-8">
            <WaitlistForm compact />
          </div>
        </div>
      </Section>
    </>
  )
}
