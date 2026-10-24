"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
  phase: number
}

const COLORS = [
  "rgba(27, 58, 45, 0.25)",    // forest
  "rgba(194, 96, 63, 0.18)",   // terracotta
  "rgba(212, 168, 67, 0.22)",  // gold
  "rgba(237, 231, 211, 0.35)", // cream-dark
]

interface FloatingParticlesProps {
  className?: string
  count?: number
}

export function FloatingParticles({ className = "", count }: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || prefersReducedMotion) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let particles: Particle[] = []

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      initParticles(w, h)
    }

    const initParticles = (w: number, h: number) => {
      const particleCount = count ?? (w < 640 ? 20 : 40)
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (time: number) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy + Math.sin(time * 0.001 + p.phase) * 0.15

        if (p.x < -p.radius) p.x = w + p.radius
        if (p.x > w + p.radius) p.x = -p.radius
        if (p.y < -p.radius) p.y = h + p.radius
        if (p.y > h + p.radius) p.y = -p.radius

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    resize()
    animFrameRef.current = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [prefersReducedMotion, count])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      role="presentation"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
