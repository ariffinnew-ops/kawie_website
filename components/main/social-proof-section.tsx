const testimonials = [
  {
    quote:
      "Kawie understood our operational workflows from day one. The platform replaced scattered spreadsheets with one source of truth.",
    role: "Operations Lead",
    industry: "Oil & Gas services",
  },
  {
    quote:
      "Beyond the software, the training sessions helped our team adopt the system quickly. Support continued well after go-live.",
    role: "HR & Training Manager",
    industry: "Construction & engineering",
  },
  {
    quote:
      "Practical consultancy — no buzzwords. They mapped our gaps, phased the rollout, and stayed involved through each milestone.",
    role: "General Manager",
    industry: "Enterprise & corporate",
  },
]

const industryBadges = [
  "Oil & Gas",
  "Construction",
  "Enterprise IT",
  "Warehousing",
  "Training & LMS",
  "SMEs & Associations",
]

export default function SocialProofSection() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-3">
          <span className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-[#00c6d7]">
            TRUSTED BY TEAMS
          </span>
        </div>

        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Built for operators. Proven in the field.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-10 max-w-[560px]">
          From heavy industry to growing SMEs — we partner with teams that need systems that work
          on the ground, not just on paper.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {industryBadges.map((badge) => (
            <span
              key={badge}
              className="font-body text-[13px] font-medium text-[#0f2557] px-4 py-2 rounded-full"
              style={{ background: "#f0f4ff", border: "1px solid rgba(15,37,87,0.08)" }}
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <blockquote
              key={item.role}
              className="card-hover bg-[#f8faff] rounded-2xl p-6 flex flex-col gap-4 border border-[rgba(15,37,87,0.08)]"
            >
              <p className="font-body text-[15px] text-[#2d3748] leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-auto">
                <p className="font-heading font-semibold text-[#0f2557] text-[14px]">
                  {item.role}
                </p>
                <p className="font-body text-[13px] text-[#8892a8]">{item.industry}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
