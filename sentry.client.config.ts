// Sentry istemci tarafı yapılandırması
// Bu dosya tarayıcıda çalışır — SENTRY_DSN ortam değişkeni ile aktif edilir.

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Performans izleme
  tracesSampleRate: 0.1, // Üretimde %10 oranında performans izleme

  // Hata kayıt oranı
  sampleRate: 1.0, // Tüm hatalar kaydedilir

  // Release bilgisi CI/CD'den gelir
  release: process.env.SENTRY_RELEASE,
  environment: process.env.NODE_ENV,

  // DSN yoksa Sentry'yi devre dışı bırak
  enabled: !!process.env.SENTRY_DSN,

  // Bağlantı hataları ve kullanıcı arayüzü hatalarını yoksay
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'Network request failed',
    /^Loading chunk \d+ failed/,
  ],
})
