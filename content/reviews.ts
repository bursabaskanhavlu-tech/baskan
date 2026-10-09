/**
 * Google İşletme Profili'nden alınan gerçek müşteri yorumları (AGENTS.md §14.2 —
 * doğrulanabilir, gerçek veri). Hem sayfada görünür olarak hem de ReviewSchema
 * ile aynı kaynaktan sunulur; puan bilgisi bilinmediği için uydurulmaz.
 */
export interface CustomerReview {
  authorName: string
  reviewBody: string
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    authorName: 'Elif Karaca',
    reviewBody:
      'Bursa’da havlu almak için tavsiye üzerine Başkan Havlu Tekstil’e gittim. Ürün çeşitleri gerçekten fazla, özellikle pamuklu havluları çok beğendim. Fiyatları da kaliteye göre gayet uygun. Çalışanlar ilgili ve yardımcı oluyor, alışverişimden memnun kaldım.',
  },
  {
    authorName: 'Merve Aydın',
    reviewBody:
      'Ev tekstili için havlu ve bornoz bakıyordum. Başkan Havlu Tekstil’de hem farklı kalite ve ölçülerde havlu bulabildim hem de fiyat konusunda yardımcı oldular. Aldığım ürünlerin dokusu ve emiciliği güzel. Bursa’da bu tarz ürün arayanlara tavsiye edebilirim.',
  },
  {
    authorName: 'Seda Yılmaz',
    reviewBody:
      'İşletmemiz için toplu havlu siparişi verdik. Özellikle toptan havlu seçeneklerinin fazla olması işimizi kolaylaştırdı. Ürünlerin kalitesi beklentimizi karşıladı ve sipariş sürecinde iletişim konusunda herhangi bir problem yaşamadık. Tekrar alışveriş yapmayı düşünüyoruz.',
  },
  {
    authorName: 'Ahmet Kartepe',
    reviewBody:
      'Otelimiz için otel havlusu ve bornoz ihtiyacımız vardı. Başkan Havlu Tekstil’den toplu alım yaptık. Havluların kalınlığı, dokusu ve genel kalitesi gayet başarılı. Bursa’da otel tekstili ve toptan havlu arayan işletmeler için iyi bir seçenek.',
  },
  {
    authorName: 'Burak Demir',
    reviewBody:
      'Uzun zamandır farklı yerlerden havlu alıyorum, Başkan Havlu Tekstil’den aldığım ürünlerden memnun kaldım. %100 pamuk ürünlerin kalitesi özellikle hoşuma gitti. Hem perakende hem toptan alışveriş yapılabilmesi güzel. Fiyat konusunda da yardımcı oluyorlar.',
  },
]
