# Visual Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve trust/credibility and visual quality of Playkits.org with better stock images, 501(c)(3) signals, corrected contact info, a "By the Numbers" section, and header scroll polish.

**Architecture:** All changes are to existing React/Next.js components. No new pages. No backend. Images sourced from Unsplash CDN (no downloads). Each task is self-contained and immediately verifiable with `pnpm dev`.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, Framer Motion, shadcn/ui, TypeScript

---

## Running the dev server

Start once and leave running throughout:
```bash
cd website && pnpm dev
```
Visit http://localhost:3000 to verify each change.

---

### Task 1: Replace hero image with Unsplash stock photo

**Files:**
- Modify: `website/components/home/hero.tsx:131-137`

The current hero uses a local image `/children-playing-together-with-colorful-toys-in-wa.jpg` that doesn't load well. Replace with a warm, high-quality Unsplash image of children playing.

**Step 1: Open the file and find the image tag**

In `website/components/home/hero.tsx`, find this block (around line 131):
```tsx
<div className="absolute inset-0 overflow-hidden rounded-3xl bg-deep-twilight-light/30">
  <img
    src="/children-playing-together-with-colorful-toys-in-wa.jpg"
    alt="Children engaged in therapeutic play"
    className="h-full w-full object-cover"
  />
</div>
```

**Step 2: Replace with Unsplash image**

```tsx
<div className="absolute inset-0 overflow-hidden rounded-3xl bg-deep-twilight-light/30">
  <img
    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80&auto=format&fit=crop"
    alt="Children engaged in therapeutic play"
    className="h-full w-full object-cover"
  />
</div>
```

**Step 3: Verify**

Visit http://localhost:3000 — hero image should now show two children playing with colorful blocks in warm natural light.

**Step 4: Commit**

```bash
git add website/components/home/hero.tsx
git commit -m "feat: replace hero image with Unsplash stock photo"
```

---

### Task 2: Add 501(c)(3) to hero trust bar

**Files:**
- Modify: `website/components/home/hero.tsx:110-119`

The hero trust bar has three indicators. Add a fourth: `501(c)(3) Registered`.

**Step 1: Find the trust indicators array (around line 110)**

```tsx
{[
  { label: "Evidence-based", sublabel: "Grounded in neuroscience" },
  { label: "Partner-driven", sublabel: "Scaling through networks" },
  { label: "Transparent", sublabel: "100% to programs" },
].map((item) => (
```

**Step 2: Add the fourth item**

```tsx
{[
  { label: "Evidence-based", sublabel: "Grounded in neuroscience" },
  { label: "Partner-driven", sublabel: "Scaling through networks" },
  { label: "Transparent", sublabel: "100% to programs" },
  { label: "501(c)(3) Registered", sublabel: "Tax-deductible donations" },
].map((item) => (
```

**Step 3: Verify**

Visit http://localhost:3000 — scroll to the bottom of the hero section. The trust bar should now show four items, with `501(c)(3) Registered` as the fourth.

**Step 4: Commit**

```bash
git add website/components/home/hero.tsx
git commit -m "feat: add 501(c)(3) registered indicator to hero trust bar"
```

---

### Task 3: Add "By the Numbers" impact strip to home page

**Files:**
- Create: `website/components/home/by-the-numbers.tsx`
- Modify: `website/app/page.tsx`

A new section between `<ValueProps />` and `<StoryPreview />` with three stat blocks.

**Step 1: Create the component**

Create `website/components/home/by-the-numbers.tsx`:

```tsx
"use client"

import { motion, useReducedMotion } from "framer-motion"

const stats = [
  {
    value: "100%",
    label: "of donations go to programs",
    sublabel: "Zero overhead. Zero salaries.",
    color: "text-deep-twilight",
    bg: "bg-deep-twilight/5",
  },
  {
    value: "501(c)(3)",
    label: "registered nonprofit",
    sublabel: "Tax-deductible donations",
    color: "text-honey-bronze",
    bg: "bg-honey-bronze/5",
  },
  {
    value: "Partner-driven",
    label: "scaling model",
    sublabel: "Reaching more children through trusted orgs",
    color: "text-rosewood",
    bg: "bg-rosewood/5",
  },
]

export function ByTheNumbers() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            By the numbers
          </span>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`rounded-3xl ${stat.bg} p-8 lg:p-10`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className={`font-serif text-4xl font-medium lg:text-5xl ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-3 text-base font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Import and insert into home page**

In `website/app/page.tsx`, add the import and place the component:

```tsx
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ValueProps } from "@/components/home/value-props"
import { ByTheNumbers } from "@/components/home/by-the-numbers"
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
        <ByTheNumbers />
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
```

**Step 3: Verify**

Visit http://localhost:3000 — scroll past the value props cards. A three-stat strip should appear with `100%`, `501(c)(3)`, and `Partner-driven` blocks in warm accent colors.

**Step 4: Commit**

```bash
git add website/components/home/by-the-numbers.tsx website/app/page.tsx
git commit -m "feat: add By the Numbers impact strip to home page"
```

---

### Task 4: Add scroll-activated frosted glass to header

**Files:**
- Modify: `website/components/layout/header.tsx`

Currently the header has no background when the page is at the top, which can make it hard to read over busy images. Add a `useEffect` that listens to scroll position and applies a glass background once scrolled.

**Step 1: Add scroll state at the top of the Header function**

In `website/components/layout/header.tsx`, after the existing `useState` and `useRef` declarations (around line 53), add:

```tsx
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [])
```

**Step 2: Apply the class conditionally to the `<header>` element**

Find the `<header>` tag (around line 130):
```tsx
<header className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6">
```

Replace with:
```tsx
<header
  className={`fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 transition-all duration-300 ${
    scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40" : ""
  }`}
>
```

**Step 3: Verify**

Visit http://localhost:3000 — at the top the header should be transparent. Scroll down a bit and a subtle frosted glass background should fade in.

**Step 4: Commit**

```bash
git add website/components/layout/header.tsx
git commit -m "feat: add scroll-activated frosted glass to header"
```

---

### Task 5: Update footer — email, social links, 501(c)(3) statement

**Files:**
- Modify: `website/components/layout/footer.tsx`

Three changes: (1) update email, (2) replace Twitter/LinkedIn with working Instagram, (3) add 501(c)(3) statement.

**Step 1: Update the email address**

Find (around line 60):
```tsx
<a href="mailto:hello@playkits.org" className="hover:text-foreground">
  hello@playkits.org
</a>
```

Replace with:
```tsx
<a href="mailto:kgupta1219@gmail.com" className="hover:text-foreground">
  kgupta1219@gmail.com
</a>
```

**Step 2: Replace the socialLinks array**

Find (around line 22):
```tsx
const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]
```

Replace with:
```tsx
const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/playkitsorg", label: "Instagram" },
]
```

Also remove `Twitter` and `Linkedin` from the import at the top of the file:
```tsx
import { Heart, Mail, MapPin, Instagram } from "lucide-react"
```

**Step 3: Add the 501(c)(3) statement**

In the footer brand column, find the volunteer tagline block (around line 51):
```tsx
<div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
  <Heart className="h-4 w-4 text-rosewood" />
  <span>100% volunteer-run. 100% of donations go directly to playkits.</span>
</div>
```

Add the legal statement immediately after it:
```tsx
<div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
  <Heart className="h-4 w-4 text-rosewood" />
  <span>100% volunteer-run. 100% of donations go directly to playkits.</span>
</div>
<p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed max-w-sm">
  Playkits.org is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the full extent of the law.
</p>
```

**Step 4: Verify**

Visit http://localhost:3000 and scroll to the footer. Check: correct email, only Instagram social icon, and 501(c)(3) statement visible.

**Step 5: Commit**

```bash
git add website/components/layout/footer.tsx
git commit -m "feat: update footer with correct email, Instagram, and 501(c)(3) statement"
```

---

### Task 6: Update contact page email

**Files:**
- Modify: `website/app/contact/page.tsx`

**Step 1: Find and replace both occurrences of the old email**

In `website/app/contact/page.tsx`, find (around line 227):
```tsx
<a href="mailto:hello@playkits.org" className="text-sm text-muted-foreground hover:text-rosewood transition-colors">
  hello@playkits.org
</a>
```

Replace with:
```tsx
<a href="mailto:kgupta1219@gmail.com" className="text-sm text-muted-foreground hover:text-rosewood transition-colors">
  kgupta1219@gmail.com
</a>
```

**Step 2: Verify**

Visit http://localhost:3000/contact — the email card should show `kgupta1219@gmail.com`.

**Step 3: Commit**

```bash
git add website/app/contact/page.tsx
git commit -m "feat: update contact page email to kgupta1219@gmail.com"
```

---

### Task 7: Add 501(c)(3) statement to donate page

**Files:**
- Modify: `website/app/donate/page.tsx`

The donate page already has `"Your donation is secure and tax-deductible."` at line 246 but it's weak. Replace it with the full 501(c)(3) statement.

**Step 1: Find the line (around line 246)**

```tsx
<p className="text-center text-sm text-muted-foreground mt-6">
  Your donation is secure and tax-deductible. You'll receive a receipt immediately after donating.
</p>
```

**Step 2: Replace with stronger statement**

```tsx
<p className="text-center text-sm text-muted-foreground mt-6">
  Playkits.org is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the full extent of the law. You'll receive a receipt immediately after donating.
</p>
```

**Step 3: Verify**

Visit http://localhost:3000/donate — scroll to the GoFundMe section. The legal statement should now include the 501(c)(3) wording.

**Step 4: Commit**

```bash
git add website/app/donate/page.tsx
git commit -m "feat: add 501(c)(3) statement to donate page"
```

---

### Task 8: Add stock images to interior pages

**Files:**
- Modify: `website/app/about/page.tsx`

The about page hero has a quote card on the right but no real photography. Add a warm stock photo to ground the page visually.

**Step 1: Find the quote card section in about page (around line 110)**

```tsx
{/* Right: Quote Card */}
<motion.div
  className="relative lg:col-span-7"
  ...
>
  <div
    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-twilight-light/20 via-deep-twilight-light/10 to-transparent p-1"
    ...
  >
    <div className="rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12">
      <Quote className="mb-6 h-10 w-10 text-deep-twilight/30" />
      ...
    </div>
  </div>
```

**Step 2: Add a photo above the quote card**

Insert an image just before the quote card div, inside the `motion.div`:

```tsx
{/* Right: Photo + Quote Card */}
<motion.div
  className="relative lg:col-span-7"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Photo */}
  <div className="mb-6 overflow-hidden rounded-3xl aspect-[16/9]">
    <img
      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop"
      alt="Children laughing and playing together"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Quote Card */}
  <div
    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep-twilight-light/20 via-deep-twilight-light/10 to-transparent p-1"
    style={{ boxShadow: "0 25px 50px -12px rgba(77, 62, 244, 0.15)" }}
  >
    ...rest of quote card unchanged...
  </div>
  ...decorative elements unchanged...
</motion.div>
```

**Step 3: Verify**

Visit http://localhost:3000/about — the right column of the hero should now show a warm group photo of children above the founder quote card.

**Step 4: Commit**

```bash
git add website/app/about/page.tsx
git commit -m "feat: add hero stock photo to about page"
```

---

### Task 9: Final check — run through all pages

**Step 1: Visit each page and verify everything looks right**

- http://localhost:3000 — hero image, trust bar (4 items), By the Numbers strip, no broken images
- http://localhost:3000/about — stock photo visible, founder quote below it
- http://localhost:3000/contact — correct email shown
- http://localhost:3000/donate — 501(c)(3) statement in GoFundMe section
- Footer on any page — correct email, Instagram icon only, 501(c)(3) legal statement
- Header — transparent at top, frosted glass on scroll

**Step 2: Check mobile layout at 375px width in browser DevTools**

All sections should remain readable and not overflow. The "By the Numbers" stats should stack to single column (already handled by `sm:grid-cols-3`).

**Step 3: Commit any final tweaks, then done**
