"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, CheckCircle, Clock, Heart } from "lucide-react"

const interests = [
  { id: "donating", label: "Donating" },
  { id: "partnering", label: "Partnering" },
  { id: "volunteering", label: "Volunteering" },
  { id: "press", label: "Press / Media" },
  { id: "other", label: "Other" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const prefersReducedMotion = useReducedMotion()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

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
        <section className="relative min-h-[50vh] overflow-hidden bg-background pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-twilight-light/15 to-transparent" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex min-h-[calc(50vh-6rem)] items-center py-12">
              <motion.div
                className="max-w-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span 
                  variants={itemVariants}
                  className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Contact
                </motion.span>

                <motion.h1
                  variants={itemVariants}
                  className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                  Let's start a
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-deep-twilight">conversation</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-deep-twilight-light/40 -z-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                  </span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="mt-6 max-w-md text-lg text-muted-foreground"
                >
                  Whether you're interested in donating, partnering, or just learning more—we'd love to hear from you.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Form */}
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <motion.div 
                    className="rounded-3xl bg-gradient-to-br from-olive-wood-light/30 to-transparent p-1"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ boxShadow: "0 25px 50px -12px rgba(152, 140, 103, 0.15)" }}
                  >
                    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-10 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle className="mx-auto h-16 w-16 text-olive-wood" />
                      </motion.div>
                      <h2 className="mt-6 font-serif text-3xl font-medium text-foreground">Thank you!</h2>
                      <p className="mt-3 text-muted-foreground">
                        We've received your message and will get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div 
                    className="rounded-3xl bg-gradient-to-br from-deep-twilight-light/15 to-transparent p-1"
                    style={{ boxShadow: "0 25px 50px -12px rgba(77, 62, 244, 0.1)" }}
                  >
                    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-10">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                            <Input id="name" placeholder="Your name" required className="rounded-xl border-border/50 bg-background/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                            <Input id="email" type="email" placeholder="your@email.com" required className="rounded-xl border-border/50 bg-background/50" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-sm font-medium">Organization (optional)</Label>
                          <Input id="organization" placeholder="Your organization name" className="rounded-xl border-border/50 bg-background/50" />
                        </div>

                        <div className="space-y-3">
                          <Label className="text-sm font-medium">I'm interested in:</Label>
                          <div className="flex flex-wrap gap-3">
                            {interests.map((interest) => (
                              <div key={interest.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={interest.id}
                                  checked={selectedInterests.includes(interest.id)}
                                  onCheckedChange={() => toggleInterest(interest.id)}
                                  className="border-border/50"
                                />
                                <Label htmlFor={interest.id} className="text-sm font-normal cursor-pointer">
                                  {interest.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us how we can help..."
                            required
                            className="min-h-[150px] rounded-xl border-border/50 bg-background/50"
                          />
                        </div>

                        <Button type="submit" size="lg" className="rounded-full">
                          Send message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="sticky top-32 space-y-6">
                  {/* Email Card */}
                  <motion.div 
                    className="rounded-3xl bg-gradient-to-br from-rosewood/15 to-transparent p-1"
                    style={{ boxShadow: "0 20px 40px -12px rgba(244, 11, 112, 0.1)" }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rosewood/10">
                          <Mail className="h-5 w-5 text-rosewood" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:hello@playkits.org" className="text-sm text-muted-foreground hover:text-rosewood transition-colors">
                            hello@playkits.org
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location Card */}
                  <motion.div 
                    className="rounded-3xl bg-gradient-to-br from-honey-bronze/15 to-transparent p-1"
                    style={{ boxShadow: "0 20px 40px -12px rgba(254, 144, 1, 0.1)" }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-honey-bronze/10">
                          <MapPin className="h-5 w-5 text-honey-bronze" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Response Time Card */}
                  <motion.div 
                    className="rounded-3xl bg-gradient-to-br from-olive-wood/15 to-transparent p-1"
                    style={{ boxShadow: "0 20px 40px -12px rgba(152, 140, 103, 0.1)" }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-wood/10">
                          <Clock className="h-5 w-5 text-olive-wood" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Response time</p>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Volunteer note */}
                  <div className="rounded-2xl border border-border/50 bg-card/50 p-5">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-rosewood" />
                      <p className="text-sm text-muted-foreground">
                        We're a small, 100% volunteer-run team.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
