"use client"

import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  School,
  Home,
  Building2,
  Globe,
  Phone,
  Package,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { impact } from "@/lib/impact"

const partnerTypes = [
  {
    icon: School,
    name: "Schools",
    description: "Trauma-informed play in classrooms",
    color: "forest",
    glowColor: "rgba(77, 62, 244, 0.15)",
  },
  {
    icon: Home,
    name: "Foster Care",
    description: "Tools for children in transition",
    color: "terracotta",
    glowColor: "rgba(244, 11, 112, 0.12)",
  },
  {
    icon: Building2,
    name: "Shelters",
    description: "Regulation tools in crisis",
    color: "gold",
    glowColor: "rgba(254, 144, 1, 0.15)",
  },
  {
    icon: Globe,
    name: "Humanitarian",
    description: "Culturally-sensitive kits",
    color: "charcoal-muted",
    glowColor: "rgba(152, 140, 103, 0.15)",
  },
]

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery call",
    description: "Learn your needs",
  },
  {
    icon: Package,
    step: "02",
    title: "Kit selection",
    description: "Customize for context",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Staff training",
    description: "Effective implementation",
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Ongoing support",
    description: "Regular check-ins",
  },
]

export default function PartnersPage() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden bg-background pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-forest/10 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-12 text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                <motion.span
                  variants={itemVariants}
                  className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Partner With Us
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                  Bring healing
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-terracotta">through play</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-gold/40 -z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
                >
                  Evidence-based tools and training for your organization.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-forest"
                >
                  Join {impact.partnerOrgs}+ organizations · {impact.kitsDelivered}+ kits delivered
                </motion.p>

                <motion.div variants={itemVariants} className="mt-10">
                  <Button asChild size="lg" className="h-14 rounded-full px-8 text-base">
                    <Link href="/contact">
                      Start a conversation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Types - Glowing Cards */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Who We Work With</span>
              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                Organizations making a difference
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-${type.color}/20 via-${type.color}/10 to-transparent p-1`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  style={{ boxShadow: `0 20px 40px -12px ${type.glowColor}` }}
                >
                  <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8 transition-colors group-hover:bg-card">
                    {/* Animated ring on hover */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl border-2 border-${type.color}/0 group-hover:border-${type.color}/20`}
                      initial={false}
                      whileHover={{
                        scale: [1, 1.02, 1],
                        transition: { duration: 0.6 },
                      }}
                    />

                    <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${type.color}/10 text-${type.color} transition-transform group-hover:scale-110`}>
                      <type.icon className="h-7 w-7" />
                    </div>

                    <h3 className="font-serif text-xl font-medium text-foreground">{type.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - Horizontal Timeline */}
        <section className="bg-gradient-to-r from-gold/5 via-cream to-gold/5 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The Process</span>
              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                Simple partnership journey
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

              <div className="grid gap-8 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-lg ring-4 ring-background">
                      <step.icon className="h-7 w-7 text-forest" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-medium text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta/20 via-terracotta/10 to-transparent p-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ boxShadow: "0 25px 50px -12px rgba(194, 91, 61, 0.15)" }}
            >
              <div className="relative rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12 text-center">
                <Heart className="mx-auto mb-6 h-12 w-12 text-terracotta" />

                <h3 className="font-serif text-2xl font-medium text-foreground lg:text-3xl">
                  Ready to get started?
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                  Schedule a call to learn how we can support your organization.
                </p>

                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      Partner inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Decorative */}
                <motion.div
                  className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-terracotta/10"
                  initial={{ scale: 0, rotate: -12 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
