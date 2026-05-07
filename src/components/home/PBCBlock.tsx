import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import { Building2, Scale, Heart } from 'lucide-react'

const differentiators = [
  {
    icon: Building2,
    title: "Startup agility",
    body: "We move fast, adapt to our partners, and aren't weighed down by corporate bureaucracy.",
  },
  {
    icon: Scale,
    title: "Legal mandate",
    body: "Our charter legally requires us to serve the public good — it's not marketing language.",
  },
  {
    icon: Heart,
    title: "Investment-ready",
    body: "Unlike a 501(c)(3), we can take investment while maintaining our mission-first structure.",
  },
]

export default function PBCBlock() {
  return (
    <Section className="bg-pr-indigo-900/40" tight>
      <div className="rounded-3xl border border-pr-indigo-800 bg-pr-indigo-900/60 px-8 py-14 md:px-14 relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,181,253,0.08) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative max-w-3xl">
          <EyebrowLabel>Why a PBC?</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built as a Public Benefit Corporation
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed text-lg">
            A Public Benefit Corporation is a for-profit company with a legal obligation
            to pursue a public benefit alongside profit. We chose this structure
            deliberately — not as a branding exercise.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Traditional non-profits are grant-dependent and often slow to adapt. Pure
            for-profits aren&apos;t accountable to mission. The PBC structure gives us
            the agility of a startup, the accountability of law, and the ability to
            attract the investment needed to scale our impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex flex-col gap-2">
                <Icon size={20} className="text-pr-lavender-300" />
                <h3 className="font-display font-semibold text-white text-sm">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8">
          <Button href="/about" variant="ghost" size="sm">
            Read our origin story
          </Button>
        </div>
      </div>
    </Section>
  )
}
