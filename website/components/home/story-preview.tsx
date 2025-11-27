"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StoryPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-deep-twilight-light/20 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Image column */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
                <img
                  src="/karan-playing-catan.png"
                  alt="Karan playing Catan with his Dad and friends"
                  className="h-full w-full object-cover object-[center_60%]"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                Karan playing Catan with his Dad and friends
              </figcaption>
            </figure>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The Origin Story</span>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight text-foreground lg:text-5xl">
              Why play matters
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Play became my language of healing. After losing my father, the board games 
                we'd shared—especially Catan—helped me process grief in ways words never could.
              </p>
              
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground mb-3">
                  Hear Karan Gupta's full story about discovering healing through play:
                </p>
                <Button asChild variant="outline" className="w-full sm:w-auto rounded-full">
                  <a 
                    href="https://www.kqed.org/perspectives/201601145776/karan-gupta-more-than-a-board-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KQED Perspective: "More Than a Board Game"
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              className="relative mt-12 border-l-2 border-primary pl-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-serif text-xl italic text-foreground lg:text-2xl">
                "Playing was more than nostalgia, it was my way to heal."
              </p>
              <footer className="mt-4">
                <p className="font-medium text-foreground">Karan Gupta</p>
                <p className="text-sm text-muted-foreground">Founder, Playkits.org</p>
              </footer>
            </motion.blockquote>

            <div className="mt-12">
              <Button asChild variant="ghost" className="group -ml-4 text-foreground">
                <Link href="/about">
                  Read the full story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
