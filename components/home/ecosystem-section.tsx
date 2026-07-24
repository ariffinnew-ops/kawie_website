"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { APPS, CATEGORIES, CATEGORY_COLORS, shortCategory, type EcosystemApp } from "@/lib/apps-data"
import Reveal from "./reveal"

function StatusBadge({ app }: { app: EcosystemApp }) {
  if (app.status === "live") {
    return (
      <span className="shrink-0 rounded-full border border-[rgba(16,185,129,0.4)] bg-[rgba(16,185,129,0.08)] px-2 py-[3px] font-body text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--live)]">
        ● Live
      </span>
    )
  }
  if (app.combo) {
    return (
      <span className="shrink-0 rounded-full border border-[rgba(196,181,253,0.35)] bg-[rgba(196,181,253,0.08)] px-2 py-[3px] font-body text-[9px] font-semibold uppercase tracking-[0.08em] text-[#C4B5FD]">
        Flagship Combo
      </span>
    )
  }
  if (app.status === "early") {
    return (
      <span className="shrink-0 rounded-full border border-[rgba(129,140,248,0.4)] bg-[rgba(99,102,241,0.1)] px-2 py-[3px] font-body text-[9px] font-semibold uppercase tracking-[0.08em] text-[#A5B4FC]">
        Early Access
      </span>
    )
  }
  return null
}

function AppCard({
  app,
  open,
  onToggle,
}: {
  app: EcosystemApp
  open: boolean
  onToggle: () => void
}) {
  const color = CATEGORY_COLORS[app.category]
  return (
    <div
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle()
        }
      }}
      className="eco-card group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-surface)] p-4 pb-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--c-accent)]"
      style={{ borderTop: `2px solid ${color}` }}
    >
      <div className="flex min-h-5 items-center justify-between gap-2">
        <span className="font-body text-[10.5px] font-bold tracking-[0.08em]" style={{ color }}>
          {app.code}
        </span>
        <StatusBadge app={app} />
      </div>
      <h3 className="text-[14.5px] font-bold leading-[1.3] tracking-tight text-[var(--c-ink)]">
        {app.title}
      </h3>
      <p className="flex-1 font-body text-[12.5px] leading-normal text-[var(--c-muted)]">
        {app.description}
      </p>
      <p className="mt-1 border-t border-[var(--c-line)] pt-2.5 font-body text-[10.5px] tracking-[0.02em] text-[var(--c-dim)]">
        {shortCategory(app.category)}
      </p>

      {/* Detail panel — slides up on hover (desktop) or tap/focus (touch) */}
      <div
        className={`absolute inset-0 flex flex-col rounded-[10px] p-4 pb-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
        }`}
        style={{ background: "rgba(10,15,20,0.97)", border: `1px solid ${color}55` }}
      >
        <div className="flex shrink-0 items-center justify-between gap-2">
          <span className="font-body text-[10.5px] font-bold tracking-[0.08em]" style={{ color }}>
            {app.code}
          </span>
          <StatusBadge app={app} />
        </div>
        <div className="scroll-hidden mt-2 min-h-0 flex-1 overflow-y-auto pr-1">
          <ul className="flex flex-col gap-1.5">
            {app.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 font-body text-[12px] leading-snug text-[var(--c-ink)]"
              >
                <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-body text-[11px] leading-snug text-[var(--c-muted)]">
            {app.industry}
          </p>
        </div>
        <Link
          href={`/contact?service=demo&app=${app.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="mt-2 inline-flex shrink-0 items-center gap-1.5 border-t border-[var(--c-line)] pt-2 text-[12.5px] font-bold text-[var(--c-accent)] transition-all hover:gap-3"
        >
          Request demo →
        </Link>
      </div>
    </div>
  )
}

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

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {["All", ...CATEGORIES].map((cat) => {
            const color = cat === "All" ? "var(--c-accent)" : CATEGORY_COLORS[cat]
            const isActive = cat === active
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActive(cat)
                  setOpenCode(null)
                }}
                className={`inline-flex items-center gap-[7px] rounded-full border px-3.5 py-[7px] font-body text-[12.5px] transition-all duration-150 ${
                  isActive
                    ? "border-transparent font-bold text-[#08131A]"
                    : "border-[var(--c-line-strong)] text-[var(--c-muted)] hover:text-[var(--c-ink)]"
                }`}
                style={isActive ? { background: color } : undefined}
              >
                <span
                  className="h-[7px] w-[7px] rounded-full"
                  style={{ background: isActive ? "#08131A" : color }}
                />
                {shortCategory(cat)}
              </button>
            )
          })}
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

        <Reveal className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-body text-[12px] text-[var(--c-dim)]">
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
        </Reveal>
      </div>
    </section>
  )
}
