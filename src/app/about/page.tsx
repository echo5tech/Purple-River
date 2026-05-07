import type { Metadata } from 'next'
import Section from '@/components/layout/Section'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import FounderCard from '@/components/founders/FounderCard'
import Button from '@/components/ui/Button'
import RiverFlow from '@/components/brand/RiverFlow'

export const metadata: Metadata = {
  title: 'About Purple River',
  description:
    'The origin story of Purple River, PBC — why three cybersecurity practitioners chose the public benefit corporation structure to serve the non-profit community.',
}

const founders = [
  {
    name: 'Tommy Huynh',
    role: 'Co-founder & CEO',
    bio: '{{TODO: bio — 2–3 sentences covering background, relevant experience, and what drew Tommy to the non-profit security mission. Do not fabricate credentials.}}',
    linkedIn: undefined, // TODO: add LinkedIn URL
  },
  {
    name: 'Vernon Shaw',
    role: 'Co-founder',
    bio: '{{TODO: bio — 2–3 sentences covering background, relevant experience, and what drew Vernon to the non-profit security mission. Do not fabricate credentials.}}',
    linkedIn: undefined, // TODO: add LinkedIn URL
  },
  {
    name: 'Kat Marshall',
    role: 'Co-founder',
    bio: '{{TODO: bio — 2–3 sentences covering background, relevant experience, and what drew Kat to the non-profit security mission. Do not fabricate credentials.}}',
    linkedIn: undefined, // TODO: add LinkedIn URL
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-pr-indigo-950 pt-32 pb-16 overflow-hidden">
        <RiverFlow intensity="subtle" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <EyebrowLabel>Our Story</EyebrowLabel>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Why Purple River?
          </h1>
        </div>
      </div>

      {/* Origin story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <EyebrowLabel>The Name</EyebrowLabel>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                Red team. Blue team. Purple.
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              In cybersecurity, red teams simulate attackers — probing systems, finding
              weaknesses, thinking like adversaries. Blue teams defend — monitoring,
              detecting, responding. For most of the industry, the two stay separate.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Purple practitioners are trained in both. They think like attackers to
              build better defenses. They understand the full picture — not just the
              checklist, not just the tools, but how the pieces interact when something
              actually goes wrong.
            </p>
            <p className="text-slate-400 leading-relaxed">
              That&apos;s what we bring to every engagement. Not just defenders watching
              logs, and not just red teamers running playbooks — but practitioners who
              understand both sides of the table.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <EyebrowLabel>The Metaphor</EyebrowLabel>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                The river runs both ways.
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              A river isn&apos;t a wall. It&apos;s a flow — continuous, directional,
              shaped by everything around it. Intelligence moves through it in both
              directions: threats come in, insights go out, and the community on both
              banks stays informed.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Security done right isn&apos;t something that happens{' '}
              <em>to</em> an organization. It&apos;s something that flows{' '}
              <em>through</em> it — embedded in culture, practiced in daily operations,
              updated as the threat landscape shifts.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The river metaphor is also about relationship. We&apos;re not parachuting
              in with a report and leaving. We&apos;re here for the long flow — learning
              your mission, your people, and your risks alongside you.
            </p>
          </div>
        </div>
      </Section>

      {/* PBC section */}
      <Section className="bg-pr-indigo-900/40" tight>
        <div className="max-w-3xl mx-auto">
          <EyebrowLabel>Our Structure</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why a Public Benefit Corporation?
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-slate-400 leading-relaxed">
              We looked at three structures: traditional LLC, 501(c)(3) non-profit, and
              Public Benefit Corporation. The PBC won because it was the only one that
              answered all three of our core requirements.
            </p>
            <p className="text-slate-400 leading-relaxed">
              A 501(c)(3) would have made our mission legible — but it would have made
              us grant-dependent, slow to adapt, and unable to take the investment we
              need to scale. A traditional LLC would have given us flexibility — but no
              legal mandate to prioritize mission over profit. Investors could push us
              off course at any time.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The PBC gives us the agility of a startup and the accountability of law.
              Our charter legally requires us to pursue a public benefit — not as a
              marketing claim, but as a binding obligation enforceable by our
              stakeholders. When commercial growth pushes against mission, the law is on
              the side of mission.
            </p>
            <p className="text-slate-400 leading-relaxed">
              That&apos;s not a talking point. It&apos;s a structural commitment — one
              we made deliberately, and one we intend to keep.
            </p>
          </div>
        </div>
      </Section>

      {/* Founders */}
      <Section>
        <div className="text-center mb-14">
          <EyebrowLabel>The Founders</EyebrowLabel>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three practitioners. One mission.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Purple River was co-founded by cybersecurity practitioners who saw the same
            gap and decided to do something about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tight>
        <div className="rounded-3xl border border-pr-indigo-800 bg-pr-indigo-900/60 p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Ready to connect?
          </h2>
          <p className="mt-3 text-slate-400 max-w-md mx-auto">
            We&apos;d rather have a real conversation than send you a brochure.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="md">
              Reach Out
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
