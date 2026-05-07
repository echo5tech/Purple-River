'use client'

import { useState } from 'react'
import { Input, Textarea, Select } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { CheckCircle2, ArrowRight } from 'lucide-react'

type FormData = {
  orgName: string
  name: string
  role: string
  orgType: string
  staffCount: string
  concerns: string[]
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const orgTypes = [
  'Childcare',
  'Food bank',
  'Shelter',
  'Faith-based',
  'Community health',
  'Other',
]

const concernOptions = [
  { value: 'identity', label: 'Identity & access management' },
  { value: 'compliance', label: 'Compliance & grant eligibility' },
  { value: 'incident', label: 'Incident response' },
  { value: 'training', label: 'Staff security training' },
  { value: 'unknown', label: "I don't know yet — help me figure it out" },
]

const staffRanges = ['1–10', '11–25', '26–50', '51–100', '100+']

const empty: FormData = {
  orgName: '',
  name: '',
  role: '',
  orgType: '',
  staffCount: '',
  concerns: [],
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleConcern = (value: string) =>
    setForm((f) => ({
      ...f,
      concerns: f.concerns.includes(value)
        ? f.concerns.filter((c) => c !== value)
        : [...f.concerns, value],
    }))

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.orgName.trim()) e.orgName = 'Organization name is required.'
    if (!form.name.trim()) e.name = 'Your name is required.'
    if (!form.role.trim()) e.role = 'Your role is required.'
    if (!form.orgType) e.orgType = 'Please select an organization type.'
    if (!form.staffCount) e.staffCount = 'Please select a staff range.'
    if (form.concerns.length === 0) e.concerns = 'Please select at least one area of concern.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setErrors({ message: 'Something went wrong. Please try again or email us directly.' })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex items-start gap-4 rounded-2xl border border-pr-cyan-400/20 bg-pr-cyan-400/5 p-8"
      >
        <CheckCircle2 size={24} className="flex-shrink-0 text-pr-cyan-400 mt-0.5" />
        <div>
          <p className="font-display text-xl font-bold text-white">We received your message.</p>
          <p className="mt-2 text-slate-400 leading-relaxed">
            One of our founders will follow up within 2 business days. No automated
            responses — you&apos;ll hear from a person.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Input
        label="Organization name"
        value={form.orgName}
        onChange={(e) => set('orgName', e.target.value)}
        placeholder="Helping Hands Food Bank"
        required
        error={errors.orgName}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Your name"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder="Jane Smith"
          required
          error={errors.name}
        />
        <Input
          label="Your role"
          value={form.role}
          onChange={(e) => set('role', e.target.value)}
          placeholder="Executive Director"
          required
          error={errors.role}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select
          label="Organization type"
          value={form.orgType}
          onChange={(e) => set('orgType', e.target.value)}
          required
          error={errors.orgType}
        >
          <option value="">Select a type...</option>
          {orgTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>

        <Select
          label="Staff / volunteer count"
          value={form.staffCount}
          onChange={(e) => set('staffCount', e.target.value)}
          required
          error={errors.staffCount}
        >
          <option value="">Select a range...</option>
          {staffRanges.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </Select>
      </div>

      {/* Concerns multi-select */}
      <fieldset>
        <legend className="text-sm font-medium text-slate-300 mb-3">
          Primary concern(s){' '}
          <span className="text-pr-cyan-400 ml-0.5">*</span>
        </legend>
        <div className="space-y-2.5">
          {concernOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={form.concerns.includes(option.value)}
                onChange={() => toggleConcern(option.value)}
                className="h-4 w-4 rounded border-pr-indigo-800 bg-pr-indigo-900 text-pr-blue-600 focus:ring-2 focus:ring-pr-cyan-400 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {errors.concerns && (
          <p role="alert" className="mt-2 text-xs text-red-400">
            {errors.concerns}
          </p>
        )}
      </fieldset>

      <Textarea
        label="Anything you'd like us to know"
        value={form.message}
        onChange={(e) => set('message', e.target.value)}
        placeholder="Tell us about your organization, your biggest security worries, or what prompted you to reach out..."
        error={errors.message}
      />

      <Button type="submit" disabled={loading} variant="primary" size="lg">
        {loading ? 'Sending...' : 'Start the Conversation'}
        <ArrowRight size={18} />
      </Button>

      <p className="text-xs text-pr-ink-500">
        We treat inquiries with the same discretion we bring to security work. Your
        information stays with us.
      </p>
    </form>
  )
}
