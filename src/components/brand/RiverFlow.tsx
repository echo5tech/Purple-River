'use client'

type RiverFlowProps = {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

export default function RiverFlow({ className = '', intensity = 'subtle' }: RiverFlowProps) {
  const opacityMap = { subtle: 0.18, medium: 0.32, strong: 0.5 }
  const opacity = opacityMap[intensity]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="river-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="40%" stopColor="#6366F1" stopOpacity="1" />
            <stop offset="70%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="river-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="river-grad-3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
          <filter id="river-blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Primary river streams */}
        <path
          d="M-100,200 C200,180 400,350 700,300 C1000,250 1200,400 1600,380"
          fill="none"
          stroke="url(#river-grad-1)"
          strokeWidth="1.5"
          style={{ opacity }}
          className="animate-river-drift"
          filter="url(#river-blur)"
        />
        <path
          d="M-100,350 C300,320 500,480 800,440 C1100,400 1300,520 1600,490"
          fill="none"
          stroke="url(#river-grad-1)"
          strokeWidth="2.5"
          style={{ opacity: opacity * 0.8 }}
          className="animate-river-drift-slow"
          filter="url(#river-blur)"
        />
        <path
          d="M-100,500 C200,460 600,580 900,540 C1200,500 1400,620 1600,590"
          fill="none"
          stroke="url(#river-grad-2)"
          strokeWidth="1"
          style={{ opacity: opacity * 0.6 }}
          className="animate-river-drift"
          filter="url(#river-blur)"
        />

        {/* Secondary glow paths */}
        <path
          d="M-100,150 C400,140 700,280 1000,240 C1300,200 1500,320 1600,290"
          fill="none"
          stroke="url(#river-grad-3)"
          strokeWidth="4"
          style={{ opacity: opacity * 0.4 }}
          className="animate-river-drift-slow"
          filter="url(#river-blur)"
        />
        <path
          d="M-100,650 C300,620 600,740 900,700 C1200,660 1400,760 1600,730"
          fill="none"
          stroke="url(#river-grad-1)"
          strokeWidth="1.5"
          style={{ opacity: opacity * 0.5 }}
          className="animate-river-drift"
          filter="url(#river-blur)"
        />

        {/* Glow orbs */}
        <circle
          cx="360"
          cy="300"
          r="180"
          fill="#4F46E5"
          style={{ opacity: opacity * 0.12 }}
          className="animate-river-drift-slow"
          filter="url(#river-blur)"
        />
        <circle
          cx="1080"
          cy="500"
          r="220"
          fill="#22D3EE"
          style={{ opacity: opacity * 0.08 }}
          className="animate-river-drift"
          filter="url(#river-blur)"
        />
        <circle
          cx="720"
          cy="200"
          r="140"
          fill="#C4B5FD"
          style={{ opacity: opacity * 0.1 }}
          className="animate-river-drift-slow"
          filter="url(#river-blur)"
        />
      </svg>
    </div>
  )
}
