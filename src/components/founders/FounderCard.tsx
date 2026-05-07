import { Linkedin } from 'lucide-react'

type FounderCardProps = {
  name: string
  role: string
  bio: string
  linkedIn?: string
  photoAlt?: string
}

export default function FounderCard({ name, role, bio, linkedIn, photoAlt }: FounderCardProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-pr-indigo-800 bg-pr-indigo-800">
      {/* Photo placeholder */}
      <div
        className="relative h-56 w-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1E1B4B 0%, #2D2A5E 50%, #1E1B4B 100%)',
        }}
        aria-label={photoAlt ?? `${name} photo placeholder`}
      >
        <div
          className="h-20 w-20 rounded-full flex items-center justify-center text-2xl font-display font-bold text-pr-lavender-300"
          style={{
            background: 'linear-gradient(135deg, rgba(196,181,253,0.15), rgba(99,102,241,0.2))',
            border: '1px solid rgba(196,181,253,0.2)',
          }}
        >
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-pr-ink-500">
          {/* TODO: founder photo */}
          Photo coming soon
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white">{name}</h3>
            <p className="text-sm text-pr-lavender-300 font-medium">{role}</p>
          </div>
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="p-2 rounded-lg text-pr-ink-500 hover:text-pr-cyan-400 hover:bg-pr-indigo-900 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
