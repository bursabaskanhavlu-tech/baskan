import { generatePageMetadata } from '@/lib/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Çerez Politikası | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil çerez politikası ve kullanılan çerez türleri hakkında bilgilendirme.',
  path: '/cerez-politikasi',
})

export default function CerezPolitikasiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold" style={{ color: '#1a1a1a' }}>Çerez Politikası</h1>
      <div style={{ color: '#5c5c5c' }}>
        <p><strong>Son güncelleme:</strong> Haziran 2026</p>
        <h2 className="mt-8 text-lg font-semibold" style={{ color: '#1a1a1a' }}>Zorunlu Çerezler</h2>
        <p className="mt-2">Sitenin temel işlevselliği için gereklidir. Kullanıcı onayına gerek yoktur.</p>
        <ul className="mt-3 list-disc pl-5">
          <li><strong>cookie_consent</strong> — Çerez tercihinizi hatırlar</li>
        </ul>
        <h2 className="mt-8 text-lg font-semibold" style={{ color: '#1a1a1a' }}>Analitik Çerezler</h2>
        <p className="mt-2">Kullanıcı onayı ile etkinleştirilir. Site ziyaret istatistikleri için Google Analytics 4 kullanılmaktadır.</p>
        <h2 className="mt-8 text-lg font-semibold" style={{ color: '#1a1a1a' }}>Çerez Tercihlerinizi Değiştirme</h2>
        <p className="mt-2">Sayfanın alt kısmındaki &quot;Çerez Tercihleri&quot; bağlantısından tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.</p>
      </div>
    </main>
  )
}
