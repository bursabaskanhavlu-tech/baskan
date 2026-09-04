'use client'

import Script from 'next/script'

export function GoogleReviewsWidget() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
      <div className="elfsight-app-50a00806-efdc-4957-888f-29fb316745f0" data-elfsight-app-lazy />
    </>
  )
}
