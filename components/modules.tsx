const modules = [
  {
    abbr: 'PMS',
    full: 'Project Management System',
    color: '#00c6d7',
    description:
      'The command centre for every active contract — tracking costs, timelines, and resources across all active projects in real time.',
    features: [
      'Portfolio dashboard with live contract values',
      'Budget vs actual across all projects',
      'S-curve forecasting & variance analysis',
      'L1/L2/L3 role-gated project access',
    ],
  },
  {
    abbr: 'CMS',
    full: 'Crewing Management System',
    color: '#7c3aed',
    description:
      'The people engine — full crew lifecycle management from onboarding to offboarding, with automated compliance alerts.',
    features: [
      'Complete crew records — every position covered',
      'Auto-alerts at 90, 30, and 0 days before cert expiry',
      '24-cycle rotation management per year',
      'Statement auto-calculated, flows direct to project budget',
    ],
  },
  {
    abbr: 'SCM',
    full: 'Supply Chain Management',
    color: '#f59e0b',
    description:
      'Full procurement lifecycle — every transaction tagged to the correct project and budget category automatically.',
    features: [
      'MSR → PO → DO — zero manual reference tracking',
      'Real-time inventory with reorder alerts at 5 units',
      'Vendor directory & payment tracking (OS Days)',
      'Auto-charged to requesting project budget',
    ],
  },
  {
    abbr: 'PCM',
    full: 'Project Cost Management',
    color: '#10b981',
    description:
      'Financial intelligence per project — live budget vs actual across five cost categories with forecast mode.',
    features: [
      'Manpower · Materials · Machinery · Special Services · Others',
      'Real-time burn rate & risk analysis per day',
      'Forecast mode for future financial planning',
      'Pulls live from SCM + CMS — zero re-entry',
    ],
  },
]

export default function Modules() {
  return (
    <section className="section-pad" style={{ background: '#0a0c10' }}>
      <div className="container-kawie">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow">Core Modules</span>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#ffffff' }}
          >
            Four engines. One platform.
          </h2>
        </div>

        {/* 4-card grid */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={mod.abbr}
              className="card-hover"
              style={{
                background: '#0a0c10',
                borderTop: `3px solid ${mod.color}`,
                borderRight: i < modules.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                padding: '40px 32px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#0a0c10'
              }}
            >
              {/* Module badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-plus-jakarta-sans)',
                    fontWeight: 800,
                    fontSize: '13px',
                    color: mod.color,
                    background: `${mod.color}18`,
                    border: `1px solid ${mod.color}40`,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    letterSpacing: '0.06em',
                  }}
                >
                  {mod.abbr}
                </span>
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: '16px',
                  color: '#ffffff',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                }}
              >
                {mod.full}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                }}
              >
                {mod.description}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {mod.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '13px',
                      color: '#555d70',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: mod.color, flexShrink: 0, marginTop: '1px' }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
