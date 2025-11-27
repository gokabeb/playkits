"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const concepts = [
  {
    title: "Breath tools",
    description: "Activate the vagal brake for calm",
  },
  {
    title: "Sensory items",
    description: "Ground through proprioception",
  },
  {
    title: "Symbolic objects",
    description: "Create safe emotional distance",
  },
  {
    title: "Cooperative games",
    description: "Build empathy and regulation",
  },
]

export function ScienceTeaser() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-foreground py-32 lg:py-40">
      {/* Gradient orbs */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Text content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-background/60">The Science</span>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-background lg:text-5xl">
              Play isn't just play—it's a neural platform for recovery
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-background/70">
              Our playkits are grounded in the Neurosequential Model of Therapeutics and Polyvagal Theory. Each item is
              selected because it activates specific neurobiological pathways essential for healing from trauma.
            </p>

            <div className="mt-12">
              <Button
                asChild
                variant="secondary"
                className="rounded-full bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/science">
                  Explore the research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Science concept cards */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
              },
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  className="group rounded-2xl bg-background/5 p-6 backdrop-blur-sm transition-colors hover:bg-background/10"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 17 } }
                  }
                >
                  <span className="mb-4 block font-mono text-xs text-background/40">0{index + 1}</span>
                  <h3 className="text-lg font-medium text-background">{concept.title}</h3>
                  <p className="mt-1 text-sm text-background/60">{concept.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
