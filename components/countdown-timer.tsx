"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Launch: 1 June 2026 at 00:00 (local time)
const LAUNCH_DATE = new Date(2026, 5, 1, 0, 0, 0, 0)

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = LAUNCH_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

interface UnitBoxProps {
  value: number
  label: string
  compact?: boolean
}

function UnitBox({ value, label, compact }: UnitBoxProps) {
  return (
    <div className={`flex flex-col items-center ${compact ? "gap-1" : "gap-1.5"}`}>
      <div
        className={
          compact
            ? "flex h-14 w-14 items-center justify-center rounded-lg border font-sans text-2xl font-semibold tabular-nums tracking-tight sm:h-16 sm:w-16 sm:text-3xl"
            : "flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-lg border font-sans text-3xl font-semibold tabular-nums tracking-tight sm:h-20 sm:w-20 sm:text-4xl md:h-24 md:w-24 md:text-5xl"
        }
        style={{
          borderColor: "var(--border-bright)",
          background: "rgba(0,229,212,0.04)",
          color: "var(--primary)",
          textShadow: "0 0 16px rgba(0,229,212,0.5)",
          boxShadow: "inset 0 0 20px rgba(0,229,212,0.04)",
        }}
      >
        {pad(value)}
      </div>
      <span
        className={`font-sans font-medium uppercase tracking-[0.2em] ${compact ? "text-[10px] sm:text-xs" : "text-sm sm:text-base"}`}
        style={{ color: "var(--muted-foreground)" }}
      >
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className={`flex ${compact ? "gap-2 sm:gap-2.5" : "gap-3 sm:gap-4 md:gap-5"}`} aria-label="Countdown timer loading">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <UnitBox key={label} value={0} label={label} compact={compact} />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`flex ${compact ? "gap-2 sm:gap-2.5" : "gap-3 sm:gap-4 md:gap-5"}`}
      role="timer"
      aria-label="Countdown to launch"
      aria-live="polite"
    >
      <UnitBox value={timeLeft.days} label="Days" compact={compact} />
      <UnitBox value={timeLeft.hours} label="Hours" compact={compact} />
      <UnitBox value={timeLeft.minutes} label="Mins" compact={compact} />
      <UnitBox value={timeLeft.seconds} label="Secs" compact={compact} />
    </div>
  )
}
