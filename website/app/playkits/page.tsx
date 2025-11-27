import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader, SectionLabel } from "@/components/ui/section"
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/ui/animated-wrapper"
import { Pill } from "@/components/ui/pill"
import { Button } from "@/components/ui/button"
import { KitTeaser } from "@/components/home/kit-teaser"
import { Anchor, Users, GraduationCap, Globe, Hand, Heart, Brain, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Playkits | Playkits.org",
  description:
    "Explore our evidence-based playkits designed for trauma-affected children. Individual, community, training, and refugee kits available.",
}

const kits = [
  {
    icon: Anchor,
    name: "The Anchor",
    type: "Individual Playkit",
    target: "Ages 4-12, all settings",
    goal: "Self-regulation & grounding",
    cost: "$18",
    color: "deep-twilight",
    description:
      "Personal tools for self-regulation and emotional processing.",
    contents: [
      "Pinwheel for breath regulation",
      "Bubbles for calming exercises",
      "Therapy putty for sensory grounding",
      "Mandala coloring pages & crayons",
      "Small comfort plush",
      "Wooden worry doll",
      "Lifebook mini binder",
    ],
  },
  {
    icon: Users,
    name: "The Circle",
    type: "Community Playkit",
    target: "Groups of 15-20 children",
    goal: "Co-regulation & social connection",
    cost: "$85",
    color: "rosewood",
    description:
      "Group activities for connection, empathy, and collective regulation.",
    contents: [
      "Cooperative board games (2-3)",
      "Rhythm instruments set",
      "Group art supplies",
      "Parachute for group play",
      "Story cards for discussion",
      "Emotion regulation poster set",
      "Facilitator guide",
    ],
  },
  {
    icon: GraduationCap,
    name: "The Facilitator",
    type: "Training Kit",
    target: "Staff & volunteers",
    goal: "Implementation & knowledge",
    cost: "$55",
    color: "honey-bronze",
    description:
      "Complete training materials and support for effective playkit implementation.",
    contents: [
      "Training manual (print + digital)",
      "Activity implementation cards",
      "Trauma-informed practices guide",
      "Video training access",
      "Assessment tools",
      "Sample individual & community kits",
      "Quarterly support calls (1 year)",
    ],
  },
  {
    icon: Globe,
    name: "The Resilience Pack",
    type: "Refugee Playkit",
    target: "Displaced children, ages 3-14",
    goal: "Portable comfort & regulation",
    cost: "$12",
    color: "olive-wood",
    description:
      "Compact, culturally-neutral tools for displaced children.",
    contents: [
      "Compact sensory kit bag",
      "Universal emotion cards (pictorial)",
      "Portable breath tools",
      "Small comfort object",
      "Simple game with no reading required",
      "Cultural adaptation guide",
      "Multi-language comfort phrases card",
    ],
  },
]

const tiers = [
  { amount: "$18", description: "1 individual playkit", impact: "Helps 1 child" },
  { amount: "$85", description: "1 community playkit", impact: "Serves 15-20 children" },
  { amount: "$55", description: "Training materials", impact: "Equips 1 organization" },
  { amount: "$12", description: "1 refugee playkit", impact: "Helps 1 displaced child" },
  { amount: "$500", description: "Small org bundle", impact: "Launches 1 program" },
  { amount: "$2,000", description: "Center launch", impact: "Reaches 100+ children" },
]

const processSteps = [
  {
    icon: Brain,
    title: "Literature review",
    description: "We synthesize the latest research in neuroscience, developmental psychology, and trauma therapy.",
  },
  {
    icon: Hand,
    title: "Kit design",
    description: "Each item is selected based on its neurobiological mechanism and practical applicability.",
  },
  {
    icon: Users,
    title: "Partner training",
    description: "We work closely with organizations to ensure effective implementation.",
  },
  {
    icon: Heart,
    title: "Feedback & iteration",
    description: "Continuous improvement based on real-world outcomes and partner feedback.",
  },
]

export default function PlaykitsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Interactive Kit Carousel */}
        <KitTeaser isStandalone />

        {/* Detailed Kit Breakdown */}
        <Section className="bg-background">
          <SectionLabel>Kit Details</SectionLabel>
          <SectionHeader 
            title="What's inside each kit" 
            subtitle="Every item is research-backed and purposefully selected for therapeutic impact."
            className="font-serif"
          />

          <div className="space-y-12">
            {kits.map((kit, index) => (
              <FadeIn key={kit.name} delay={index * 0.1}>
                <div className={`grid gap-8 rounded-3xl border border-border bg-card p-6 lg:grid-cols-2 lg:p-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${kit.color}/10 text-${kit.color}`}>
                      <kit.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-2 font-serif text-2xl font-medium text-card-foreground lg:text-3xl">{kit.name}</h2>
                    <p className="mb-4 text-muted-foreground">{kit.description}</p>

                    <div className="mb-6 flex flex-wrap gap-4 text-sm">
                      <div className="rounded-lg bg-secondary px-3 py-1.5">
                        <span className="font-medium">Target:</span> {kit.target}
                      </div>
                      <div className="rounded-lg bg-secondary px-3 py-1.5">
                        <span className="font-medium">Goal:</span> {kit.goal}
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl font-medium text-foreground">{kit.cost}</span>
                      <span className="text-muted-foreground">per kit</span>
                    </div>
                  </div>

                  <div className={`rounded-2xl bg-secondary/50 p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="mb-4 font-semibold text-card-foreground">What's included</h3>
                    <ul className="space-y-3">
                      {kit.contents.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Cost & Impact Tiers */}
        <Section className="bg-honey-bronze-light/20">
          <SectionLabel className="text-center">Your Impact</SectionLabel>
          <SectionHeader
            title="Every dollar creates healing"
            subtitle="100% of your donation goes directly to playkits and training materials."
            centered
            className="font-serif"
          />

          <FadeInStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <StaggerItem key={tier.amount}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <span className="font-serif text-3xl font-medium text-primary">{tier.amount}</span>
                  <p className="mt-2 flex-grow text-sm text-muted-foreground">{tier.description}</p>
                  <p className="mt-3 text-xs font-medium text-rosewood">{tier.impact}</p>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                Fund a kit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Section>

        {/* Process */}
        <Section>
          <SectionLabel className="text-center">Our Process</SectionLabel>
          <SectionHeader
            title="From research to playkit"
            subtitle="Our rigorous process ensures every kit is grounded in evidence."
            centered
            className="font-serif"
          />

          <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-deep-twilight-light/30 text-primary">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-deep-twilight">Step {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="mb-2 font-serif text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Section>
      </main>
      <Footer />
    </>
  )
}
