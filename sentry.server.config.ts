// Sentry sunucu tarafı yapılandırması
// Node.js / Edge Runtime ortamında çalışır.

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Sunucu tarafı performans izleme
  tracesSampleRate: 0.05, // Sunucuda %5 oranında örnekleme

  // Release bilgisi
  release: process.env.SENTRY_RELEASE,
  environment: process.env.NODE_ENV,

  // DSN yoksa devre dışı
  enabled: !!process.env.SENTRY_DSN,
})
