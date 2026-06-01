"use client"

import { useCallback, useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import CircuitBackground from "@/components/circuit-background"

const ADMIN_PASSWORD = "kawie2026"

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [shake, setShake] = useState(false)

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setPassword("")
    setError("")
    setShake(false)
  }, [])

  useEffect(() => {
    if (!modalOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [modalOpen, closeModal])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      document.cookie = "kawie-auth=granted; path=/; max-age=86400"
      window.location.href = "/home"
      return
    }
    setError("Incorrect password")
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  return (
    <main
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <CircuitBackground />
      <HeroSection onOpenAdmin={() => setModalOpen(true)} />

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-access-title"
            className={`w-full max-w-sm rounded-xl border p-8 ${shake ? "admin-shake-kawie" : ""}`}
            style={{
              background: "#0f1526",
              borderColor: "rgba(255,255,255,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="admin-access-title"
              className="mb-6 text-center text-lg font-semibold text-white"
            >
              Admin Access
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                placeholder="Password"
                autoFocus
                className="w-full rounded-lg border px-4 py-3 text-sm text-white outline-none focus:border-[#00c6d7]"
                style={{
                  background: "#080b14",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              />
              {error && (
                <p className="text-center text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg py-3 text-sm font-semibold text-[#080b14] transition-opacity hover:opacity-90"
                style={{ background: "#00c6d7" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes admin-shake-kawie {
              0%, 100% { transform: translateX(0); }
              20%, 60% { transform: translateX(-8px); }
              40%, 80% { transform: translateX(8px); }
            }
            .admin-shake-kawie { animation: admin-shake-kawie 0.45s ease-in-out; }
          `,
        }}
      />
    </main>
  )
}
