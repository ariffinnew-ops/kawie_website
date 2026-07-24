"use client"

import { getNodeTypeMeta, isStarterBundleCode, sizeForNodeType, type EcosystemNode as EcosystemNodeType } from "@/lib/ecosystem-data"

interface EcosystemNodeProps {
  node: EcosystemNodeType
  dimmed?: boolean
  highlighted?: boolean
  hubGlow?: boolean
  starterHighlight?: boolean
  onHover?: (code: string) => void
  onLeave?: () => void
  onSelect?: (node: EcosystemNodeType) => void
}

export default function EcosystemNode({
  node,
  dimmed = false,
  highlighted = false,
  hubGlow = false,
  starterHighlight = false,
  onHover,
  onLeave,
  onSelect,
}: EcosystemNodeProps) {
  const meta = getNodeTypeMeta(node.nodeType)
  const isCombo = node.nodeType === "combo"
  const isCore = node.nodeType === "core"
  const inStarter = isStarterBundleCode(node.code)
  const showStarterRing = starterHighlight && inStarter
  const size = sizeForNodeType(node.nodeType)

  return (
    <button
      type="button"
      aria-label={`${node.code} ${node.name}`}
      onMouseEnter={() => onHover?.(node.code)}
      onMouseLeave={() => onLeave?.()}
      onFocus={() => onHover?.(node.code)}
      onBlur={() => onLeave?.()}
      onClick={() => onSelect?.(node)}
      className={[
        "absolute z-[2] flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg border bg-[var(--c-surface)] p-1.5 text-left shadow-md outline-none transition-[opacity,box-shadow,transform,border-color] duration-200",
        meta.borderClass,
        isCore ? meta.glowClass : "",
        highlighted ? "z-[3] scale-[1.03] ring-2 ring-[var(--c-accent)]/50 shadow-lg" : "",
        hubGlow && !highlighted
          ? "z-[3] ring-2 ring-[var(--c-accent)]/60 shadow-[0_0_22px_hsl(173_65%_50%/0.55)]"
          : "",
        showStarterRing
          ? "ring-2 ring-amber-400/80 shadow-[0_0_20px_hsl(38_90%_50%/0.35),0_0_28px_hsl(173_58%_39%/0.25)]"
          : "",
        dimmed ? "opacity-[0.3]" : "opacity-100",
        "focus-visible:ring-2 focus-visible:ring-[var(--c-accent)]/60",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        left: node.x,
        top: node.y,
        width: node.w ?? size.w,
        height: node.h ?? size.h,
      }}
    >
      <span className="absolute right-1.5 top-1.5 flex items-center gap-1" title="Online">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
      </span>

      {inStarter && (
        <span className="absolute left-1.5 top-1 text-[10px] leading-none" aria-hidden>
          ⭐
        </span>
      )}

      {isCombo && (
        <span className="mb-0.5 inline-flex w-fit items-center gap-0.5 rounded border border-amber-400/40 bg-amber-500/10 px-1 py-px text-[7.5px] font-bold uppercase tracking-wide text-amber-300">
          <span aria-hidden>🏆</span> Combo
        </span>
      )}

      <div className={`flex min-h-0 flex-1 items-start gap-1 ${inStarter ? "pl-3" : ""}`}>
        <span className={`shrink-0 leading-none ${isCore ? "text-base" : "text-xs"}`} aria-hidden>
          {node.glyph}
        </span>
        <div className="min-w-0 flex-1 pr-2">
          <p className="text-[8px] font-semibold uppercase tracking-wide text-[var(--c-muted)]">
            {node.code}
          </p>
          <p
            className={`line-clamp-2 font-semibold leading-tight text-[var(--c-ink)] ${
              isCore ? "text-[12px]" : "text-[10px]"
            }`}
          >
            {node.name}
          </p>
          <p className="mt-0.5 line-clamp-1 text-[9px] leading-snug text-[var(--c-muted)]">
            {node.summary}
          </p>
        </div>
      </div>
    </button>
  )
}
