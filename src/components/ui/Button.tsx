import Link from 'next/link'
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses = {
  primary: [
    'bg-pr-blue-600 text-white',
    'hover:bg-pr-blue-500',
    'shadow-[0_0_20px_rgba(79,70,229,0.4),0_0_60px_rgba(79,70,229,0.12)]',
    'hover:shadow-[0_0_28px_rgba(99,102,241,0.55),0_0_80px_rgba(99,102,241,0.18)]',
    'focus-visible:ring-2 focus-visible:ring-pr-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pr-indigo-950',
    'transition-all duration-300',
  ].join(' '),
  secondary: [
    'border border-white/20 text-slate-200 bg-white/[0.04]',
    'hover:bg-white/[0.08] hover:border-white/30 hover:text-white',
    'backdrop-blur-sm',
    'focus-visible:ring-2 focus-visible:ring-pr-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pr-indigo-950',
    'transition-all duration-200',
  ].join(' '),
  ghost: [
    'text-pr-cyan-400 hover:text-pr-cyan-300',
    'underline-offset-4 hover:underline',
    'focus-visible:ring-2 focus-visible:ring-pr-cyan-400',
    'transition-all duration-200',
  ].join(' '),
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
