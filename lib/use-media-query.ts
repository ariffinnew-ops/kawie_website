"use client"

import { useEffect, useState } from "react"

/** Returns null until mounted (avoids SSR/hydration mismatch), then tracks a min-width media query live. */
export function useMinWidth(px: number): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px)`)
    setMatches(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [px])

  return matches
}
