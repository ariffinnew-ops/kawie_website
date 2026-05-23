import Link from "next/link"

const modules = [
  { code: "PMS", label: "Project Management", status: "LIVE" },
  { code: "CMS", label: "Crewing Management", status: "LIVE" },
  { code: "SCM", label: "Supply Chain", status: "LIVE" },
  { code: "PCM", label: "Project Cost Management", status: "LIVE" },
]

const comingSoon = [
  "Asset Management",
  "HR & Workforce",
  "Client Portal",
  "Data Analytics",
  "Financial Management",
  "HSE",
  "and more",
]

export default function ProductSection() {
  return (
    <section
      id="product"
      className="py-24"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-[#00c6d7]">
            OUR FLAGSHIP PRODUCT
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Introducing UEOS.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-10 max-w-[640px]">
          Born from the demands of Oil &amp; Gas operations — UEOS is our Unified Enterprise
          Operating System. One platform that consolidates project management, crew operations,
          supply chain, and cost control.
        </p>

        {/* Large product card */}
        <div
          className="rounded-[20px] p-8 md:p-12"
          style={{ background: "#0f2557" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <div>
                <h3
                  className="font-heading font-extrabold text-white mb-1"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  UEOS
                </h3>
                <p
                  className="font-body font-medium"
                  style={{ fontSize: "16px", color: "#00c6d7" }}
                >
                  Unified Enterprise Operating System
                </p>
              </div>

              {/* Status badge */}
              <span
                className="inline-flex items-center gap-2 font-body font-medium text-[13px] px-3 py-1.5 rounded-full w-fit"
                style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981" }}
                />
                Now Live — Version 1.0
              </span>

              <p
                className="font-body font-light leading-relaxed"
                style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}
              >
                A fully integrated, cloud-native enterprise platform engineered for Oil &amp; Gas
                and built to scale across every industry.
              </p>

              <Link
                href="https://v0-kawie-digital-solution-landing-page-8o3eq09a2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] px-7 py-3 rounded-lg w-fit"
                style={{ background: "#00c6d7", color: "#0f1f3d" }}
              >
                Explore UEOS →
              </Link>
            </div>

            {/* Right — module grid */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {modules.map((mod) => (
                  <div
                    key={mod.code}
                    className="rounded-xl p-4 flex flex-col gap-2"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-heading font-bold text-[#00c6d7]"
                        style={{ fontSize: "14px", letterSpacing: "0.04em" }}
                      >
                        [{mod.code}]
                      </span>
                      <span
                        className="font-body font-medium text-[11px] px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(16,185,129,0.15)", color: "#10b981" }}
                      >
                        {mod.status}
                      </span>
                    </div>
                    <p className="font-body text-white text-[13px] font-medium">
                      {mod.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phase 2 coming soon */}
              <div
                className="rounded-xl px-4 py-3"
                style={{ background: "rgba(0,198,215,0.08)", border: "1px solid rgba(0,198,215,0.15)" }}
              >
                <p
                  className="font-body font-medium mb-1"
                  style={{ fontSize: "11px", color: "#00c6d7", letterSpacing: "0.08em" }}
                >
                  PHASE 2 · COMING SOON
                </p>
                <p
                  className="font-body font-light"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.60)", lineHeight: 1.6 }}
                >
                  {comingSoon.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
