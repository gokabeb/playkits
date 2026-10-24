"use client"

import { motion, useReducedMotion } from "framer-motion"
import { BookOpen, Package, GraduationCap, Network } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Research-backed design",
    description:
      "We review the latest neuroscience and child development research to inform every element of our kits.",
  },
  {
    icon: Package,
    number: "02",
    title: "Evidence-based playkits",
    description: "Each kit contains carefully selected items that support self-regulation and emotional processing.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Training & implementation",
    description: "We train partner organizations on how to effectively use playkits with the children they serve.",
  },
  {
    icon: Network,
    number: "04",
    title: "Scaling through partnerships",
    description: "By equipping existing organizations, we can reach more children without building new infrastructure.",
  },
]

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-background py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The Process</span>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-foreground lg:text-5xl">
            From research to real-world impact
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-forest/20 lg:left-1/2 lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Content - alternates sides */}
                <div
                  className={`relative pb-8 lg:pb-24 ${index % 2 === 0 ? "lg:text-right" : "lg:order-2 lg:text-left"}`}
                >
                  {/* Mobile timeline dot */}
                  <div className="absolute left-8 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-forest lg:hidden" />

                  {/* Number */}
                  <span className="font-mono text-sm text-gold">Step {step.number}</span>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-semibold text-foreground lg:text-3xl">{step.title}</h3>

                  {/* Description */}
                  <p className="mt-4 max-w-md text-muted-foreground lg:ml-auto lg:text-lg">{step.description}</p>
                </div>

                {/* Timeline node - center on desktop */}
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-lg ring-4 ring-background ring-forest/10"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <step.icon className="h-7 w-7 text-forest" />
                  </motion.div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={index % 2 === 0 ? "lg:order-2" : ""} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
