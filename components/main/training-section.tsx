import Link from "next/link"
import { GraduationCap, MapPin, Users, Wrench } from "lucide-react"

const programs = [
  {
    icon: Wrench,
    title: "UEOS Operator Training",
    description:
      "Hands-on sessions for project, crew, supply chain, and cost modules — built for real operational workflows.",
  },
  {
    icon: GraduationCap,
    title: "UEOS-APOG Programme",
    description:
      "Structured training aligned with Oil & Gas operations, delivered at our authorised training centre.",
  },
  {
    icon: Users,
    title: "Workforce Upskilling",
    description:
      "Workshops, seminars, and coaching to help teams adopt new systems with confidence.",
  },
]

export default function TrainingSection() {
  return (
    <section id="training" className="py-24" style={{ background: "#f8faff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-3">
          <span className="font-body text-[12px] font-medium tracking-[0.12em] uppercase text-[#00c6d7]">
            TRAINING &amp; SKILLS
          </span>
        </div>

        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Upskill the people behind the platform.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-10 max-w-[640px]">
          Technology only works when your team knows how to use it. We run practical training
          programmes — including UEOS-APOG — in collaboration with Cyber9HUB @ Ayerspot,
          Cyberjaya.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className="card-hover bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[rgba(15,37,87,0.08)] shadow-sm"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[#0f2557]"
                  style={{ background: "#eef2ff" }}
                >
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </div>
                <h3 className="font-heading font-bold text-[#0f2557] text-[17px]">
                  {program.title}
                </h3>
                <p className="font-body text-[15px] text-[#4a5578] leading-relaxed">
                  {program.description}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ background: "#0f2557" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-[#00c6d7]"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <MapPin size={20} strokeWidth={2} aria-hidden />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-[17px] mb-1">
                Authorised Training Centre
              </p>
              <p className="font-body text-[15px] text-white/70 leading-relaxed">
                Cyber9HUB @ Ayerspot, Cyberjaya — classroom and hands-on sessions available.
              </p>
            </div>
          </div>
          <Link
            href="/home/contact?service=Training+%26+Skills+Development"
            className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] px-7 py-3 rounded-lg shrink-0"
            style={{ background: "#00c6d7", color: "#0f1f3d" }}
          >
            Enquire About Training →
          </Link>
        </div>
      </div>
    </section>
  )
}
