'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    if (!email) return 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex items-start gap-4 rounded-2xl border border-pr-cyan-400/20 bg-pr-cyan-400/5 p-6"
      >
        <CheckCircle2 size={24} className="flex-shrink-0 text-pr-cyan-400 mt-0.5" />
        <div>
          <p className="font-display font-bold text-white">You&apos;re on the list.</p>
          <p className="mt-1 text-sm text-slate-400">
            We&apos;ll reach out as products ship and as we open new mission partner
            spots. No spam — just the signal.
          </p>
        </div>
      </div>
    )
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
        <div className="flex-1">
          <label htmlFor="waitlist-email-compact" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email-compact"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder="your@organization.org"
            required
            aria-describedby={error ? 'waitlist-error' : undefined}
            aria-invalid={error ? true : undefined}
            className="w-full rounded-lg border border-pr-indigo-800 bg-pr-indigo-900 px-4 py-3 text-slate-100 placeholder-pr-ink-500 focus:outline-none focus:ring-2 focus:ring-pr-cyan-400 text-sm"
          />
          {error && (
            <p id="waitlist-error" role="alert" className="mt-1 text-xs text-red-400">
              {error}
            </p>
          )}
        </div>
        <Button type="submit" disabled={loading} variant="primary" size="md">
          {loading ? 'Joining...' : 'Join the Waitlist'}
          <ArrowRight size={16} />
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError('') }}
        placeholder="your@organization.org"
        required
        error={error}
      />
      <Button type="submit" disabled={loading} variant="primary" size="md">
        {loading ? 'Joining...' : 'Join the Waitlist'}
        <ArrowRight size={16} />
      </Button>
    </form>
  )
}
