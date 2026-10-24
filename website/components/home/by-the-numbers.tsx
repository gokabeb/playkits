"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CountUp } from "@/components/ui/count-up"
import { impact } from "@/lib/impact"

const stats = [
  {
    value: null,
    countEnd: impact.kitsDelivered,
    countSuffix: "+",
    label: "playkits delivered",
    sublabel: "Into the hands of children who need them",
    color: "text-terracotta",
    bg: "bg-terracotta/5",
  },
  {
    value: null,
    countEnd: impact.partnerOrgs,
    countSuffix: "+",
    label: "partner organizations",
    sublabel: "Trusted organizations putting our kits to work",
    color: "text-forest",
    bg: "bg-forest/5",
  },
  {
    value: null,
    countEnd: 100,
    countSuffix: "%",
    label: "of donations go to programs",
    sublabel: "Zero overhead. Zero salaries.",
    color: "text-gold",
    bg: "bg-gold/5",
  },
  {
    value: "501(c)(3)",
    countEnd: null,
    label: "registered nonprofit",
    sublabel: "Tax-deductible donations",
    color: "text-forest",
    bg: "bg-forest/5",
  },
]

export function ByTheNumbers() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            By the numbers
          </span>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`rounded-3xl ${stat.bg} p-8 lg:p-10`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className={`whitespace-nowrap font-serif text-4xl font-medium xl:text-5xl ${stat.color}`}>
                {stat.countEnd !== null ? (
                  <CountUp end={stat.countEnd} suffix={stat.countSuffix ?? ""} />
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-3 text-base font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
