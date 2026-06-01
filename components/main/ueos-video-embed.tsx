"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const YOUTUBE_VIDEO_ID = "ISrwY8S53WQ"
const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`
const THUMBNAIL_SRC = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`

export default function UeosVideoEmbed() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-full max-w-[420px]">
      <div className="rounded-xl overflow-hidden border border-[rgba(15,37,87,0.10)]">
        <div
          className="px-4 py-3"
          style={{
            background: "linear-gradient(135deg, #0f2557 0%, #1a3a7c 55%, #0d4a52 100%)",
          }}
        >
          <p className="section-eyebrow mb-0.5">
            Platform overview
          </p>
          <h4 className="font-heading font-bold text-white text-[16px] leading-snug">
            See UEOS in action
          </h4>
        </div>

        <div
          className="relative w-full aspect-video bg-[#0a1628]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
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
              className="group absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer border-0 p-0"
              aria-label="Play UEOS platform overview video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={THUMBNAIL_SRC}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,37,87,0.25) 0%, rgba(15,37,87,0.65) 100%)",
                }}
                aria-hidden
              />
              <span
                className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: "#00c6d7",
                  boxShadow: "0 6px 20px rgba(0,198,215,0.4)",
                }}
              >
                <Play size={22} className="text-[#0f1f3d] ml-0.5" fill="currentColor" aria-hidden />
              </span>
              <span className="absolute bottom-3 left-3 z-10 font-body text-[11px] text-white/85">
                Click to play
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
