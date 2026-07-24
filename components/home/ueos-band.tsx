"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Reveal from "./reveal"

const YOUTUBE_VIDEO_ID = "ISrwY8S53WQ"
const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`
const THUMBNAIL_SRC = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`

const CORE_MODULES = [
  {
    code: "PMS",
    name: "Project Management",
    detail: "Projects, milestones & progress in one dashboard",
  },
  {
    code: "CMS",
    name: "Crewing Management",
    detail: "Crew roster, certifications & timesheets",
  },
  {
    code: "SCM",
    name: "Supply Chain",
    detail: "PO lifecycle, vendors & inventory",
  },
  {
    code: "PCM",
    name: "Project Cost Mgmt",
    detail: "Budgets, cost ledger & financial reports",
  },
]

export default function UeosBand() {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      id="ueos"
      className="console border-t border-[var(--c-line)] bg-gradient-to-b from-[var(--c-bg)] to-[var(--c-bg2)] py-20 text-[var(--c-ink)]"
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[14px] border border-[var(--c-line-strong)] bg-[#0f1720] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1">
            <div className="flex h-[34px] items-center gap-1.5 border-b border-[var(--c-line)] bg-[rgba(10,15,20,0.6)] px-3.5">
              <i className="h-[9px] w-[9px] rounded-full bg-[var(--c-line-strong)]" />
              <i className="h-[9px] w-[9px] rounded-full bg-[var(--c-line-strong)]" />
              <i className="h-[9px] w-[9px] rounded-full bg-[var(--c-line-strong)]" />
              <span className="ml-2 font-body text-[10.5px] tracking-[0.06em] text-[var(--c-dim)]">
                ueos.kawie-digital.com — platform walkthrough
              </span>
            </div>
            <div className="relative aspect-video w-full">
              {playing ? (
                <iframe
                  src={EMBED_SRC}
                  title="UEOS platform overview video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center border-0 p-0"
                  aria-label="Play UEOS platform overview video"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={THUMBNAIL_SRC}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-b from-[rgba(6,10,14,0.15)] to-[rgba(6,10,14,0.6)]"
                    aria-hidden
                  />
                  <span className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full border border-[rgba(45,212,191,0.5)] bg-[rgba(45,212,191,0.14)] backdrop-blur-[6px] transition-transform duration-200 group-hover:scale-110">
                    <Play size={26} className="ml-1 text-[var(--c-accent)]" fill="currentColor" aria-hidden />
                  </span>
                  <span className="absolute bottom-3 left-4 z-10 font-body text-[11px] font-medium tracking-[0.06em] text-[var(--c-muted)]">
                    UEOS PLATFORM OVERVIEW
                  </span>
                  <span className="absolute bottom-3 right-4 z-10 font-body text-[11px] text-[var(--c-muted)]">
                    ▶ Click to play
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Flagship Product · Live v1.0</p>
          <h2 className="mt-3.5 text-balance font-heading text-[clamp(28px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-tight text-[var(--c-ink)]">
            See UEOS in action.
          </h2>
          <p className="mt-4 max-w-[52ch] font-body text-[15.5px] leading-relaxed text-[var(--c-muted)]">
            Born from offshore operational demands — one cloud-native platform consolidating
            projects, crew, supply chain, and cost control. Row-level security and full audit
            trail as standard.
          </p>
          <div className="my-6 grid grid-cols-2 gap-2.5">
            {CORE_MODULES.map((m) => (
              <div
                key={m.code}
                className="group rounded-[10px] border border-[var(--c-line)] bg-[rgba(17,26,35,0.7)] px-4 py-3.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[rgba(45,212,191,0.45)]"
              >
                <span className="font-body text-[10.5px] font-bold tracking-[0.1em] text-[var(--c-accent)]">
                  {m.code}
                </span>
                <strong className="mt-1 block text-[13.5px] font-semibold text-[var(--c-ink)]">
                  {m.name}
                </strong>
                <span className="mt-1 block font-body text-[11.5px] leading-snug text-[var(--c-muted)]">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
          <a
            href="https://ueos.kawie-digital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[var(--c-accent)] transition-all hover:gap-3"
          >
            Explore the full platform →{" "}
            <span className="font-body text-[11px] font-normal text-[var(--c-dim)]">
              ueos.kawie-digital.com
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  )
}
