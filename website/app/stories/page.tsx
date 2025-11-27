import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/ui/animated-wrapper"
import { Pill } from "@/components/ui/pill"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Stories & Updates | Playkits.org",
  description: "Read stories of impact, partner updates, and the latest news from Playkits.org.",
}

const stories = [
  {
    id: 1,
    title: "Launching our first community playkit pilot",
    excerpt:
      "We're excited to announce our partnership with a local family resource center to pilot our community playkit...",
    date: "2024-01-15",
    category: "News",
    image: "/children-playing-together-in-community-center.jpg",
  },
  {
    id: 2,
    title: "The science behind breath toys",
    excerpt:
      "Why do simple items like bubbles and pinwheels work so well for calming anxious children? The answer lies in the vagus nerve...",
    date: "2024-01-08",
    category: "Research",
    image: "/colorful-bubbles-floating-peaceful.jpg",
  },
  {
    id: 3,
    title: "Partner spotlight: Riverside Shelter",
    excerpt:
      "Riverside Shelter has been using our individual playkits for three months. Here's what they've learned...",
    date: "2024-01-02",
    category: "Partner Story",
    image: "/warm-welcoming-community-shelter.jpg",
  },
  {
    id: 4,
    title: "Designing the Resilience Pack",
    excerpt:
      "Creating playkits for displaced children required rethinking everything—from size to cultural sensitivity...",
    date: "2023-12-20",
    category: "Research",
    image: "/compact-travel-bag-with-toys.jpg",
  },
  {
    id: 5,
    title: "Thank you to our 2023 donors",
    excerpt: "As the year closes, we want to share our gratitude and show you exactly where your donations went...",
    date: "2023-12-15",
    category: "News",
    image: "/thank-you-note-with-hearts.jpg",
  },
  {
    id: 6,
    title: "Why cooperative games matter",
    excerpt:
      "Unlike competitive games, cooperative games activate different neural pathways—ones linked to empathy and social connection...",
    date: "2023-12-08",
    category: "Research",
    image: "/board-game-cooperative-playing.jpg",
  },
]

const categories = ["All", "News", "Research", "Partner Story"]

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section className="bg-soft-purple/30">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Pill variant="primary" className="mb-4">
                Updates
              </Pill>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Stories & updates
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                News from our partnerships, research insights, and stories of impact from the field.
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Filter + Grid */}
        <Section>
          {/* Category Filter */}
          <FadeIn>
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Stories Grid */}
          <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <StaggerItem key={story.id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
                  <div className="aspect-[3/2] overflow-hidden bg-muted">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Pill
                        variant={
                          story.category === "Research"
                            ? "primary"
                            : story.category === "Partner Story"
                              ? "coral"
                              : "default"
                        }
                      >
                        {story.category}
                      </Pill>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(story.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="mb-2 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {story.title}
                    </h2>
                    <p className="flex-grow text-sm text-muted-foreground">{story.excerpt}</p>
                    <Button variant="ghost" className="mt-4 self-start -ml-4 text-primary">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </FadeInStagger>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              Load more stories
            </Button>
          </div>
        </Section>

        {/* Newsletter CTA */}
        <Section className="bg-warm-yellow/20">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Stay updated</h2>
              <p className="mt-4 text-muted-foreground">
                Get quarterly updates on our work, new research, and stories from our partner organizations.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 rounded-full border border-input bg-background px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:w-72"
                />
                <Button type="submit" className="h-12 rounded-full px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  )
}
