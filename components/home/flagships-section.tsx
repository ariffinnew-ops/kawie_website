import Link from "next/link"
import Reveal from "./reveal"

function LivePill() {
  return (
    <span className="ml-2.5 inline-flex items-center gap-1.5 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] px-2.5 py-[3px] align-middle font-body text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--live)]">
      <i className="h-1.5 w-1.5 rounded-full bg-[var(--live)]" />
      Live
    </span>
  )
}

const CORE_CHIPS = ["PMS · Projects", "CMS · Crewing", "SCM · Supply Chain", "PCM · Cost Mgmt"]
const CONSTRUCTION_CHIPS = ["Work Orders", "Site Reports", "IPC & Claims", "HSE", "Payments"]

export default function FlagshipsSection() {
  return (
    <section id="flagship" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal>
          <p className="eyebrow">Production Platforms</p>
          <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight">
            Two verticals. One backbone.
          </h2>
          <p className="mt-4 max-w-[62ch] font-body text-[15.5px] leading-relaxed text-muted-foreground">
            UEOS started offshore and grew onshore. Today it ships as two production platforms
            sharing one core.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-8 shadow-[0_2px_8px_rgba(16,50,70,0.04)] hover:border-[rgba(14,158,134,0.4)] hover:shadow-[0_18px_44px_-18px_rgba(16,50,70,0.18)]">
              <p className="eyebrow text-[11px]">
                UEOS Core Platform
                <LivePill />
              </p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight">
                Unified operations for Oil &amp; Gas and enterprise
              </h3>
              <p className="mt-2.5 max-w-[48ch] font-body text-sm leading-relaxed text-muted-foreground">
                Projects, crew, supply chain, and cost control consolidated into one dashboard — no
                more siloed spreadsheets between site teams and HQ.
              </p>
              <div className="mt-5 mb-6 flex flex-wrap gap-2">
                {CORE_CHIPS.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-[rgba(14,158,134,0.06)] px-2.5 py-1.5 font-body text-[11.5px] font-medium text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <Link
                href="#ueos"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-primary-dim transition-all hover:gap-3"
              >
                Explore UEOS →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-8 shadow-[0_2px_8px_rgba(16,50,70,0.04)] hover:border-[rgba(14,158,134,0.4)] hover:shadow-[0_18px_44px_-18px_rgba(16,50,70,0.18)]">
              <p className="eyebrow text-[11px]">
                UEOS Project Management
                <LivePill />
              </p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight">
                Built for construction subcontractors
              </h3>
              <p className="mt-2.5 max-w-[48ch] font-body text-sm leading-relaxed text-muted-foreground">
                Site operations end-to-end — daily site reports, work orders, progress
                certification (IPC), claim building, HSE registers, and payment tracking with
                retention schedules.
              </p>
              <div className="mt-5 mb-6 flex flex-wrap gap-2">
                {CONSTRUCTION_CHIPS.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-[rgba(14,158,134,0.06)] px-2.5 py-1.5 font-body text-[11.5px] font-medium text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <Link
                href="/contact?service=construction-pm"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-primary-dim transition-all hover:gap-3"
              >
                See the construction platform →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
