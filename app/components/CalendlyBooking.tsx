'use client'

import { useEffect } from 'react'

export default function CalendlyBooking() {
  useEffect(() => {
    const init = () => {
      const calendly = (window as typeof window & { Calendly?: { initBadgeWidget?: (options: { url: string; text: string; color: string; textColor: string; branding: boolean }) => void } }).Calendly
      calendly?.initBadgeWidget?.({
        url: 'https://calendly.com/prakash-cyberinfosec',
        text: 'Schedule time with me',
        color: '#9cf0b6',
        textColor: '#1a1a1a',
        branding: true,
      })
    }

    const existing = document.querySelector('script[data-calendly-badge="true"]')
    if (existing) {
      init()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendlyBadge = 'true'
    script.onload = init
    document.head.appendChild(script)

    return () => {
      document.querySelectorAll('.calendly-badge-widget, .calendly-overlay').forEach((node) => node.remove())
    }
  }, [])

  return null
}
