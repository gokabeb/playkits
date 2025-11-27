"use client"

import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Quote, Brain, Shield, Heart, Users, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Brain,
    title: "Evidence-first",
    color: "deep-twilight",
  },
  {
    icon: Shield,
    title: "Dignity & safety",
    color: "olive-wood",
  },
  {
    icon: Heart,
    title: "Radical transparency",
    color: "rosewood",
  },
  {
    icon: Users,
    title: "Co-creation",
    color: "honey-bronze",
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
          <div className="absolute inset-0 bg-gradient-to-b from-honey-bronze-light/20 to-transparent" />
          
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
                    <span className="relative z-10 text-deep-twilight">language</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-honey-bronze-light/60 -z-0"
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
                <div 
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-twilight-light/20 via-deep-twilight-light/10 to-transparent p-1"
                  style={{ boxShadow: "0 25px 50px -12px rgba(77, 62, 244, 0.15)" }}
                >
                  <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12">
                    <Quote className="mb-6 h-10 w-10 text-deep-twilight/30" />
                    
                    <blockquote className="font-serif text-2xl font-medium italic leading-relaxed text-foreground lg:text-3xl">
                      "Playing was more than nostalgia, it was my way to heal."
                    </blockquote>
                    
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-twilight/10 font-serif text-xl font-medium text-deep-twilight">
                        K
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Karan Gupta</p>
                        <p className="text-sm text-muted-foreground">Founder</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-honey-bronze/20"
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
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-olive-wood-light/30 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(152, 140, 103, 0.15)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-olive-wood">The Beginning</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">Catan became our thing</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    When I couldn't play sports, my father found a way to connect through board games.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rosewood/20 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(244, 11, 112, 0.12)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-rosewood">The Loss</span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">A pathway through grief</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    After losing him, those games became tools for processing what words couldn't express.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-twilight/20 to-transparent p-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ boxShadow: "0 20px 40px -12px rgba(77, 62, 244, 0.15)" }}
              >
                <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-8">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-deep-twilight">The Mission</span>
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

        {/* Values - Horizontal Strip */}
        <section className="bg-gradient-to-r from-deep-twilight-light/10 via-honey-bronze-light/10 to-rosewood-light/10 py-20">
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
