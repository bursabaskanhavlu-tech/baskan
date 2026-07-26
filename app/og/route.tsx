import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { SITE_CONFIG } from '@/lib/config/site'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const rawTitle = searchParams.get('title') ?? SITE_CONFIG.name
  // "Sayfa Başlığı | Başkan Havlu Tekstil" şeklindeki title'lardan yalnızca
  // sayfaya özgü kısmı alıp görsel üzerinde tekrarı önler.
  const title = rawTitle.split('|')[0]?.trim() || SITE_CONFIG.name

  try {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgba(232,119,34,0.25), transparent 45%), radial-gradient(circle at 10% 90%, rgba(196,168,130,0.15), transparent 45%)',
          padding: '90px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 10, height: 44, backgroundColor: '#e87722', display: 'flex' }} />
          <span
            style={{
              color: '#e87722',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            {SITE_CONFIG.name}
          </span>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 58,
            fontWeight: 700,
            color: 'white',
            maxWidth: 980,
            lineHeight: 1.2,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: 36, fontSize: 24, color: '#b3b3b3', display: 'flex' }}>
          Bursa · {SITE_CONFIG.founded}&apos;den bu yana · baskanhavlu.com
        </div>
      </div>,
      { width: 1200, height: 630 }
    )
  } catch {
    return new Response('OG görseli üretilemedi', { status: 500 })
  }
}
