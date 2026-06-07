// Middleware — i18n dil yönlendirmesi + temel bot filtreleme
// Next.js App Router ile next-intl entegrasyonu

import createMiddleware from 'next-intl/middleware'
import { type NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Kötü niyetli bot listesi (temel filtreleme)
const BLOCKED_BOTS = [
  'AhrefsBot',
  'SemrushBot',
  'DotBot',
  'BLEXBot',
  'MJ12bot',
]

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? ''

  // Bot filtreleme
  const isBlockedBot = BLOCKED_BOTS.some((bot) =>
    userAgent.includes(bot)
  )

  if (isBlockedBot) {
    return new NextResponse(null, { status: 403 })
  }

  // API rotaları ve statik dosyalar için middleware'i atla
  const { pathname } = request.nextUrl
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('/favicon') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg')
  ) {
    return NextResponse.next()
  }

  // i18n yönlendirmesi
  return intlMiddleware(request)
}

export const config = {
  // Middleware'in çalışacağı rotalar
  // API, statik dosyalar ve sistem rotaları hariç
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|ai.txt).*)',
  ],
}
