import type { NextConfig } from 'next'
import withBundleAnalyzerInit from '@next/bundle-analyzer'

// Yalnızca `ANALYZE=true npm run build` ile çalıştırıldığında devreye girer;
// normal build/deploy davranışını hiçbir şekilde etkilemez (AGENTS.md §13).
const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env['ANALYZE'] === 'true',
})

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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://elfsightcdn.com https://*.elfsightcdn.com https://elfsight.com https://*.elfsight.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://elfsightcdn.com https://*.elfsightcdn.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' https://fonts.gstatic.com https://elfsightcdn.com https://*.elfsightcdn.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.upstash.io https://elfsight.com https://*.elfsight.com https://elfsightcdn.com https://*.elfsightcdn.com",
      "frame-src 'self' https://elfsightcdn.com https://*.elfsightcdn.com https://elfsight.com https://*.elfsight.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
  async redirects() {
    return [
      {
        source: '/urunler',
        destination: '/new-collection',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/new-collection',
        permanent: true,
      },
      {
        source: '/katalog',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/hakkimizda',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/en/products',
        destination: '/new-collection',
        permanent: true,
      },
      // Eski düz-slug İngilizce sayfalar artık /en/ önekiyle sunuluyor.
      {
        source: '/turkish-towel-manufacturer',
        destination: '/en/turkish-towel-manufacturer',
        permanent: true,
      },
      {
        source: '/wholesale-towel-supplier',
        destination: '/en/wholesale-towel-supplier',
        permanent: true,
      },
      {
        source: '/bathrobe-manufacturer',
        destination: '/en/bathrobe-manufacturer',
        permanent: true,
      },
    ]
  },
  compress: true,
  poweredByHeader: false,
}

export default withBundleAnalyzer(nextConfig)
