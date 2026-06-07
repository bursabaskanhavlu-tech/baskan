// Sentry Edge Runtime yapılandırması
// Middleware ve Edge API rotaları için.

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.05,
  release: process.env.SENTRY_RELEASE,
  environment: process.env.NODE_ENV,
  enabled: !!process.env.SENTRY_DSN,
})
