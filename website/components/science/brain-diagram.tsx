"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const layers = [
  {
    label: "Cortex",
    sublabel: "Reasoning & planning",
    color: "#1B3A2D",
    textColor: "#F5EFE0",
    delay: 0,
  },
  {
    label: "Limbic System",
    sublabel: "Emotions & attachment",
    color: "#D4A843",
    textColor: "#1A1A1A",
    delay: 0.3,
  },
  {
    label: "Brainstem",
    sublabel: "Fight / flight / freeze",
    color: "#C2603F",
    textColor: "#F5EFE0",
    delay: 0.6,
  },
]

export function BrainDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="flex flex-col items-center gap-5" aria-label="Three-layer brain model diagram">
      <svg
        viewBox="0 0 400 310"
        className="w-full max-w-sm"
        aria-hidden="true"
        role="img"
      >
        <title>Three-layer brain model: Cortex, Limbic System, Brainstem</title>

        <defs>
          <radialGradient id="cortex-grad" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#2D5C47" />
            <stop offset="100%" stopColor="#1B3A2D" />
          </radialGradient>
          <radialGradient id="limbic-grad" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#E8C870" />
            <stop offset="100%" stopColor="#D4A843" />
          </radialGradient>
          <radialGradient id="brainstem-grad" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#D4835F" />
            <stop offset="100%" stopColor="#C2603F" />
          </radialGradient>
          <filter id="brain-shadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1B3A2D" floodOpacity="0.18" />
          </filter>
          <marker id="brain-arrowhead-up" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
            <polygon points="0 6, 4 0, 8 6" fill="#D4C9A8" opacity="0.7" />
          </marker>
        </defs>

        {/* Cortex — outer */}
        <motion.ellipse
          cx="210" cy="162" rx="162" ry="126"
          fill="url(#cortex-grad)"
          stroke="#0F2219"
          strokeWidth="1.5"
          filter="url(#brain-shadow)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0 }}
          style={{ originX: "210px", originY: "162px" }}
        />

        {/* Limbic — middle */}
        <motion.ellipse
          cx="210" cy="174" rx="108" ry="84"
          fill="url(#limbic-grad)"
          stroke="#B08828"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.25 }}
          style={{ originX: "210px", originY: "174px" }}
        />

        {/* Brainstem — inner */}
        <motion.ellipse
          cx="210" cy="190" rx="60" ry="46"
          fill="url(#brainstem-grad)"
          stroke="#A04E32"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.5 }}
          style={{ originX: "210px", originY: "190px" }}
        />

        {/* Cortex label — outer ring, top area (y: 36 → 90) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.8 }}
        >
          <text x="210" y="64" textAnchor="middle" fill="#F5EFE0" fontSize="11" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">
            CORTEX
          </text>
          <text x="210" y="80" textAnchor="middle" fill="#F5EFE0" fontSize="9.5" fontFamily="DM Sans, sans-serif" opacity="0.75">
            Reasoning &amp; planning
          </text>
        </motion.g>

        {/* Limbic label — middle ring (y: 90 → 144) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 1.0 }}
        >
          <text x="210" y="112" textAnchor="middle" fill="#1A1A1A" fontSize="11" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">
            LIMBIC
          </text>
          <text x="210" y="128" textAnchor="middle" fill="#1A1A1A" fontSize="9.5" fontFamily="DM Sans, sans-serif" opacity="0.75">
            Emotions &amp; attachment
          </text>
        </motion.g>

        {/* Brainstem label — inner ellipse (cy=190) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 1.2 }}
        >
          <text x="210" y="185" textAnchor="middle" fill="#F5EFE0" fontSize="10" fontWeight="700" fontFamily="DM Sans, sans-serif" letterSpacing="1.5">
            BRAINSTEM
          </text>
          <text x="210" y="200" textAnchor="middle" fill="#F5EFE0" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.85">
            Fight / flight / freeze
          </text>
        </motion.g>

        {/* Bottom-up regulation arrow */}
        <motion.path
          d="M 24 280 L 24 42"
          stroke="#D4C9A8" strokeWidth="1.5" strokeDasharray="4 3"
          markerEnd="url(#brain-arrowhead-up)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 1.4 }}
        />
        <motion.text
          x="14" y="165" textAnchor="middle"
          fill="#8A7E6A" fontSize="9" fontFamily="DM Sans, sans-serif"
          transform="rotate(-90, 14, 165)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 1.6 }}
        >
          Bottom-up regulation
        </motion.text>
      </svg>

      {/* Legend */}
      <motion.div
        className="flex flex-wrap justify-center gap-5 text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 1.6 }}
      >
        {layers.map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full flex-shrink-0 ring-1 ring-black/10" style={{ backgroundColor: l.color }} />
            <span className="text-xs text-muted-foreground">{l.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
