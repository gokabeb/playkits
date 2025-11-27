import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ValueProps } from "@/components/home/value-props"
import { StoryPreview } from "@/components/home/story-preview"
import { HowItWorks } from "@/components/home/how-it-works"
import { KitTeaser } from "@/components/home/kit-teaser"
import { ScienceTeaser } from "@/components/home/science-teaser"
import { CtaBand } from "@/components/home/cta-band"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <StoryPreview />
        <HowItWorks />
        <KitTeaser />
        <ScienceTeaser />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
