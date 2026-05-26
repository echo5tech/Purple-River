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
          : [
              'bg-white/[0.035] border-white/[0.07]',
              'backdrop-blur-xl',
              'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
            ].join(' '),
        hover && [
          'transition-all duration-300',
          'hover:-translate-y-1',
          'hover:border-white/[0.14]',
          'hover:bg-white/[0.06]',
          'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.3)]',
        ].join(' '),
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
