import Image from "next/image"

const columnHeadingStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: 20,
  fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
}

const linkStyle: React.CSSProperties = {
  color: "#c8d0e0",
  fontSize: 15,
  lineHeight: 2.2,
  fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
  textDecoration: "none",
  transition: "color 0.2s ease",
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = "#00c6d7"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = "#c8d0e0"
      }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      className="w-full relative"
      style={{
        background: "#060810",
        borderTop: "2px solid rgba(0,198,215,0.3)",
        paddingTop: 80,
        paddingBottom: 0,
      }}
    >
      <div
        className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{ maxWidth: 1160, gap: 48, paddingBottom: 48 }}
      >
        {/* Col 1 — Brand */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/kawie-logo.jpg"
              alt="Kawie Digital Solutions"
              width={48}
              height={48}
              className="rounded-lg shrink-0"
            />
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                color: "#ffffff",
                lineHeight: 1.3,
              }}
            >
              Kawie Digital Solutions Sdn Bhd
            </span>
          </div>
          <p
            className="font-sans"
            style={{
              color: "#c8d0e0",
              fontSize: 14,
              lineHeight: 1.8,
              marginTop: 12,
            }}
          >
            Kawie Digital Solutions Sdn Bhd — Unified Enterprise Operating System for modern operations teams.
          </p>
          <span
            className="font-sans self-start"
            style={{
              color: "#00c6d7",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginTop: 16,
            }}
          >
            Authorised Agent &amp; Training Centre
          </span>
        </div>

        {/* Col 2 — Platform */}
        <div className="flex flex-col">
          <h4 style={columnHeadingStyle}>Platform</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "UEOS Overview",
              "PMS — Projects",
              "CMS — Crewing",
              "SCM — Procurement",
              "PCM — Budget",
            ].map((item) => (
              <li key={item}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Industries */}
        <div className="flex flex-col">
          <h4 style={columnHeadingStyle}>Industries</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Oil & Gas",
              "Construction",
              "Offshore & Shipping",
              "Workforce Ops",
              "SMEs",
            ].map((item) => (
              <li key={item}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div className="flex flex-col">
          <h4 style={columnHeadingStyle}>Company</h4>
          <ul className="flex flex-col" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            <li>
              <FooterLink href="#">Training — UEOS-APOG</FooterLink>
            </li>
            <li>
              <FooterLink href="mailto:admin@kawie-digital.com">admin@kawie-digital.com</FooterLink>
            </li>
            <li>
              <FooterLink href="tel:+601121734434">+6011-2173 4434</FooterLink>
            </li>
            <li>
              <a
                href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "#00c6d7"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = "#c8d0e0"
                }}
              >
                WhatsApp Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          background: "#040609",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ maxWidth: 1160, padding: "20px 0" }}
        >
          <p className="font-sans text-center md:text-left" style={{ color: "#8892a8", fontSize: 13, margin: 0 }}>
            &copy; 2026 Kawie Digital Solutions Sdn Bhd (202601019532). All rights reserved.
          </p>
          <p className="font-sans text-center md:text-right" style={{ color: "#8892a8", fontSize: 13, margin: 0 }}>
            Powered by Next.js &middot; Supabase &middot; Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
