"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion, PanInfo } from "framer-motion"
import { Anchor, Users, GraduationCap, Globe, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const kits = [
  {
    icon: Anchor,
    name: "The Anchor",
    tagline: "Personal healing journey",
    description: "A carefully curated collection of sensory tools, comfort objects, and guided activities designed to help one child process trauma at their own pace. Each kit becomes a personal sanctuary of safety.",
    cost: "$18",
    serves: "1 child",
    gradient: "from-deep-twilight/20 via-deep-twilight-light/10 to-transparent",
    accentColor: "deep-twilight",
    glowColor: "rgba(77, 62, 244, 0.3)",
  },
  {
    icon: Users,
    name: "The Circle",
    tagline: "Healing through community",
    description: "Group activities and cooperative games that bring children together, fostering connection and shared resilience. Perfect for shelters and community centers where collective healing happens.",
    cost: "$85",
    serves: "15-20 children",
    gradient: "from-rosewood/20 via-rosewood-light/10 to-transparent",
    accentColor: "rosewood",
    glowColor: "rgba(244, 11, 112, 0.3)",
  },
  {
    icon: GraduationCap,
    name: "The Facilitator",
    tagline: "Empowering caregivers",
    description: "Comprehensive training materials, activity guides, and trauma-informed resources that equip staff to facilitate play-based healing with confidence and compassion.",
    cost: "$55",
    serves: "Staff training",
    gradient: "from-honey-bronze/20 via-honey-bronze-light/10 to-transparent",
    accentColor: "honey-bronze",
    glowColor: "rgba(254, 144, 1, 0.3)",
  },
  {
    icon: Globe,
    name: "The Resilience Pack",
    tagline: "Hope without borders",
    description: "Culturally-sensitive kits designed specifically for displaced children, featuring universal games and comfort items that transcend language barriers and create moments of joy.",
    cost: "$12",
    serves: "1 child",
    gradient: "from-olive-wood/20 via-olive-wood-light/10 to-transparent",
    accentColor: "olive-wood",
    glowColor: "rgba(152, 140, 103, 0.4)",
  },
]

interface KitTeaserProps {
  isStandalone?: boolean
}

export function KitTeaser({ isStandalone = false }: KitTeaserProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const navigate = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= kits.length) return
    setDirection(newIndex > activeIndex ? 1 : -1)
    setActiveIndex(newIndex)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 50
    if (info.offset.x < -threshold && activeIndex < kits.length - 1) {
      navigate(activeIndex + 1)
    } else if (info.offset.x > threshold && activeIndex > 0) {
      navigate(activeIndex - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(activeIndex - 1)
      if (e.key === "ArrowRight") navigate(activeIndex + 1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  const activeKit = kits[activeIndex]

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section className={`relative overflow-hidden bg-gradient-to-b from-background via-deep-twilight-light/10 to-background ${isStandalone ? 'pt-28 pb-20 lg:pt-36 lg:pb-28' : 'py-24 lg:py-32'}`}>
      {/* Animated background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-deep-twilight/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-honey-bronze/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Playkits</span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-foreground lg:text-5xl">
            Tools designed for healing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Each kit is thoughtfully crafted to meet children where they are in their healing journey.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-4xl"
          style={{ perspective: "1200px" }}
        >
          {/* Navigation arrows */}
          <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 lg:-left-16">
            <motion.button
              onClick={() => navigate(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
          </div>
          <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 lg:-right-16">
            <motion.button
              onClick={() => navigate(activeIndex + 1)}
              disabled={activeIndex === kits.length - 1}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Main carousel card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={prefersReducedMotion ? {} : cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="relative cursor-grab active:cursor-grabbing"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeKit.gradient} p-1`}
                style={{
                  boxShadow: `0 25px 50px -12px ${activeKit.glowColor}`,
                }}
              >
                <div className="relative rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12">
                  {/* Animated accent line */}
                  <motion.div
                    className={`absolute left-0 top-0 h-1 bg-${activeKit.accentColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Icon and visual */}
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        className={`relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br ${activeKit.gradient}`}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      >
                        {/* Animated rings */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl border-2 border-${activeKit.accentColor}/30`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <activeKit.icon className={`h-16 w-16 text-${activeKit.accentColor}`} />
                      </motion.div>

                      {/* Price tag */}
                      <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="font-serif text-5xl font-medium text-foreground">{activeKit.cost}</span>
                        <span className="ml-2 text-sm text-muted-foreground">/ kit</span>
                        <p className="mt-2 text-sm text-muted-foreground">Serves {activeKit.serves}</p>
                      </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-center">
                      <motion.p
                        className={`text-sm font-medium uppercase tracking-wider text-${activeKit.accentColor}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeKit.tagline}
                      </motion.p>

                      <motion.h3
                        className="mt-3 font-serif text-3xl font-medium text-foreground lg:text-4xl"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        {activeKit.name}
                      </motion.h3>

                      <motion.p
                        className="mt-6 text-lg leading-relaxed text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {activeKit.description}
                      </motion.p>

                      <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button asChild className="rounded-full">
                          <Link href="/playkits">
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="mt-10 flex justify-center gap-3">
            {kits.map((kit, index) => (
              <motion.button
                key={kit.name}
                onClick={() => navigate(index)}
                className={`relative h-3 overflow-hidden rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-10" : "w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${kit.name}`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    index === activeIndex
                      ? `bg-${kit.accentColor}`
                      : "bg-muted-foreground/30"
                  }`}
                />
                {index === activeIndex && (
                  <motion.span
                    className={`absolute inset-0 rounded-full bg-${kit.accentColor}`}
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Kit preview thumbnails */}
          <motion.div
            className="mt-8 hidden justify-center gap-4 lg:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {kits.map((kit, index) => (
              <motion.button
                key={kit.name}
                onClick={() => navigate(index)}
                className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  index === activeIndex
                    ? `bg-${kit.accentColor}/10 ring-2 ring-${kit.accentColor}/30`
                    : "bg-muted/50 hover:bg-muted"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <kit.icon
                  className={`h-5 w-5 transition-colors ${
                    index === activeIndex
                      ? `text-${kit.accentColor}`
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                <span
                  className={`text-sm font-medium transition-colors ${
                    index === activeIndex ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {kit.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* View all link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="/playkits">
              View all playkits
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
