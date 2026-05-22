export default function CtaBand() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: '#0d0f14',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(0,198,215,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-kawie reveal"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}
      >
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: 1.0,
          }}
        >
          Your business.
          <br />
          Your rules.
          <br />
          <span style={{ color: '#00c6d7' }}>One platform.</span>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '40px',
          }}
        >
          Stop managing operations in spreadsheets. Start with UEOS today.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:admin@kawie-digital.com" className="btn-primary">
            Request a Demo
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb76GGKQuJCSZQvax3v"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    </section>
  )
}
