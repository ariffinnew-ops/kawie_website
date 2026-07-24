"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import CircuitCanvas from "./circuit-canvas"
import { TOTAL_APP_COUNT, DOMAIN_COUNT } from "@/lib/apps-data"

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: TOTAL_APP_COUNT, suffix: "", label: "Integrated apps" },
  { value: DOMAIN_COUNT, suffix: "", label: "Operational domains" },
  { value: 4, suffix: "", label: "Core UEOS modules" },
  { value: 20, suffix: "+", label: "Yrs combined experience" },
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const t0 = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - t0) / 1100, 1)
          el.textContent = `${Math.round(value * (1 - Math.pow(1 - p, 3)))}${p === 1 ? suffix : ""}`
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, suffix])

  return (
    <div className="bg-[rgba(13,20,27,0.85)] px-5 py-5">
      <span
        ref={ref}
        className="block font-heading text-[32px] font-extrabold tracking-tight text-[var(--c-ink)] tabular-nums"
      >
        0
      </span>
      <span className="font-body text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--c-dim)]">
        {label}
      </span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <header className="console relative overflow-hidden bg-[var(--c-bg)] text-[var(--c-ink)]">
      <CircuitCanvas />
      <div className="relative mx-auto max-w-[1180px] px-6 pt-[92px] pb-16">
        <div className="flex items-center gap-2.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[var(--c-accent)]">
          <span className="live-pulse h-[7px] w-[7px] rounded-full bg-[var(--live)] shadow-[0_0_10px_var(--live)]" />
          UEOS · Unified Enterprise Operating System · v1.0 live
        </div>

        <h1 className="mt-6 max-w-[16ch] text-balance font-heading text-[clamp(40px,6.2vw,70px)] font-extrabold leading-[1.02] tracking-tight">
          One operating system for your <span className="text-[var(--c-accent)]">entire operation</span>
          .
          <span className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.55ch] translate-y-[0.08em] bg-[var(--c-accent)]" />
        </h1>

        <p className="mt-6 max-w-[56ch] font-body text-[16.5px] leading-relaxed text-[var(--c-muted)]">
          <strong className="font-semibold text-[var(--c-ink)]">
            {TOTAL_APP_COUNT} integrated apps. {DOMAIN_COUNT} operational domains. One platform.
          </strong>
          <br />
          We Build. We Train. We Transform. — custom software, enterprise platforms, and hands-on
          workforce training from Cyberjaya, built for how heavy industry actually operates.
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link
            href="#ueos"
            className="btn-hover inline-flex items-center gap-2 rounded-lg bg-[var(--c-accent)] px-5 py-2.5 text-[13.5px] font-semibold text-[var(--c-accent-ink)] hover:shadow-[0_8px_24px_-8px_rgba(45,212,191,0.5)]"
          >
            See UEOS in Action ↓
          </Link>
          <Link
            href="#ecosystem"
            className="btn-hover inline-flex items-center gap-2 rounded-lg border border-[var(--c-line-strong)] px-5 py-2.5 text-[13.5px] font-semibold text-[var(--c-ink)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
          >
            Explore the Ecosystem
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--c-line)] bg-[var(--c-line)] md:grid-cols-4">
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </header>
  )
}
