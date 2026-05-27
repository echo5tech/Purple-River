import Button from '@/components/ui/Button'
import RiverFlow from '@/components/brand/RiverFlow'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '1.8M+', label: 'U.S. non-profits below the line' },
  { value: '$0', label: 'Average dedicated security budget' },
  { value: '197', label: 'Days avg. breach goes undetected' },
]

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-pr-indigo-950 overflow-hidden">
      {/* Dot grid layer */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dots opacity-100" aria-hidden />

      <RiverFlow intensity="medium" />

      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(79,70,229,0.2) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-4 py-1.5 text-xs font-medium tracking-widest text-pr-lavender-300 uppercase mb-10">
            Nashville, Tennessee · Public Benefit Corporation
          </span>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white tracking-[-0.02em] leading-[1.06]"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            Cybersecurity built
            <br />
            for missions, not{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              margins.
            </span>
          </h1>

          {/* Sub */}
          <p className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
            Over 1.8 million U.S. non-profits face the same threats as Fortune 500 companies —
            ransomware, phishing, data theft — with no security staff, no budget, and no one
            in their corner. That&apos;s the Security Poverty Line. We work below it.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact#waitlist" variant="primary" size="lg">
              Join the Waitlist
              <ArrowRight size={18} />
            </Button>
            <Button href="/approach" variant="secondary" size="lg">
              See How We Work
            </Button>
          </div>

          <p className="mt-5 text-sm text-slate-600">
            Selecting our first 3–5 mission partners now. No pitch required.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.06]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-pr-indigo-950/70 backdrop-blur-xl px-8 py-7 flex flex-col gap-1"
            >
              <span
                className="font-display font-bold tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#poverty-line"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-pr-cyan-400 transition-colors"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </div>
  )
}
