type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
  light?: boolean
}

export default function Card({ children, className = '', hover = false, light = false }: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl border p-6',
        light
          ? 'bg-pr-fog-50 border-pr-lavender-200 text-pr-ink-900'
          : 'bg-pr-indigo-800 border-pr-indigo-800',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-pr-lavender-300 hover:shadow-lg hover:shadow-pr-blue-600/10',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
