const industries = [
  {
    icon: "🛢️",
    title: "Oil & Gas",
    description:
      "PETRONAS-ready. Offshore compliance, crew management, and procurement automation.",
  },
  {
    icon: "🏗️",
    title: "Construction & Engineering",
    description:
      "Project cost tracking, workforce deployment, materials procurement — structured and real-time.",
  },
  {
    icon: "🏢",
    title: "Enterprise & Corporate",
    description:
      "Digital transformation, system integration, and custom enterprise applications.",
  },
  {
    icon: "📦",
    title: "Inventory & Warehousing",
    description:
      "Real-time stock management, reorder automation, and supply chain visibility.",
  },
  {
    icon: "🎓",
    title: "Training & Education",
    description:
      "LMS platforms, skills development programs, and coaching management systems.",
  },
  {
    icon: "🏪",
    title: "SMEs & Associations",
    description:
      "Affordable, cloud-native, scalable — enterprise-grade discipline without enterprise-grade cost.",
  },
]

export default function IndustriesSection() {
  return (
    <section id="training" className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-[#00c6d7]">
            WHO WE SERVE
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Every industry. Every scale.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-12 max-w-[540px]">
          Our solutions are built to adapt — from heavy industry to retail, from enterprise to
          SME.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="card-hover bg-white rounded-2xl p-6 flex flex-col gap-3"
              style={{
                border: "1px solid rgba(15,37,87,0.08)",
                boxShadow: "0 2px 12px rgba(15,37,87,0.05)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: "#f0fafe" }}
                aria-hidden="true"
              >
                {industry.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#0f2557]">
                {industry.title}
              </h3>
              <p className="font-body text-[14px] text-[#4a5578] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
