// Middleware — temel bot filtreleme
// Not: next-intl i18n devre dışı — app/[locale] yapısı hazır olmadan aktif edilmemeli

import { type NextRequest, NextResponse } from 'next/server'

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
  const isBlockedBot = BLOCKED_BOTS.some((bot) => userAgent.includes(bot))
  if (isBlockedBot) {
    return new NextResponse(null, { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|ai.txt).*)',
  ],
}
