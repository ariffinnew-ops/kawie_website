"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/kawie/navbar"
import Footer from "@/components/kawie/footer"

// ─── Scroll reveal hook ────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ─── Shared style helpers ──────────────────────────────────────────────────
const C = {
  bg: "#0a0c10",
  surface: "#1c2030",
  surfaceHover: "#2e3447",
  cyan: "#00c6d7",
  cyanDim: "rgba(0,198,215,0.12)",
  white: "#ffffff",
  secondary: "#8b90a0",
  muted: "#555d70",
  border: "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.12)",
  violet: "#7c3aed",
  amber: "#f59e0b",
  emerald: "#10b981",
}

const font = {
  heading: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
  body: "var(--font-dm-sans), DM Sans, sans-serif",
}

// ─── Reusable components ───────────────────────────────────────────────────
function RevealSection({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Eyebrow({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: font.body,
        fontWeight: 500,
        fontSize: "12px",
        letterSpacing: "0.1em",
        color: C.cyan,
        background: C.cyanDim,
        padding: "5px 14px",
        borderRadius: "999px",
        marginBottom: "16px",
        textTransform: "uppercase",
      }}
    >
      {text}
    </span>
  )
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: font.heading,
        fontWeight: 800,
        fontSize: "clamp(28px, 4vw, 44px)",
        color: C.white,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        marginBottom: "16px",
      }}
    >
      {children}
    </h2>
  )
}

function SectionDesc({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: font.body,
        fontWeight: 300,
        fontSize: "16px",
        color: C.secondary,
        lineHeight: 1.7,
        maxWidth: "580px",
      }}
    >
      {children}
    </p>
  )
}

// ─── Module feature list item ──────────────────────────────────────────────
function Feature({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
      <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>→</span>
      <span
        style={{
          fontFamily: font.body,
          fontWeight: 300,
          fontSize: "14px",
          color: C.secondary,
          lineHeight: 1.6,
        }}
      >
        {text}
      </span>
    </div>
  )
}

// ─── Module Card ──────────────────────────────────────────────────────────
interface ModuleCardProps {
  tag: string
  tagColor: string
  label: string
  icon: string
  h3: string
  description: string
  features: string[]
  flip?: boolean
}

function ModuleCard({ tag, tagColor, label, icon, h3, description, features, flip = false }: ModuleCardProps) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        background: C.surface,
        borderRadius: "14px",
        border: `1px solid ${C.border}`,
        borderTop: `3px solid ${tagColor}`,
        overflow: "hidden",
      }}
      className="module-card"
    >
      {/* Text panel */}
      <div
        style={{
          padding: "40px",
          order: flip ? 2 : 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          borderRight: flip ? "none" : `1px solid ${C.border}`,
          borderLeft: flip ? `1px solid ${C.border}` : "none",
        }}
        className="module-text"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontFamily: font.body,
              fontWeight: 700,
              fontSize: "13px",
              color: tagColor,
              background: `${tagColor}1a`,
              padding: "4px 12px",
              borderRadius: "999px",
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontFamily: font.body,
              fontWeight: 400,
              fontSize: "13px",
              color: C.muted,
            }}
          >
            {label}
          </span>
        </div>
        <div style={{ fontSize: "32px" }}>{icon}</div>
        <h3
          style={{
            fontFamily: font.heading,
            fontWeight: 800,
            fontSize: "clamp(20px, 2.5vw, 26px)",
            color: C.white,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          {h3}
        </h3>
        <p
          style={{
            fontFamily: font.body,
            fontWeight: 300,
            fontSize: "14px",
            color: C.secondary,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
        <button
          style={{
            fontFamily: font.body,
            fontWeight: 500,
            fontSize: "13px",
            color: tagColor,
            background: "none",
            border: `1px solid ${tagColor}`,
            padding: "8px 18px",
            borderRadius: "999px",
            cursor: "pointer",
            width: "fit-content",
            transition: "transform 0.2s, opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)"
            e.currentTarget.style.opacity = "0.88"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.opacity = "1"
          }}
        >
          See {tag} Features ↓
        </button>
      </div>

      {/* Feature panel */}
      <div
        style={{
          padding: "40px",
          order: flip ? 1 : 2,
          background: `${tagColor}08`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="module-features"
      >
        {features.map((f) => (
          <Feature key={f} text={f} color={tagColor} />
        ))}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────
export default function ProductPage() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Noise texture overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.035,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        {/* ── SECTION 1: HERO ──────────────────────────────────────────── */}
        <section style={{ padding: "100px 24px 80px" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", textAlign: "center" }}>
            <RevealSection>
              <Eyebrow text="Platform Deep Dive" />
              <h1
                style={{
                  fontFamily: font.heading,
                  fontWeight: 800,
                  fontSize: "clamp(40px, 7vw, 80px)",
                  color: C.white,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  marginBottom: "12px",
                }}
              >
                One platform.{" "}
                <span style={{ color: C.cyan }}>Built to last.</span>
              </h1>
              <p
                style={{
                  fontFamily: font.heading,
                  fontWeight: 600,
                  fontSize: "clamp(16px, 2vw, 22px)",
                  color: C.secondary,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                UEOS — Unified Enterprise Operating System
              </p>
              <p
                style={{
                  fontFamily: font.body,
                  fontWeight: 300,
                  fontSize: "16px",
                  color: C.secondary,
                  lineHeight: 1.7,
                  maxWidth: "560px",
                  margin: "0 auto 36px",
                }}
              >
                A fully integrated, cloud-native enterprise platform engineered for Oil &amp; Gas operations and built to
                scale across every industry. Four core modules. One unified data layer. Zero re-entry.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "52px" }}>
                <Link
                  href="/contact"
                  style={{
                    fontFamily: font.body,
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "#0a0c10",
                    background: C.cyan,
                    padding: "13px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "transform 0.2s, opacity 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.opacity = "0.88"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.opacity = "1"
                  }}
                >
                  Book a Demo
                </Link>
                <Link
                  href="#modules"
                  style={{
                    fontFamily: font.body,
                    fontWeight: 400,
                    fontSize: "15px",
                    color: C.white,
                    background: "none",
                    border: `1px solid ${C.border}`,
                    padding: "13px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "transform 0.2s, border-color 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.borderColor = C.borderHover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.borderColor = C.border
                  }}
                >
                  View Modules ↓
                </Link>
              </div>

              {/* Stat badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                {["4 Core Modules", "99.9% Uptime SLA", "ISO 27001 Ready", "Zero Re-entry"].map((stat) => (
                  <div
                    key={stat}
                    style={{
                      fontFamily: font.body,
                      fontWeight: 500,
                      fontSize: "13px",
                      color: C.secondary,
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      padding: "10px 18px",
                      borderRadius: "999px",
                    }}
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── SECTION 2: ARCHITECTURE ──────────────────────────────────── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <RevealSection style={{ textAlign: "center", marginBottom: "48px" }}>
              <Eyebrow text="System Architecture" />
              <SectionH2>Everything connected. Nothing siloed.</SectionH2>
              <SectionDesc>
                UEOS is built on a single PostgreSQL database with Row Level Security — every module shares one source of
                truth, enforced at the database layer.
              </SectionDesc>
            </RevealSection>

            {/* Architecture Diagram Card */}
            <RevealSection>
              <div
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: "20px",
                  padding: "clamp(24px, 4vw, 48px)",
                  boxShadow: `0 0 60px rgba(0,198,215,0.08)`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Diagram */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0", alignItems: "center" }}>
                  {/* User Layer */}
                  <div style={{ width: "100%", maxWidth: "700px" }}>
                    <p
                      style={{
                        fontFamily: font.body,
                        fontWeight: 500,
                        fontSize: "11px",
                        color: C.muted,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      User Layer
                    </p>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "8px" }}>
                      {[
                        { label: "L1 Admin", color: C.cyan },
                        { label: "L2 Reviewer", color: C.violet },
                        { label: "L3 Viewer", color: C.emerald },
                      ].map((u) => (
                        <div
                          key={u.label}
                          style={{
                            flex: 1,
                            maxWidth: "160px",
                            padding: "10px 16px",
                            background: `${u.color}15`,
                            border: `1px solid ${u.color}40`,
                            borderRadius: "10px",
                            textAlign: "center",
                            fontFamily: font.body,
                            fontWeight: 500,
                            fontSize: "13px",
                            color: u.color,
                          }}
                        >
                          {u.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "4px 0" }}>
                    <div style={{ width: "1px", height: "20px", background: `${C.cyan}40` }} />
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${C.cyan}40` }} />
                  </div>

                  {/* Module Layer */}
                  <div style={{ width: "100%", maxWidth: "700px" }}>
                    <p
                      style={{
                        fontFamily: font.body,
                        fontWeight: 500,
                        fontSize: "11px",
                        color: C.muted,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      Module Layer
                    </p>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "8px" }}>
                      {[
                        { label: "PMS", sub: "Projects", color: C.cyan },
                        { label: "CMS", sub: "Crewing", color: C.violet },
                        { label: "SCM", sub: "Supply Chain", color: C.amber },
                        { label: "PCM", sub: "Cost Mgmt", color: C.emerald },
                      ].map((m) => (
                        <div
                          key={m.label}
                          style={{
                            flex: 1,
                            maxWidth: "155px",
                            padding: "12px 8px",
                            background: `${m.color}15`,
                            border: `1px solid ${m.color}50`,
                            borderRadius: "10px",
                            textAlign: "center",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: font.heading,
                              fontWeight: 800,
                              fontSize: "14px",
                              color: m.color,
                              letterSpacing: "-0.02em",
                              marginBottom: "2px",
                            }}
                          >
                            {m.label}
                          </p>
                          <p
                            style={{
                              fontFamily: font.body,
                              fontWeight: 300,
                              fontSize: "11px",
                              color: C.muted,
                            }}
                          >
                            {m.sub}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "4px 0" }}>
                    <div style={{ width: "1px", height: "20px", background: `${C.cyan}40` }} />
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${C.cyan}40` }} />
                  </div>

                  {/* Data Layer */}
                  <div style={{ width: "100%", maxWidth: "700px" }}>
                    <p
                      style={{
                        fontFamily: font.body,
                        fontWeight: 500,
                        fontSize: "11px",
                        color: C.muted,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      Data Layer
                    </p>
                    <div
                      style={{
                        padding: "16px 24px",
                        background: C.cyanDim,
                        border: `1px solid ${C.cyan}50`,
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: font.body,
                          fontWeight: 500,
                          fontSize: "14px",
                          color: C.cyan,
                        }}
                      >
                        Supabase PostgreSQL + Row Level Security
                      </p>
                      <p
                        style={{
                          fontFamily: font.body,
                          fontWeight: 300,
                          fontSize: "12px",
                          color: C.muted,
                          marginTop: "4px",
                        }}
                      >
                        Single source of truth · Enforced at database layer
                      </p>
                    </div>
                  </div>

                  {/* Vercel label */}
                  <div
                    style={{
                      position: "absolute",
                      right: "clamp(12px, 3vw, 32px)",
                      top: "50%",
                      transform: "translateY(-50%) rotate(90deg)",
                      fontFamily: font.body,
                      fontWeight: 500,
                      fontSize: "11px",
                      color: C.muted,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                    className="hidden md:block"
                  >
                    Vercel Edge Network
                  </div>
                </div>

                {/* Key points */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginTop: "40px",
                    justifyContent: "center",
                  }}
                >
                  {[
                    { icon: "🔐", title: "Row Level Security", desc: "Enforced at DB layer" },
                    { icon: "⚡", title: "Real-time sync", desc: "All modules share live data" },
                    { icon: "☁️", title: "Cloud-native", desc: "Zero servers to maintain" },
                  ].map((kp) => (
                    <div
                      key={kp.title}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 20px",
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: "10px",
                        flex: "1 1 200px",
                        maxWidth: "260px",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{kp.icon}</span>
                      <div>
                        <p style={{ fontFamily: font.body, fontWeight: 500, fontSize: "13px", color: C.white }}>{kp.title}</p>
                        <p style={{ fontFamily: font.body, fontWeight: 300, fontSize: "12px", color: C.muted }}>{kp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── SECTION 3: MODULE DEEP DIVES ─────────────────────────────── */}
        <section id="modules" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <RevealSection style={{ textAlign: "center", marginBottom: "56px" }}>
              <Eyebrow text="Core Modules" />
              <SectionH2>Four engines. One platform.</SectionH2>
            </RevealSection>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <ModuleCard
                tag="PMS"
                tagColor={C.cyan}
                label="Project Management System"
                icon="📊"
                h3="Command centre for every contract."
                description="Real-time visibility across your entire project portfolio. Track costs, timelines, and resources from contract award to close-out."
                features={[
                  "Portfolio dashboard with live contract values",
                  "Budget vs actual tracking across all projects",
                  "S-curve forecasting & variance analysis",
                  "L1/L2/L3 role-gated project access",
                  "Multi-project cost consolidation",
                  "Contract milestone tracking",
                ]}
              />

              <ModuleCard
                tag="CMS"
                tagColor={C.violet}
                label="Crewing Management System"
                icon="👥"
                h3="Full crew lifecycle. Zero compliance gaps."
                description="From onboarding to offboarding — every crew member tracked, every certificate monitored, every rotation managed automatically."
                features={[
                  "Complete crew records — every position covered",
                  "Auto-alerts at 90, 30, and 0 days before cert expiry",
                  "BOSIET, APC, and custom certificate tracking",
                  "24-cycle rotation management per year",
                  "Crew statement auto-calculated to project budget",
                  "Offshore & onshore deployment tracking",
                ]}
                flip
              />

              <ModuleCard
                tag="SCM"
                tagColor={C.amber}
                label="Supply Chain Management"
                icon="📦"
                h3="Procurement. Automated end to end."
                description="Every purchase order, delivery, and vendor payment — tagged to the right project, tracked in real time, charged automatically."
                features={[
                  "MSR → PO → DO — zero manual reference tracking",
                  "Real-time inventory with reorder alerts at 5 units",
                  "Vendor directory & OS Days payment tracking",
                  "Auto-charged to requesting project budget",
                  "Multi-vendor comparison ready (V2)",
                  "GRN inspection & RTV process (V2)",
                ]}
              />

              <ModuleCard
                tag="PCM"
                tagColor={C.emerald}
                label="Project Cost Management"
                icon="💰"
                h3="Financial intelligence per project."
                description="Live budget vs actual across five cost categories. Forecast mode. Risk flags. All pulling live from SCM and CMS — zero re-entry."
                features={[
                  "Manpower · Materials · Machinery · Special Services · Others",
                  "Real-time burn rate & risk analysis per day",
                  "Forecast mode for future financial planning",
                  "Pulls live from SCM + CMS automatically",
                  "Per-project P&L visibility",
                  "Multi-project cost roll-up",
                ]}
                flip
              />
            </div>
          </div>
        </section>

        {/* ── SECTION 4: SECURITY ──────────────────────────────────────── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <RevealSection style={{ textAlign: "center", marginBottom: "56px" }}>
              <Eyebrow text="Security" />
              <SectionH2>Enterprise-grade. At every layer.</SectionH2>
            </RevealSection>

            <RevealSection>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "32px",
                  alignItems: "start",
                }}
              >
                {/* Security items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    {
                      icon: "🔐",
                      title: "Row Level Security",
                      desc: "Database-enforced RLS. Project managers see only their project. Zero data leakage between tenants.",
                    },
                    {
                      icon: "👤",
                      title: "RBAC L1/L2/L3",
                      desc: "Role-gated at every route. Admin, Reviewer, Viewer — enforced at system level.",
                    },
                    {
                      icon: "📋",
                      title: "Immutable Audit Trails",
                      desc: "Login logs, procurement history, cost ledgers — timestamped, always audit-ready.",
                    },
                    {
                      icon: "☁️",
                      title: "Vercel Edge Network",
                      desc: "Global CDN. Zero servers. 99.9% uptime SLA. Auto-scaling.",
                    },
                    {
                      icon: "🔒",
                      title: "Supabase Auth",
                      desc: "Secure session management. No bypass flags. Security by design.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          fontSize: "22px",
                          flexShrink: 0,
                          width: "44px",
                          height: "44px",
                          background: C.surface,
                          border: `1px solid ${C.border}`,
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: font.body,
                            fontWeight: 500,
                            fontSize: "15px",
                            color: C.white,
                            marginBottom: "4px",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontFamily: font.body,
                            fontWeight: 300,
                            fontSize: "13px",
                            color: C.secondary,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compliance badges */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "ISO 27001 Ready",
                    "SOC 2 Compliant",
                    "PDPA-Ready",
                    "PostgreSQL 15+",
                    "Vercel Edge Network",
                  ].map((badge) => (
                    <div
                      key={badge}
                      style={{
                        padding: "16px 24px",
                        background: C.surface,
                        border: `1px solid ${C.emerald}30`,
                        borderLeft: `3px solid ${C.emerald}`,
                        borderRadius: "10px",
                        fontFamily: font.body,
                        fontWeight: 500,
                        fontSize: "14px",
                        color: C.white,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: C.emerald,
                          flexShrink: 0,
                        }}
                      />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── SECTION 5: ROADMAP ───────────────────────────────────────── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
            <RevealSection style={{ textAlign: "center", marginBottom: "56px" }}>
              <Eyebrow text="Roadmap" />
              <SectionH2>The UEOS ecosystem keeps growing.</SectionH2>
            </RevealSection>

            <RevealSection>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "20px",
                }}
              >
                {[
                  {
                    tag: "V2",
                    color: C.amber,
                    title: "Digital Timesheets",
                    desc: "Mobile submission → PM approval. Crew cost auto-calculated.",
                  },
                  {
                    tag: "V2",
                    color: C.amber,
                    title: "SCM Pro",
                    desc: "RFQ → Quotation → PO. Multi-vendor matrix. GRN + RTV included.",
                  },
                  {
                    tag: "V2",
                    color: C.amber,
                    title: "Multi-tenant RLS",
                    desc: "Full tenant isolation at DB level for commercial launch.",
                  },
                  {
                    tag: "Future",
                    color: C.violet,
                    title: "Client Portal",
                    desc: "Client progress tracking. Vendor invoice management. Role-gated external access.",
                  },
                  {
                    tag: "Future",
                    color: C.violet,
                    title: "HSE Management",
                    desc: "Incident reporting, safety audits, O&G compliance workflow.",
                  },
                  {
                    tag: "Future",
                    color: C.violet,
                    title: "Learning Centre LMS",
                    desc: "Compliance training, certification tracking, integrated with CMS.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: "14px",
                      transition: "transform 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)"
                      e.currentTarget.style.borderColor = C.borderHover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.borderColor = C.border
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: font.body,
                        fontWeight: 700,
                        fontSize: "11px",
                        color: item.color,
                        background: `${item.color}1a`,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        marginBottom: "14px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {item.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: font.heading,
                        fontWeight: 800,
                        fontSize: "16px",
                        color: C.white,
                        letterSpacing: "-0.02em",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: font.body,
                        fontWeight: 300,
                        fontSize: "13px",
                        color: C.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── SECTION 6: CTA BAND ──────────────────────────────────────── */}
        <section style={{ padding: "80px 24px" }}>
          <RevealSection>
            <div
              style={{
                maxWidth: "1160px",
                margin: "0 auto",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: "20px",
                padding: "clamp(40px, 6vw, 72px) clamp(24px, 4vw, 60px)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "400px",
                  height: "200px",
                  background: `radial-gradient(ellipse, ${C.cyanDim} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
              <h2
                style={{
                  fontFamily: font.heading,
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: C.white,
                  letterSpacing: "-0.03em",
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                Ready to see UEOS in action?
              </h2>
              <p
                style={{
                  fontFamily: font.body,
                  fontWeight: 300,
                  fontSize: "16px",
                  color: C.secondary,
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  margin: "0 auto 36px",
                  position: "relative",
                }}
              >
                Book a 30-minute demo with our team. We&apos;ll walk you through every module relevant to your business.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  position: "relative",
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    fontFamily: font.body,
                    fontWeight: 500,
                    fontSize: "15px",
                    color: "#0a0c10",
                    background: C.cyan,
                    padding: "13px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "transform 0.2s, opacity 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.opacity = "0.88"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.opacity = "1"
                  }}
                >
                  Book a Demo
                </Link>
                <a
                  href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: font.body,
                    fontWeight: 400,
                    fontSize: "15px",
                    color: C.white,
                    background: "none",
                    border: `1px solid ${C.border}`,
                    padding: "13px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "transform 0.2s, border-color 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.borderColor = C.borderHover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.borderColor = C.border
                  }}
                >
                  Join WhatsApp Channel
                </a>
              </div>
            </div>
          </RevealSection>
        </section>

        <Footer />
      </div>

      {/* Responsive styles for module cards */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .module-card {
            grid-template-columns: 1fr !important;
          }
          .module-text {
            order: 1 !important;
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
          }
          .module-features {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  )
}
