import Image from "next/image"
import Link from "next/link"
import { COMPANY_ADDRESS_LINES, COMPANY_EMAILS } from "@/lib/company-contact"

const serviceLinks = [
  "Custom Software",
  "IT Consultancy",
  "Digital Transformation",
  "Training Programs",
]

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Product — UEOS", href: "/#product" },
  { label: "Training — UEOS-APOG", href: "/#training" },
  { label: "Industries We Serve", href: "/#industries" },
  { label: "Contact Us", href: "/contact" },
]

export default function Footer() {
  return (
    <footer style={{ background: "#0a1628" }}>
      <div
        className="mx-auto max-w-[1160px] px-6 py-8"
        style={{ borderTop: "2px solid rgba(0,198,215,0.3)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.svg"
                alt="Kawie Digital Solutions"
                width={48}
                height={48}
                className="h-12 w-12 object-contain shrink-0"
              />
              <span className="font-heading font-bold text-white text-[14px] leading-tight">
                Kawie Digital Solutions Sdn Bhd
              </span>
            </div>
            <p className="font-body text-[14px] text-white/70 leading-snug">
              Your trusted digital partner — from custom software to enterprise platforms to
              hands-on workforce training.
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-[#00c6d7]">
                Authorised Training Centre
              </p>
              <p className="font-body text-[14px] text-white/70 leading-snug">
                Purple-Ayerspot@Cyber9HUB Training Space
              </p>
              <Image
                src="/ayerspot%20logo.png"
                alt="Ayerspot @ Cyber9HUB"
                width={200}
                height={72}
                className="h-auto w-[min(100%,180px)] object-contain object-left"
              />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-2.5">
              Services
            </h4>
            <ul className="flex flex-col gap-1.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="font-body text-[15px] leading-snug text-white/55 transition-colors hover:text-[#00c6d7]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-2.5">
              Company
            </h4>
            <ul className="flex flex-col gap-1.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[15px] leading-snug text-white/55 transition-colors hover:text-[#00c6d7]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-2.5">
              Connect
            </h4>
            <ul className="flex flex-col gap-1.5">
              {COMPANY_EMAILS.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="font-body text-[15px] leading-snug text-white/55 transition-colors hover:text-[#00c6d7] break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <address className="not-italic font-body text-[15px] leading-snug text-white/55">
                  {COMPANY_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ background: "#060d1a" }}>
        <div className="mx-auto max-w-[1160px] px-6 py-3">
          <p className="font-body text-[12px] text-white/35 text-center sm:text-left">
            © 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
