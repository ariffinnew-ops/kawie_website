"use client"

import Image from "next/image"
import StatusBadge from "@/components/status-badge"
import CountdownTimer from "@/components/countdown-timer"

type HeroSectionProps = {
  onOpenAdmin?: () => void
}

export default function HeroSection({ onOpenAdmin }: HeroSectionProps) {
  const year = new Date().getFullYear()

  return (
    <section className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center gap-2 px-4 text-center">

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
          width={200}
          height={200}
          className="relative h-[200px] w-[200px] rounded-2xl object-cover"
          priority
        />
      </div>

      <StatusBadge />

      {/* Company name */}
      <h1
        className="max-w-[95vw] whitespace-nowrap text-[clamp(1.35rem,5vw,2.5rem)] font-semibold uppercase leading-tight tracking-[0.08em] text-foreground"
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
      <p className="max-w-md text-balance text-sm leading-snug text-muted-foreground">
        We are currently building something{" "}
        <span style={{ color: "var(--primary)" }}>powerful</span>. Our website is under
        construction and will be ready soon.
      </p>

      {/* Countdown + contact */}
      <div className="flex w-full flex-col items-center gap-2 font-sans">
        <CountdownTimer large />

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
          <span
            className="rounded-md border px-3 py-1 text-sm font-medium uppercase tracking-[0.15em]"
            style={{ borderColor: "var(--border-bright)", color: "var(--primary-dim)" }}
          >
            Get in touch
          </span>
          <a
            href="mailto:admin@kawie-digital.com"
            className="text-sm font-normal transition-colors hover:text-foreground"
            style={{ color: "var(--foreground)" }}
          >
            admin@kawie-digital.com
          </a>
        </div>
      </div>

      {/* Copyright — © opens admin modal */}
      <p className="text-xs text-muted-foreground opacity-50 sm:text-sm">
        <span
          role="button"
          tabIndex={0}
          onClick={onOpenAdmin}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onOpenAdmin?.()
            }
          }}
          className="cursor-default no-underline"
          style={{ color: "inherit" }}
          aria-label="Admin access"
        >
          ©
        </span>{" "}
        {year} Kawie Digital Solutions Sdn Bhd
      </p>
    </section>
  )
}
