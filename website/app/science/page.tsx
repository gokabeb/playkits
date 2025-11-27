"use client"

import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Wind, Hand, Puzzle, FileText, ArrowRight, Brain } from "lucide-react"
import Link from "next/link"

const brainLayers = [
  {
    name: "Survival",
    area: "Brainstem",
    description: "Fight/flight/freeze responses",
    color: "strawberry-red",
    glowColor: "rgba(246, 9, 41, 0.12)",
  },
  {
    name: "Feeling",
    area: "Limbic",
    description: "Emotions & attachment",
    color: "rosewood",
    glowColor: "rgba(244, 11, 112, 0.12)",
  },
  {
    name: "Thinking",
    area: "Cortex",
    description: "Reasoning & planning",
    color: "deep-twilight",
    glowColor: "rgba(77, 62, 244, 0.15)",
  },
]

const regulatoryLayers = [
  {
    icon: Wind,
    layer: "CALM",
    mechanism: "Vagal brake activation",
    tools: ["Bubbles", "Pinwheels"],
    color: "deep-twilight",
    glowColor: "rgba(77, 62, 244, 0.15)",
  },
  {
    icon: Hand,
    layer: "GROUND",
    mechanism: "Proprioceptive input",
    tools: ["Therapy putty", "Clay"],
    color: "olive-wood",
    glowColor: "rgba(152, 140, 103, 0.15)",
  },
  {
    icon: Heart,
    layer: "CONNECT",
    mechanism: "Safe emotional distance",
    tools: ["Puppets", "Plush objects"],
    color: "rosewood",
    glowColor: "rgba(244, 11, 112, 0.12)",
  },
  {
    icon: Puzzle,
    layer: "THINK",
    mechanism: "Executive function",
    tools: ["Games", "Mandalas"],
    color: "honey-bronze",
    glowColor: "rgba(254, 144, 1, 0.15)",
  },
]

export default function SciencePage() {
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
        <section className="relative min-h-screen overflow-hidden bg-deep-twilight pt-24">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)`,
            }}
          />
          
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
                  className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-deep-twilight-light"
                >
                  Research
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                  The science of
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10">healing through play</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-honey-bronze/40 -z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                  </span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="mx-auto mt-6 max-w-xl text-lg text-white/70"
                >
                  Evidence-based interventions grounded in neuroscience.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Concept - Bottom-up regulation */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The Key Insight</span>
                <h2 className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                  Calm the body first
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Trauma dysregulates lower brain regions. Cognitive interventions won't work until the body feels safe.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We use <strong className="text-foreground">bottom-up regulation</strong>: sensory and breath-based tools that activate the parasympathetic nervous system before engaging higher cognition.
                </p>
              </motion.div>

              {/* Brain layers cards */}
              <div className="grid gap-4">
                {brainLayers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-${layer.color}/20 to-transparent p-1`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ boxShadow: `0 10px 30px -10px ${layer.glowColor}` }}
                  >
                    <div className="flex items-center gap-4 rounded-xl bg-card/95 backdrop-blur-xl p-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-${layer.color}/10`}>
                        <Brain className={`h-6 w-6 text-${layer.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-medium text-foreground">{layer.name} Brain</h3>
                          <span className={`rounded-full bg-${layer.color}/10 px-2 py-0.5 text-xs text-${layer.color}`}>
                            {layer.area}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Four Regulatory Layers */}
        <section className="bg-gradient-to-b from-olive-wood-light/20 to-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Framework</span>
              <h2 className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                Four regulatory layers
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {regulatoryLayers.map((layer, index) => (
                <motion.div
                  key={layer.layer}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-${layer.color}/20 via-${layer.color}/10 to-transparent p-1`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                  style={{ boxShadow: `0 20px 40px -12px ${layer.glowColor}` }}
                >
                  <div className="h-full rounded-[22px] bg-card/95 backdrop-blur-xl p-6 transition-colors group-hover:bg-card">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${layer.color}/10 text-${layer.color} transition-transform group-hover:scale-110`}>
                      <layer.icon className="h-6 w-6" />
                    </div>
                    
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider text-${layer.color}`}>
                      {layer.layer}
                    </span>
                    
                    <h3 className="mt-2 font-serif text-lg font-medium text-foreground">{layer.mechanism}</h3>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {layer.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Document */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-honey-bronze-light/30 to-transparent p-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ boxShadow: "0 25px 50px -12px rgba(254, 144, 1, 0.15)" }}
            >
              <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-honey-bronze/10">
                    <FileText className="h-7 w-7 text-honey-bronze" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-honey-bronze">Download</span>
                    <h3 className="mt-2 font-serif text-xl font-medium text-foreground">Research white paper</h3>
                    <p className="mt-2 text-muted-foreground">
                      Full citations and evidence for each intervention type.
                    </p>
                    <Button variant="outline" className="mt-4 rounded-full bg-transparent">
                      Download PDF
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-deep-twilight py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-medium text-white lg:text-4xl">
                Bring evidence-based play to your organization
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
                Partner with us for playkits and staff training.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="rounded-full">
                  <Link href="/partners">
                    Become a partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
