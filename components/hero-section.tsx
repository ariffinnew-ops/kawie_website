import Image from "next/image"
import StatusBadge from "@/components/status-badge"
import CountdownTimer from "@/components/countdown-timer"

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-16 text-center w-full max-w-3xl mx-auto">

      {/* Logo */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
          style={{ background: "rgba(0,229,212,0.25)" }}
          aria-hidden="true"
        />
        <Image
          src="/kawie-logo.jpg"
          alt="Kawie Digital Solution logo — neon K on circuit board"
          width={120}
          height={120}
          className="relative rounded-2xl"
          priority
        />
      </div>

      {/* Status badge */}
      <StatusBadge />

      {/* Company name */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
          Kawie{" "}
          <span
            className="font-extrabold"
            style={{ color: "var(--primary)", textShadow: "0 0 24px rgba(0,229,212,0.5)" }}
          >
            Digital
          </span>
          <br />
          Solution
        </h1>
        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-mono">
          Sdn Bhd
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-sm" aria-hidden="true">
        <div className="flex-1 h-px" style={{ background: "var(--border-bright)" }} />
        <div
          className="w-2 h-2 rotate-45"
          style={{ background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }}
        />
        <div className="flex-1 h-px" style={{ background: "var(--border-bright)" }} />
      </div>

      {/* Tagline */}
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md text-balance">
        We are currently building something{" "}
        <span style={{ color: "var(--primary)" }}>powerful</span>. Our website is under
        construction and will be ready soon.
      </p>

      {/* Countdown */}
      <CountdownTimer />

      {/* Contact row */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground font-mono mt-2">
        <span
          className="px-3 py-1 rounded border text-xs tracking-widest uppercase"
          style={{ borderColor: "var(--border-bright)", color: "var(--primary-dim)" }}
        >
          Get in touch
        </span>
        <a
          href="mailto:info@kawiedigital.com"
          className="transition-colors hover:text-foreground"
          style={{ color: "var(--muted-foreground)" }}
        >
          info@kawiedigital.com
        </a>
      </div>

      {/* Footer note */}
      <p className="text-xs text-muted-foreground font-mono mt-4 tracking-widest uppercase opacity-40">
        &copy; {new Date().getFullYear()} Kawie Digital Solution Sdn Bhd
      </p>
    </section>
  )
}
