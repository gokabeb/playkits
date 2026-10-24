"use client"

import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Quote, Brain, Shield, Heart, Users, ArrowRight, ExternalLink, Linkedin } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Brain,
    title: "Evidence-first",
    color: "forest",
  },
  {
    icon: Shield,
    title: "Dignity & safety",
    color: "gold",
  },
  {
    icon: Heart,
    title: "Radical transparency",
    color: "terracotta",
  },
  {
    icon: Users,
    title: "Co-creation",
    color: "terracotta-light",
  },
]

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
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

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Minimal */}
        <section className="relative min-h-screen overflow-hidden bg-background pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-forest/10 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-0">
              {/* Left: Text */}
              <motion.div
                className="lg:col-span-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  variants={itemVariants}
                  className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                Our Story
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                  Play as a
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-terracotta">language</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-gold/60 -z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                  </span>
                  <br />
                  of healing
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
                >
                  Born from personal loss. Built on neuroscience. Designed for every child who needs it.
                </motion.p>
              </motion.div>

              {/* Right: Quote Card */}
              <motion.div
                className="relative lg:col-span-7"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hero photo */}
                <div className="mb-6 aspect-video overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop"
                    alt="Children laughing and playing together"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest/15 via-forest/10 to-transparent p-1"
                  style={{ boxShadow: "0 25px 50px -12px rgba(77, 62, 244, 0.15)" }}
                >
                  <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12">
                    <Quote className="mb-6 h-10 w-10 text-forest/30" />

                    <blockquote className="font-serif text-2xl font-medium italic leading-relaxed text-foreground lg:text-3xl">
                      "play isn't just about escaping reality and pretending, but about connecting with it differently"
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 font-serif text-xl font-medium text-forest">
                        K
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Karan Gupta</p>
                        <p className="text-sm text-muted-foreground">Founder</p>
                        <a
                          href="https://www.linkedin.com/in/karanguptasf/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-forest transition-colors"
                        >
                          <Linkedin className="h-3 w-3" />
                          linkedin.com/in/karanguptasf
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Karan's Story - Minimal Cards */}
        <section className="relative overflow-hidden bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/15 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(152, 140, 103, 0.15)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">The Beginning</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">Catan became our thing</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    When I couldn't play sports, my father found a way to connect through board games.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta/20 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(244, 11, 112, 0.12)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">The Loss</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">A pathway through grief</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    After losing him, those games became tools for processing what words couldn't express.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest/15 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(77, 62, 244, 0.15)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-forest">The Mission</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">Playkits was born</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    The neuroscience backed my experience. Now we bring these tools to millions of children.
                  </p>
                </div>
              </motion.div>
              </div>

            {/* KQED Link */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                  <a
                    href="https://www.kqed.org/perspectives/201601145776/karan-gupta-more-than-a-board-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Hear the full story on KQED
                  <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
            </motion.div>
          </div>
        </section>

        {/* KQED Quote Callout */}
        <section className="relative overflow-hidden bg-forest py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-forest-light/20 blur-3xl" />
            <div className="absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-gold/40" />
              <blockquote className="font-serif text-3xl font-medium italic leading-relaxed text-cream lg:text-4xl">
                "play isn't just about escaping reality and pretending, but about connecting with it differently"
              </blockquote>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-gold/40" />
                  <cite className="not-italic text-sm font-medium text-cream/70">
                    Karan Gupta
                  </cite>
                  <div className="h-px w-8 bg-gold/40" />
                </div>
                <a
                  href="https://www.kqed.org/perspectives/201601145776/karan-gupta-more-than-a-board-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold/80 transition-colors hover:bg-gold/20 hover:text-gold"
                >
                  <span>🎙</span>
                  <span>KQED Perspectives, April 2025</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values - Horizontal Strip */}
        <section className="bg-gradient-to-r from-forest/5 via-gold/5 to-terracotta/5 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Values</span>
              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                The principles that guide us
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="group flex flex-col items-center rounded-2xl bg-card/80 p-6 text-center backdrop-blur-sm transition-all hover:bg-card hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-${value.color}/10 text-${value.color} transition-transform group-hover:scale-110`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{value.title}</h3>
                </motion.div>
              ))}
                  </div>
                </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
