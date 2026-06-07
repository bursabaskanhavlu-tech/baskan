'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackFormSubmit(formType: string, sourcePage: string) {
  trackEvent('form_submit', { form_type: formType, source_page: sourcePage })
}

export function trackWhatsAppClick(source: string, page: string) {
  trackEvent('whatsapp_click', { source, page })
}

export function trackCTAClick(ctaText: string, page: string) {
  trackEvent('cta_click', { cta_text: ctaText, page })
}

export function trackProductView(category: string, page: string) {
  trackEvent('product_view', { product_category: category, page })
}
