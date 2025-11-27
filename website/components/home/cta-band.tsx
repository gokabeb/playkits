"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-warm-yellow py-32 lg:py-40">
      {/* Subtle decorative elements */}
      <motion.div
        className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-coral/20"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/10"
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-warm-yellow-foreground/60">
            Join the mission
          </span>

          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-warm-yellow-foreground sm:text-5xl lg:text-6xl text-balance">
            Every child deserves the chance to heal through play
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-warm-yellow-foreground/80">
            Your donation or partnership helps us reach more children with evidence-based tools for healing. 100% goes
            directly to programs.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-foreground px-10 text-base text-background hover:bg-foreground/90"
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
              className="h-14 px-8 text-base text-warm-yellow-foreground hover:bg-warm-yellow-foreground/10"
            >
              <Link href="/partners">Become a partner</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
