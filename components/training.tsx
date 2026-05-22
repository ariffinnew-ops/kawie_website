const skills = [
  { num: '01', label: 'Enterprise System Integration' },
  { num: '02', label: 'Project & Operations Optimization' },
  { num: '03', label: 'Workflow Automation Skills' },
  { num: '04', label: 'Cloud-Based Scalability Practices' },
  { num: '05', label: 'Data Intelligence & Reporting' },
]

export default function Training() {
  return (
    <section id="training" className="section-pad" style={{ background: 'var(--section-even)' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">Training Program</span>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff' }}
            >
              UEOS-APOG
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                fontWeight: 500,
                color: '#f59e0b',
                background: 'rgba(245,158,11,0.12)',
                border: '1px solid rgba(245,158,11,0.3)',
                padding: '4px 12px',
                borderRadius: '999px',
              }}
            >
              Operator Training
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div className="reveal">
            <h3
              className="font-heading"
              style={{ fontSize: 'clamp(20px, 3vw, 30px)', color: '#ffffff', marginBottom: '16px' }}
            >
              Empowering Your Operational Transformation
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              The UEOS-APOG program trains operators and data lodgers to take full control of the
              platform — from day-one onboarding to advanced workflow automation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {skills.map((s) => (
                <div
                  key={s.num}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: 'var(--surface)',
                    borderRadius: '14px',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-plus-jakarta-sans)',
                      fontWeight: 800,
                      fontSize: '12px',
                      color: '#00c6d7',
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Coach card */}
          <div className="reveal">
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '32px',
              }}
            >
              {/* Coach header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(0,198,215,0.15)',
                    border: '2px solid rgba(0,198,215,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 800, fontSize: '18px', color: '#00c6d7' }}>A</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-plus-jakarta-sans)', fontWeight: 700, fontSize: '16px', color: '#ffffff' }}>
                    Coach Ariffin
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    Trainer & Program Mentor · Kawie Digital
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  background: 'rgba(0,198,215,0.08)',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid rgba(0,198,215,0.15)',
                }}
              >
                <span style={{ fontSize: '14px', color: '#00c6d7' }}>📅</span>
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  June 2026 · Cyber9HUB @ Ayerspot
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                }}
              >
                Ready to digitalise your operations? Book a demo, request a proposal, or inquire about the
                UEOS-APOG training program.
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '20px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join WhatsApp Channel
              </a>

              {/* Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="tel:+60112173 4434"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    color: '#555d70',
                    textDecoration: 'none',
                  }}
                >
                  <span>📞</span> +6011-2173 4434 (Coach Mahfoz)
                </a>
                <a
                  href="mailto:admin@kawie-digital.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    color: '#555d70',
                    textDecoration: 'none',
                  }}
                >
                  <span>✉️</span> admin@kawie-digital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
