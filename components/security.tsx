const securityItems = [
  {
    icon: '🔐',
    title: 'Row Level Security',
    description:
      'Database-enforced RLS on all tables. Project managers see only their project. Zero data leakage.',
  },
  {
    icon: '👤',
    title: 'RBAC — L1 / L2 / L3',
    description:
      'Role-gated access at every route. Admin, Reviewer, and Viewer — fully enforced at system level.',
  },
  {
    icon: '📋',
    title: 'Audit Trails',
    description:
      'Login logs, procurement history, and cost ledgers — immutable, timestamped, always ready for audit.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native Infrastructure',
    description:
      'Vercel edge network + Supabase PostgreSQL. Zero servers to maintain. 99.9% uptime SLA.',
  },
  {
    icon: '🔒',
    title: 'Session Authentication',
    description:
      'Supabase Auth with secure session management. No bypass flags, no shortcuts — security by design.',
  },
]

const badges = [
  'ISO 27001 Ready',
  'SOC 2 Compliant',
  'PDPA-Ready',
  'PostgreSQL 15+',
  'Vercel Edge',
]

export default function Security() {
  return (
    <section className="section-pad" style={{ background: '#0d0f14' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">Security & Compliance</span>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff' }}
          >
            Enterprise-grade. At every layer.
          </h2>
        </div>

        {/* Grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="card-hover"
              style={{
                background: '#1c2030',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '28px 24px',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                ;(e.currentTarget as HTMLElement).style.background = '#2e3447'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                ;(e.currentTarget as HTMLElement).style.background = '#1c2030'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>{item.icon}</div>
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
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  color: '#8b90a0',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="reveal" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '12px',
                fontWeight: 500,
                color: '#10b981',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                padding: '7px 16px',
                borderRadius: '999px',
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
