"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ECOSYSTEM_NODES,
  SECONDARY_LINKS,
  STARTER_BUNDLE,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  SECTION_DIVIDERS,
  CORE_HUB_FRAME,
  buildNeighborMap,
  isStarterBundleCode,
  ECOSYSTEM_NODE_BY_CODE,
  type EcosystemNode as EcosystemNodeType,
} from "@/lib/ecosystem-data"
import EcosystemNode from "./ecosystem-node"
import EcosystemLegend from "./ecosystem-legend"
import NodeDetailPanel from "./node-detail-panel"

const MIN_ZOOM = 0.5
const MAX_ZOOM = 1.5
const ZOOM_STEP = 0.1

/** Compact "what's included" list shown beside SME Starter on hover. */
const SME_STARTER_INCLUDES = [
  { feature: "Quotation & invoicing", from: "F001" },
  { feature: "Expense log & monthly P&L", from: "P002" },
  { feature: "Admin asset register", from: "C002" },
  { feature: "Timesheet & staff records", from: "D001" },
  { feature: "Document storage", from: "E001" },
  { feature: "One more module, your pick", from: "ANY" },
]

function edgeKey(from: string, to: string) {
  return `${from}->${to}`
}

interface Edge {
  id: string
  from: string
  to: string
  dashed: boolean
  secondary: boolean
}

function buildEdges(nodes: EcosystemNodeType[], secondaryLinks: { from: string; to: string }[]): Edge[] {
  const edges: Edge[] = []
  for (const node of nodes) {
    for (const target of node.connectsTo ?? []) {
      edges.push({ id: edgeKey(node.code, target), from: node.code, to: target, dashed: false, secondary: false })
    }
  }
  for (const link of secondaryLinks) {
    edges.push({ id: edgeKey(link.from, link.to), from: link.from, to: link.to, dashed: true, secondary: true })
  }
  return edges
}

interface Point {
  x: number
  y: number
}

function edgeAttach(node: EcosystemNodeType, prefer: string, offset = 0): Point {
  const hw = (node.w ?? 132) / 2
  const hh = (node.h ?? 76) / 2
  switch (prefer) {
    case "bottom":
      return { x: node.x + offset, y: node.y + hh }
    case "top":
      return { x: node.x + offset, y: node.y - hh }
    case "left":
      return { x: node.x - hw, y: node.y + offset }
    case "right":
      return { x: node.x + hw, y: node.y + offset }
    default:
      return { x: node.x, y: node.y }
  }
}

/** A point on one edge of the A001+A002 hub wrapper, offset along that edge. */
function hubFrameEdgePoint(side: string, offset = 0): Point {
  const { x, y, w, h } = CORE_HUB_FRAME
  switch (side) {
    case "top":
      return { x: x + w / 2 + offset, y }
    case "bottom":
      return { x: x + w / 2 + offset, y: y + h }
    case "left":
      return { x, y: y + h / 2 + offset }
    case "right":
    default:
      return { x: x + w, y: y + h / 2 + offset }
  }
}

interface RouteHint {
  fromSide?: string
  toSide?: string
  toHubFrame?: boolean
  toHubSide?: string
  toHubOffset?: number
  fromHubFrame?: boolean
  fromHubSide?: string
  fromHubOffset?: number
  fromOffset?: number
  toOffset?: number
  midFrac?: number
}

/**
 * Per-edge routing hints — distinct elbows so parallel lines never merge.
 * Edges into the core (BPRO, A003, A004, CPRO, DPRO, EPRO) terminate on the
 * hub WRAPPER edge (toHubFrame) rather than piercing A001/A002 individually.
 * A002->A005 originates FROM the wrapper edge (fromHubFrame) — the core
 * feeds the self-service portal, not the other way around.
 */
const ROUTE_HINTS: Record<string, RouteHint> = {
  "BPRO->A002": { fromSide: "bottom", toSide: "top", toHubFrame: true, toHubSide: "top", toHubOffset: 0, fromOffset: 0, midFrac: 0.5 },
  "BPRO->A001": { fromSide: "bottom", toSide: "top", toHubFrame: true, toHubSide: "top", toHubOffset: 0, fromOffset: 0, midFrac: 0.5 },
  "A003->A002": { fromSide: "right", toSide: "left", toHubFrame: true, toHubSide: "left", toHubOffset: -20, fromOffset: 0, midFrac: 0.4 },
  "A004->A002": { fromSide: "right", toSide: "left", toHubFrame: true, toHubSide: "left", toHubOffset: 20, fromOffset: 0, midFrac: 0.55 },
  "A002->A005": { fromHubFrame: true, fromHubSide: "right", fromHubOffset: 0, fromSide: "right", toSide: "left", toOffset: 0, midFrac: 0.5 },
  "A002->A001": { fromSide: "left", toSide: "right", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
  "CPRO->A002": { fromSide: "top", toSide: "bottom", toHubFrame: true, toHubSide: "bottom", toHubOffset: -220, fromOffset: 0, midFrac: 0.5 },
  "DPRO->A001": { fromSide: "top", toSide: "bottom", toHubFrame: true, toHubSide: "bottom", toHubOffset: 220, fromOffset: 0, midFrac: 0.5 },
  "EPRO->A002": { fromSide: "top", toSide: "bottom", toHubFrame: true, toHubSide: "bottom", toHubOffset: 0, fromOffset: 0, midFrac: 0.5 },
  "A004->CPRO": { fromSide: "bottom", toSide: "top", fromOffset: 0, toOffset: -40, midFrac: 0.5 },
  "C001->CPRO": { fromSide: "right", toSide: "left", fromOffset: 0, toOffset: -12, midFrac: 0.45 },
  "C002->CPRO": { fromSide: "right", toSide: "left", fromOffset: 0, toOffset: 12, midFrac: 0.55 },
  "D001->DPRO": { fromSide: "left", toSide: "right", fromOffset: 0, toOffset: -12, midFrac: 0.45 },
  "D002->DPRO": { fromSide: "left", toSide: "right", fromOffset: 0, toOffset: 12, midFrac: 0.55 },
  "B001->BPRO": { fromSide: "right", toSide: "left", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
  "B002->BPRO": { fromSide: "left", toSide: "right", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
  "E001->EPRO": { fromSide: "top", toSide: "bottom", fromOffset: 0, toOffset: -24, midFrac: 0.4 },
  "E002->EPRO": { fromSide: "top", toSide: "bottom", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
  "E003->EPRO": { fromSide: "top", toSide: "bottom", fromOffset: 0, toOffset: 24, midFrac: 0.6 },
  "F001->PFPRO": { fromSide: "bottom", toSide: "top", fromOffset: 0, toOffset: -24, midFrac: 0.45 },
  "P001->PFPRO": { fromSide: "right", toSide: "left", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
  "P002->PFPRO": { fromSide: "left", toSide: "right", fromOffset: 0, toOffset: 0, midFrac: 0.5 },
}

/**
 * Orthogonal elbow with forced sides + lane offsets.
 * Final segment always ≥12px so SVG markerEnd arrowheads render reliably.
 */
function elbowPath(fromNode: EcosystemNodeType, toNode: EcosystemNodeType, hint: RouteHint = {}) {
  const origin = hint.fromHubFrame ? hubFrameEdgePoint(hint.fromHubSide!, hint.fromHubOffset ?? 0) : fromNode
  const dest = hint.toHubFrame ? hubFrameEdgePoint(hint.toHubSide!, hint.toHubOffset ?? 0) : toNode

  let fromSide = hint.fromSide
  let toSide = hint.toSide

  if (!fromSide || !toSide) {
    const dx = dest.x - origin.x
    const dy = dest.y - origin.y
    if (Math.abs(dy) >= Math.abs(dx) * 0.55) {
      fromSide = dy > 0 ? "bottom" : "top"
      toSide = dy > 0 ? "top" : "bottom"
    } else {
      fromSide = dx > 0 ? "right" : "left"
      toSide = dx > 0 ? "left" : "right"
    }
  }

  const a = hint.fromHubFrame ? origin : edgeAttach(fromNode, fromSide, hint.fromOffset ?? 0)
  const b = hint.toHubFrame ? dest : edgeAttach(toNode, toSide, hint.toOffset ?? 0)
  const midFrac = hint.midFrac ?? 0.5
  const verticalFirst = fromSide === "top" || fromSide === "bottom"

  if (verticalFirst) {
    let midY = a.y + (b.y - a.y) * midFrac
    if (fromSide === "bottom") midY = Math.max(midY, a.y + 14)
    if (fromSide === "top") midY = Math.min(midY, a.y - 14)
    if (toSide === "top") midY = Math.min(midY, b.y - 14)
    if (toSide === "bottom") midY = Math.max(midY, b.y + 14)
    return `M ${a.x} ${a.y} L ${a.x} ${midY} L ${b.x} ${midY} L ${b.x} ${b.y}`
  }

  let midX = a.x + (b.x - a.x) * midFrac
  if (fromSide === "right") midX = Math.max(midX, a.x + 14)
  if (fromSide === "left") midX = Math.min(midX, a.x - 14)
  if (toSide === "left") midX = Math.min(midX, b.x - 14)
  if (toSide === "right") midX = Math.max(midX, b.x + 14)
  return `M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${b.y} L ${b.x} ${b.y}`
}

function ConnectorLayer({
  nodesByCode,
  edges,
  activeCodes,
  dimOthers,
  starterOn,
  hubGlow,
}: {
  nodesByCode: Record<string, EcosystemNodeType>
  edges: Edge[]
  activeCodes: Set<string> | null
  dimOthers: boolean
  starterOn: boolean
  hubGlow: boolean
}) {
  const starterCentroid = useMemo(() => {
    const pts = STARTER_BUNDLE.map((c) => nodesByCode[c]).filter(Boolean)
    if (!pts.length) return { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 80 }
    return {
      x: pts.reduce((s, n) => s + n.x, 0) / pts.length,
      y: pts.reduce((s, n) => s + n.y, 0) / pts.length - 50,
    }
  }, [nodesByCode])

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1]"
      width="100%"
      height="100%"
      viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
      aria-hidden
    >
      <defs>
        <marker id="eco-arrow" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
          <path d="M 0 1.5 L 11 6 L 0 10.5 z" fill="hsl(173 35% 58%)" />
        </marker>
        <marker id="eco-arrow-core" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto">
          <path d="M 0 1 L 12 6 L 0 11 z" fill="hsl(173 58% 48%)" />
        </marker>
        <marker id="eco-arrow-hot" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto">
          <path d="M 0 1 L 12 6 L 0 11 z" fill="hsl(173 65% 62%)" />
        </marker>
      </defs>

      <rect
        x={CORE_HUB_FRAME.x}
        y={CORE_HUB_FRAME.y}
        width={CORE_HUB_FRAME.w}
        height={CORE_HUB_FRAME.h}
        rx={CORE_HUB_FRAME.rx}
        fill={hubGlow ? "hsl(173 58% 39% / 0.16)" : "hsl(173 58% 39% / 0.06)"}
        stroke={hubGlow ? "hsl(173 65% 55% / 0.9)" : "hsl(173 58% 39% / 0.45)"}
        strokeWidth={hubGlow ? 2.5 : 1.5}
        style={hubGlow ? { filter: "drop-shadow(0 0 14px hsl(173 65% 50% / 0.55))" } : undefined}
        className="transition-[fill,stroke,stroke-width,filter] duration-200"
      />

      {SECTION_DIVIDERS.map((section) => {
        const label = section.label.toUpperCase()
        const pillW = Math.round(label.length * 7.2) + 28
        const pillH = 22
        const lineY = section.y + pillH / 2
        return (
          <g key={section.id}>
            <line
              x1={32 + pillW + 10}
              y1={lineY}
              x2={CANVAS_WIDTH - 32}
              y2={lineY}
              stroke="hsl(25 95% 55%)"
              strokeWidth={1.5}
              strokeDasharray={section.id === "core" ? undefined : "5 4"}
              strokeOpacity={0.85}
              style={{ filter: "drop-shadow(0 0 5px hsl(25 95% 55% / 0.8))" }}
            />
            <rect x={32} y={section.y} width={pillW} height={pillH} rx={6} fill="hsl(195 40% 10%)" stroke="hsl(173 40% 35%)" strokeWidth={1} />
            <text x={32 + pillW / 2} y={section.y + pillH / 2 + 3.5} textAnchor="middle" fill="hsl(173 45% 65%)" fontSize="11" fontWeight="700" letterSpacing="0.06em">
              {label}
            </text>
          </g>
        )
      })}

      {edges.map((edge) => {
        const from = nodesByCode[edge.from]
        const to = nodesByCode[edge.to]
        if (!from || !to) return null

        const hint = ROUTE_HINTS[edge.id] ?? {}
        const intoCore = to.nodeType === "core" || Boolean(hint.toHubFrame)
        const edgeActive = !dimOthers || (activeCodes?.has(edge.from) && activeCodes?.has(edge.to))
        const opacity = dimOthers ? (edgeActive ? 1 : 0.22) : 1

        return (
          <path
            key={edge.id}
            d={elbowPath(from, to, hint)}
            fill="none"
            stroke={intoCore ? "hsl(173 58% 42%)" : "hsl(195 18% 48%)"}
            strokeWidth={intoCore ? 2 : 1.75}
            strokeOpacity={opacity}
            strokeLinejoin="round"
            strokeLinecap="butt"
            markerEnd={intoCore ? (edgeActive && dimOthers ? "url(#eco-arrow-hot)" : "url(#eco-arrow-core)") : "url(#eco-arrow)"}
          />
        )
      })}

      {starterOn &&
        STARTER_BUNDLE.map((code) => {
          const n = nodesByCode[code]
          if (!n) return null
          const ghost = { ...n, x: starterCentroid.x, y: starterCentroid.y, w: 8, h: 8 }
          return (
            <path
              key={`starter-${code}`}
              d={elbowPath(n, ghost, {
                fromSide: n.y > ghost.y ? "top" : "bottom",
                toSide: n.y > ghost.y ? "bottom" : "top",
                midFrac: 0.5,
              })}
              fill="none"
              stroke="hsl(38 85% 55%)"
              strokeWidth={1.5}
              strokeOpacity={0.85}
              strokeDasharray="5 4"
              strokeLinejoin="round"
              markerEnd="url(#eco-arrow)"
            />
          )
        })}

      {starterOn && (
        <g transform={`translate(${starterCentroid.x}, ${starterCentroid.y})`}>
          <rect x={-108} y={-18} width={216} height={36} rx={10} fill="hsl(195 40% 12%)" stroke="hsl(38 85% 55%)" strokeWidth={1.5} strokeDasharray="5 4" />
          <text textAnchor="middle" y={5} fill="hsl(38 90% 72%)" fontSize="11" fontWeight="600">
            ⭐ Starter Package — startup bundle
          </text>
        </g>
      )}
    </svg>
  )
}

export default function EcosystemMap() {
  const [zoom, setZoom] = useState(1)
  const [hoveredCode, setHoveredCode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<EcosystemNodeType | null>(null)
  const [starterOn, setStarterOn] = useState(false)

  const neighborMap = useMemo(() => buildNeighborMap(ECOSYSTEM_NODES, SECONDARY_LINKS), [])
  const edges = useMemo(() => buildEdges(ECOSYSTEM_NODES, SECONDARY_LINKS), [])
  const nodesByCode = ECOSYSTEM_NODE_BY_CODE

  const activeCodes = useMemo(() => {
    if (starterOn) return new Set(STARTER_BUNDLE)
    if (!hoveredCode) return null
    const set = new Set([hoveredCode])
    neighborMap.get(hoveredCode)?.forEach((c) => set.add(c))
    return set
  }, [hoveredCode, neighborMap, starterOn])

  const dimOthers = Boolean(starterOn || hoveredCode)

  const hubGlow = Boolean(!starterOn && activeCodes && (activeCodes.has("A001") || activeCodes.has("A002")))

  const clampZoom = useCallback((z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z)), [])

  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomRef = useRef(zoom)
  useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  /** Zoom to `nextZoom`, keeping the content under (clientX, clientY) anchored in place. */
  const zoomAtPoint = useCallback(
    (nextZoom: number, clientX: number, clientY: number) => {
      const el = viewportRef.current
      if (!el) {
        setZoom(nextZoom)
        return
      }
      const rect = el.getBoundingClientRect()
      const prevZoom = zoomRef.current
      const anchorX = clientX - rect.left + el.scrollLeft
      const anchorY = clientY - rect.top + el.scrollTop
      const ratio = nextZoom / prevZoom
      setZoom(nextZoom)
      requestAnimationFrame(() => {
        el.scrollLeft = anchorX * ratio - (clientX - rect.left)
        el.scrollTop = anchorY * ratio - (clientY - rect.top)
      })
    },
    [],
  )

  // Ctrl/Cmd + wheel (also how browsers report trackpad pinch) zooms toward the cursor;
  // plain wheel keeps native scroll/pan. Attached natively so preventDefault isn't
  // silently dropped by React's passive listener default.
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return
      e.preventDefault()
      const next = clampZoom(+(zoomRef.current - e.deltaY * 0.002).toFixed(2))
      zoomAtPoint(next, e.clientX, e.clientY)
    }

    let pinchDist: number | null = null
    let pinchZoom = zoomRef.current

    const touchDistance = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)
    const touchMidpoint = (t: TouchList) => ({ x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 })

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        pinchDist = touchDistance(e.touches)
        pinchZoom = zoomRef.current
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2 || pinchDist === null) return
      e.preventDefault()
      const dist = touchDistance(e.touches)
      const mid = touchMidpoint(e.touches)
      const next = clampZoom(+((pinchZoom * dist) / pinchDist).toFixed(2))
      zoomAtPoint(next, mid.x, mid.y)
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) pinchDist = null
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: false })
    el.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener("wheel", onWheel)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
    }
  }, [clampZoom, zoomAtPoint])

  // Click-and-drag panning for mouse users, now that the scrollbar is hidden.
  const dragRef = useRef<{ startX: number; startY: number; scrollLeft: number; scrollTop: number } | null>(null)
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    const el = viewportRef.current
    if (!el || e.button !== 0) return
    if ((e.target as HTMLElement).closest("button")) return
    dragRef.current = { startX: e.clientX, startY: e.clientY, scrollLeft: el.scrollLeft, scrollTop: el.scrollTop }
    setDragging(true)
  }
  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => {
      const el = viewportRef.current
      const drag = dragRef.current
      if (!el || !drag) return
      el.scrollLeft = drag.scrollLeft - (e.clientX - drag.startX)
      el.scrollTop = drag.scrollTop - (e.clientY - drag.startY)
    }
    const onUp = () => {
      dragRef.current = null
      setDragging(false)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [dragging])

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1 px-3 py-1 sm:px-4">
      <EcosystemLegend
        starterOn={starterOn}
        onToggleStarter={() => setStarterOn((v) => !v)}
        zoom={zoom}
        onZoomIn={() => setZoom((z) => clampZoom(+(z + ZOOM_STEP).toFixed(2)))}
        onZoomOut={() => setZoom((z) => clampZoom(+(z - ZOOM_STEP).toFixed(2)))}
        onZoomReset={() => setZoom(1)}
      />

      <div
        ref={viewportRef}
        onMouseDown={onMouseDown}
        className={`scroll-hidden min-h-0 flex-1 overflow-auto overscroll-contain rounded-xl border border-[var(--c-line)] bg-[var(--c-bg)]/80 ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="origin-top-left" style={{ width: CANVAS_WIDTH * zoom, height: CANVAS_HEIGHT * zoom }}>
          <div
            className="relative"
            style={{
              width: CANVAS_WIDTH,
              height: CANVAS_HEIGHT,
              minWidth: CANVAS_WIDTH,
              minHeight: CANVAS_HEIGHT,
              transform: `scale(${zoom})`,
              transformOrigin: "top left",
            }}
          >
            <ConnectorLayer nodesByCode={nodesByCode} edges={edges} activeCodes={activeCodes} dimOthers={dimOthers} starterOn={starterOn} hubGlow={hubGlow} />

            {ECOSYSTEM_NODES.map((node) => {
              const inActive = !activeCodes || activeCodes.has(node.code)
              const highlighted = Boolean(hoveredCode) && hoveredCode === node.code && !starterOn
              const isHubMember = node.code === "A001" || node.code === "A002"
              const dimmed = dimOthers && !inActive && !(isHubMember && hubGlow)

              return (
                <EcosystemNode
                  key={node.code}
                  node={node}
                  dimmed={dimmed}
                  highlighted={highlighted}
                  hubGlow={isHubMember && hubGlow}
                  starterHighlight={starterOn && isStarterBundleCode(node.code)}
                  onHover={(code) => {
                    if (!starterOn) setHoveredCode(code)
                  }}
                  onLeave={() => {
                    if (!starterOn) setHoveredCode(null)
                  }}
                  onSelect={setSelectedNode}
                />
              )
            })}

            {!starterOn &&
              hoveredCode === "SMESTARTER" &&
              (() => {
                const sme = nodesByCode.SMESTARTER
                if (!sme) return null
                return (
                  <div
                    className="pointer-events-none absolute z-[5] w-[248px] rounded-lg border border-amber-400/50 bg-[var(--c-bg2)]/95 p-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.65)] backdrop-blur"
                    style={{ left: sme.x + sme.w / 2 + 14, top: sme.y + sme.h / 2, transform: "translateY(-100%)" }}
                  >
                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-300">🚀 What&apos;s included</p>
                    <ul className="space-y-1">
                      {SME_STARTER_INCLUDES.map((item) => (
                        <li key={item.from} className="flex items-center justify-between gap-2 text-[10px] leading-tight">
                          <span className="text-[var(--c-ink)]/90">{item.feature}</span>
                          <span className="w-9 shrink-0 rounded border border-white/15 bg-white/[0.06] px-1 py-px text-center text-[8.5px] font-semibold tabular-nums text-[var(--c-muted)]">
                            {item.from}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-1.5 border-t border-white/10 pt-1 text-[8.5px] text-[var(--c-muted)]">Basic tier of each · one flat price</p>
                  </div>
                )
              })()}
          </div>
        </div>
      </div>

      <NodeDetailPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  )
}
