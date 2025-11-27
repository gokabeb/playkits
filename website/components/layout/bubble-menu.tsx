"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface MenuItem {
  label: string
  href: string
  ariaLabel: string
  rotation: number
  hoverStyles: {
    bgColor: string
    textColor: string
  }
}

interface BubbleMenuProps {
  logo: React.ReactNode
  items: MenuItem[]
  ctaItem?: {
    label: string
    href: string
    bgColor: string
    textColor: string
  }
  menuAriaLabel?: string
  menuBg?: string
  menuContentColor?: string
  animationDuration?: number
  staggerDelay?: number
}

export function BubbleMenu({
  logo,
  items,
  ctaItem,
  menuAriaLabel = "Toggle navigation",
  menuBg = "#ffffff",
  menuContentColor = "#111111",
  animationDuration = 0.5,
  staggerDelay = 0.08,
}: BubbleMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const menuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: animationDuration * 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      rotate: 0,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: items[i]?.rotation || 0,
      transition: {
        duration: animationDuration * 0.8,
        delay: prefersReducedMotion ? 0 : i * staggerDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: 10,
      transition: {
        duration: animationDuration * 0.4,
        delay: prefersReducedMotion ? 0 : (items.length - i) * (staggerDelay * 0.5),
      },
    }),
  }

  return (
    <div ref={menuRef} className="relative">
      {/* Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-colors hover:bg-secondary"
        aria-label={menuAriaLabel}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" style={{ color: menuContentColor }} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" style={{ color: menuContentColor }} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Bubble Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-16 z-40 overflow-hidden rounded-3xl border border-border shadow-2xl"
            style={{ backgroundColor: menuBg }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6">
              {/* Logo */}
              <motion.div
                className="mb-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: staggerDelay * 2, duration: animationDuration * 0.6 }}
              >
                {logo}
              </motion.div>

              {/* Menu Items */}
              <nav className="flex flex-col items-center gap-2">
                {items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    whileHover={{ rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-label={item.ariaLabel}
                      className="relative block overflow-hidden rounded-full px-6 py-2.5 text-center text-sm font-medium transition-all duration-300"
                      style={{
                        backgroundColor: hoveredIndex === index ? item.hoverStyles.bgColor : "transparent",
                        color: hoveredIndex === index ? item.hoverStyles.textColor : menuContentColor,
                        transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <motion.span
                        className="relative z-10"
                        animate={{
                          y: hoveredIndex === index ? -2 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Button */}
                {ctaItem && (
                  <motion.div
                    custom={items.length}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                    className="mt-4 w-full"
                  >
                    <a
                      href={ctaItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: ctaItem.bgColor,
                        color: ctaItem.textColor,
                      }}
                    >
                      {ctaItem.label}
                    </a>
                  </motion.div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

