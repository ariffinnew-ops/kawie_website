export default function StatusBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase"
      style={{
        borderColor: "var(--border-bright)",
        background: "rgba(0,229,212,0.05)",
        color: "var(--primary)",
      }}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: "var(--primary)" }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ background: "var(--primary)" }}
        />
      </span>
      Under Construction
    </div>
  )
}
