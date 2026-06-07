// Next.js Instrumentation — Sentry entegrasyonu için kullanılır
// Bu dosya Next.js 15+ App Router ile Sentry'yi başlatır.

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config')
  }
}

export const onRequestError = async (
  err: Error,
  request: { path: string; headers: Record<string, string> },
  context: { routerKind: string; routePath: string; routeType: string }
) => {
  // SENTRY_DSN yoksa hata raporlamayı atla
  if (!process.env.SENTRY_DSN) return

  const { captureRequestError } = await import('@sentry/nextjs')
  // Next.js 15 onRequestError signature — request objesi RequestInfo ile uyumlu hale getirildi
  captureRequestError(err, request as Parameters<typeof captureRequestError>[1], context)
}
