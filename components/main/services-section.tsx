import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Code2, GraduationCap, RefreshCcw } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  heading: string
  description: string
  features: string[]
  topBorderColor: string
  contactService: string
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    heading: "We build what you need.",
    description:
      "From web applications to enterprise platforms — we design, develop, and maintain custom software tailored to your business workflows. No off-the-shelf compromise.",
    features: [
      "Custom web & mobile applications",
      "Database management systems (DBMS)",
      "Analytics portals & digital dashboards",
      "Website hosting & maintenance",
    ],
    topBorderColor: "#0f2557",
    contactService: "Custom Software Development",
  },
  {
    icon: RefreshCcw,
    title: "IT Consultancy & Digital Transformation",
    heading: "We guide your digital journey.",
    description:
      "Not sure where to start? We assess your current operations, identify the gaps, and build a practical roadmap to digitalise your business — step by step.",
    features: [
      "Digital transformation strategy",
      "IT infrastructure management",
      "Integrated digital solutions",
      "Process automation & optimisation",
    ],
    topBorderColor: "#00c6d7",
    contactService: "IT Consultancy & Digital Transformation",
  },
  {
    icon: GraduationCap,
    title: "Training & Skills Development",
    heading: "We upskill your people.",
    description:
      "Technology is only as good as the people using it. We run hands-on training programs, workshops, and coaching sessions to build real capability in your team.",
    features: [
      "Enterprise system operator training",
      "Workshops, seminars & coaching",
      "Educational consultancy",
      "In collaboration with Cyber9HUB @ Ayerspot",
    ],
    topBorderColor: "#00c6d7",
    contactService: "Training & Skills Development",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24" style={{ background: "#f8faff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="section-eyebrow">
            WHAT WE DO
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Three pillars. One partner.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-12 max-w-[560px]">
          From building your system to training your team — we cover the full digital
          transformation journey.
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
            <div
              key={service.title}
              className="card-hover bg-white rounded-2xl p-9 flex flex-col gap-5"
              style={{
                borderTop: `3px solid ${service.topBorderColor}`,
                boxShadow: "0 2px 16px rgba(15,37,87,0.07)",
              }}
            >
              <div
                className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(145deg, #eef2ff 0%, #f0fafe 100%)",
                  border: "1px solid rgba(15,37,87,0.08)",
                  boxShadow: "0 4px 14px rgba(15,37,87,0.06)",
                }}
                aria-hidden
              >
                <Icon size={28} strokeWidth={1.75} className="text-[#0f2557]" />
              </div>

              {/* Title & Heading */}
              <div>
                <p className="font-body font-medium text-[#8892a8] text-[12px] uppercase tracking-[0.08em] mb-1">
                  {service.title}
                </p>
                <h3 className="font-heading font-bold text-[#0f2557] text-[20px] leading-snug">
                  {service.heading}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-[#4a5578] text-base leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body text-[15px] text-[#4a5578] leading-loose"
                  >
                    <span className="text-[#00c6d7] font-bold mt-0.5 shrink-0">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/home/contact?service=${encodeURIComponent(service.contactService)}`}
                className="font-body text-[14px] font-medium text-[#00c6d7] hover:text-[#0f2557] transition-colors mt-2"
              >
                Learn more →
              </Link>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
