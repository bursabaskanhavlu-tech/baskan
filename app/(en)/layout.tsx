import type { Metadata, Viewport } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
import { rootMetadata } from '@/lib/utils/metadata'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#faf8f5',
}

export const metadata: Metadata = rootMetadata('en')

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
