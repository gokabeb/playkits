"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VagusPathway } from "@/components/science/vagus-pathway"

const concepts = [
  { title: "Breath tools",       description: "Activate the vagal brake for calm" },
  { title: "Sensory items",      description: "Ground through proprioception" },
  { title: "Symbolic objects",   description: "Create safe emotional distance" },
  { title: "Cooperative games",  description: "Build empathy and regulation" },
]

export function ScienceTeaser() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="texture-grain relative overflow-hidden bg-forest py-32 lg:py-40">
      {/* Gradient orbs */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-forest-light/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">The Science</span>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-cream lg:text-5xl">
              Play isn't just play — it's a neural platform for recovery
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-cream/70">
              Our playkits are grounded in the Neurosequential Model of Therapeutics and Polyvagal Theory. Each item is
              selected because it activates specific neurobiological pathways essential for healing from trauma.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept.title}
                  className="group rounded-2xl bg-cream/10 p-5 backdrop-blur-sm transition-colors hover:bg-cream/15"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                >
                  <span className="mb-2 block font-mono text-xs text-cream/40">0{index + 1}</span>
                  <h3 className="text-sm font-semibold text-cream">{concept.title}</h3>
                  <p className="mt-1 text-xs text-cream/60">{concept.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="rounded-full bg-cream text-forest hover:bg-cream/90">
                <Link href="/science">
                  Explore the research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Vagus pathway diagram */}
          <motion.div
            className="flex items-center justify-center lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full rounded-3xl bg-cream/5 p-8 backdrop-blur-sm border border-cream/10">
              <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                The vagus nerve pathway
              </p>
              <VagusPathway />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
