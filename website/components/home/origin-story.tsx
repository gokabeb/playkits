"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export function OriginStory() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="texture-grain relative overflow-hidden bg-forest py-32 lg:py-40">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-forest-light/20 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left — quote and story */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold/70">
              The founder's story
            </span>

            {/* Large handwritten pull quote */}
            <blockquote className="mt-8">
              <p className="font-serif italic text-3xl leading-relaxed text-gold lg:text-4xl">
                "Catan wasn't only about winning or losing — it was about learning, bonding and finding sanctuary together."
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-gold/40" />
                <cite className="not-italic text-sm font-medium text-cream/70">
                  Karan Gupta, KQED Perspectives
                </cite>
              </footer>
            </blockquote>

            <p className="mt-10 text-lg leading-relaxed text-cream/70">
              When Karan lost his father, words weren't enough. But sitting down to play Catan with family
              became an unexpected bridge back to the world — a space where grief could breathe, where
              connection was possible without having to explain everything.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              That personal experience became a mission: to design evidence-based playkits that bring
              the same healing power of play to children who have experienced trauma.
            </p>

            {/* KQED link */}
            <motion.a
              href="https://www.kqed.org/perspectives/201601145776/karan-gupta-more-than-a-board-game"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-terracotta/40 bg-terracotta/10 px-6 py-4 text-cream/90 transition-colors hover:bg-terracotta/20 hover:border-terracotta/60"
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="flex flex-col">
                <span className="text-sm font-medium">Hear the full story on KQED →</span>
                <span className="text-xs text-cream/50 mt-0.5">KQED Perspectives, April 2025</span>
              </span>
              <ExternalLink className="h-4 w-4 text-terracotta flex-shrink-0" />
            </motion.a>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-forest-light/40 shadow-2xl">
              <img
                src="/karan-playing-catan.png"
                alt="Karan playing Catan — the board game that sparked Playkits"
                className="h-full w-full object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/10 to-transparent" />
            </div>

            {/* Floating label */}
            <motion.div
              className="absolute -bottom-6 -right-6 rounded-2xl bg-gold px-6 py-4 shadow-xl lg:-right-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-charcoal/60">Founded</p>
              <p className="mt-1 font-serif text-2xl font-medium text-charcoal">Through play</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
