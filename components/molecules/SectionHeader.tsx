import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  kicker?: string
  title: React.ReactNode
  text?: React.ReactNode
  action?: React.ReactNode
  align?: 'split' | 'stack'
  dark?: boolean
  className?: string
}

/**
 * Bölüm başlığı. `split`: başlık solda, açıklama/aksiyon sağda (geniş ekran);
 * `stack`: alt alta. Başlık her zaman <h2>.
 */
export function SectionHeader({
  kicker,
  title,
  text,
  action,
  align = 'split',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'reveal grid gap-6',
        align === 'split' && 'lg:grid-cols-12 lg:items-end lg:gap-10',
        dark && 'on-dark',
        className
      )}
    >
      <div className={align === 'split' ? 'lg:col-span-7' : undefined}>
        {kicker && <p className="kicker">{kicker}</p>}
        <h2 className={cn('display-md', kicker && 'mt-5', dark && 'text-paper')}>{title}</h2>
      </div>
      {(text || action) && (
        <div
          className={cn(
            'flex flex-col items-start gap-6',
            align === 'split' && 'lg:col-span-5 lg:pb-2'
          )}
        >
          {text && <div className={cn('lead max-w-xl', dark && 'text-charcoal-300')}>{text}</div>}
          {action}
        </div>
      )}
    </div>
  )
}
