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
  primary:
    'bg-pr-blue-600 text-white hover:bg-pr-blue-500 focus-visible:ring-2 focus-visible:ring-pr-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pr-indigo-950',
  secondary:
    'border border-pr-lavender-300 text-pr-lavender-300 hover:bg-pr-indigo-800 focus-visible:ring-2 focus-visible:ring-pr-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pr-indigo-950',
  ghost:
    'text-pr-cyan-400 hover:text-pr-cyan-300 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-pr-cyan-400',
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
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer',
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
