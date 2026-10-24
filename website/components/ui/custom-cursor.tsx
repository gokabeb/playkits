"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const outerX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 })
  const outerY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 })

  const innerX = useSpring(mouseX, { stiffness: 800, damping: 30, mass: 0.3 })
  const innerY = useSpring(mouseY, { stiffness: 800, damping: 30, mass: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']")
      setIsPointer(!!isInteractive)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = ""
    }
  }, [mounted, prefersReducedMotion, mouseX, mouseY])

  if (!mounted || prefersReducedMotion) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-multiply"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 36 : 20,
          height: isPointer ? 36 : 20,
          backgroundColor: isPointer ? "rgba(194, 96, 63, 0.15)" : "transparent",
          borderColor: isPointer ? "rgba(194, 96, 63, 0.6)" : "rgba(27, 58, 45, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          border: "1.5px solid",
        }}
        aria-hidden="true"
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#C2603F",
        }}
        animate={{ opacity: isPointer ? 0 : 1, scale: isPointer ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        aria-hidden="true"
      />
    </>
  )
}
