// Google Analytics 4 global tip tanımları
interface Window {
  gtag: (
    command: 'event' | 'config' | 'set' | 'js',
    target: string | Date,
    params?: Record<string, string | number | boolean | undefined>
  ) => void
  dataLayer: unknown[]
}
