import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import type { NextRequest } from 'next/server'

const url = process.env['UPSTASH_REDIS_REST_URL']
const token = process.env['UPSTASH_REDIS_REST_TOKEN']
const redis = url && token ? new Redis({ url, token }) : null

// Upstash yapılandırılmamışsa (ör. yerel geliştirme) rate limiting sessizce
// devre dışı kalır — form asla bu yüzden kırılmaz, sadece koruma eklenmemiş olur.
// Sınırlar Requirement 36.5 ile uyumludur: /api/lead/* için dakikada 5, /api/contact için dakikada 3.
const limiters = {
  lead: redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, '1 m'),
        analytics: false,
        prefix: 'baskanhavlu-lead',
      })
    : null,
  contact: redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, '1 m'),
        analytics: false,
        prefix: 'baskanhavlu-contact',
      })
    : null,
} as const

export function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  return (
    request.headers.get('x-nf-client-connection-ip') ??
    forwardedFor?.split(',')[0]?.trim() ??
    '0.0.0.0'
  )
}

export async function checkRateLimit(
  request: NextRequest,
  kind: keyof typeof limiters = 'lead'
): Promise<boolean> {
  const ratelimit = limiters[kind]
  if (!ratelimit) return true
  const ip = getClientIp(request)
  const { success } = await ratelimit.limit(ip)
  return success
}
