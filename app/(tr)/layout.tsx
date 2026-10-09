import type { Metadata, Viewport } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
import { rootMetadata } from '@/lib/utils/metadata'

// viewport-fit=cover: iOS'ta çentikli cihazlarda env(safe-area-inset-*)
// değerlerinin sıfır dönmemesi için gereklidir (bkz. StickyWhatsApp.tsx).
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#faf8f5',
}

export const metadata: Metadata = rootMetadata('tr')

export default function TurkishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="tr">{children}</SiteShell>
}
