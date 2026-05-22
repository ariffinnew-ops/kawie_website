export default function ContactCards() {
  return (
    <div className="flex flex-col gap-5">
      {/* Card 1 — WhatsApp Channel */}
      <div
        className="flex flex-col gap-4 transition-transform duration-200"
        style={{
          background: "#1c2030",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14,
          padding: 28,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
        }}
      >
        {/* WhatsApp icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#25D366",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif font-bold text-white mb-1.5" style={{ fontSize: 16, letterSpacing: "-0.02em" }}>
            Join our WhatsApp Channel
          </h3>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "#8b90a0" }}>
            Get updates, announcements, and be first to know about UEOS-APOG training schedules.
          </p>
        </div>
        <a
          href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full font-sans font-medium text-sm transition-all duration-200"
          style={{
            background: "#25D366",
            color: "#ffffff",
            borderRadius: 8,
            padding: "12px 20px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-2px)"
            el.style.opacity = "0.88"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0)"
            el.style.opacity = "1"
          }}
        >
          Open WhatsApp Channel &rarr;
        </a>
      </div>

      {/* Card 2 — Coach Mahfoz */}
      <div
        className="flex flex-col gap-4 transition-transform duration-200"
        style={{
          background: "#1c2030",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14,
          padding: 28,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center font-serif font-bold text-lg"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,198,215,0.12)",
              border: "1.5px solid rgba(0,198,215,0.3)",
              color: "#00c6d7",
              flexShrink: 0,
            }}
          >
            M
          </div>
          <div>
            <p className="font-sans font-medium text-white text-sm">Coach Mahfoz</p>
            <p className="font-sans text-xs" style={{ color: "#555d70" }}>
              Sales &amp; Training Enquiries &middot; Kawie Digital
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="tel:+60112173 4434"
            className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
            style={{ color: "#8b90a0" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8b90a0")}
          >
            <span style={{ color: "#00c6d7" }}>&#128222;</span>
            +6011-2173 4434
          </a>
          <a
            href="mailto:admin@kawie-digital.com"
            className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
            style={{ color: "#8b90a0" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8b90a0")}
          >
            <span style={{ color: "#00c6d7" }}>&#9993;</span>
            admin@kawie-digital.com
          </a>
        </div>

        <a
          href="tel:+60112173 4434"
          className="inline-flex items-center justify-center w-full font-sans font-medium text-sm transition-all duration-200"
          style={{
            background: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "12px 20px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-2px)"
            el.style.borderColor = "rgba(255,255,255,0.25)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0)"
            el.style.borderColor = "rgba(255,255,255,0.12)"
          }}
        >
          Call Now &rarr;
        </a>
      </div>

      {/* Card 3 — Training Enquiry */}
      <div
        className="flex flex-col gap-4 transition-transform duration-200"
        style={{
          background: "#1c2030",
          border: "1px solid rgba(255,255,255,0.07)",
          borderTop: "2px solid #00c6d7",
          borderRadius: 14,
          padding: 28,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
        }}
      >
        {/* Amber badge */}
        <span
          className="font-sans font-medium text-xs self-start px-3 py-1"
          style={{
            background: "rgba(251,191,36,0.15)",
            color: "#fbbf24",
            borderRadius: 999,
            border: "1px solid rgba(251,191,36,0.3)",
          }}
        >
          June 2026
        </span>

        <div>
          <h3 className="font-serif font-bold text-white mb-1.5" style={{ fontSize: 16, letterSpacing: "-0.02em" }}>
            UEOS-APOG Training
          </h3>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "#8b90a0" }}>
            Operator training program. Venue: Cyber9HUB @ Ayerspot, Cyberjaya.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-sans text-sm" style={{ color: "#8b90a0" }}>
            <span>&#128197;</span>
            <span>Schedule: June 2026</span>
          </div>
          <div className="flex items-center gap-2 font-sans text-sm" style={{ color: "#8b90a0" }}>
            <span>&#128205;</span>
            <span>Venue: Cyber9HUB @ Ayerspot</span>
          </div>
        </div>

        <a
          href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full font-sans font-medium text-sm transition-all duration-200"
          style={{
            background: "transparent",
            color: "#00c6d7",
            border: "1px solid rgba(0,198,215,0.3)",
            borderRadius: 8,
            padding: "12px 20px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-2px)"
            el.style.background = "rgba(0,198,215,0.08)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0)"
            el.style.background = "transparent"
          }}
        >
          WhatsApp to Register &rarr;
        </a>
      </div>
    </div>
  )
}
