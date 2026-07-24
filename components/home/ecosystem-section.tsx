"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { APPS } from "@/lib/apps-data"
import { AppCard } from "@/components/ecosystem/app-card"
import { CategoryFilterTabs } from "@/components/ecosystem/category-tabs"
import Reveal from "./reveal"

export default function EcosystemSection() {
  const [active, setActive] = useState("All")
  const [openCode, setOpenCode] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const list = useMemo(
    () => APPS.filter((a) => active === "All" || a.category === active),
    [active],
  )

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.children) as HTMLElement[]
    cards.forEach((c) => c.classList.remove("show"))
    const timers = cards.map((c, i) => setTimeout(() => c.classList.add("show"), 40 + i * 28))
    return () => timers.forEach(clearTimeout)
  }, [list])

  return (
    <section
      id="ecosystem"
      className="console bg-gradient-to-b from-[var(--c-bg)] to-[#0B1219] py-24 text-[var(--c-ink)]"
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The UEOS Ecosystem</p>
            <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight text-[var(--c-ink)]">
              Every system your operation needs.
              <br />
              Already talking to each other.
            </h2>
            <p className="mt-4 max-w-[62ch] font-body text-[15.5px] leading-relaxed text-[var(--c-muted)]">
              Not a bundle of disconnected tools — one platform, {APPS.length} purpose-built apps
              across 7 domains. Hover any card for details, or filter by domain.
            </p>
          </div>
          <p className="font-body text-xs font-medium text-[var(--c-dim)]" aria-live="polite">
            {list.length} apps
          </p>
        </Reveal>

        <Reveal>
          <CategoryFilterTabs
            active={active}
            onChange={(cat) => {
              setActive(cat)
              setOpenCode(null)
            }}
            className="mt-8"
          />
        </Reveal>

        <div
          ref={gridRef}
          className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {list.map((app) => (
            <AppCard
              key={app.code}
              app={app}
              open={openCode === app.code}
              onToggle={() => setOpenCode((c) => (c === app.code ? null : app.code))}
            />
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-body text-[12px] text-[var(--c-dim)]">
            <span className="flex items-center gap-2">
              <i className="h-2 w-2 rounded-full bg-[var(--live)]" /> Live — in production today
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2 w-2 rounded-full bg-[var(--early)]" /> Early Access — join the pilot
              list
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2 w-2 rounded-full bg-[#C4B5FD]" /> Flagship Combo — two apps, natively
              combined
            </span>
          </div>
          <Link
            href="/ecosystem"
            className="btn-hover inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--c-accent)] px-5 py-2.5 font-body text-[13.5px] font-bold text-[var(--c-accent-ink)] hover:shadow-[0_8px_24px_-8px_rgba(45,212,191,0.5)]"
          >
            View the full Ecosystem Map →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
