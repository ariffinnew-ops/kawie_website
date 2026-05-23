const reasons = [
  {
    icon: "🤝",
    title: "Experienced Team",
    description:
      "Our team combines enterprise software development with real operations experience — we understand your business, not just your tech stack.",
  },
  {
    icon: "📞",
    title: "After-Sales Support",
    description:
      "We stay with you after launch. Dedicated support, system updates, and continuous improvement — because your success is our success.",
  },
  {
    icon: "📣",
    title: "Marketing & Growth Arm",
    description:
      "Beyond the tech, we help you tell your story. Our marketing arm supports go-to-market strategy, digital presence, and client acquisition.",
  },
  {
    icon: "🇲🇾",
    title: "Malaysian-First",
    description:
      "We understand the Malaysian business landscape — PDPA compliance, SSM requirements, and local industry nuances built into everything we do.",
  },
]

export default function WhyKawieSection() {
  return (
    <section className="py-24" style={{ background: "#f8faff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-[#00c6d7]">
            WHY CHOOSE US
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-heading font-bold text-[#0f2557] mb-12"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "600px" }}
        >
          We don&apos;t just deliver software.{" "}
          <span className="text-[#00c6d7]">We deliver outcomes.</span>
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-hover bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[rgba(15,37,87,0.08)] shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "#eef2ff" }}
                aria-hidden="true"
              >
                {reason.icon}
              </div>
              <h3
                className="font-heading font-bold text-[#0f2557]"
                style={{ fontSize: "17px" }}
              >
                {reason.title}
              </h3>
              <p className="font-body text-[15px] text-[#4a5578] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
