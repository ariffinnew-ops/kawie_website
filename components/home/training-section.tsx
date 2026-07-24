import Link from "next/link"
import { ExternalLink, Mail, MapPin } from "lucide-react"
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_ADDRESS_SINGLE_LINE,
  COMPANY_EMAIL_PRIMARY,
  COMPANY_EMAIL_INQUIRY,
} from "@/lib/company-contact"
import Reveal from "./reveal"
import TrainingShowcase, { type ShowcaseItem } from "./training-showcase"

const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_ADDRESS_SINGLE_LINE)}&hl=en&z=16&output=embed`
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS_SINGLE_LINE)}`

const BOOKING_EMAILS = [COMPANY_EMAIL_PRIMARY, COMPANY_EMAIL_INQUIRY, "admin@ayerspot.com"]

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    thumbSrc: "/poster-web.jpg",
    fullSrc: "/poster.png",
    alt: "UEOS-APOG Integrated Framework Application — Operator and Data Lodger Training Program poster",
    label: "UEOS-APOG",
    program: {
      kicker: "Flagship Programme",
      title: "UEOS-APOG Integrated Framework Application",
      body: "Operator & Data Lodger training — enterprise system integration, workflow automation, and cloud-based operations for offshore, construction, and workforce teams.",
      chips: ["Unified dashboard", "Smart automation", "Real-time tracking", "Digital SOP control"],
    },
  },
  {
    thumbSrc: "/poster-2-web.jpg",
    fullSrc: "/poster-2.jpg",
    alt: "BFIT UEOS Workshop Series — Prospects Onboarding & Bonding Program poster",
    label: "Onboarding & Bonding",
    program: {
      kicker: "BFIT Workshop Series · Free session",
      title: "Prospects Onboarding & Bonding Program",
      body: "A half-day onboarding session at our Cyber9HUB training space — live UEOS demonstrations, a prospects suitability survey, and hands-on bonding with the platform. Limited seats.",
      chips: [
        "Unified dashboard",
        "Smart automation",
        "Real-time tracking",
        "Data intelligent",
        "Enterprise hub",
        "Cross-department integration",
        "Asset & resources mgmt",
        "Mobility access",
      ],
      meta: "Program Code TP-033-03 · WhatsApp 011-2173 4434 · admin@ayerspot.com",
    },
  },
]

const TRAINING_ITEMS = [
  {
    title: "UEOS Operator Training",
    body: "Hands-on sessions for project, crew, supply chain, and cost modules.",
  },
  {
    title: "Training & Learning Center app",
    body: "Course catalog, certifications, HRDF claims, and compliance tracking — live in the ecosystem today.",
  },
  {
    title: "Workforce Upskilling",
    body: "Workshops, seminars, and coaching for confident system adoption.",
  },
]

export default function TrainingSection() {
  return (
    <section id="training" className="border-y border-border bg-[#EEF3F4] py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal>
          <p className="eyebrow">Training &amp; Skills</p>
          <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight">
            Upskill the people behind the platform.
          </h2>
        </Reveal>

        {/* Poster + synced programme detail — one poster, one section, auto-advancing together.
            KPI cards sit static in the bottom-right, unaffected by the poster rotation. */}
        <Reveal className="mt-11">
          <TrainingShowcase items={SHOWCASE_ITEMS} staticItems={TRAINING_ITEMS} />
        </Reveal>

        {/* Authorised Training Centre — dark card with embedded map */}
        <Reveal className="mt-10">
          <div className="console overflow-hidden rounded-[20px] border border-[var(--c-line-strong)] bg-[var(--c-bg2)] text-[var(--c-ink)]">
            <div className="grid lg:grid-cols-[1fr_460px]">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ayerspot-logo.png"
                    alt="Ayer'Spot — Owned Your Helms, Skill & Leisures"
                    className="h-12 w-auto"
                  />
                  <div>
                    <p className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--c-accent)]">
                      Authorised Training Centre
                    </p>
                    <h3 className="mt-1 font-heading text-[22px] font-extrabold leading-tight">
                      Purple-Ayerspot@Cyber9HUB Training Space
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-[52ch] font-body text-[14px] leading-relaxed text-[var(--c-muted)]">
                  Classroom and hands-on UEOS-APOG sessions at our partner venue — Kenwingston
                  Business Centre, Cyberjaya.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--c-line)] bg-[rgba(17,26,35,0.7)] p-5">
                    <p className="flex items-center gap-2 font-body text-[13px] font-semibold text-[var(--c-ink)]">
                      <MapPin size={15} className="text-[var(--c-accent)]" aria-hidden />
                      Location
                    </p>
                    <address className="mt-2.5 font-body text-[13px] not-italic leading-relaxed text-[var(--c-muted)]">
                      {COMPANY_ADDRESS_LINES.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </address>
                  </div>
                  <div className="rounded-xl border border-[var(--c-line)] bg-[rgba(17,26,35,0.7)] p-5">
                    <p className="flex items-center gap-2 font-body text-[13px] font-semibold text-[var(--c-ink)]">
                      <Mail size={15} className="text-[var(--c-accent)]" aria-hidden />
                      For booking &amp; inquiry
                    </p>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {BOOKING_EMAILS.map((email) => (
                        <li key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="font-body text-[13px] text-[var(--c-muted)] transition-colors hover:text-[var(--c-accent)]"
                          >
                            {email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3.5">
                  <Link
                    href="/contact?service=training"
                    className="btn-hover inline-flex items-center gap-2 rounded-lg bg-[var(--c-accent)] px-5 py-2.5 font-body text-[13.5px] font-semibold text-[var(--c-accent-ink)] hover:shadow-[0_8px_24px_-8px_rgba(45,212,191,0.5)]"
                  >
                    Enquire About Training →
                  </Link>
                  <a
                    href={MAP_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hover inline-flex items-center gap-2 rounded-lg border border-[var(--c-line-strong)] px-5 py-2.5 font-body text-[13.5px] font-semibold text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                  >
                    Open in Maps <ExternalLink size={14} aria-hidden />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[280px] border-t border-[var(--c-line)] lg:min-h-full lg:border-l lg:border-t-0">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="Map — Kenwingston Business Centre, Cyberjaya"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
