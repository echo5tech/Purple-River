import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Purple River — Cybersecurity for Non-Profits'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0B14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(79,70,229,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* PBC badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(30,27,75,0.8)',
            border: '1px solid rgba(196,181,253,0.3)',
            borderRadius: '100px',
            padding: '8px 16px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#C4B5FD', fontSize: '14px', fontWeight: 600 }}>
            Purple River, PBC · Hermitage, Tennessee
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.08,
            maxWidth: '800px',
            marginBottom: '24px',
          }}
        >
          Cybersecurity for{' '}
          <span style={{ color: '#22D3EE' }}>the missions that need it most.</span>
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: '24px',
            color: '#94A3B8',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          1.8M+ U.S. non-profits face enterprise-level threats without enterprise-level defenses.
          We&apos;re changing that.
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#4F46E5',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          purpleriver.org
        </div>
      </div>
    ),
    { ...size }
  )
}
