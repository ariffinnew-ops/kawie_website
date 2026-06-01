import { GraduationCap, MapPin } from "lucide-react"

const stats = [
  { number: "20+", label: "Years combined experience in O&G & enterprise software" },
  { number: "4", label: "Live UEOS platform modules" },
  { number: "10+", label: "Features on the UEOS roadmap" },
  { number: "3", label: "Integrated service pillars" },
]

const badges = [
  { icon: MapPin, text: "Cyberjaya, Selangor" },
  { icon: GraduationCap, text: "Training Centre — with Cyber9HUB @ Ayerspot" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Eyebrow */}
        <div className="mb-3">
          <span
            className="section-eyebrow block"
          >
            WHO WE ARE
          </span>
        </div>

        {/* H2 */}
        <h2
          className="font-heading font-bold text-[#0f2557] mb-12"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Built by practitioners.
          <br />
          For operators.
        </h2>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <p className="font-body font-light text-[#2d3748] mb-4 leading-relaxed text-base">
              Kawie Digital Solutions Sdn Bhd was founded with one mission — to close the gap
              between how businesses operate and how technology can help them operate better.
            </p>
            <p className="font-body font-light text-[#2d3748] mb-8 leading-relaxed text-base">
              We are a Cyberjaya-based technology company providing custom software development,
              IT consultancy, and professional training programs. Our team brings together
              enterprise software expertise, operations experience, and a deep understanding of
              Malaysian industry needs.
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-3">
              {badges.map((badge) => {
                const Icon = badge.icon
                return (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-3 font-body font-medium text-white text-[13px] px-4 py-2.5 rounded-full w-fit"
                  style={{ background: "#0f2557" }}
                >
                  <Icon size={18} strokeWidth={2} className="shrink-0 text-[#00c6d7]" aria-hidden />
                  {badge.text}
                </span>
              )})}
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.number}
                className="card-hover flex flex-col justify-center p-6 rounded-xl"
                style={{
                  background: "#f0f4ff",
                  border: "1px solid rgba(15,37,87,0.08)",
                }}
              >
                <span className="font-heading text-5xl font-bold text-[#0f2557] mb-1">
                  {stat.number}
                </span>
                <span
                  className="font-body font-normal text-[#4a5578]"
                  style={{ fontSize: "14px", lineHeight: 1.5 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
