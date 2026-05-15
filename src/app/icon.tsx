import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0f172a',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Key ring circle */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Key ring */}
          <circle cx="7.5" cy="15.5" r="4.5" stroke="#facc15" strokeWidth="2.2" />
          {/* Key shaft */}
          <line x1="11.5" y1="11.5" x2="20" y2="3" stroke="#facc15" strokeWidth="2.2" strokeLinecap="round" />
          {/* Key teeth */}
          <line x1="17" y1="6" x2="19.5" y2="8.5" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="14.5" y1="8.5" x2="16.5" y2="10.5" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
