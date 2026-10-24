"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-terracotta py-32 lg:py-40">
      {/* Decorative watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <span className="font-handwritten text-[20rem] font-bold leading-none text-cream/5 -rotate-12">
          heal
        </span>
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-cream/10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-forest/10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
            Join the mission
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-7xl text-balance">
            Every child deserves to heal.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-cream/80">
            Your donation or partnership helps us reach more children with evidence-based tools for healing. 100% goes
            directly to programs.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-cream px-10 text-base text-terracotta hover:bg-cream/90"
            >
              <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                Donate now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-14 px-8 text-base text-cream/80 hover:bg-cream/10 border border-cream/30"
            >
              <Link href="/partners">Become a partner</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
