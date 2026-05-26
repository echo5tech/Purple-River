'use client'

import { useState } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { Bell, CheckCircle2 } from 'lucide-react'

type ProductCardProps = {
  status: 'active' | 'horizon'
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
}

export default function ProductCard({ status, name, tagline, description, icon }: ProductCardProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: name }),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const isActive = status === 'active'

  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border p-7 h-full transition-all duration-300',
        'hover:-translate-y-1',
        isActive
          ? 'border-pr-cyan-400/20 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(34,211,238,0.06)] hover:border-pr-cyan-400/35 hover:shadow-[0_20px_60px_rgba(34,211,238,0.07)]'
          : 'border-white/[0.06] bg-white/[0.025] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/[0.1]',
      ].join(' ')}
    >
      {isActive && (
        <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-pr-cyan-400/8 border border-pr-cyan-400/20 px-2.5 py-1 text-xs font-mono font-semibold text-pr-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-pr-cyan-400 animate-pulse" />
          In Development
        </span>
      )}

      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04]">
          {icon}
        </div>
      </div>

      <EyebrowLabel className="mb-2">
        {isActive ? 'Priority' : 'On the Horizon'}
      </EyebrowLabel>
      <h3 className="font-display text-xl font-bold text-white mb-1 tracking-[-0.02em]">{name}</h3>
      <p className="text-sm font-medium text-pr-lavender-300 mb-3 tracking-[-0.01em]">{tagline}</p>
      <p className="flex-1 text-sm text-slate-400 leading-relaxed mb-6 tracking-[-0.01em]">{description}</p>

      {submitted ? (
        <div className="flex items-center gap-2 rounded-xl border border-pr-cyan-400/20 bg-pr-cyan-400/5 px-4 py-3 text-sm text-pr-cyan-400">
          <CheckCircle2 size={16} />
          You&apos;re on the list. We&apos;ll reach out when it ships.
        </div>
      ) : (
        <form onSubmit={handleNotify} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.org"
            required
            aria-label={`Email address for ${name} notifications`}
            className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-pr-cyan-400 focus:border-transparent font-mono"
          />
          <button
            type="submit"
            disabled={loading}
            aria-label="Get notified"
            className="inline-flex items-center gap-1.5 rounded-xl bg-pr-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-pr-blue-500 transition-all shadow-[0_0_16px_rgba(79,70,229,0.35)] hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] disabled:opacity-60 cursor-pointer"
          >
            <Bell size={14} />
            Notify me
          </button>
        </form>
      )}
    </div>
  )
}
