import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'
import { NotFoundView } from '@/components/layout/NotFoundView'

// Birden fazla kök layout (app/(tr), app/(en)) olduğundan eşleşmeyen URL'ler
// için tam HTML belgesi döndüren genel 404 (next.config.ts → experimental.globalNotFound).
export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı | Başkan Havlu Tekstil',
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <SiteShell locale="tr">
      <NotFoundView />
    </SiteShell>
  )
}
