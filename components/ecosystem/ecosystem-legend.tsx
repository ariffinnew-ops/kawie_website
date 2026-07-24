"use client"

import { NODE_TYPES, type NodeTypeId } from "@/lib/ecosystem-data"

const TYPE_ORDER: NodeTypeId[] = ["core", "combo", "sub", "support", "addon", "standalone"]

interface EcosystemLegendProps {
  starterOn: boolean
  onToggleStarter: () => void
  zoom: number
  onZoomIn: () => void
  onZoomOut: () => void
  onZoomReset: () => void
}

export default function EcosystemLegend({
  starterOn,
  onToggleStarter,
  zoom,
  onZoomIn,
  onZoomOut,
  onZoomReset,
}: EcosystemLegendProps) {
  return (
    <div className="flex shrink-0 flex-col gap-1 rounded-xl border border-[var(--c-line)] bg-[var(--c-surface)]/90 p-1 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-1.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--c-muted)]">
            Node roles
          </p>
          <span className="flex items-center gap-1 text-[9.5px] text-[var(--c-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            All modules live in production
          </span>
        </div>
        <div className="mt-0.5 flex flex-wrap gap-1">
          {TYPE_ORDER.map((id) => {
            const meta = NODE_TYPES[id]
            return (
              <span
                key={id}
                className={`inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[9.5px] font-medium ${meta.badgeClass}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-sm border ${meta.borderClass} bg-[var(--c-surface)]`}
                  aria-hidden
                />
                {meta.label}
              </span>
            )
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <button
          type="button"
          onClick={onToggleStarter}
          aria-pressed={starterOn}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${
            starterOn
              ? "border-amber-400/60 bg-amber-500/20 text-amber-200"
              : "border-[var(--c-line)] bg-[var(--c-bg2)] text-[var(--c-muted)] hover:text-[var(--c-ink)]"
          }`}
        >
          <span aria-hidden>⭐</span>
          Highlight Starter Package
        </button>

        <div className="inline-flex items-center overflow-hidden rounded-lg border border-[var(--c-line)] bg-[var(--c-bg2)]">
          <button
            type="button"
            onClick={onZoomOut}
            aria-label="Zoom out"
            className="px-2.5 py-1.5 text-[13px] font-semibold text-[var(--c-muted)] transition-colors hover:bg-[var(--c-line)]/30 hover:text-[var(--c-ink)]"
          >
            −
          </button>
          <span className="min-w-[3.25rem] border-x border-[var(--c-line)] px-1.5 text-center text-[11px] tabular-nums text-[var(--c-muted)]">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={onZoomIn}
            aria-label="Zoom in"
            className="px-2.5 py-1.5 text-[13px] font-semibold text-[var(--c-muted)] transition-colors hover:bg-[var(--c-line)]/30 hover:text-[var(--c-ink)]"
          >
            +
          </button>
          <button
            type="button"
            onClick={onZoomReset}
            aria-label="Reset zoom"
            className="border-l border-[var(--c-line)] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--c-muted)] transition-colors hover:bg-[var(--c-line)]/30 hover:text-[var(--c-ink)]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
