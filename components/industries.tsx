const industries = [
  {
    icon: '🛢️',
    name: 'Oil & Gas',
    description:
      'Offshore & onshore projects. PETRONAS-audit-ready. Certificate compliance. Crew rotation. Full SCM procurement chain.',
  },
  {
    icon: '🏗️',
    name: 'Construction & Services',
    description:
      'Project cost tracking, workforce deployment, materials procurement — all in one structured system.',
  },
  {
    icon: '🚢',
    name: 'Offshore & Shipping',
    description:
      'Manning compliance, rotation schedules, vessel-level procurement, and multi-client operations.',
  },
  {
    icon: '🏢',
    name: 'Workforce Operations',
    description:
      'HRIS, contract lifecycle, training matrix, and payroll costing for any multi-project operator.',
  },
  {
    icon: '🏪',
    name: 'SMEs & Beyond',
    description:
      'Lightweight, cloud-native, affordable. Enterprise-grade discipline without enterprise-grade cost.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section-pad" style={{ background: '#0d0f14' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">Industry Verticals</span>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff', marginBottom: '16px' }}
          >
            Designed for O&amp;G. Built for any sector.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            UEOS was stress-tested in the most demanding environment — offshore Oil &amp; Gas. That
            rigour is now available to every industry.
          </p>
        </div>

        {/* Cards */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="card-hover"
              style={{
                background: '#1c2030',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '14px',
                padding: '28px 24px',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,198,215,0.2)'
                ;(e.currentTarget as HTMLElement).style.background = '#2e3447'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'
                ;(e.currentTarget as HTMLElement).style.background = '#1c2030'
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{ind.icon}</div>
              <h3
                className="font-heading"
                style={{
                  fontSize: '15px',
                  color: '#ffffff',
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                  fontWeight: 700,
                }}
              >
                {ind.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
