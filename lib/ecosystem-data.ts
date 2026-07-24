// Node positions, connections, and role metadata for the interactive
// Ecosystem Map (desktop). Ported from APPS PHASE 2's lib/ecosystem-data.js —
// keep the two in sync until the catalog moves to a shared package.
//
// Dark-theme classes reference the --c-* tokens defined in app/globals.css
// (the same tokens used by the homepage's dark "console" sections) rather
// than the light-theme --card/--foreground/--primary tokens, since this
// page is a self-contained dark tool experience.

import { APPS } from "./apps-data"

export function normalizeEcosystemCode(code: string): string {
  return String(code ?? "")
    .toUpperCase()
    .replace(/-/g, "")
}

const APPS_BY_CODE = new Map(APPS.map((app) => [normalizeEcosystemCode(app.code), app]))

function resolveSummary(code: string, fallback: string): string {
  return APPS_BY_CODE.get(normalizeEcosystemCode(code))?.description ?? fallback
}

export const STARTER_APP_NAMES = [
  "Quotation & Invoicing Management",
  "Office Management",
  "Financial Management",
  "Consulting & Professional Services",
  "Digital Documentation",
]

function resolveAppByExactTitle(title: string) {
  return APPS.find((a) => a.title === title) ?? null
}

export const STARTER_BUNDLE = STARTER_APP_NAMES.map((title) => {
  const app = resolveAppByExactTitle(title)
  if (!app) return null
  return normalizeEcosystemCode(app.code)
}).filter((code): code is string => Boolean(code))

export type NodeTypeId = "core" | "combo" | "sub" | "support" | "addon" | "standalone"

interface NodeTypeMeta {
  id: NodeTypeId
  label: string
  borderClass: string
  glowClass: string
  badgeClass: string
  stroke: string
}

export const NODE_TYPES: Record<NodeTypeId, NodeTypeMeta> = {
  core: {
    id: "core",
    label: "Core Module",
    borderClass: "border-[var(--c-accent)]",
    glowClass: "shadow-[0_0_28px_hsl(173_58%_39%/0.5)]",
    badgeClass: "bg-[var(--c-accent)]/20 text-[var(--c-accent)] border-[var(--c-accent)]/40",
    stroke: "hsl(173 58% 39%)",
  },
  combo: {
    id: "combo",
    label: "Flagship Combo",
    borderClass: "border-amber-400/70",
    glowClass: "shadow-[0_4px_18px_hsl(38_90%_50%/0.2)]",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    stroke: "hsl(38 90% 55%)",
  },
  sub: {
    id: "sub",
    label: "Sub-Module",
    borderClass: "border-[var(--c-line-strong)]",
    glowClass: "",
    badgeClass: "bg-[var(--c-bg2)] text-[var(--c-muted)] border-[var(--c-line-strong)]",
    stroke: "hsl(195 15% 45%)",
  },
  support: {
    id: "support",
    label: "Support App",
    borderClass: "border-[var(--c-line-strong)]",
    glowClass: "",
    badgeClass: "bg-[var(--c-bg2)] text-[var(--c-muted)] border-[var(--c-line-strong)]",
    stroke: "hsl(195 15% 45%)",
  },
  addon: {
    id: "addon",
    label: "Add-On",
    borderClass: "border-violet-400/60",
    glowClass: "",
    badgeClass: "bg-violet-500/15 text-violet-300 border-violet-400/40",
    stroke: "hsl(263 70% 65%)",
  },
  standalone: {
    id: "standalone",
    label: "Standalone",
    borderClass: "border-slate-400/50",
    glowClass: "",
    badgeClass: "bg-slate-500/15 text-slate-300 border-slate-400/40",
    stroke: "hsl(215 16% 55%)",
  },
}

export const NODE_SIZE = { w: 200, h: 66 }
export const COMBO_NODE_SIZE = { w: 168, h: 84 }
export const CORE_NODE_SIZE = { w: 210, h: 76 }

export function sizeForNodeType(nodeType: NodeTypeId) {
  if (nodeType === "core") return CORE_NODE_SIZE
  if (nodeType === "combo") return COMBO_NODE_SIZE
  return NODE_SIZE
}

export const CANVAS_WIDTH = 1280
export const CANVAS_HEIGHT = 775
export const CANVAS_CENTER_X = CANVAS_WIDTH / 2

const LOWER_LEFT_X = 360
const LOWER_CENTER_X = 640
const LOWER_RIGHT_X = 920

export const TIER_Y: Record<number, number> = {
  1: 70,
  2: 185,
  3: 331,
  4: 453,
  5: 541,
  6: 636,
  7: 733,
}

const STACK_DY = 36

export const CORE_HUB_FRAME = { x: 405, y: 132, w: 470, h: 106, rx: 14 }

export const SECTION_DIVIDERS = [
  { id: "core", label: "Core UEOS Platform", y: 3 },
  { id: "standalone", label: "Standalone Business Suite", y: 486 },
  { id: "entry", label: "Entry-Level Package", y: 678 },
]

interface RawNode {
  code: string
  name: string
  glyph: string
  nodeType: NodeTypeId
  tier: number
  x: number
  y: number
  connectsTo: string[]
  summary: string
  detail: string
}

const RAW_NODES: RawNode[] = [
  {
    code: "B001",
    name: "Tender & Bid Management",
    glyph: "📋",
    nodeType: "sub",
    tier: 1,
    x: CANVAS_CENTER_X - 214,
    y: TIER_Y[1],
    connectsTo: ["BPRO"],
    summary: "From RFQ to award, fully tracked",
    detail: "RFQ-to-award tender lifecycle. Rolls up into the Pre-Award flagship combo.",
  },
  {
    code: "B002",
    name: "Project Costing & Estimation",
    glyph: "🧾",
    nodeType: "sub",
    tier: 1,
    x: CANVAS_CENTER_X + 214,
    y: TIER_Y[1],
    connectsTo: ["BPRO"],
    summary: "Estimate smarter, price with confidence",
    detail: "Cost modelling and bid pricing. Rolls up into the Pre-Award flagship combo.",
  },
  {
    code: "BPRO",
    name: "Pre-Award Management",
    glyph: "🏆",
    nodeType: "combo",
    tier: 1,
    x: CANVAS_CENTER_X,
    y: TIER_Y[1],
    connectsTo: ["A001", "A002"],
    summary: "Tender & Bid + Project Costing, combined",
    detail:
      "Flagship combo natively bundling Tender & Bid Management with Project Costing & Estimation. Awarded projects hand off into the core.",
  },
  {
    code: "A003",
    name: "Crewing Management System (CMS)",
    glyph: "👥",
    nodeType: "support",
    tier: 2,
    x: CANVAS_CENTER_X - 355,
    y: TIER_Y[2] - STACK_DY,
    connectsTo: ["A002"],
    summary: "Crew records, certs & payroll, simplified",
    detail: "Crew records, certifications and payroll. Feeds labour cost into the core.",
  },
  {
    code: "A004",
    name: "Supply Chain Management (SCM)",
    glyph: "🔗",
    nodeType: "support",
    tier: 2,
    x: CANVAS_CENTER_X - 355,
    y: TIER_Y[2] + STACK_DY,
    connectsTo: ["A002", "CPRO"],
    summary: "Procurement and assets, working together",
    detail:
      "Procurement and asset supply. Feeds material cost into the core, and supports Facilities & Asset Management.",
  },
  {
    code: "A001",
    name: "Resource & Cost Management",
    glyph: "💰",
    nodeType: "core",
    tier: 2,
    x: CANVAS_CENTER_X - 115,
    y: TIER_Y[2],
    connectsTo: [],
    summary: "Budget, crew & supply chain in one system",
    detail:
      "Central cost engine unifying project budget, crewing cost and supply-chain spend. Every operational module ultimately reconciles here.",
  },
  {
    code: "A002",
    name: "Site Operations & Progress Management",
    glyph: "🏗️",
    nodeType: "core",
    tier: 2,
    x: CANVAS_CENTER_X + 115,
    y: TIER_Y[2],
    connectsTo: ["A001", "A005"],
    summary: "Site report to payment, fully tracked",
    detail:
      "Field operations, progress claims and site-to-payment workflow. Feeds actuals into Resource & Cost Management, and surfaces live progress to the Client & Vendor Self-Service Portal.",
  },
  {
    code: "A005",
    name: "Client & Vendor Self-Service Portal",
    glyph: "🌐",
    nodeType: "addon",
    tier: 2,
    x: CANVAS_CENTER_X + 355,
    y: TIER_Y[2],
    connectsTo: [],
    summary: "Real-time self-service for clients & vendors",
    detail:
      "Add-on portal giving clients and vendors real-time self-service access to site progress and documents, fed live from the core.",
  },
  {
    code: "C001",
    name: "Asset & Equipment Management",
    glyph: "⚙️",
    nodeType: "sub",
    tier: 3,
    x: CANVAS_CENTER_X - 424,
    y: TIER_Y[3] - STACK_DY,
    connectsTo: ["CPRO"],
    summary: "Track equipment, acquisition to disposal",
    detail: "Full equipment lifecycle from acquisition to disposal.",
  },
  {
    code: "C002",
    name: "Office Management",
    glyph: "🏢",
    nodeType: "sub",
    tier: 3,
    x: CANVAS_CENTER_X - 424,
    y: TIER_Y[3] + STACK_DY,
    connectsTo: ["CPRO"],
    summary: "Admin, procurement & facilities in one place",
    detail: "Admin assets, procurement and facilities management.",
  },
  {
    code: "CPRO",
    name: "Facilities & Asset Management",
    glyph: "🏆",
    nodeType: "combo",
    tier: 3,
    x: CANVAS_CENTER_X - 220,
    y: TIER_Y[3],
    connectsTo: ["A002"],
    summary: "Asset & Equipment + Office Mgmt, combined",
    detail:
      "Flagship combo bundling Asset & Equipment with Office Management. Supports site operations.",
  },
  {
    code: "DPRO",
    name: "Talent Management Suite",
    glyph: "🏆",
    nodeType: "combo",
    tier: 3,
    x: CANVAS_CENTER_X + 220,
    y: TIER_Y[3],
    connectsTo: ["A001"],
    summary: "HR & Workforce + Training Center, combined",
    detail:
      "Flagship combo bundling HR & Workforce with Training & Learning Center. Feeds workforce cost into the core.",
  },
  {
    code: "D001",
    name: "HR & Workforce Management",
    glyph: "🧑‍💼",
    nodeType: "sub",
    tier: 3,
    x: CANVAS_CENTER_X + 424,
    y: TIER_Y[3] - STACK_DY,
    connectsTo: ["DPRO"],
    summary: "Timesheets, discipline, bonds & contracts",
    detail: "HR operations: timesheets, discipline cases, bonds and contracts.",
  },
  {
    code: "D002",
    name: "Training & Learning Center",
    glyph: "🎓",
    nodeType: "sub",
    tier: 3,
    x: CANVAS_CENTER_X + 424,
    y: TIER_Y[3] + STACK_DY,
    connectsTo: ["DPRO"],
    summary: "Courses, certification & compliance tracking",
    detail: "Course management, certification tracking and training compliance.",
  },
  {
    code: "EPRO",
    name: "Safety & Sustainability Suite",
    glyph: "🏆",
    nodeType: "combo",
    tier: 3,
    x: CANVAS_CENTER_X,
    y: TIER_Y[3],
    connectsTo: ["A002"],
    summary: "HSE Management + ESG Portal, combined",
    detail:
      "Flagship combo bundling HSE Management with ESG Portal. Supports site operations compliance.",
  },
  {
    code: "E001",
    name: "Digital Documentation",
    glyph: "📄",
    nodeType: "support",
    tier: 4,
    x: LOWER_LEFT_X,
    y: TIER_Y[4],
    connectsTo: ["EPRO"],
    summary: "Document vault, versioning & audit trail",
    detail:
      "Centralised document vault with version control and compliance audit trail. Feeds into the Safety & Sustainability Suite.",
  },
  {
    code: "E002",
    name: "HSE Management",
    glyph: "🦺",
    nodeType: "sub",
    tier: 4,
    x: LOWER_CENTER_X,
    y: TIER_Y[4],
    connectsTo: ["EPRO"],
    summary: "Incident reporting, PTW & safety audits",
    detail: "DOSH-aligned incident reporting, permit-to-work and safety audits.",
  },
  {
    code: "E003",
    name: "ESG Portal",
    glyph: "🌱",
    nodeType: "sub",
    tier: 4,
    x: LOWER_RIGHT_X,
    y: TIER_Y[4],
    connectsTo: ["EPRO"],
    summary: "Emissions, diversity & governance reporting",
    detail: "Bursa/SEDG-aligned emissions, diversity and governance reporting.",
  },
  {
    code: "F001",
    name: "Quotation & Invoicing Management",
    glyph: "🧮",
    nodeType: "support",
    tier: 5,
    x: LOWER_LEFT_X,
    y: TIER_Y[5],
    connectsTo: ["PFPRO"],
    summary: "Quotations, invoices & e-Invoice compliance",
    detail: "Quotation-to-invoice workflow with LHDN e-Invoice compliance.",
  },
  {
    code: "F002",
    name: "Agent Commission & Sales Management",
    glyph: "📈",
    nodeType: "support",
    tier: 5,
    x: LOWER_CENTER_X,
    y: TIER_Y[5],
    connectsTo: [],
    summary: "Commissions, sales pipeline & forecasting",
    detail: "Direct and multi-tier agent commissions, sales pipeline and forecasting.",
  },
  {
    code: "F003",
    name: "Consulting & Professional Services",
    glyph: "💼",
    nodeType: "support",
    tier: 5,
    x: LOWER_RIGHT_X,
    y: TIER_Y[5],
    connectsTo: [],
    summary: "Expert directory, engagements & billing",
    detail: "Full PSA lifecycle: expert directory, engagement management and billing.",
  },
  {
    code: "P001",
    name: "Overhead Expenses & Investment Tracker",
    glyph: "💹",
    nodeType: "standalone",
    tier: 6,
    x: LOWER_LEFT_X,
    y: TIER_Y[6],
    connectsTo: ["PFPRO"],
    summary:
      "Overhead expenses, investments & recurring commitments — for individuals or companies",
    detail:
      "Track overhead expenses, investments and recurring commitments — usable by individuals or companies. Rolls into the SME Back-Office suite.",
  },
  {
    code: "PFPRO",
    name: "SME Back-Office Suite",
    glyph: "🏆",
    nodeType: "combo",
    tier: 6,
    x: LOWER_CENTER_X,
    y: TIER_Y[6],
    connectsTo: [],
    summary: "Startup Expense + Quotation & Invoicing",
    detail:
      "Cross-category flagship bundling Startup Expense & Management Accounts with Quotation & Invoicing for SMEs — also fed by Overhead Expenses & Investment Tracker.",
  },
  {
    code: "P002",
    name: "Startup Expense & Management Accounts",
    glyph: "🧾",
    nodeType: "sub",
    tier: 6,
    x: LOWER_RIGHT_X,
    y: TIER_Y[6],
    connectsTo: ["PFPRO"],
    summary: "Expenses, director's owings & mgmt accounts",
    detail:
      "Expenses, director's owings and full management accounts. Rolls into the SME Back-Office suite.",
  },
  {
    code: "SMESTARTER",
    name: "SME Starter",
    glyph: "🚀",
    nodeType: "standalone",
    tier: 7,
    x: LOWER_CENTER_X,
    y: TIER_Y[7],
    connectsTo: [],
    summary: "5 domains, one flat price, no tiers",
    detail:
      "Standalone entry package: cherry-picked BASIC features across 5 domains at one flat price.",
  },
]

export interface EcosystemNode {
  code: string
  name: string
  glyph: string
  nodeType: NodeTypeId
  tier: number
  x: number
  y: number
  w: number
  h: number
  connectsTo: string[]
  summary: string
  detail: string
}

export const SECONDARY_LINKS: { from: string; to: string }[] = []

export const ECOSYSTEM_NODES: EcosystemNode[] = RAW_NODES.map((node) => {
  const size = sizeForNodeType(node.nodeType)
  return {
    code: node.code,
    name: node.name,
    glyph: node.glyph,
    nodeType: node.nodeType,
    tier: node.tier,
    x: node.x,
    y: node.y,
    w: size.w,
    h: size.h,
    connectsTo: node.connectsTo,
    summary: resolveSummary(node.code, node.summary),
    detail: node.detail,
  }
})

export const ECOSYSTEM_NODE_BY_CODE: Record<string, EcosystemNode> = Object.fromEntries(
  ECOSYSTEM_NODES.map((n) => [n.code, n]),
)

export function isStarterBundleCode(code: string): boolean {
  return STARTER_BUNDLE.includes(normalizeEcosystemCode(code))
}

export function getNodeTypeMeta(nodeType: NodeTypeId): NodeTypeMeta {
  return NODE_TYPES[nodeType] ?? NODE_TYPES.standalone
}

export function buildNeighborMap(
  nodes: EcosystemNode[],
  secondaryLinks: { from: string; to: string }[] = SECONDARY_LINKS,
): Map<string, Set<string>> {
  const map = new Map(nodes.map((n) => [n.code, new Set<string>()]))
  for (const node of nodes) {
    for (const target of node.connectsTo ?? []) {
      map.get(node.code)?.add(target)
      map.get(target)?.add(node.code)
    }
  }
  for (const link of secondaryLinks) {
    map.get(link.from)?.add(link.to)
    map.get(link.to)?.add(link.from)
  }
  return map
}

export function getRelationshipLists(node: EcosystemNode, nodes: EcosystemNode[] = ECOSYSTEM_NODES) {
  const feedsInto = (node.connectsTo ?? [])
    .map((code) => nodes.find((n) => n.code === code))
    .filter((n): n is EcosystemNode => Boolean(n))

  const feedsFrom = nodes.filter((n) => (n.connectsTo ?? []).includes(node.code))

  for (const link of SECONDARY_LINKS) {
    if (link.from === node.code) {
      const t = nodes.find((n) => n.code === link.to)
      if (t && !feedsInto.some((n) => n.code === t.code)) feedsInto.push(t)
    }
    if (link.to === node.code) {
      const s = nodes.find((n) => n.code === link.from)
      if (s && !feedsFrom.some((n) => n.code === s.code)) feedsFrom.push(s)
    }
  }

  return { feedsInto, feedsFrom }
}
