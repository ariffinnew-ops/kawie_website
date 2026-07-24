"use client"

import { useEffect, useId, useRef } from "react"
import { X } from "lucide-react"
import {
  getNodeTypeMeta,
  getRelationshipLists,
  isStarterBundleCode,
  type EcosystemNode,
} from "@/lib/ecosystem-data"

interface NodeDetailPanelProps {
  node: EcosystemNode | null
  onClose: () => void
}

export default function NodeDetailPanel({ node, onClose }: NodeDetailPanelProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!node) return undefined

    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.()
    }
    window.addEventListener("keydown", onKey)

    const panel = panelRef.current
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        )
      : []

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    panel?.addEventListener("keydown", trap)

    return () => {
      window.removeEventListener("keydown", onKey)
      panel?.removeEventListener("keydown", trap)
    }
  }, [node, onClose])

  if (!node) return null

  const meta = getNodeTypeMeta(node.nodeType)
  const { feedsInto, feedsFrom } = getRelationshipLists(node)
  const inStarter = isStarterBundleCode(node.code)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-[2px]"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[90vh] w-full max-w-xl flex-col rounded-xl border border-[var(--c-line)] border-t-2 border-t-[var(--c-accent)] bg-[var(--c-bg2)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[var(--c-line)] p-5">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--c-accent)]/15 text-xl">
              <span aria-hidden>{node.glyph}</span>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10.5px] font-medium tabular-nums text-white/30">
                  #{node.code}
                </span>
                <span
                  className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-semibold ${meta.badgeClass}`}
                >
                  {meta.label}
                </span>
                {inStarter && (
                  <span className="inline-flex items-center gap-1 rounded-md border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                    ⭐ Starter Package
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>
              <h2 id={titleId} className="mt-1 text-[16px] font-semibold tracking-tight text-[var(--c-ink)]">
                {node.name}
              </h2>
              <p className="mt-0.5 text-[12.5px] text-[var(--c-accent)]/80">{node.summary}</p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1.5 text-white/30 transition-colors hover:bg-white/5 hover:text-white/70"
          >
            <X size={16} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          <p className="text-[13px] leading-relaxed text-[var(--c-muted)]">{node.detail}</p>

          <div className="mt-5 space-y-4">
            <RelationBlock title="Feeds into" nodes={feedsInto} empty="Nothing — terminal or standalone node." />
            <RelationBlock title="Feeds from" nodes={feedsFrom} empty="No inbound modules." />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end border-t border-[var(--c-line)] p-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3.5 py-2 text-[12.5px] text-white/60 transition-colors hover:bg-white/5 hover:text-white/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function RelationBlock({
  title,
  nodes,
  empty,
}: {
  title: string
  nodes: { code: string; glyph: string; name: string }[]
  empty: string
}) {
  return (
    <div>
      <h3 className="mb-2 text-[11.5px] font-medium text-white/60">{title}</h3>
      {nodes.length === 0 ? (
        <p className="text-[12px] text-white/35">{empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {nodes.map((n) => (
            <div
              key={n.code}
              className="flex items-center gap-2 rounded-lg border border-[var(--c-line-strong)]/60 bg-white/[0.06] px-3 py-2"
            >
              <span aria-hidden>{n.glyph}</span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-white/35">{n.code}</p>
                <p className="truncate text-[12px] font-medium text-[var(--c-ink)]">{n.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
