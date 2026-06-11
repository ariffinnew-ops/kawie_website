'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function ViewTracker() {
  const pathname = usePathname()
  const lastTrackedPath = useRef<string | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !pathname || lastTrackedPath.current === pathname) {
      return
    }

    lastTrackedPath.current = pathname
    try {
      navigator.sendBeacon('/api/track-view', JSON.stringify({ path: pathname }))
    } catch {
      // Tracking should never affect the user's navigation.
    }
  }, [pathname])

  return null
}
