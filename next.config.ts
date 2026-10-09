import type { NextConfig } from 'next'
import withBundleAnalyzerInit from '@next/bundle-analyzer'

// Yalnızca `ANALYZE=true npm run build` ile çalıştırıldığında devreye girer;
// normal build/deploy davranışını hiçbir şekilde etkilemez (AGENTS.md §13).
const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env['ANALYZE'] === 'true',
})

const isDev = process.env.NODE_ENV !== 'production'

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // 'unsafe-eval' yalnızca geliştirme sunucusu (React Refresh) içindir
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // İki kök layout (app/(tr), app/(en)) olduğu için eşleşmeyen URL'lerde
    // app/global-not-found.tsx kullanılır.
    globalNotFound: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    qualities: [75, 90],
    // Uzak görsel kullanılmıyor — `remotePatterns: '**'` görsel optimizasyon
    // uç noktasını açık bir proxy'ye (SSRF/maliyet suistimali) çeviriyordu.
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
  // Kalıcı yönlendirmeler açıkça 301 döner (Next'in `permanent: true` varsayılanı 308'dir;
  // ikisi de kalıcıdır, 301 eski araç ve tarayıcılarla en geniş uyumu sağlar).
  async redirects() {
    return [
      {
        source: '/urunler',
        destination: '/new-collection',
        statusCode: 301,
      },
      {
        source: '/products',
        destination: '/new-collection',
        statusCode: 301,
      },
      {
        source: '/katalog',
        destination: '/about',
        statusCode: 301,
      },
      {
        source: '/hakkimizda',
        destination: '/about',
        statusCode: 301,
      },
      {
        source: '/iletisim',
        destination: '/contact',
        statusCode: 301,
      },
      {
        source: '/en/products',
        destination: '/new-collection',
        statusCode: 301,
      },
      // Eski düz-slug İngilizce sayfalar artık /en/ önekiyle sunuluyor.
      {
        source: '/turkish-towel-manufacturer',
        destination: '/en/turkish-towel-manufacturer',
        statusCode: 301,
      },
      {
        source: '/wholesale-towel-supplier',
        destination: '/en/wholesale-towel-supplier',
        statusCode: 301,
      },
      {
        source: '/bathrobe-manufacturer',
        destination: '/en/bathrobe-manufacturer',
        statusCode: 301,
      },
    ]
  },
  compress: true,
  poweredByHeader: false,
}

export default withBundleAnalyzer(nextConfig)
