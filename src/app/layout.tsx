import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://purpleriver.org'),
  title: {
    default: 'Purple River, PBC — Cybersecurity for Non-Profits',
    template: '%s | Purple River',
  },
  description:
    'Enterprise-grade cybersecurity for the missions that need it most. Purple River bridges the Security Poverty Line for U.S. non-profits.',
  keywords: ['cybersecurity', 'non-profit security', 'vCISO', 'identity governance', 'MSSP'],
  authors: [{ name: 'Purple River, PBC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://purpleriver.org',
    siteName: 'Purple River',
    title: 'Purple River, PBC — Cybersecurity for Non-Profits',
    description:
      'Enterprise-grade cybersecurity for the missions that need it most.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple River, PBC — Cybersecurity for Non-Profits',
    description:
      'Enterprise-grade cybersecurity for the missions that need it most.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        {/* TODO: configure Analytics with your Vercel project */}
        <Analytics />
      </body>
    </html>
  )
}
