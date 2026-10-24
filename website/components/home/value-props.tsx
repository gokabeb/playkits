"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Brain, Users, PiggyBank, Heart } from "lucide-react"

const valueProps = [
  {
    icon: Brain,
    number: "01",
    title: "Evidence-based playkits",
    description: "Every item is selected based on neuroscience research and developmental psychology principles.",
  },
  {
    icon: Users,
    number: "02",
    title: "Training for organizations",
    description: "We equip frontline staff with implementation guides, cards, and ongoing support.",
  },
  {
    icon: PiggyBank,
    number: "03",
    title: "100% to kits, not salaries",
    description: "We're volunteer-run. Every dollar you donate creates tangible tools for healing.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Trauma-informed design",
    description: "Each element supports self-regulation, emotional processing, and safety.",
  },
]

export function ValueProps() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header with asymmetric layout */}
        <div className="mb-20 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Approach</span>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-medium leading-tight text-foreground lg:text-5xl">
              Why Playkits work
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Our approach combines rigorous research with practical implementation through trusted partner
              organizations.
            </p>
          </div>
        </div>

        {/* Value props grid with staggered animation */}
        <motion.div
          className="grid gap-px overflow-hidden rounded-3xl bg-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                className="group relative bg-card p-8 transition-colors hover:bg-forest/5 lg:p-10"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
              >
                {/* Number indicator */}
                <span className="mb-6 block font-mono text-sm text-gold">{prop.number}</span>

                {/* Icon with hover effect */}
                <motion.div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-forest transition-colors group-hover:bg-terracotta group-hover:text-cream"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <prop.icon className="h-6 w-6" />
                </motion.div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">{prop.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
