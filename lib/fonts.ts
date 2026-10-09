import { Plus_Jakarta_Sans } from 'next/font/google'

// Türkçe karakterler (ş, ğ, ı, İ) latin-ext alt kümesinde bulunduğu için
// iki alt küme de önceden yüklenir; aksi halde karakter bazlı font değişimi
// (FOUT) görülür. Başlıklar da aynı aileyi (500 ağırlık, sıkı aralık) kullanır.
export const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const fontVariables = fontSans.variable
