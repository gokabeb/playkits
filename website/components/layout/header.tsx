"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

const menuItems = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Go to home page",
    rotation: -6,
    hoverStyles: { bgColor: "#4d3ef4", textColor: "#ffffff" },
  },
  {
    label: "Playkits",
    href: "/playkits",
    ariaLabel: "View our playkits",
    rotation: 4,
    hoverStyles: { bgColor: "#f40b70", textColor: "#ffffff" },
  },
  {
    label: "Science",
    href: "/science",
    ariaLabel: "Learn about the science",
    rotation: -4,
    hoverStyles: { bgColor: "#fe9001", textColor: "#ffffff" },
  },
  {
    label: "Partners",
    href: "/partners",
    ariaLabel: "Partner with us",
    rotation: 6,
    hoverStyles: { bgColor: "#988c67", textColor: "#ffffff" },
  },
  {
    label: "About",
    href: "/about",
    ariaLabel: "About Playkits",
    rotation: -5,
    hoverStyles: { bgColor: "#7a6ef7", textColor: "#ffffff" },
  },
  {
    label: "Contact",
    href: "/contact",
    ariaLabel: "Contact us",
    rotation: 5,
    hoverStyles: { bgColor: "#f60929", textColor: "#ffffff" },
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  
  const animationDuration = 0.5
  const staggerDelay = 0.08

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
      rotate: menuItems[i]?.rotation || 0,
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
        delay: prefersReducedMotion ? 0 : (menuItems.length - i) * (staggerDelay * 0.5),
      },
    }),
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div 
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/playkitslogo.svg" 
              alt="Playkits logo" 
              className="h-full w-full object-cover"
            />
          </motion.div>
          <span className="hidden font-serif text-xl font-medium tracking-tight text-foreground sm:block">
            Playkits.org
          </span>
        </Link>

        {/* Bubble Menu */}
        <div ref={menuRef} className="relative">
          {/* Menu Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-md transition-colors hover:bg-card"
            aria-label="Toggle navigation menu"
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
                  <X className="h-5 w-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Bubble Menu Container */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute right-0 top-16 z-40 overflow-hidden rounded-3xl border border-border/50 bg-card/95 shadow-2xl backdrop-blur-xl"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="p-6">
                  {/* Logo in menu */}
                  <motion.div
                    className="mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: staggerDelay * 2, duration: animationDuration * 0.6 }}
                  >
                    <img 
                      src="/playkitslogo.svg" 
                      alt="Playkits logo" 
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Menu Items */}
                  <nav className="flex flex-col items-center gap-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        custom={index}
                        initial={{ opacity: 0, y: 20, rotate: 0 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotate: hoveredIndex === index ? 0 : item.rotation,
                          scale: hoveredIndex === index ? 1.08 : 1,
                        }}
                        exit={{ opacity: 0, y: 10, rotate: 0 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          delay: prefersReducedMotion ? 0 : index * staggerDelay,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-label={item.ariaLabel}
                          className="relative block overflow-hidden rounded-full px-8 py-3 text-center text-base font-medium transition-colors duration-200"
                          style={{
                            backgroundColor: hoveredIndex === index ? item.hoverStyles.bgColor : "transparent",
                            color: hoveredIndex === index ? item.hoverStyles.textColor : "#1e1c15",
                          }}
                        >
                          <motion.span
                            className="relative z-10"
                            animate={{
                              y: hoveredIndex === index ? -2 : 0,
                            }}
                            transition={{ duration: 0.15 }}
                          >
                            {item.label}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Donate CTA */}
                    <motion.div
                      custom={menuItems.length}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="exit"
                      className="mt-4 w-full"
                    >
                      <a
                        href="https://gofundme.com/playkits"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block w-full rounded-full bg-deep-twilight px-8 py-3.5 text-center text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Donate Now
                      </a>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
