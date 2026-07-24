"use client"

import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/main/navbar"
import Footer from "@/components/main/footer"
import EcosystemMap from "@/components/ecosystem/ecosystem-map"
import EcosystemGridView from "@/components/ecosystem/ecosystem-grid-view"
import { useMinWidth } from "@/lib/use-media-query"
import { TOTAL_APP_COUNT } from "@/lib/apps-data"

export default function EcosystemPageClient() {
  const isDesktop = useMinWidth(1024)

  return (
    <>
      <Navbar />
      <main id="main-content" className="console bg-[var(--c-bg)] text-[var(--c-ink)]">
        {isDesktop === null ? (
          <div className="flex h-[60dvh] items-center justify-center">
            <p className="font-body text-sm text-[var(--c-muted)]">Loading ecosystem map…</p>
          </div>
        ) : isDesktop ? (
          <div className="flex min-h-[calc(100dvh-56px)] flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--c-line)] px-4 py-3 sm:px-6">
              <div>
                <h1 className="font-heading text-[19px] font-extrabold tracking-tight">
                  UEOS Ecosystem Map
                </h1>
                <p className="mt-0.5 font-body text-[12.5px] text-[var(--c-muted)]">
                  {TOTAL_APP_COUNT} modules — hover to trace connections, click a node for detail.
                </p>
              </div>
              {/* Native <a>, not next/link — forces a real page load so the
                  homepage mounts fresh and actually scrolls to the hash
                  (Next's client router reuses the cached "/" route here and
                  never re-runs the scroll-to-hash effect otherwise). */}
              <a
                href="/#ecosystem"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[var(--c-line-strong)] px-3.5 py-2 font-body text-[13px] font-semibold text-[var(--c-ink)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
              >
                <ArrowLeft size={15} aria-hidden />
                Back to site
              </a>
            </div>
            <EcosystemMap />
          </div>
        ) : (
          <EcosystemGridView />
        )}
      </main>
      <Footer />
    </>
  )
}
