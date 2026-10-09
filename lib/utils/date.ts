/** ISO tarihi ("2026-06-07") okunabilir biçime çevirir. UTC sabit: sunucu ve istemci aynı sonucu üretir. */
export function formatDate(iso: string, locale: 'tr' | 'en' = 'tr'): string {
  const date = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString(locale === 'en' ? 'en-GB' : 'tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
