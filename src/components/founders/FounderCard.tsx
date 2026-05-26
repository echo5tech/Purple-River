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
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      {/* Photo placeholder */}
      <div
        className="relative h-56 w-full flex flex-col items-center justify-center gap-3"
        style={{
          background:
            'linear-gradient(135deg, rgba(30,27,75,0.6) 0%, rgba(79,70,229,0.08) 50%, rgba(30,27,75,0.6) 100%)',
        }}
        aria-label={photoAlt ?? `${name} photo placeholder`}
      >
        <div
          className="h-20 w-20 rounded-full flex items-center justify-center font-display font-bold text-2xl text-pr-lavender-300"
          style={{
            background: 'rgba(196,181,253,0.08)',
            border: '1px solid rgba(196,181,253,0.18)',
          }}
        >
          {name.split(' ').map((n) => n[0]).join('')}
        </div>
        <p className="text-xs text-slate-600 font-mono">
          {/* TODO: founder photo */}
          Photo coming soon
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 border-t border-white/[0.05]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white tracking-[-0.02em]">{name}</h3>
            <p className="text-sm text-pr-lavender-300 font-medium mt-0.5">{role}</p>
          </div>
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="p-2 rounded-lg text-slate-600 hover:text-pr-cyan-400 hover:bg-white/[0.05] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed tracking-[-0.01em]">{bio}</p>
      </div>
    </div>
  )
}
