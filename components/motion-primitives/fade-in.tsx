import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Geriye dönük uyumluluk için kabul edilir; kaydırma bağlı animasyonda gecikme kullanılmaz. */
  delay?: number
  'aria-hidden'?: boolean
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Tek scroll-reveal giriş noktası (AGENTS.md §10.1).
 *
 * Sunucu bileşenidir ve saf CSS ile çalışır (`.reveal`, app/globals.css):
 * CSS scroll-driven animation destekleyen tarayıcılarda öğe görünüme girerken
 * belirir; desteklemeyen tarayıcılarda, JS kapalıyken veya hareket azaltma
 * tercihi açıkken içerik doğrudan görünür. Sunucu ve istemci her koşulda aynı
 * DOM'u üretir — hydration uyuşmazlığı yapısal olarak imkânsızdır (§10.2).
 */
export function FadeIn({
  children,
  className,
  style,
  as: Tag = 'div',
  'aria-hidden': ariaHidden,
}: FadeInProps) {
  return (
    <Tag className={cn('reveal', className)} style={style} aria-hidden={ariaHidden}>
      {children}
    </Tag>
  )
}
