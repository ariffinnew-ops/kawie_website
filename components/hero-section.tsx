"use client"

import Image from "next/image"
import StatusBadge from "@/components/status-badge"
import CountdownTimer from "@/components/countdown-timer"

type HeroSectionProps = {
  adminTrigger?: React.ReactNode
}

export default function HeroSection({ adminTrigger }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex min-h-0 w-full max-w-3xl shrink flex-col items-center justify-center gap-1 px-3 py-1 text-center sm:gap-1.5">

      {/* Logo */}
      <div className="relative shrink-0">
        <div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
          style={{ background: "rgba(0,229,212,0.25)" }}
          aria-hidden="true"
        />
        <Image
          src="/kawie-logo.jpg"
          alt="Kawie Digital Solution logo — neon K on circuit board"
          width={150}
          height={150}
          className="relative h-[min(28vw,150px)] w-[min(28vw,150px)] rounded-2xl object-cover"
          priority
        />
      </div>

      {/* Status badge */}
      <StatusBadge />

      {/* Company name */}
      <h1
        className="max-w-[95vw] text-[clamp(1rem,3.5vw,1.75rem)] font-semibold uppercase leading-tight tracking-[0.08em] text-foreground whitespace-nowrap"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        Kawie{" "}
        <span
          className="font-bold"
          style={{ color: "var(--primary)", textShadow: "0 0 24px rgba(0,229,212,0.5)" }}
        >
          Digital
        </span>{" "}
        Solutions{" "}
        <span className="font-medium tracking-[0.12em] text-muted-foreground">
          Sdn Bhd
        </span>
      </h1>

      {/* Divider */}
      <div className="flex w-full max-w-xs items-center gap-2" aria-hidden="true">
        <div className="h-px flex-1" style={{ background: "var(--border-bright)" }} />
        <div
          className="h-2 w-2 rotate-45"
          style={{ background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }}
        />
        <div className="h-px flex-1" style={{ background: "var(--border-bright)" }} />
      </div>

      {/* Tagline */}
      <p className="max-w-md text-balance text-xs leading-snug text-muted-foreground sm:text-sm">
        We are currently building something{" "}
        <span style={{ color: "var(--primary)" }}>powerful</span>. Our website is under
        construction and will be ready soon.
      </p>

      {/* Countdown + contact */}
      <div className="flex w-full shrink-0 flex-col items-center gap-2 font-sans sm:gap-3">
        <CountdownTimer compact />

        <div className="flex flex-col items-center gap-1.5 text-sm text-muted-foreground sm:flex-row sm:gap-3">
          <span
            className="rounded-md border px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] sm:text-sm"
            style={{ borderColor: "var(--border-bright)", color: "var(--primary-dim)" }}
          >
            Get in touch
          </span>
          <a
            href="mailto:admin@kawie-digital.com"
            className="text-xs font-normal transition-colors hover:text-foreground sm:text-sm"
            style={{ color: "var(--foreground)" }}
          >
            admin@kawie-digital.com
          </a>
        </div>
      </div>

      {/* Admin dot + copyright */}
      <div className="mt-0.5 flex shrink-0 flex-col items-center gap-0.5">
        {adminTrigger}
        <p className="text-[10px] text-muted-foreground opacity-50 sm:text-[11px]">
          &copy; {new Date().getFullYear()} Kawie Digital Solutions Sdn Bhd
        </p>
      </div>
    </section>
  )
}
