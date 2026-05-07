import Button from '@/components/ui/Button'
import RiverFlow from '@/components/brand/RiverFlow'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-pr-indigo-950 overflow-hidden">
      <RiverFlow intensity="medium" />

      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-pr-lavender-300/30 bg-pr-indigo-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-pr-lavender-300 mb-8">
            Hermitage, Tennessee · Public Benefit Corporation
          </span>

          <h1
            className="font-display font-bold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.08 }}
          >
            Enterprise-grade cybersecurity{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 50%, #C4B5FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for the missions that need it most.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            1.8 million U.S. non-profits sit below the Security Poverty Line — facing
            Fortune-500-level threats with zero-dollar security budgets and no dedicated
            staff. Purple River is here to change that.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact#waitlist" variant="primary" size="lg">
              Join the Waitlist
              <ArrowRight size={18} />
            </Button>
            <Button href="/approach" variant="secondary" size="lg">
              See How We Work
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            We&apos;re selecting our first 3–5 mission partners now. No pitch required —
            just a conversation.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#poverty-line"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-pr-cyan-400 transition-colors"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </div>
  )
}
