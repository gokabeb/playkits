import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/ui/animated-wrapper"
import { Pill } from "@/components/ui/pill"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Mail, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate | Playkits.org",
  description:
    "Turn your donation into healing play. 100% of donations go directly to creating evidence-based playkits for trauma-affected children.",
}

const tiers = [
  {
    amount: 18,
    label: "$18",
    title: "Individual Playkit",
    description: "Fund one complete individual playkit for a child's healing journey.",
    impact: "Helps 1 child",
    popular: false,
  },
  {
    amount: 85,
    label: "$85",
    title: "Community Playkit",
    description: "Fund a complete community playkit for group activities.",
    impact: "Serves 15-20 children",
    popular: true,
  },
  {
    amount: 55,
    label: "$55",
    title: "Training Package",
    description: "Fund complete training materials for one partner organization.",
    impact: "Equips 1 organization",
    popular: false,
  },
  {
    amount: 12,
    label: "$12",
    title: "Refugee Playkit",
    description: "Fund a portable playkit for a displaced child.",
    impact: "Helps 1 displaced child",
    popular: false,
  },
  {
    amount: 500,
    label: "$500",
    title: "Program Launch",
    description: "Fund a complete bundle for a small organization to start.",
    impact: "Launches 1 program",
    popular: false,
  },
  {
    amount: 2000,
    label: "$2,000",
    title: "Center Launch",
    description: "Fund a comprehensive package for a center or network.",
    impact: "Reaches 100+ children",
    popular: false,
  },
]

const trustPoints = [
  {
    icon: Heart,
    title: "100% volunteer-run",
    description: "No salaries or overhead costs. Every dollar goes to materials.",
  },
  {
    icon: Shield,
    title: "Transparent tracking",
    description: "We track every kit and can tell you exactly where your donation went.",
  },
  {
    icon: Mail,
    title: "Regular updates",
    description: "Receive quarterly reports with stories and impact data.",
  },
  {
    icon: Users,
    title: "Partner accountability",
    description: "Our partner organizations report on implementation and outcomes.",
  },
]

export default function DonatePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section className="bg-primary text-primary-foreground">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Heart className="h-4 w-4" />
                <span>100% goes to playkits</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Turn your donation into healing play
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
                Every donation directly funds the creation of evidence-based playkits. We're 100% volunteer-run, so your
                entire contribution goes to materials and training.
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Giving Tiers */}
        <Section>
          <SectionHeader
            title="Choose your impact"
            subtitle="Select a giving level or enter a custom amount."
            centered
          />

          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <StaggerItem key={tier.amount}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:shadow-lg ${
                    tier.popular ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card"
                  }`}
                >
                  {tier.popular && (
                    <Pill variant="primary" className="absolute -top-3 left-6">
                      Most popular
                    </Pill>
                  )}

                  <span className="text-4xl font-bold text-foreground">{tier.label}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{tier.title}</h3>
                  <p className="mt-2 flex-grow text-sm text-muted-foreground">{tier.description}</p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-coral">
                    <div className="h-2 w-2 rounded-full bg-coral" />
                    {tier.impact}
                  </div>

                  <Button
                    asChild
                    className={`mt-6 w-full rounded-full ${tier.popular ? "" : "bg-foreground hover:bg-foreground/90"}`}
                  >
                    <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                      Donate {tier.label}
                    </a>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>

          {/* Quick Donate Section */}
          <FadeIn delay={0.3}>
            <div className="mx-auto mt-12 max-w-2xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Or choose a custom amount
              </h3>
              <p className="text-muted-foreground mb-6">
                Every dollar goes directly to creating playkits
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {[18, 45, 85, 150, 500].map((amount) => (
                  <Button
                    key={amount}
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full bg-card hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                      ${amount}
                    </a>
                  </Button>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full">
                <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                  Donate any amount on GoFundMe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </Section>

        {/* Trust & Transparency */}
        <Section className="bg-soft-purple/30">
          <SectionHeader
            title="Trust & transparency"
            subtitle="We believe in complete accountability for every donation."
            centered
          />

          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Section>

        {/* GoFundMe Embedded Section */}
        <Section className="bg-gradient-to-b from-primary/5 to-transparent">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Make your donation now
                </h2>
                <p className="text-muted-foreground">
                  Secure donation processing through GoFundMe
                </p>
              </div>
              
              {/* GoFundMe Embed Placeholder */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg text-center">
                <div className="mb-6">
                  <Heart className="h-16 w-16 mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Donate on GoFundMe</h3>
                  <p className="text-muted-foreground">
                    100% of your donation goes directly to creating playkits for children who need them.
                  </p>
                </div>
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                  <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                    Go to GoFundMe Campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                Playkits.org is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the full extent of the law. You'll receive a receipt immediately after donating.
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Final CTA Banner */}
        <Section className="bg-primary text-primary-foreground">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Ready to create impact?</h3>
                <p className="text-primary-foreground/80">
                  Your donation goes directly to creating playkits for children who need them most.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full flex-shrink-0"
              >
                <a href="https://gofundme.com/playkits" target="_blank" rel="noopener noreferrer">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
