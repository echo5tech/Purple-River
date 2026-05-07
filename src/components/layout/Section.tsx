type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  light?: boolean
  tight?: boolean
}

export default function Section({ children, className = '', id, light = false, tight = false }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        tight ? 'py-16 md:py-20' : 'py-24 md:py-32',
        light ? 'bg-pr-fog-50' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}
