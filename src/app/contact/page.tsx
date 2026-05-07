import type { Metadata } from 'next'
import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactForm from '@/components/forms/ContactForm'
import WaitlistForm from '@/components/forms/WaitlistForm'
import RiverFlow from '@/components/brand/RiverFlow'
import { MessageSquare, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Purple River, or join the waitlist for updates on new products and mission partner openings.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>Connect</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
            No pitch decks. No automated follow-ups. One of our founders will read your
            message and respond personally within 2 business days.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission Partner Inquiry */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pr-blue-600/20">
                <MessageSquare size={20} className="text-pr-blue-500" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Mission Partner Inquiry
                </h2>
                <p className="text-sm text-slate-500">
                  For non-profits ready to start a security conversation
                </p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Right column — context + waitlist */}
          <div>
            <div className="rounded-2xl border border-pr-indigo-800 bg-pr-indigo-800/40 p-8 mb-8">
              <h3 className="font-display font-bold text-white mb-4">
                What happens after you reach out
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    step: '01',
                    text: 'A founder reads your message — no automated routing or ticket queues.',
                  },
                  {
                    step: '02',
                    text: 'We respond within 2 business days with a few clarifying questions or a time to talk.',
                  },
                  {
                    step: '03',
                    text: "We schedule a 30-minute call to learn about your organization — no pitch, no pressure.",
                  },
                  {
                    step: '04',
                    text: "If it's a fit, we'll walk you through your tier and what an engagement looks like.",
                  },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 font-display text-xs font-bold text-pr-cyan-400 mt-0.5">
                      {step}
                    </span>
                    <span className="text-sm text-slate-400 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Waitlist */}
            <div
              id="waitlist"
              className="rounded-2xl border border-pr-lavender-300/20 bg-pr-lavender-300/5 p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pr-lavender-300/10">
                  <Bell size={20} className="text-pr-lavender-300" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white">
                    Join the Waitlist
                  </h2>
                  <p className="text-xs text-slate-500">
                    Get updates on new products and partner spots
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Not ready to start a conversation yet? Get notified as products ship and
                as we open new mission partner spots. We send updates when there&apos;s
                something worth saying.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
