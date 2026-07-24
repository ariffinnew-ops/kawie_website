"use client"

import { useEffect, useRef } from "react"

/** Ambient connected-node canvas for the dark console hero. */
export default function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = window.devicePixelRatio || 1
    let W = 0
    let H = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    let raf = 0

    const resize = () => {
      W = canvas.width = canvas.offsetWidth * dpr
      H = canvas.height = canvas.offsetHeight * dpr
      nodes = Array.from({ length: Math.min(46, Math.floor(W / 34)) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const R = 150 * dpr
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!reduced) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > W) n.vx *= -1
          if (n.y < 0 || n.y > H) n.vy *= -1
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const d = Math.hypot(n.x - m.x, n.y - m.y)
          if (d < R) {
            ctx.strokeStyle = `rgba(45,212,191,${(1 - d / R) * 0.14})`
            ctx.lineWidth = dpr * 0.7
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }
        ctx.fillStyle = "rgba(45,212,191,.45)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, dpr * 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    />
  )
}
