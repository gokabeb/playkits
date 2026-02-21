"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-12 lg:gap-8 lg:py-0">
          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow / Sub-label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                A 100% volunteer-run nonprofit
              </span>
            </motion.div>

            {/* Main headline with dramatic typography */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Healing through
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">play</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-honey-bronze-light/60 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>

            {/* Supporting description with generous whitespace */}
            <motion.p variants={itemVariants} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We design evidence-based playkits and train organizations to use them with children affected by trauma.
              Every dollar goes directly to creating tools for healing.
            </motion.p>

            {/* CTAs with clear visual hierarchy */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-14 rounded-full px-8 text-base">
                <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                  Fund a playkit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 px-8 text-base text-muted-foreground hover:text-foreground"
              >
                <Link href="/science">Explore the science</Link>
              </Button>
            </motion.div>

            {/* Trust indicators as subtle sub-text */}
            <motion.div variants={itemVariants} className="mt-16 flex flex-wrap gap-8 border-t border-border pt-8">
              {[
                { label: "Evidence-based", sublabel: "Grounded in neuroscience" },
                { label: "Partner-driven", sublabel: "Scaling through networks" },
                { label: "Transparent", sublabel: "100% to programs" },
                { label: "501(c)(3) Registered", sublabel: "Tax-deductible donations" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6 xl:col-span-7"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[70vh]">
              {/* Main image placeholder */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl bg-deep-twilight-light/30">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80&auto=format&fit=crop"
                  alt="Children engaged in therapeutic play"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-xl lg:-left-12"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Impact model</p>
                <p className="mt-1 font-serif text-3xl font-medium text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">to playkits, not overhead</p>
              </motion.div>

              {/* Decorative shape */}
              <motion.div
                className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-rosewood/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
