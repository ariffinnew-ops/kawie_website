import Image from "next/image"
import Link from "next/link"
import TrainingPoster from "@/components/main/training-poster"
import { GraduationCap, ExternalLink, Mail, MapPin, Users, Wrench } from "lucide-react"
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_ADDRESS_SINGLE_LINE,
  COMPANY_EMAIL_PRIMARY,
  COMPANY_EMAIL_INQUIRY,
} from "@/lib/company-contact"

const TRAINING_ADDRESS_QUERY = COMPANY_ADDRESS_SINGLE_LINE

const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(TRAINING_ADDRESS_QUERY)}&hl=en&z=16&output=embed`

const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(TRAINING_ADDRESS_QUERY)}`

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
      "Operator & Data Lodger training on the UEOS-APOG Integrated Framework — Application, Project & Operation Gapping, delivered with UTM.",
  },
  {
    icon: Users,
    title: "Workforce Upskilling",
    description:
      "Workshops, seminars, and coaching to help teams adopt new systems with confidence.",
  },
]

const objectives = [
  "Enterprise system integration",
  "Project & operations optimisation",
  "Workflow automation skills",
  "Cloud-based scalability",
]

const industries = [
  "Offshore & shipping",
  "Construction & services",
  "Workforce operations",
  "SMEs & beyond",
]

const keyFeatures = [
  "Unified dashboard",
  "Smart automation",
  "Real-time tracking",
  "Cross-department integration",
  "Digital & analytics",
  "Digital SOP control",
]

export default function TrainingSection() {
  return (
    <section id="training" className="py-24" style={{ background: "#f8faff" }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-3">
          <span className="section-eyebrow">
            TRAINING &amp; SKILLS
          </span>
        </div>

        <h2
          className="font-heading font-bold text-[#0f2557] mb-3"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Upskill the people behind the platform.
        </h2>

        <p className="font-body text-lg text-[#4a5578] leading-relaxed mb-4 max-w-[720px]">
          Technology only works when your team knows how to use it. We run practical training
          programmes in collaboration with Purple-Ayerspot@Cyber9HUB Training Space — including our
          flagship{" "}
          <strong className="font-medium text-[#0f2557]">UEOS-APOG</strong> integrated framework
          application.
        </p>

        <p className="font-body text-[15px] text-[#4a5578] leading-relaxed mb-10 max-w-[720px]">
          <strong className="font-medium text-[#0f2557]">UEOS</strong> — Unified Enterprise
          Operating System &nbsp;|&nbsp;{" "}
          <strong className="font-medium text-[#0f2557]">APOG</strong> — Application, Project
          &amp; Operation Gapping
        </p>

        {/* UEOS-APOG featured block with poster */}
        <div
          className="rounded-[20px] overflow-hidden mb-10 border border-[rgba(15,37,87,0.08)] shadow-sm"
          style={{ background: "#ffffff" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <TrainingPoster />

            <div className="p-8 md:p-10 flex flex-col gap-6">
              <div>
                <p className="section-eyebrow mb-2">
                  FLAGSHIP PROGRAMME
                </p>
                <h3 className="font-heading font-bold text-[#0f2557] text-[22px] md:text-[26px] leading-snug mb-2">
                  UEOS-APOG Integrated Framework Application
                </h3>
                <p className="font-body text-[15px] text-[#4a5578] leading-relaxed">
                  Operator &amp; Data Lodger Training Program — empowering your operational
                  transformation with a comprehensive enterprise platform for unified systems,
                  workflows, and data management.
                </p>
              </div>

              <div>
                <p className="font-heading font-semibold text-[#0f2557] text-[14px] mb-2">
                  Program objectives
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {objectives.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-[14px] text-[#4a5578]"
                    >
                      <span className="text-[#00c6d7] font-bold shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-heading font-semibold text-[#0f2557] text-[14px] mb-2">
                  Industry applications
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industries.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-[14px] text-[#4a5578]"
                    >
                      <span className="text-[#00c6d7] font-bold shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-heading font-semibold text-[#0f2557] text-[14px] mb-2">
                  Key features
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {keyFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-[14px] text-[#4a5578]"
                    >
                      <span className="text-[#00c6d7] font-bold shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-body text-[13px] text-[#8892a8]">
                In collaboration with Universiti Teknologi Malaysia (UTM).
              </p>
            </div>
          </div>
        </div>

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
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #0f2557 0%, #122d5c 50%, #0d3d45 100%)",
            border: "1px solid rgba(0,198,215,0.18)",
            boxShadow: "0 12px 40px rgba(15,37,87,0.12)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)]">
            <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Image
                  src="/ayerspot%20logo.png"
                  alt="Ayerspot @ Cyber9HUB"
                  width={160}
                  height={56}
                  className="h-11 md:h-12 w-auto object-contain object-left"
                />
                <div className="hidden sm:block h-10 w-px bg-white/15" aria-hidden />
                <div>
                  <p className="section-eyebrow mb-1">
                    Authorised training centre
                  </p>
                  <h3 className="font-heading font-bold text-white text-[20px] md:text-[22px] leading-snug">
                    Purple-Ayerspot@Cyber9HUB Training Space
                  </h3>
                </div>
              </div>

              <p className="font-body text-[15px] text-white/75 leading-relaxed max-w-[560px]">
                Classroom and hands-on UEOS-APOG sessions at our partner venue — Kenwingston
                Business Centre, Cyberjaya.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-[#00c6d7] shrink-0" aria-hidden />
                    <p className="font-heading font-semibold text-white text-[14px]">Location</p>
                  </div>
                  <address className="not-italic font-body text-[14px] text-white/85 leading-relaxed">
                    {COMPANY_ADDRESS_LINES.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <p className="font-heading font-semibold text-white text-[14px] mb-3">
                    For booking &amp; inquiry
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <a
                        href={`mailto:${COMPANY_EMAIL_PRIMARY}`}
                        className="inline-flex items-center gap-2 font-body text-[14px] text-white/90 hover:text-[#00c6d7] transition-colors break-all"
                      >
                        <Mail size={15} className="shrink-0 text-[#00c6d7]" aria-hidden />
                        {COMPANY_EMAIL_PRIMARY}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${COMPANY_EMAIL_INQUIRY}`}
                        className="inline-flex items-center gap-2 font-body text-[14px] text-white/90 hover:text-[#00c6d7] transition-colors break-all"
                      >
                        <Mail size={15} className="shrink-0 text-[#00c6d7]" aria-hidden />
                        {COMPANY_EMAIL_INQUIRY}
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:admin@ayerspot.com"
                        className="inline-flex items-center gap-2 font-body text-[14px] text-white/90 hover:text-[#00c6d7] transition-colors break-all"
                      >
                        <Mail size={15} className="shrink-0 text-[#00c6d7]" aria-hidden />
                        admin@ayerspot.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contact?service=Training+%26+Skills+Development"
                  className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] px-7 py-3 rounded-lg"
                  style={{ background: "#00c6d7", color: "#0f1f3d" }}
                >
                  Enquire About Training →
                </Link>
                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover inline-flex items-center justify-center gap-2 font-body font-medium text-[15px] px-5 py-3 rounded-lg text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  Open in Maps
                  <ExternalLink size={16} aria-hidden />
                </a>
              </div>
            </div>

            <div
              className="relative min-h-[260px] lg:min-h-full lg:min-h-[320px] border-t lg:border-t-0 lg:border-l border-white/10"
            >
              <iframe
                src={MAP_EMBED_SRC}
                title="Map — Kenwingston Business Centre, Cyberjaya"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
