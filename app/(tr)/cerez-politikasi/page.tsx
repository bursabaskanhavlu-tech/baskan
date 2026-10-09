import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { LegalPage } from '@/components/layout/LegalPage'
import { CookiePreferencesButton } from '@/components/organisms/CookiePreferencesButton'

export const metadata: Metadata = generatePageMetadata({
  title: 'Çerez Politikası | Başkan Havlu Tekstil',
  description:
    'Başkan Havlu Tekstil çerez politikası ve kullanılan çerez türleri hakkında bilgilendirme.',
  path: '/cerez-politikasi',
})

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="Ekim 2026">
      <h2>Zorunlu çerezler ve depolama</h2>
      <p>Sitenin temel işlevselliği için gereklidir; kullanıcı onayı gerektirmez.</p>
      <ul>
        <li>
          <strong>cookie_consent</strong> (tarayıcı depolaması): çerez tercihinizi hatırlar.
        </li>
        <li>
          <strong>bh-intro</strong> (oturum depolaması): açılış animasyonunun aynı ziyarette tekrar
          gösterilmemesini sağlar; tarayıcı kapanınca silinir.
        </li>
      </ul>

      <h2>Analitik çerezler</h2>
      <p>
        Yalnızca onayınızla etkinleştirilir. Site ziyaret istatistikleri için Google Analytics 4
        kullanılmaktadır.
      </p>

      <h2>Üçüncü taraf içerik</h2>
      <p>
        Google yorumlarını gösteren Elfsight bileşeni yalnızca tüm çerezleri kabul ettiğinizde
        yüklenir ve kendi gizlilik politikasına tabidir.
      </p>

      <h2>Çerez tercihlerinizi değiştirme</h2>
      <p>
        Tercihinizi istediğiniz zaman sayfanın alt kısmındaki “Çerez Tercihleri” bağlantısından veya
        aşağıdaki düğmeden değiştirebilirsiniz.
      </p>
      <CookiePreferencesButton
        label="Çerez tercihlerimi değiştir"
        className="btn btn-dark btn-sm"
      />
    </LegalPage>
  )
}
