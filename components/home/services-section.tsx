import Reveal from "./reveal"

const PILLARS = [
  {
    num: "PILLAR 01",
    title: "Custom Software Development",
    body: "We design, develop, and maintain software tailored to your workflows. No off-the-shelf compromise.",
    items: [
      "Custom web & mobile applications",
      "Database management systems",
      "Analytics portals & dashboards",
      "Hosting & maintenance",
    ],
  },
  {
    num: "PILLAR 02",
    title: "IT Consultancy & Digital Transformation",
    body: "We assess your operations, identify the gaps, and build a practical roadmap — step by step.",
    items: [
      "Digital transformation strategy",
      "IT infrastructure management",
      "Integrated digital solutions",
      "Process automation",
    ],
  },
  {
    num: "PILLAR 03",
    title: "Training & Skills Development",
    body: "Technology is only as good as the people using it. We build real capability in your team.",
    items: [
      "Enterprise system operator training",
      "Workshops, seminars & coaching",
      "Educational consultancy",
      "Purple-Ayerspot@Cyber9HUB venue",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="pb-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal>
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight">
            Three pillars. One partner.
          </h2>
          <p className="mt-4 max-w-[62ch] font-body text-[15.5px] leading-relaxed text-muted-foreground">
            From building your system to training your team — the full digital transformation
            journey, covered.
          </p>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div className="card-hover h-full rounded-[14px] border border-border bg-card px-6 py-7 shadow-[0_2px_8px_rgba(16,50,70,0.04)]">
                <p className="font-body text-[11px] font-semibold tracking-[0.12em] text-[var(--muted-2)]">
                  {p.num}
                </p>
                <h3 className="mt-3.5 font-heading text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 mb-4 font-body text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 font-body text-[13px] text-muted-foreground"
                    >
                      <span className="shrink-0 text-primary" aria-hidden>
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
