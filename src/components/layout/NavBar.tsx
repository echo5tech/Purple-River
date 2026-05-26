'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/brand/Logo'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Approach', href: '/approach' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        'backdrop-blur-xl -webkit-backdrop-filter-blur-xl',
        scrolled
          ? 'bg-pr-indigo-950/80 border-b border-white/[0.06] shadow-lg shadow-black/30'
          : 'bg-pr-indigo-950/60 border-b border-white/[0.04]',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo height={32} />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 tracking-[-0.01em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-white/[0.06] bg-pr-indigo-950/95 backdrop-blur-xl"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-slate-300 hover:text-white border-b border-white/[0.05] last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
