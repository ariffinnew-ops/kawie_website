// Single source of truth for the UEOS ecosystem catalog.
// Mirrors APPS PHASE 2 lib/apps-data.js — keep the two in sync until the
// catalog moves to a shared package or Supabase.

export type AppStatus = "live" | "early" | "none"

export interface EcosystemApp {
  code: string
  slug: string
  title: string
  description: string
  status: AppStatus
  category: string
  combo?: boolean
  /** Key features shown in the hover/tap detail panel */
  features: string[]
  /** One-line industry application shown in the detail panel */
  industry: string
}

export const CATEGORY_COLORS: Record<string, string> = {
  "Business Systems": "#60a5fa",
  "Tender & Costing": "#818cf8",
  "Operations & Facilities": "#7c3aed",
  "People & Talent": "#f472b6",
  "Documentation & Compliance": "#a3e635",
  "Sales & Commercial": "#fb923c",
  "Personal Finance & Startup Accounting": "#2dd4bf",
  "SME Starter": "#94a3b8",
}

export const CATEGORIES = Object.keys(CATEGORY_COLORS)

const SHORT_CATEGORY: Record<string, string> = {
  "Personal Finance & Startup Accounting": "Personal Finance",
  "Documentation & Compliance": "Docs & Compliance",
  "Operations & Facilities": "Ops & Facilities",
}

export function shortCategory(category: string): string {
  return SHORT_CATEGORY[category] ?? category
}

export const APPS: EcosystemApp[] = [
  // Business Systems
  {
    code: "A001",
    slug: "resource-cost-management",
    title: "Resource & Cost Management",
    description: "Your budget, crew, and supply chain — in one system",
    status: "none",
    category: "Business Systems",
    features: [
      "Budget tracking",
      "Crew resource planning",
      "Supply chain coordination",
      "Unified project controls",
    ],
    industry:
      "For organisations that need budget, crew, and supply chain visibility in one workspace.",
  },
  {
    code: "A002",
    slug: "site-operations-progress-management",
    title: "Site Operations & Progress Management",
    description: "From site report to payment, fully tracked",
    status: "early",
    category: "Business Systems",
    features: ["Site reporting", "Progress tracking", "Claims workflow", "Payment tracking"],
    industry: "For site teams managing daily progress, claims, and payment workflows.",
  },
  {
    code: "A003",
    slug: "crewing-management-system",
    title: "Crewing Management System (CMS)",
    description: "Crew records, certifications & payroll, simplified",
    status: "early",
    category: "Business Systems",
    features: ["Crew records", "Certification tracking", "Payroll support", "Deployment planning"],
    industry: "For crew records, certifications, and payroll in field or vessel operations.",
  },
  {
    code: "A004",
    slug: "supply-chain-management",
    title: "Supply Chain Management (SCM)",
    description: "Procurement and assets, working together",
    status: "early",
    category: "Business Systems",
    features: [
      "Procurement workflow",
      "Inventory visibility",
      "Vendor coordination",
      "Asset linkage",
    ],
    industry: "For teams coordinating procurement, inventory, and asset flows across projects.",
  },
  {
    code: "A005",
    slug: "client-vendor-self-service-portal",
    title: "Client & Vendor Self-Service Portal",
    description: "Real-time self-service access for clients & vendors",
    status: "none",
    category: "Business Systems",
    features: [
      "Client self-service",
      "Vendor portal access",
      "Document visibility",
      "Real-time status updates",
    ],
    industry: "For organisations giving clients and vendors self-service access to updates.",
  },

  // Tender & Costing
  {
    code: "B-PRO",
    slug: "pre-award-management",
    title: "Pre-Award Management",
    description: "Tender & Bid Management + Project Costing, natively combined",
    status: "none",
    category: "Tender & Costing",
    combo: true,
    features: ["Combined tender & costing", "Bid pipeline", "Estimate integration", "Award readiness"],
    industry: "For bid and estimation teams that want tendering and costing in one workflow.",
  },
  {
    code: "B001",
    slug: "tender-bid-management",
    title: "Tender & Bid Management",
    description: "From RFQ to award, fully tracked",
    status: "none",
    category: "Tender & Costing",
    features: ["RFQ management", "Tender submissions", "Bid tracking", "Award tracking"],
    industry: "For business development teams managing tenders and bid submissions.",
  },
  {
    code: "B002",
    slug: "project-costing-estimation",
    title: "Project Costing & Estimation",
    description: "Estimate smarter, price with confidence",
    status: "none",
    category: "Tender & Costing",
    features: ["Cost modelling", "Margin analysis", "Estimate templates", "Pricing support"],
    industry: "For project managers and estimators handling cost modelling and pricing.",
  },

  // Operations & Facilities
  {
    code: "C-PRO",
    slug: "facilities-asset-management",
    title: "Facilities & Asset Management",
    description: "Assets + Office Management, natively combined",
    status: "none",
    category: "Operations & Facilities",
    combo: true,
    features: [
      "Combined facilities & assets",
      "Equipment lifecycle",
      "Office operations",
      "Procurement support",
    ],
    industry: "For facilities teams managing assets and office administration together.",
  },
  {
    code: "C001",
    slug: "asset-equipment-management",
    title: "Asset & Equipment Management",
    description: "Track equipment from acquisition to disposal",
    status: "none",
    category: "Operations & Facilities",
    features: [
      "Asset tracking",
      "Maintenance scheduling",
      "Lifecycle records",
      "Utilisation reporting",
    ],
    industry: "For operations teams tracking equipment from acquisition through disposal.",
  },
  {
    code: "C002",
    slug: "office-management",
    title: "Office Management",
    description: "Admin assets, procurement & facilities, in one place",
    status: "none",
    category: "Operations & Facilities",
    features: [
      "Administrative tasks",
      "Procurement tracking",
      "Facilities management",
      "Office assets",
    ],
    industry: "For admin and facilities teams handling day-to-day office operations.",
  },

  // People & Talent
  {
    code: "D-PRO",
    slug: "talent-management-suite",
    title: "Talent Management Suite",
    description: "HR & Workforce + Training Center, natively combined",
    status: "none",
    category: "People & Talent",
    combo: true,
    features: [
      "Combined HR & training",
      "Workforce records",
      "Learning pathways",
      "Compliance readiness",
    ],
    industry: "For organisations that want workforce management and training in one suite.",
  },
  {
    code: "D001",
    slug: "hr-workforce-management",
    title: "HR & Workforce Management",
    description: "Timesheets, discipline cases, bonds & contracts",
    status: "none",
    category: "People & Talent",
    features: [
      "Timesheet tracking",
      "Discipline & case management",
      "Bond agreements",
      "Contract lifecycle",
    ],
    industry: "For HR and site admin teams handling timesheets, cases, and contracts.",
  },
  {
    code: "D002",
    slug: "training-learning-center",
    title: "Training & Learning Center",
    description: "Course management, certification tracking & compliance",
    status: "live",
    category: "People & Talent",
    features: [
      "Course management",
      "Certification tracking",
      "E-learning modules",
      "Compliance reporting",
    ],
    industry: "For any organisation with structured training and certification requirements.",
  },

  // Documentation & Compliance
  {
    code: "E001",
    slug: "digital-documentation",
    title: "Digital Documentation",
    description: "Centralised vault with version control & audit trail",
    status: "none",
    category: "Documentation & Compliance",
    features: [
      "Centralised document vault",
      "Version control & history",
      "Classification & tagging",
      "Compliance audit trail",
    ],
    industry: "For compliance-heavy teams managing version-controlled records.",
  },
  {
    code: "E-PRO",
    slug: "safety-sustainability-suite",
    title: "Safety & Sustainability Suite",
    description: "HSE Management + ESG Portal, natively combined",
    status: "none",
    category: "Documentation & Compliance",
    combo: true,
    features: [
      "Combined HSE & ESG",
      "Safety workflows",
      "Sustainability metrics",
      "Compliance scorecards",
    ],
    industry: "For organisations that need HSE and ESG reporting in one compliance suite.",
  },
  {
    code: "E002",
    slug: "hse-management",
    title: "HSE Management",
    description: "Incident reporting, permit to work & audits — DOSH-aligned",
    status: "early",
    category: "Documentation & Compliance",
    features: ["Incident reporting", "Permit to work", "Safety audits", "Compliance tracking"],
    industry: "For safety officers managing DOSH-aligned incident reporting and audits.",
  },
  {
    code: "E003",
    slug: "esg-portal",
    title: "ESG Portal",
    description: "Emissions, diversity & governance — Bursa & SEDG-aligned",
    status: "none",
    category: "Documentation & Compliance",
    features: ["Emissions tracking", "Diversity metrics", "Governance repository", "ESG scorecard"],
    industry: "For sustainability teams reporting to Bursa and SEDG-aligned frameworks.",
  },

  // Sales & Commercial
  {
    code: "F001",
    slug: "quotation-invoicing-management",
    title: "Quotation & Invoicing Management",
    description: "Quotations, invoices & e-Invoice compliance",
    status: "live",
    category: "Sales & Commercial",
    features: ["Quotations & invoices", "e-Invoice readiness", "Document lifecycle", "Client records"],
    industry: "For businesses that need consistent, e-Invoice-ready document workflows.",
  },
  {
    code: "F002",
    slug: "agent-commission-sales-management",
    title: "Agent Commission & Sales Management",
    description: "Commissions, pipeline & forecasting — multi-tier",
    status: "live",
    category: "Sales & Commercial",
    features: ["Commission calculation", "Sales pipeline", "Forecasting", "Multi-tier splits"],
    industry: "For businesses running agent or referral networks with commissions.",
  },
  {
    code: "F003",
    slug: "consulting-professional-services",
    title: "Consulting & Professional Services",
    description: "Expert directory, engagements & billing — full PSA",
    status: "none",
    category: "Sales & Commercial",
    features: ["Expert directory", "Engagement management", "Proposal & billing", "PSA lifecycle"],
    industry: "For consulting and professional services teams managing engagements.",
  },

  // Personal Finance & Startup Accounting
  {
    code: "P001",
    slug: "personal-investment-savings-tracker",
    title: "Overhead Expenses & Investment Tracker",
    description: "Expenses, investments & recurring commitments",
    status: "live",
    category: "Personal Finance & Startup Accounting",
    features: ["Portfolio tracking", "Savings goals", "Monthly commitments", "Growth overview"],
    industry: "For individuals and companies tracking overheads and investments.",
  },
  {
    code: "PF-PRO",
    slug: "sme-back-office-suite",
    title: "SME Back-Office Suite",
    description: "Expense Accounts + Invoicing, natively combined",
    status: "none",
    category: "Personal Finance & Startup Accounting",
    combo: true,
    features: [
      "Combined expense & invoicing",
      "Management accounts",
      "Document workflow",
      "Startup-ready controls",
    ],
    industry: "For startups and SMEs that want the whole back office in one suite.",
  },
  {
    code: "P002",
    slug: "startup-expense-management-accounts",
    title: "Startup Expense & Management Accounts",
    description: "Expenses, director's owings & management accounts",
    status: "live",
    category: "Personal Finance & Startup Accounting",
    features: [
      "Expense tracking",
      "Director's owings",
      "Management accounts",
      "Financial summaries",
    ],
    industry: "For founders and small teams tracking expenses and management accounts.",
  },

  // SME Starter
  {
    code: "SME-STARTER",
    slug: "ueos-sme-starter",
    title: "UEOS SME Starter",
    description: "Basics from 5 domains, one flat price, no tiers",
    status: "early",
    category: "SME Starter",
    features: ["Multi-domain basics", "Flat pricing", "No tier complexity", "Starter-ready modules"],
    industry: "For SMEs that want essentials from multiple domains in one flat package.",
  },
]

export const LIVE_APP_COUNT = APPS.filter((a) => a.status === "live").length
export const TOTAL_APP_COUNT = APPS.length
export const DOMAIN_COUNT = CATEGORIES.length - 1 // SME Starter is a bundle, not a domain
