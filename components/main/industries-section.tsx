import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Fuel,
  GraduationCap,
  HardHat,
  Store,
  Warehouse,
} from "lucide-react"

const industries: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Built for offshore compliance workflows, crew management, and procurement automation.",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description:
      "Project cost tracking, workforce deployment, materials procurement — structured and real-time.",
  },
  {
    icon: Building2,
    title: "Enterprise & Corporate",
    description:
      "Digital transformation, system integration, and custom enterprise applications.",
  },
  {
    icon: Warehouse,
    title: "Inventory & Warehousing",
    description:
      "Real-time stock management, reorder automation, and supply chain visibility.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "LMS platforms, skills development programs, and coaching management systems.",
  },
  {
    icon: Store,
    title: "SMEs & Associations",
    description:
      "Affordable, cloud-native, scalable — enterprise-grade discipline without enterprise-grade cost.",
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-3">
          <span className="section-eyebrow">WHO WE SERVE</span>
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.title}
                className="card-hover bg-white rounded-2xl p-6 md:p-7 flex flex-col gap-4"
                style={{
                  border: "1px solid rgba(15,37,87,0.08)",
                  boxShadow: "0 2px 12px rgba(15,37,87,0.05)",
                }}
              >
                <div
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl"
                  style={{
                    background: "linear-gradient(145deg, #f0fafe 0%, #eef2ff 100%)",
                    border: "1px solid rgba(15,37,87,0.08)",
                    boxShadow: "0 4px 14px rgba(15,37,87,0.06)",
                  }}
                  aria-hidden
                >
                  <Icon size={28} strokeWidth={1.75} className="text-[#0f2557]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0f2557]">
                  {industry.title}
                </h3>
                <p className="font-body text-[14px] text-[#4a5578] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
