import Image from "next/image"
import Link from "next/link"
import { COMPANY_ADDRESS_LINES, COMPANY_EMAILS } from "@/lib/company-contact"
import { TOTAL_APP_COUNT } from "@/lib/apps-data"
import { APP_VERSION } from "@/lib/version"

const platformLinks = [
  { label: "UEOS Core Platform", href: "/#ueos" },
  { label: "Construction PM", href: "/#flagship" },
  { label: `Ecosystem — ${TOTAL_APP_COUNT} apps`, href: "/#ecosystem" },
]

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Training", href: "/#training" },
  { label: "Partner Programme", href: "/contact?service=partner-pricing" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--c-bg2)] pb-10 pt-14 text-[13px] text-[var(--c-muted)]">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/kawie-logo.png"
                alt="Kawie Digital Solutions logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-md object-contain"
              />
              <span className="font-heading text-[16px] font-bold lowercase text-[var(--c-ink)]">
                kawie <span className="text-[var(--c-accent)]">digital</span>
              </span>
            </Link>
            <p className="mt-3.5 max-w-[34ch] font-body text-[12.5px] leading-relaxed text-[var(--c-dim)]">
              Cyberjaya-based technology partner for custom software, the UEOS enterprise
              platform, and professional training.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ayerspot-logo.png"
                alt="Ayer'Spot"
                className="h-9 w-auto"
              />
              <span className="font-body text-[11px] leading-snug text-[var(--c-dim)]">
                Training partner —<br />
                Purple-Ayerspot@Cyber9HUB
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--c-dim)]">
              Platform
            </h4>
            <ul className="flex flex-col gap-2">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-[var(--c-accent)]">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://ueos.kawie-digital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--c-accent)]"
                >
                  ueos.kawie-digital.com ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--c-dim)]">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-[var(--c-accent)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--c-dim)]">
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              {COMPANY_EMAILS.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="transition-colors hover:text-[var(--c-accent)]"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="leading-relaxed">
                {COMPANY_ADDRESS_LINES.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-[var(--c-line)] pt-5 font-body text-[11.5px] text-[var(--c-dim)]">
          <span>
            © 2026 Kawie Digital Solutions Sdn Bhd ·{" "}
            <span className="text-[11px]">{APP_VERSION}</span>
          </span>
          <span className="text-right">
            Working towards ISO/IEC 27001 &amp; 27701 · Built in Cyberjaya
          </span>
        </div>
      </div>
    </footer>
  )
}
