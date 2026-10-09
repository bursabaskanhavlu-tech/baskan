import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'

// Türkçe karakterler (ş, ğ, ı, İ) latin-ext alt kümesinde bulunduğu için
// iki alt küme de önceden yüklenir; aksi halde başlıklarda karakter bazlı
// font değişimi (FOUT) görülür.
export const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const fontDisplay = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const fontVariables = `${fontSans.variable} ${fontDisplay.variable}`
