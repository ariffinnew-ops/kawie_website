"use client"

import Link from "next/link"
import { CATEGORY_COLORS, shortCategory, type EcosystemApp } from "@/lib/apps-data"

export function StatusBadge({ app }: { app: EcosystemApp }) {
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

interface AppCardProps {
  app: EcosystemApp
  open: boolean
  onToggle: () => void
  /** Optional plain-language relationship line, e.g. "Connects to: Resource & Cost Management" */
  relationshipNote?: string
}

export function AppCard({ app, open, onToggle, relationshipNote }: AppCardProps) {
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
              <li key={f} className="flex items-start gap-2 font-body text-[12px] leading-snug text-[var(--c-ink)]">
                <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-body text-[11px] leading-snug text-[var(--c-muted)]">{app.industry}</p>
          {relationshipNote && (
            <p className="mt-2 border-t border-[var(--c-line)] pt-2 font-body text-[11px] leading-snug text-[var(--c-muted)]">
              {relationshipNote}
            </p>
          )}
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
