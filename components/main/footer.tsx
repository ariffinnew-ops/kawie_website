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
  { label: "About Us", href: "/home#about" },
  { label: "Our Product — UEOS", href: "/home#product" },
  { label: "Training — UEOS-APOG", href: "/home#training" },
  { label: "Industries We Serve", href: "/home#industries" },
  { label: "Contact Us", href: "/home/contact" },
]

export default function Footer() {
  return (
    <footer style={{ background: "#0a1628" }}>
      <div
        className="mx-auto max-w-[1160px] px-6 py-14"
        style={{ borderTop: "2px solid rgba(0,198,215,0.3)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/kawie-logo.jpg"
                alt="Kawie Digital Solutions"
                width={36}
                height={36}
                className="rounded-md object-contain"
              />
              <span className="font-heading font-bold text-white text-[14px] leading-tight">
                Kawie Digital Solutions Sdn Bhd
              </span>
            </div>
            <p className="font-body text-[14px] text-white/70 leading-relaxed">
              Your trusted digital partner — from custom software to enterprise platforms to
              hands-on workforce training.
            </p>
            <p className="font-body font-medium text-[12px] text-[#00c6d7]">
              Authorised Training Centre — with Cyber9HUB @ Ayerspot
            </p>
            <p className="font-body text-[12px] text-white/35">
              SSM: 202601019532 (1681629-X)
            </p>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/home#services"
                    className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[15px] font-bold uppercase tracking-[0.12em] text-white mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_EMAILS.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7] break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <address className="not-italic font-body text-[15px] leading-[1.8] text-white/55">
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
        <div className="mx-auto max-w-[1160px] px-6 py-4">
          <p className="font-body text-[12px] text-white/35 text-center sm:text-left">
            © 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
