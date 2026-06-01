import UeosVideoEmbed from "@/components/main/ueos-video-embed"
import UeosProductHighlights from "@/components/main/ueos-product-highlights"

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
        <div className="mb-3">
          <span className="section-eyebrow">
            OUR FLAGSHIP PRODUCT
          </span>
        </div>

        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Introducing UEOS.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-8 max-w-[640px]">
          Born from the demands of Oil &amp; Gas operations — UEOS is our Unified Enterprise
          Operating System. One platform that consolidates project management, crew operations,
          supply chain, and cost control.
        </p>

        {/* Unified UEOS showcase */}
        <div
          className="rounded-[20px] overflow-hidden"
          style={{
            border: "1px solid rgba(15,37,87,0.14)",
            boxShadow: "0 2px 0 rgba(0,198,215,0.35), 0 12px 40px rgba(15,37,87,0.08)",
          }}
        >
          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-6 py-5 md:px-8 md:py-6"
            style={{ background: "#0f2557" }}
          >
            <div>
              <h3
                className="font-heading font-extrabold text-white mb-1"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                UEOS
              </h3>
              <p className="font-body font-medium text-[#00c6d7] text-[15px]">
                Unified Enterprise Operating System
              </p>
            </div>
            <span
              className="inline-flex items-center gap-2 font-body font-medium text-[13px] px-3 py-1.5 rounded-full w-fit shrink-0"
              style={{
                background: "rgba(16,185,129,0.15)",
                color: "#10b981",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981" }} />
              Now Live — Version 1.0
            </span>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] items-stretch"
            style={{ background: "#ffffff" }}
          >
            <div className="p-4 lg:p-5 border-b lg:border-b-0 lg:border-r border-[rgba(15,37,87,0.08)]">
              <UeosVideoEmbed />
            </div>
            <div className="p-4 lg:p-5 lg:pl-6">
              <UeosProductHighlights />
            </div>
          </div>

          <div
            className="px-6 py-4 md:px-8"
            style={{
              background: "rgba(0,198,215,0.06)",
              borderTop: "1px solid rgba(0,198,215,0.12)",
            }}
          >
            <p className="section-eyebrow mb-1">
              PHASE 2 · COMING SOON
            </p>
            <p
              className="font-body font-light text-[#4a5578]"
              style={{ fontSize: "13px", lineHeight: 1.6 }}
            >
              {comingSoon.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
