"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const zones = [
  {
    label: "Hyperarousal",
    sublabel: "Panic, rage, overwhelm",
    y: 18, height: 74,
    fill: "url(#hyper-grad)",
    stroke: "#C2603F",
    textColor: "#7A3020",
    accentColor: "#C2603F",
  },
  {
    label: "Window of Tolerance",
    sublabel: "Safe, regulated — able to learn & heal",
    y: 108, height: 100,
    fill: "url(#optimal-grad)",
    stroke: "#1B3A2D",
    textColor: "#1B3A2D",
    accentColor: "#1B3A2D",
    optimal: true,
  },
  {
    label: "Hypoarousal",
    sublabel: "Shutdown, numbness, dissociation",
    y: 224, height: 74,
    fill: "url(#hypo-grad)",
    stroke: "#3D3D3D",
    textColor: "#3D3D3D",
    accentColor: "#3D3D3D",
  },
]

export function ToleranceWindow() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref} aria-label="Window of Tolerance diagram">
      <svg
        viewBox="0 0 520 328"
        className="w-full max-w-xl mx-auto"
        aria-hidden="true"
        role="img"
      >
        <title>Window of Tolerance: Hyperarousal, Optimal Zone, Hypoarousal</title>

        <defs>
          <linearGradient id="hyper-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C2603F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C2603F" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="optimal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1B3A2D" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1B3A2D" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hypo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3D3D3D" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#3D3D3D" stopOpacity="0.03" />
          </linearGradient>
          <marker id="tw-arrow-down" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
            <polygon points="0 0, 8 0, 4 6" fill="#C2603F" />
          </marker>
          <marker id="tw-arrow-up" markerWidth="8" markerHeight="6" refX="4" refY="0" orient="auto">
            <polygon points="0 6, 8 6, 4 0" fill="#3D3D3D" />
          </marker>
        </defs>

        {/* Y-axis label */}
        <text
          x="18" y="165" textAnchor="middle"
          fill="#8A7E6A" fontSize="10" fontFamily="DM Sans, sans-serif"
          transform="rotate(-90, 18, 165)"
        >
          Arousal Level
        </text>

        {/* Zones */}
        {zones.map((zone, i) => (
          <motion.g key={zone.label}
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.2 }}
          >
            {/* Background fill */}
            <rect
              x="38" y={zone.y} width="430" height={zone.height}
              fill={zone.fill}
              rx="8"
            />
            {/* Left accent bar */}
            <rect
              x="38" y={zone.y} width="4" height={zone.height}
              fill={zone.accentColor}
              opacity={zone.optimal ? 1 : 0.7}
              rx="2"
            />
            {/* Border */}
            <rect
              x="38" y={zone.y} width="430" height={zone.height}
              fill="none"
              stroke={zone.stroke}
              strokeWidth={zone.optimal ? "1.5" : "1"}
              strokeOpacity={zone.optimal ? "0.5" : "0.3"}
              rx="8"
            />

            {/* Label */}
            <text
              x="54" y={zone.y + 28}
              fill={zone.textColor} fontSize={zone.optimal ? "13" : "12"} fontWeight="700"
              fontFamily="DM Sans, sans-serif" letterSpacing="0.3"
            >
              {zone.label}
            </text>
            <text
              x="54" y={zone.y + 46}
              fill={zone.textColor} fontSize="10.5" fontFamily="DM Sans, sans-serif" opacity="0.75"
            >
              {zone.sublabel}
            </text>

            {/* Pulse dot on optimal zone */}
            {zone.optimal && isInView && (
              <motion.circle
                cx="450" cy={zone.y + zone.height / 2}
                r="5"
                fill="#1B3A2D"
                opacity="0.6"
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0.15, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.g>
        ))}

        {/* Regulation arrows — moved inward to fit within viewBox */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.8 }}
        >
          {/* Down arrow from hyperarousal toward tolerance */}
          <line x1="476" y1="60" x2="476" y2="106" stroke="#C2603F" strokeWidth="1.5" markerEnd="url(#tw-arrow-down)" />
          <text x="480" y="88" fill="#C2603F" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.85">regulate</text>

          {/* Up arrow from hypoarousal toward tolerance */}
          <line x1="476" y1="268" x2="476" y2="210" stroke="#3D3D3D" strokeWidth="1.5" markerEnd="url(#tw-arrow-up)" />
          <text x="480" y="244" fill="#3D3D3D" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.85">activate</text>
        </motion.g>

        {/* Caption */}
        <motion.text
          x="253" y="320" textAnchor="middle"
          fill="#8A7E6A" fontSize="10" fontFamily="DM Sans, sans-serif"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 1 }}
        >
          Play-based tools help children return to the window of tolerance
        </motion.text>
      </svg>
    </div>
  )
}
