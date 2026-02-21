# Playkits.org Visual Refresh — Design Document
**Date:** 2026-02-21
**Scope:** Option B — Visual Refresh + Trust Overhaul

---

## Goal

Make the site feel extremely professional yet still playful, matching the warmth and mission of the nonprofit. Close the credibility gap for donors and partners by surfacing trust signals, fixing contact info, upgrading imagery, and polishing the visual hierarchy.

---

## Section 1 — Images

Replace all broken/missing images with Unsplash stock photos via CDN URLs. No local downloads required.

| Location | Image description |
|---|---|
| Home hero | Children engaged in joyful, colorful play — warm tones, natural light |
| Home (between Value Props and Story Preview) | Children with adults in a workshop/care setting — full-bleed break |
| About page hero | Child with a caregiver/counselor — intimate, warm |
| Playkits page | Kit contents (colorful tactile items) + children using them |
| Stories page | Community/group warmth |

All photos: diverse, warm, real-feeling — not sterile or overly staged.

---

## Section 2 — Trust & Credibility

### A. Hero trust bar
Add a 4th indicator to the existing three in the home hero:
- `501(c)(3) Registered` — monospace, understated, visible to donors

### B. Footer nonprofit legitimacy block
Add to the footer brand column below the existing tagline:
> *Playkits.org is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the full extent of the law.*

### C. Donate page
Add the same 501(c)(3) + tax-deductibility statement near the donation CTA.

No EIN displayed anywhere.

---

## Section 3 — Content & Contact Updates

- **Email**: Replace `hello@playkits.org` → `kgupta1219@gmail.com` in footer and contact page
- **Instagram**: Wire footer Instagram icon → `https://instagram.com/playkitsorg`
- **Twitter & LinkedIn**: Remove from footer — dead `#` links hurt credibility
- **About page**: No changes needed (founder name and quote already correct)

---

## Section 4 — Visual Polish

### A. Global spacing
Normalize vertical padding across sections for consistent rhythm.

### B. Home page additions
- **"By the Numbers" impact strip** — inserted between Value Props and Story Preview. Three stats: "100% to programs", "501(c)(3) registered", "Partner-driven model". Provides substance without requiring real impact data.

### C. Header scroll behavior
Add frosted glass background that activates on scroll — prevents the header from getting lost against page content.

### D. Footer
- Add nonprofit credentials block
- Fix visual imbalance in the current grid layout

### E. Donate page
Read current state and ensure it has: proper hero, 501(c)(3) note, and clear CTA. Likely needs the most work of all pages.

---

## Design Constraints

- **Colors**: Keep existing palette (deep-twilight, honey-bronze, rosewood, olive-wood)
- **Fonts**: Keep DM Sans + Playfair Display
- **Animations**: Keep Framer Motion patterns — just ensure they're consistent
- **Framework**: Next.js 16, Tailwind CSS v4, shadcn/ui

---

## Out of Scope

- New pages
- Backend / form submission wiring
- Dark mode
- Impact data (real numbers from the org)
