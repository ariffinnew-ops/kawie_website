"use client"

import { useEffect } from "react"

/**
 * The browser's native "scroll to #hash on load" fires before this page
 * finishes hydrating, so it lands at scrollY 0 instead of the target
 * section. This re-does it once layout has settled.
 *
 * Must use `instant`, not `smooth` — a smooth scrollIntoView started this
 * early gets silently cancelled partway through (confirmed via a scroll
 * listener: zero scroll events fired at all with `smooth`), landing back
 * at 0. `instant` completes synchronously before anything can interrupt it.
 *
 * Only handles a genuine full page load (mount-once) — links that must land
 * on a hash from elsewhere on the site use a native <a> tag (see the
 * ecosystem page's "Back" links) specifically so they force a real
 * navigation instead of Next's client-side router, which reuses the cached
 * "/" route and never re-runs this effect at all.
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" })
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return null
}
