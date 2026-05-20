export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Deep teal ambient glow behind center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(0,229,212,0.07) 0%, rgba(0,229,212,0.03) 40%, transparent 70%)",
        }}
      />

      {/* SVG circuit grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="circuit-grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid lines */}
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(0,229,212,0.06)"
              strokeWidth="0.5"
            />
            {/* Nodes */}
            <circle cx="0" cy="0" r="1.5" fill="rgba(0,229,212,0.12)" />
            <circle cx="40" cy="40" r="1" fill="rgba(0,229,212,0.08)" />
          </pattern>

          <pattern
            id="circuit-detail"
            x="0"
            y="0"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal trace segments */}
            <line x1="0" y1="40" x2="50" y2="40" stroke="rgba(0,229,212,0.1)" strokeWidth="0.75" />
            <line x1="110" y1="40" x2="160" y2="40" stroke="rgba(0,229,212,0.1)" strokeWidth="0.75" />
            {/* Vertical trace segments */}
            <line x1="40" y1="0" x2="40" y2="30" stroke="rgba(0,229,212,0.1)" strokeWidth="0.75" />
            <line x1="40" y1="50" x2="40" y2="80" stroke="rgba(0,229,212,0.1)" strokeWidth="0.75" />
            {/* Corner connector */}
            <path
              d="M50 40 Q55 40 55 45 L55 80"
              fill="none"
              stroke="rgba(0,229,212,0.08)"
              strokeWidth="0.75"
            />
            {/* Pads */}
            <rect x="38" y="38" width="4" height="4" rx="1" fill="rgba(0,229,212,0.15)" />
            <rect x="118" y="78" width="4" height="4" rx="1" fill="rgba(0,229,212,0.10)" />
          </pattern>
        </defs>

        {/* Base grid */}
        <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        {/* Detail traces */}
        <rect width="100%" height="100%" fill="url(#circuit-detail)" />
      </svg>

      {/* Top-left corner accent line */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-20"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 60 H80 V20 H180" stroke="#00e5d4" strokeWidth="1" />
        <path d="M0 80 H60 V40 H160" stroke="#00e5d4" strokeWidth="0.75" />
        <path d="M0 100 H40 V60 H140" stroke="#00e5d4" strokeWidth="0.5" />
        <circle cx="80" cy="60" r="3" fill="#00e5d4" />
        <circle cx="60" cy="80" r="2" fill="#00e5d4" />
      </svg>

      {/* Top-right corner accent */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-20"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 60 H176 V20 H76" stroke="#00e5d4" strokeWidth="1" />
        <path d="M256 80 H196 V40 H96" stroke="#00e5d4" strokeWidth="0.75" />
        <circle cx="176" cy="60" r="3" fill="#00e5d4" />
        <circle cx="196" cy="80" r="2" fill="#00e5d4" />
      </svg>

      {/* Bottom-left corner accent */}
      <svg
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 196 H80 V236 H180" stroke="#00e5d4" strokeWidth="1" />
        <path d="M0 176 H60 V216 H160" stroke="#00e5d4" strokeWidth="0.75" />
        <circle cx="80" cy="196" r="3" fill="#00e5d4" />
      </svg>

      {/* Bottom-right corner accent */}
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 196 H176 V236 H76" stroke="#00e5d4" strokeWidth="1" />
        <path d="M256 176 H196 V216 H96" stroke="#00e5d4" strokeWidth="0.75" />
        <circle cx="176" cy="196" r="3" fill="#00e5d4" />
      </svg>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
        }}
      />
    </div>
  )
}
