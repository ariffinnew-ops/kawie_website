import Link from "next/link"
import { CheckCircle2, Cloud, LayoutDashboard, Shield } from "lucide-react"

const highlights = [
  {
    icon: LayoutDashboard,
    title: "Unified operations",
    text: "Projects, crew, supply chain, and costs in one dashboard — no more siloed spreadsheets.",
  },
  {
    icon: Cloud,
    title: "Cloud-native",
    text: "Secure, always-on access built to scale from site teams to HQ.",
  },
  {
    icon: Shield,
    title: "Built for heavy industry",
    text: "Engineered for Oil & Gas workflows, adaptable across construction, logistics, and enterprise.",
  },
]

const liveModules = [
  { code: "PMS", label: "Project Management" },
  { code: "CMS", label: "Crewing Management" },
  { code: "SCM", label: "Supply Chain" },
  { code: "PCM", label: "Project Cost Management" },
]

export default function UeosProductHighlights() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <p className="font-body text-[14px] text-[#4a5578] leading-relaxed mb-5">
        A fully integrated, cloud-native enterprise platform — live today with four core modules.
      </p>

      <ul className="flex flex-col gap-3.5 mb-5">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.title} className="flex gap-3">
              <span
                className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg text-[#00c6d7]"
                style={{ background: "rgba(0,198,215,0.12)" }}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <p className="font-heading font-semibold text-[#0f2557] text-[14px] mb-0.5">
                  {item.title}
                </p>
                <p className="font-body text-[13px] text-[#4a5578] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mb-5">
        <p className="font-heading font-semibold text-[#0f2557] text-[13px] mb-2.5">
          Live modules
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {liveModules.map((mod) => (
            <div
              key={mod.code}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5"
              style={{
                background: "#f8faff",
                border: "1px solid rgba(15,37,87,0.08)",
              }}
            >
              <CheckCircle2 size={16} className="shrink-0 text-[#10b981]" aria-hidden />
              <div className="min-w-0">
                <span className="font-heading font-bold text-[#00c6d7] text-[11px] tracking-wide">
                  [{mod.code}]
                </span>
                <p className="font-body text-[12px] text-[#4a5578] leading-tight">
                  {mod.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        <Link
          href="https://ueos.kawie-digital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover inline-flex items-center justify-center font-body font-medium text-[14px] px-5 py-2.5 rounded-lg"
          style={{ background: "#0f2557", color: "#ffffff" }}
        >
          Explore UEOS →
        </Link>
        <Link
          href="/contact?service=UEOS%20Platform%20Demo"
          className="btn-hover inline-flex items-center justify-center font-body font-medium text-[14px] px-5 py-2.5 rounded-lg text-[#0f2557]"
          style={{ border: "1px solid rgba(15,37,87,0.2)" }}
        >
          Book a Demo
        </Link>
      </div>
    </div>
  )
}
