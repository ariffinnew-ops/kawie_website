import Image from "next/image"
import Link from "next/link"

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
  { label: "Contact Us", href: "/home/contact" },
]

export default function Footer() {
  return (
    <footer style={{ background: "#0a1628" }}>
      {/* Main footer */}
      <div
        className="mx-auto max-w-[1160px] px-6 py-14"
        style={{ borderTop: "2px solid rgba(0,198,215,0.3)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/kawie-logo.jpg"
                alt="Kawie Digital Solutions"
                width={36}
                height={36}
                className="rounded-md object-contain"
              />
              <span
                className="font-heading font-bold text-white text-[14px] leading-tight"
              >
                Kawie Digital Solutions Sdn Bhd
              </span>
            </div>
            <p className="font-body text-[14px] text-white/70 leading-relaxed">
              Your trusted digital partner — from custom software to enterprise platforms to
              hands-on workforce training.
            </p>
            <p
              className="font-body font-medium text-[12px]"
              style={{ color: "#00c6d7" }}
            >
              Authorised Training Centre — with Cyber9HUB @ Ayerspot
            </p>
            <p
              className="font-body text-[12px]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              SSM: 202601019532 (1681629-X)
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-heading text-[13px] font-bold uppercase tracking-widest text-white mb-4">
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

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-heading text-[13px] font-bold uppercase tracking-widest text-white mb-4">
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

          {/* Col 4 — Connect */}
          <div>
            <h4 className="font-heading text-[13px] font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:admin@kawie-digital.com"
                  className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7]"
                >
                  admin@kawie-digital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+601121734434"
                  className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7]"
                >
                  +6011-2173 4434
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[15px] leading-[2.2] text-white/55 transition-colors hover:text-[#00c6d7]"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <span className="font-body text-[15px] leading-[2.2] text-white/55">
                  Cyber9HUB @ Ayerspot, Cyberjaya
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: "#060d1a" }}>
        <div className="mx-auto max-w-[1160px] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="font-body text-[12px]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
          <p
            className="font-body text-[12px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Powered by Next.js · Supabase · Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
