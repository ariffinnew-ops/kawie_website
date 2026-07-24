"use client"

import { useEffect, useRef, useState, type WheelEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

export interface ShowcaseProgram {
  kicker: string
  title: string
  body: string
  chips: string[]
  meta?: string
}

export interface ShowcaseItem {
  thumbSrc: string
  fullSrc: string
  alt: string
  label: string
  program: ShowcaseProgram
}

export interface StaticItem {
  title: string
  body: string
}

const AUTOPLAY_MS = 3000
const WHEEL_THRESHOLD = 24
const WHEEL_LOCK_MS = 500

export default function TrainingShowcase({
  items,
  staticItems,
}: {
  items: ShowcaseItem[]
  staticItems?: StaticItem[]
}) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const wheelLockRef = useRef(false)

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    if (items.length < 2 || open || paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, AUTOPLAY_MS)
  }

  useEffect(() => {
    restartTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, paused, items.length])

  const goTo = (i: number) => {
    setIndex(((i % items.length) + items.length) % items.length)
    restartTimer()
  }

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight") goTo(index + 1)
      if (e.key === "ArrowLeft") goTo(index - 1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index])

  const onWheel = (e: WheelEvent) => {
    if (items.length < 2 || wheelLockRef.current) return
    if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return
    wheelLockRef.current = true
    goTo(index + (e.deltaY > 0 ? 1 : -1))
    setTimeout(() => {
      wheelLockRef.current = false
    }, WHEEL_LOCK_MS)
  }

  const current = items[index]

  return (
    <div
      className="grid items-stretch gap-8 lg:grid-cols-[0.75fr_1.25fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Poster — one at a time, auto-advancing. Nav controls overlay the image so this
          box's height is exactly the picture — nothing extra below it. */}
      <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-white">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`View ${current.label} full screen`}
        >
          <Image
            key={current.thumbSrc}
            src={current.thumbSrc}
            alt={current.alt}
            fill
            priority={index === 0}
            className="fade-in-key object-contain object-center p-3"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </button>

        <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg bg-[rgba(16,32,43,0.85)] px-3 py-1.5 font-body text-[12px] font-medium text-white opacity-90 transition-opacity group-hover:opacity-100">
          <ZoomIn size={14} aria-hidden />
          View full size
        </span>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(16,32,43,0.55)] text-white opacity-100 transition-opacity duration-150 hover:bg-[rgba(16,32,43,0.8)] lg:opacity-0 lg:group-hover:opacity-100"
              aria-label="Previous poster"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(16,32,43,0.55)] text-white opacity-100 transition-opacity duration-150 hover:bg-[rgba(16,32,43,0.8)] lg:opacity-0 lg:group-hover:opacity-100"
              aria-label="Next poster"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center">
              <div className="flex items-center gap-1 rounded-full bg-[rgba(16,32,43,0.55)] px-2 py-1.5">
                {items.map((it, i) => (
                  <button
                    key={it.label}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${it.label}`}
                    aria-current={i === index}
                    className="flex h-7 w-7 items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-white" : "w-2 bg-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right column: detail card (changes with poster) + static KPI row (fixed) */}
      <div className="flex flex-col gap-5">
        <div className="overflow-hidden rounded-[14px] border border-[var(--border)] bg-card p-5 shadow-[0_2px_8px_rgba(16,50,70,0.04)] sm:p-8">
          <div key={index} className="fade-in-key">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-dim">
              {current.program.kicker}
            </p>
            <h3 className="mt-2 font-heading text-[19px] font-bold tracking-tight">
              {current.program.title}
            </h3>
            <p className="mt-2 font-body text-[13.5px] leading-relaxed text-muted-foreground">
              {current.program.body}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.program.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-[rgba(14,158,134,0.06)] px-2.5 py-1.5 font-body text-[11.5px] text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            {current.program.meta && (
              <p className="mt-4 border-t border-border pt-3 font-body text-[12px] text-muted-foreground">
                {current.program.meta}
              </p>
            )}
          </div>
        </div>

        {staticItems && staticItems.length > 0 && (
          <div className="mt-auto grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {staticItems.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-xl border border-border bg-card px-5 py-4"
              >
                <strong className="font-heading text-[14px] font-bold leading-snug">
                  {item.title}
                </strong>
                <p className="mt-1.5 font-body text-[12.5px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,10,14,0.97)] p-4 sm:p-6"
          onClick={() => setOpen(false)}
          onWheel={onWheel}
          role="dialog"
          aria-modal="true"
          aria-label="Training posters full screen"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close full screen poster"
          >
            <X size={22} strokeWidth={2} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(index - 1)
                }}
                className="absolute left-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                aria-label="Previous poster"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  goTo(index + 1)
                }}
                className="absolute right-2 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                aria-label="Next poster"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-[min(100%,900px)] flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.fullSrc}
              src={current.fullSrc}
              alt={current.alt}
              className="max-h-[calc(100dvh-7rem)] w-auto max-w-full rounded-lg object-contain"
            />
            <p className="font-body text-[13px] font-medium text-white/70">{current.label}</p>

            {items.length > 1 && (
              <div className="flex items-center gap-1">
                {items.map((it, i) => (
                  <button
                    key={it.label}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      goTo(i)
                    }}
                    aria-label={`Go to ${it.label}`}
                    aria-current={i === index}
                    className="flex h-9 w-9 items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
