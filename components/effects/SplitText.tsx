import { Fragment } from 'react'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  className?: string
  /** İlk harfin gecikmesi (sn). */
  delay?: number
  /** Harf başına artış (sn). */
  stagger?: number
}

/**
 * Harf harf maskeden yükselen başlık metni. Sunucuda üretilir; metin HTML'de
 * aynen bulunur (kelimeler gerçek boşluklarla ayrılır) — arama motorları ve
 * ekran okuyucular normal metin olarak okur. Animasyon saf CSS'tir
 * (`.split-char`, app/globals.css); hareket azaltmada harfler doğrudan görünür.
 */
export function SplitText({ text, className, delay = 0, stagger = 0.028 }: SplitTextProps) {
  let index = 0
  const words = text.split(' ')
  return (
    <span className={cn('split', className)}>
      {words.map((word, w) => (
        <Fragment key={`${word}-${w}`}>
          <span className="split-word">
            {Array.from(word).map((char, c) => {
              const i = index++
              return (
                <span
                  key={c}
                  className="split-char"
                  style={{ '--d': `${(delay + i * stagger).toFixed(3)}s` } as React.CSSProperties}
                >
                  {char}
                </span>
              )
            })}
          </span>
          {w < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  )
}
