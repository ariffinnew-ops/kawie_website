const footerLinks = {
  Platform: [
    { label: 'UEOS Overview', href: '#platform' },
    { label: 'PMS — Projects', href: '#platform' },
    { label: 'CMS — Crewing', href: '#platform' },
    { label: 'SCM — Procurement', href: '#platform' },
    { label: 'PCM — Budget', href: '#platform' },
  ],
  Industries: [
    { label: 'Oil & Gas', href: '#industries' },
    { label: 'Construction', href: '#industries' },
    { label: 'Offshore & Shipping', href: '#industries' },
    { label: 'Workforce Ops', href: '#industries' },
    { label: 'SMEs', href: '#industries' },
  ],
  Company: [
    { label: 'Training — UEOS-APOG', href: '#training' },
    { label: 'admin@kawie-digital.com', href: 'mailto:admin@kawie-digital.com' },
    { label: '+6011-2173 4434', href: 'tel:+60112173 4434' },
    { label: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v' },
  ],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080a0d',
        borderTop: '1px solid rgba(255,255,255,0.10)',
        paddingTop: '60px',
        paddingBottom: '32px',
      }}
    >
      <div className="container-kawie">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          {/* Col 1 — Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/kawie-logo.jpg" alt="Kawie Digital Solutions" height={40} width={40} style={{ borderRadius: 8, flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                Kawie Digital Solutions Sdn Bhd
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '12px',
              }}
            >
              Kawie Digital Solutions Sdn Bhd — Unified Enterprise Operating System for modern operations teams.
            </p>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                color: '#00c6d7',
                background: 'rgba(0,198,215,0.1)',
                border: '1px solid rgba(0,198,215,0.2)',
                padding: '4px 10px',
                borderRadius: '999px',
              }}
            >
              Authorised Agent & Training Centre
            </span>
          </div>

          {/* Col 2-4 — Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#555d70',
                  marginBottom: '16px',
                }}
              >
                {section}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#555d70' }}>
            &copy; 2026 Kawie Digital Solutions Sdn Bhd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#555d70' }}>
            Powered by Next.js &middot; Supabase &middot; Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
