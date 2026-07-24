"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, Monitor, X, ZoomIn } from "lucide-react"
import { APPS, TOTAL_APP_COUNT } from "@/lib/apps-data"
import { ECOSYSTEM_NODE_BY_CODE, normalizeEcosystemCode } from "@/lib/ecosystem-data"
import { AppCard } from "./app-card"
import { CategoryFilterTabs } from "./category-tabs"

/** Plain-language stand-in for the map's drawn connector lines, keyed by apps-data code. */
function relationshipNoteFor(code: string): string | undefined {
  const node = ECOSYSTEM_NODE_BY_CODE[normalizeEcosystemCode(code)]
  if (!node || node.connectsTo.length === 0) return undefined
  const targets = node.connectsTo
    .map((c) => ECOSYSTEM_NODE_BY_CODE[c]?.name)
    .filter((name): name is string => Boolean(name))
  if (targets.length === 0) return undefined
  return `Connects to: ${targets.join(", ")}`
}

function MapSnapshot() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-accent)] focus-visible:ring-offset-2"
        aria-label="View a full-size snapshot of the interactive ecosystem map"
      >
        <Image
          src="/ecosystem-map-preview.png"
          alt="Snapshot of the interactive UEOS ecosystem map — 25 modules and how they connect"
          width={900}
          height={538}
          className="w-full transition-opacity group-hover:opacity-95"
          priority
        />
        <span className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 rounded-lg bg-[rgba(16,32,43,0.85)] px-2.5 py-1.5 font-body text-[11.5px] font-medium text-white opacity-90 transition-opacity group-hover:opacity-100">
          <ZoomIn size={13} aria-hidden />
          View full size
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,10,14,0.97)] p-3 sm:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Ecosystem map snapshot, full screen"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X size={22} strokeWidth={2} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ecosystem-map-preview.png"
            alt="Snapshot of the interactive UEOS ecosystem map — 25 modules and how they connect"
            className="max-h-[calc(100dvh-2rem)] w-auto max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default function EcosystemGridView() {
  const [active, setActive] = useState("All")
  const [openCode, setOpenCode] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const list = useMemo(() => APPS.filter((a) => active === "All" || a.category === active), [active])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.children) as HTMLElement[]
    cards.forEach((c) => c.classList.remove("show"))
    const timers = cards.map((c, i) => setTimeout(() => c.classList.add("show"), 30 + i * 24))
    return () => timers.forEach(clearTimeout)
  }, [list])

  return (
    <div className="mx-auto w-full max-w-[1180px] px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-[22px] font-extrabold tracking-tight text-[var(--c-ink)]">
            UEOS Ecosystem Map
          </h1>
          <p className="mt-1 font-body text-[13px] text-[var(--c-muted)]">
            {TOTAL_APP_COUNT} apps across 7 domains — here's how they all fit together.
          </p>
        </div>
        {/* Native <a>, not next/link — see ecosystem-page-client.tsx for why. */}
        <a
          href="/#ecosystem"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[var(--c-line-strong)] px-3 py-1.5 font-body text-[12.5px] font-semibold text-[var(--c-ink)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
        >
          <ArrowLeft size={14} aria-hidden />
          Back
        </a>
      </div>

      <div className="mt-4">
        <MapSnapshot />
        <div className="mt-3 flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-500/[0.06] px-4 py-3">
          <Monitor size={16} className="mt-0.5 shrink-0 text-amber-300" aria-hidden />
          <p className="font-body text-[12.5px] leading-relaxed text-amber-100/90">
            That's a snapshot — the map above is interactive on desktop, where you can hover to
            trace connections and click any module for detail. Below, every module is filterable
            and tappable right here.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-heading text-[17px] font-bold tracking-tight text-[var(--c-ink)]">
          Browse all modules
        </h2>
        <p className="font-body text-xs font-medium text-[var(--c-dim)]" aria-live="polite">
          {list.length} apps
        </p>
      </div>

      <CategoryFilterTabs
        active={active}
        onChange={(cat) => {
          setActive(cat)
          setOpenCode(null)
        }}
        className="mt-5"
      />

      <div ref={gridRef} className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
        {list.map((app) => (
          <AppCard
            key={app.code}
            app={app}
            open={openCode === app.code}
            onToggle={() => setOpenCode((c) => (c === app.code ? null : app.code))}
            relationshipNote={relationshipNoteFor(app.code)}
          />
        ))}
      </div>
    </div>
  )
}
