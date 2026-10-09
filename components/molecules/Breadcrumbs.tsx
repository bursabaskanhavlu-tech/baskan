import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
  className?: string
  dark?: boolean
}

/** Görünür breadcrumb — `<nav aria-label="Breadcrumb">` + `<ol>` yapısı korunur (AGENTS.md §12). */
export function Breadcrumbs({ items, className, dark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-[0.8125rem]', className)}>
      <ol
        className={cn(
          'flex flex-wrap items-center gap-x-2 gap-y-1',
          dark ? 'text-charcoal-300' : 'text-charcoal-600'
        )}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    'link-line transition-colors',
                    dark ? 'hover:text-paper' : 'hover:text-ink'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? 'page' : undefined}
                  className={dark ? 'text-paper' : 'text-ink'}
                >
                  {item.label}
                </span>
              )}
              {!last && (
                <span aria-hidden="true" className="text-charcoal-300">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
