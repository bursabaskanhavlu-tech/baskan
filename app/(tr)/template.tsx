import { ViewTransition } from 'react'

/**
 * Sayfa geçişi: template her gezinmede yeniden oluşturulduğu için eski sayfa
 * `page-out`, yeni sayfa `page-in` animasyonuyla değişir (app/globals.css).
 * Destekleyen tarayıcılarda çalışır; diğerlerinde gezinme anında olur.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  )
}
