// Lighthouse CI yapılandırması — AGENTS.md §13 performans hedefleriyle uyumlu.
// Şu an CI pipeline'ına (bkz. .github/workflows/ci.yml) bağlanmamıştır;
// bu bilinçli bir karardır (bkz. V2-ROADMAP-LOG.md FAZ 10, Görev 60) — CI
// değişiklikleri yalnızca gerçek bir GitHub Actions çalıştırmasıyla
// doğrulanabilir, bu ortamda o mümkün değil. Kullanıcı isterse
// `.github/workflows/ci.yml`'e ayrı bir adım olarak eklenebilir.
module.exports = {
  ci: {
    collect: {
      // `staticDistDir` yalnızca tam statik export'lar için doğrudur; bu
      // proje API route'ları ve dinamik segmentler içerdiğinden gerçek bir
      // sunucu başlatılması gerekir.
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready in',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/new-collection',
        'http://localhost:3000/about',
        'http://localhost:3000/contact',
        'http://localhost:3000/havlu-ureticisi',
        'http://localhost:3000/blog',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['warn', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
