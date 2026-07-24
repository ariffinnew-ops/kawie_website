import Reveal from "./reveal"

const INDUSTRIES: { name: string; apps: string }[] = [
  { name: "Oil & Gas", apps: "UEOS Core · Crewing · HSE · Supply Chain" },
  { name: "Construction", apps: "UEOS Project Mgmt · Site Ops · Tender & Costing" },
  { name: "Enterprise IT", apps: "Digital Documentation · Asset Mgmt · Client Portal" },
  { name: "Warehousing & Logistics", apps: "Supply Chain · Asset & Equipment · Facilities" },
  { name: "Training & Education", apps: "Training & Learning Center · Talent Suite" },
  { name: "SMEs & Associations", apps: "SME Starter · Back-Office Suite · Invoicing" },
  { name: "Professional Services", apps: "Consulting & PSA · Commission & Sales" },
]

export default function IndustriesSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal>
          <p className="eyebrow">Industries</p>
          <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight">
            Built by practitioners. For operators.
          </h2>
          <p className="mt-4 max-w-[62ch] font-body text-[15.5px] leading-relaxed text-muted-foreground">
            20+ years of combined Oil &amp; Gas and enterprise software experience — with PDPA
            compliance and regulatory nuance built into everything we ship. Hover an industry to
            see which apps serve it.
          </p>
        </Reveal>
        <Reveal className="mt-9 flex flex-wrap gap-3">
          {INDUSTRIES.map((ind) => (
            <span
              key={ind.name}
              className="group relative cursor-default rounded-full border border-[var(--border)] bg-card px-5 py-3 font-body text-[13.5px] text-muted-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
            >
              {ind.name}
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-max max-w-[260px] -translate-x-1/2 rounded-lg border border-border bg-foreground px-3.5 py-2 text-center font-body text-[12px] leading-snug text-background opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
              >
                {ind.apps}
              </span>
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
