import Link from 'next/link'
import { Shield } from 'lucide-react'
import Logo from '@/components/brand/Logo'

const footerLinks = {
  Services: [
    { label: 'Approach', href: '/approach' },
    { label: 'Who We Serve', href: '/who-we-serve' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Join the Waitlist', href: '/contact#waitlist' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-pr-indigo-800 bg-pr-indigo-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo height={32} />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Enterprise-grade cybersecurity for the missions that need it most.
              Nashville, Tennessee.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-pr-lavender-300">
              <Shield size={12} />
              <span>Public Benefit Corporation</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-pr-cyan-400">
                {group}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-pr-indigo-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Purple River, PBC. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center">
            Purple River is a Public Benefit Corporation — legally mandated to serve the public good alongside financial sustainability.
          </p>
        </div>
      </div>
    </footer>
  )
}
