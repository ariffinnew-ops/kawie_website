import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0a0c10" }}
    >
      <div
        className="mx-auto px-6 py-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        style={{ maxWidth: 1160 }}
      >
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex items-center justify-center font-serif font-extrabold text-sm"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#00c6d7",
                color: "#0a0c10",
                letterSpacing: "-0.03em",
              }}
            >
              K
            </span>
            <span
              className="font-serif font-extrabold text-white text-lg"
              style={{ letterSpacing: "-0.03em" }}
            >
              kawie
            </span>
          </div>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "#8b90a0" }}>
            Kawie Digital Solutions Sdn Bhd — Unified Enterprise Operating System for modern operations teams.
          </p>
          <span
            className="inline-flex items-center text-xs font-sans font-medium px-3 py-1 self-start"
            style={{
              background: "rgba(0,198,215,0.12)",
              color: "#00c6d7",
              borderRadius: 999,
            }}
          >
            Authorised Agent &amp; Training Centre
          </span>
        </div>

        {/* Col 2 — Platform */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-medium text-sm text-white">Platform</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              "UEOS Overview",
              "PMS — Projects",
              "CMS — Crewing",
              "SCM — Procurement",
              "PCM — Budget",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: "#555d70" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Industries */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-medium text-sm text-white">Industries</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              "Oil & Gas",
              "Construction",
              "Offshore & Shipping",
              "Workforce Ops",
              "SMEs",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sans text-sm transition-colors duration-200"
                  style={{ color: "#555d70" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-medium text-sm text-white">Company</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="#" className="font-sans text-sm transition-colors duration-200" style={{ color: "#555d70" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
              >
                Training — UEOS-APOG
              </a>
            </li>
            <li>
              <a href="mailto:admin@kawie-digital.com" className="font-sans text-sm transition-colors duration-200" style={{ color: "#555d70" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
              >
                admin@kawie-digital.com
              </a>
            </li>
            <li>
              <a href="tel:+60112173 4434" className="font-sans text-sm transition-colors duration-200" style={{ color: "#555d70" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
              >
                +6011-2173 4434
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm transition-colors duration-200"
                style={{ color: "#555d70" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8b90a0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555d70")}
              >
                WhatsApp Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ maxWidth: 1160, borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p className="font-sans text-xs" style={{ color: "#555d70" }}>
          &copy; 2026 Kawie Digital Solutions Sdn Bhd. All rights reserved.
        </p>
        <p className="font-sans text-xs" style={{ color: "#555d70" }}>
          Powered by Next.js &middot; Supabase &middot; Vercel
        </p>
      </div>
    </footer>
  )
}
