import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import { Building2, Scale, Heart } from 'lucide-react'

const differentiators = [
  {
    icon: Building2,
    title: 'Startup agility',
    body: "We move fast, adapt to our partners, and aren't weighed down by corporate bureaucracy.",
  },
  {
    icon: Scale,
    title: 'Legal mandate',
    body: "Our charter legally requires us to serve the public good — it's not marketing language.",
  },
  {
    icon: Heart,
    title: 'Investment-ready',
    body: "Unlike a 501(c)(3), we can take investment while maintaining our mission-first structure.",
  },
]

export default function PBCBlock() {
  return (
    <Section className="bg-grid-dots" tight>
      <div
        className="rounded-3xl border border-white/[0.07] px-8 py-14 md:px-14 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(20,19,43,0.85) 0%, rgba(10,11,20,0.9) 100%)',
          backdropFilter: 'blur(24px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,181,253,0.07) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative max-w-3xl">
          <EyebrowLabel>Our Structure</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]">
            A Public Benefit Corporation
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed text-lg">
            A PBC is a for-profit company with a legal obligation to pursue public benefit
            alongside profit. We chose this structure because it makes the mission legally
            binding — not just aspirational.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Non-profits live or die by grant cycles. Pure for-profits answer only to
            revenue. The PBC gives us the speed of a startup, the accountability of law,
            and the ability to attract the capital needed to reach more organizations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="flex flex-col gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pr-lavender-300/10 border border-pr-lavender-300/15">
                  <Icon size={18} className="text-pr-lavender-300" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm tracking-[-0.01em]">
                  {item.title}
                </h3>
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
