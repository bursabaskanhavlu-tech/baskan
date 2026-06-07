import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Gizlilik Politikası | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil gizlilik politikası ve kişisel veri işleme bilgilendirmesi.',
  path: '/gizlilik-politikasi',
})

export default function GizlilikPolitikasiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold" style={{ color: '#1a1a1a' }}>Gizlilik Politikası</h1>
      <div className="prose prose-sm max-w-none" style={{ color: '#5c5c5c' }}>
        <p><strong>Son güncelleme:</strong> Haziran 2026</p>
        <h2 className="mt-8 text-lg font-semibold" style={{ color: '#1a1a1a' }}>1. Veri Sorumlusu</h2>
        <p>{SITE_CONFIG.name} ({SITE_CONFIG.address.fullDisplay}) olarak kişisel verilerinizi 6698 sayılı KVKK kapsamında işlemekteyiz.</p>
        <h2 className="mt-6 text-lg font-semibold" style={{ color: '#1a1a1a' }}>2. Toplanan Veriler</h2>
        <p>İletişim formları aracılığıyla ad, e-posta, telefon ve mesaj bilgileri toplanmaktadır. Bu veriler yalnızca sizinle iletişim kurmak amacıyla kullanılır.</p>
        <h2 className="mt-6 text-lg font-semibold" style={{ color: '#1a1a1a' }}>3. Veri Kullanımı</h2>
        <p>Toplanan veriler; teklif ve bilgi taleplerini yanıtlamak, sizinle iletişim kurmak amacıyla kullanılır. Verileriniz üçüncü taraflarla paylaşılmaz.</p>
        <h2 className="mt-6 text-lg font-semibold" style={{ color: '#1a1a1a' }}>4. Çerezler</h2>
        <p>Sitemiz analitik ve işlevsel çerezler kullanmaktadır. Detaylar için Çerez Politikamızı inceleyiniz.</p>
        <h2 className="mt-6 text-lg font-semibold" style={{ color: '#1a1a1a' }}>5. Haklarınız</h2>
        <p>KVKK kapsamında verilerinize erişim, düzeltme ve silme hakkına sahipsiniz. Talepleriniz için: {SITE_CONFIG.contact.email}</p>
        <h2 className="mt-6 text-lg font-semibold" style={{ color: '#1a1a1a' }}>6. İletişim</h2>
        <p>{SITE_CONFIG.contact.email} / {SITE_CONFIG.contact.phone}</p>
      </div>
    </main>
  )
}
