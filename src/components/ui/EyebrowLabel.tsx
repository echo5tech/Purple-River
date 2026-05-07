type EyebrowLabelProps = {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function EyebrowLabel({ children, className = '', light = false }: EyebrowLabelProps) {
  return (
    <span
      className={[
        'inline-block text-xs font-semibold uppercase tracking-widest',
        light ? 'text-pr-blue-600' : 'text-pr-cyan-400',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
