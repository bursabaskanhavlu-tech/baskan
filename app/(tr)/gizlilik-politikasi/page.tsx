import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Gizlilik Politikası | Başkan Havlu Tekstil',
  description: 'Başkan Havlu Tekstil gizlilik politikası ve kişisel veri işleme bilgilendirmesi.',
  path: '/gizlilik-politikasi',
})

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="Ekim 2026">
      <h2>1. Veri sorumlusu</h2>
      <p>
        {SITE_CONFIG.name} ({SITE_CONFIG.address.fullDisplay}) olarak kişisel verilerinizi 6698
        sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında işlemekteyiz.
      </p>

      <h2>2. Toplanan veriler</h2>
      <p>
        Teklif formu aracılığıyla ad soyad, telefon ve isteğe bağlı olarak firma adı, e-posta, ürün
        türü, adet ve mesaj bilgileri toplanır. Ayrıca kötüye kullanımı önlemek amacıyla IP
        adresiniz kısa süreli olarak işlenir.
      </p>

      <h2>3. Verilerin kullanım amacı</h2>
      <p>
        Toplanan veriler yalnızca teklif ve bilgi taleplerinizi yanıtlamak ve sizinle iletişim
        kurmak amacıyla kullanılır. Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya
        devredilmez.
      </p>

      <h2>4. Hizmet sağlayıcılar ve aktarım</h2>
      <p>Site ve formların çalışması için aşağıdaki hizmet sağlayıcılardan yararlanılır:</p>
      <ul>
        <li>
          <strong>WhatsApp:</strong> Teklif formu, bilgilerinizi WhatsApp’ta hazır bir mesaj olarak
          açar; mesajı göndermek sizin onayınızla gerçekleşir.
        </li>
        <li>
          <strong>Resend:</strong> Form bilgilerinin satış ekibimize e-posta ile iletilmesi.
        </li>
        <li>
          <strong>Netlify:</strong> Sitenin barındırılması.
        </li>
        <li>
          <strong>Upstash:</strong> Form kötüye kullanımına karşı IP tabanlı istek sınırlama.
        </li>
        <li>
          <strong>Google Analytics:</strong> Yalnızca çerez onayı verilirse ziyaret istatistikleri.
        </li>
        <li>
          <strong>Elfsight:</strong> Yalnızca tüm çerezler kabul edilirse Google yorumları bileşeni.
        </li>
      </ul>
      <p>
        Bu hizmet sağlayıcıların sunucuları yurt dışında bulunabilir; veriler yalnızca yukarıda
        belirtilen amaçlarla ve gerekli olduğu ölçüde aktarılır.
      </p>

      <h2>5. Çerezler</h2>
      <p>
        Sitemiz zorunlu çerezler ile onayınıza bağlı analitik çerezler kullanmaktadır. Ayrıntılar
        için <a href="/cerez-politikasi">Çerez Politikamızı</a> inceleyebilirsiniz.
      </p>

      <h2>6. Haklarınız</h2>
      <p>
        KVKK’nın 11. maddesi kapsamında verilerinize erişme, düzeltilmesini veya silinmesini isteme
        ve işlemeye itiraz etme haklarına sahipsiniz. Talepleriniz için{' '}
        <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a> adresine
        yazabilirsiniz.
      </p>

      <h2>7. İletişim</h2>
      <p>
        {SITE_CONFIG.contact.email} · {SITE_CONFIG.contact.phone}
      </p>
    </LegalPage>
  )
}
