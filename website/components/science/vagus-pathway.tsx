"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const pathPoints = [
  { x: 200, y: 40,  label: "Brainstem",              sublabel: "Vagal nerve origin" },
  { x: 200, y: 110, label: "Heart",                   sublabel: "Heart rate variability" },
  { x: 200, y: 195, label: "Lungs",                   sublabel: "Breath regulation" },
  { x: 200, y: 270, label: "Gut",                     sublabel: "Gut-brain axis" },
]

const PATH = "M 200 40 C 200 60 185 80 200 110 C 215 140 185 160 200 195 C 215 220 185 245 200 270"

export function VagusPathway() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="flex justify-center" aria-label="Vagus nerve pathway diagram">
      <svg
        viewBox="0 0 400 320"
        className="w-full max-w-xs"
        aria-hidden="true"
        role="img"
      >
        <title>Vagus nerve pathway from brainstem to gut</title>

        {/* Background path (grey) */}
        <path d={PATH} stroke="#D4C9A8" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Animated draw path (forest green) */}
        <motion.path
          d={PATH}
          stroke="#1B3A2D"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 2.5, ease: "easeInOut" }}
        />

        {/* Traveling dot */}
        {!prefersReducedMotion && isInView && (
          <motion.circle
            r="5"
            fill="#D4A843"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, delay: 2.5, ease: "easeInOut" }}
            style={{
              offsetPath: `path("${PATH}")`,
            } as React.CSSProperties}
          />
        )}

        {/* Station nodes and labels */}
        {pathPoints.map((pt, i) => (
          <motion.g key={pt.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.5 + i * 0.5 }}
            style={{ originX: `${pt.x}px`, originY: `${pt.y}px` }}
          >
            {/* Node */}
            <circle cx={pt.x} cy={pt.y} r="8" fill="#F5EFE0" stroke="#1B3A2D" strokeWidth="2" />
            <circle cx={pt.x} cy={pt.y} r="4" fill="#1B3A2D" />

            {/* Label */}
            <text
              x={pt.x + 18} y={pt.y - 4}
              fill="#1A1A1A" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif"
            >
              {pt.label}
            </text>
            <text
              x={pt.x + 18} y={pt.y + 10}
              fill="#5C5445" fontSize="10" fontFamily="DM Sans, sans-serif"
            >
              {pt.sublabel}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
