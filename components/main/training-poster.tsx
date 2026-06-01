"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const POSTER_ALT =
  "UEOS-APOG Integrated Framework Application — Operator and Data Lodger Training Program poster"

export default function TrainingPoster() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[520px] bg-[#0f2557] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c6d7] focus-visible:ring-offset-2"
        aria-label="View training poster full screen"
      >
        <Image
          src="/poster.png"
          alt={POSTER_ALT}
          fill
          className="object-contain object-center p-2 sm:p-4 transition-opacity group-hover:opacity-95"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <span
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-body text-[12px] font-medium text-white opacity-90 transition-opacity group-hover:opacity-100"
          style={{ background: "rgba(15,37,87,0.85)" }}
        >
          <ZoomIn size={14} aria-hidden />
          View full size
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(6, 13, 26, 0.97)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Training poster full screen"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.12)" }}
            aria-label="Close full screen poster"
          >
            <X size={22} strokeWidth={2} />
          </button>

          <div
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-[min(100%,1100px)] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Native img for maximum sharpness at full resolution */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/poster.png"
              alt={POSTER_ALT}
              className="max-h-[calc(100dvh-2rem)] w-auto max-w-full object-contain"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  )
}
