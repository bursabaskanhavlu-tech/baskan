/**
 * Lighthouse CI yapılandırması
 * Görev 22.2: 6 URL, 3 tekrar ile Lighthouse CI
 * Docs: https://github.com/GoogleChrome/lighthouse-ci
 */

module.exports = {
  ci: {
    collect: {
      // Test edilecek URL'ler (6 öncelikli sayfa)
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/new-collection',
        'http://localhost:3000/about',
        'http://localhost:3000/contact',
        'http://localhost:3000/havlu-ureticisi',
        'http://localhost:3000/toptan-havlu',
      ],
      // Her URL için 3 tekrar — daha güvenilir ortalama
      numberOfRuns: 3,
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'started server',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // Performans hedefleri (mobil ≥ 85, uzun vade ≥ 95)
        'categories:performance': ['warn', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['error', { minScore: 0.95 }],

        // Web Vitals
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],

        // SEO temel gereksinimleri
        'meta-description': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'canonical': 'warn',

        // Erişilebilirlik
        'color-contrast': 'warn',
        'image-alt': 'error',
        'button-name': 'error',
        'link-name': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
