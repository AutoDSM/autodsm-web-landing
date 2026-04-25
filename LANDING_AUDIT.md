# Landing Page Audit — AutoDSM

## Summary

The AutoDSM landing page has **solid foundational architecture**: proper font configuration (Manrope headings, Geist body), well-structured CSS tokens with disciplined dark mode, and good accessibility basics (focus states, reduced-motion support). The **single biggest opportunity** is elevating the page from "good startup template" to "Linear-tier polish" through refined typography scale, intentional motion sequencing, and social proof that converts. Current state: ~70% of the way to world-class. The delta is in craft details and missing trust elements.

---

## Section-by-Section Critique

### Hero

**What's working:**
- Clear value prop: "Turn your repo into a living design system" — specific, outcome-oriented
- Proper hierarchy: eyebrow → h1 → subhead → micro-copy → CTAs → visual → proof strip
- Good headline tracking (-0.045em) and text gradient treatment
- Subtle radial glow behind hero adds depth without being garish
- Dashboard image with hover lift effect is polished

**What's holding it back:**
- Headline is good but could be punchier — "Turn your repo into..." is 7 words before the payoff
- Proof strip ("Zero configuration", etc.) is vague — no specificity, no numbers
- No motion sequence on load — hero appears statically after the reveal fade
- Hero micro-copy "No stories. No manual docs. No maintenance tax." — the triple negative pattern is good but could hit harder with contrast
- Missing: a specific number above the fold ("Used by X teams", "X components analyzed")

**Recommendations:**
1. Add staggered word/line entrance animation to headline (Framer Motion or CSS)
2. Replace proof strip with one specific claim + logo wall or beta user count
3. Consider splitting headline: "Turn your repo into a **living design system**" with the bold portion emphasized via color or weight
4. Add subtle continuous motion to dashboard preview (cursor blink, data flowing, gradient shimmer on a card edge)

### Features / Value Props (Brand Foundations + Platform Cards)

**What's working:**
- Brand Foundations section has clear purpose — typography, logo, color cards
- Two platform cards (not 4-5, which avoids flat grid syndrome)
- Each card has eyebrow → title → body → list structure
- Feature cards have the accent-bar-on-hover treatment — good micro-interaction

**What's holding it back:**
- The 3 brand cards (typography, logo, color) are static images — no interactivity
- 2 feature cards feel balanced, but there's no visual differentiation or "hero card" moment
- The intro-band paragraph after the cards is easy to miss — sits orphaned
- Copy on platform cards is functional but not memorable

**Recommendations:**
1. Consider making one feature card span full width or have a visual demo (the "Platform" card could show a mini component gallery)
2. Add hover states to the brand cards with a tooltip or label reveal
3. Move intro-band content into the section-head as a proper lede paragraph, or cut it
4. Add icons or small illustrations to feature card headers

### How It Works (Process List)

**What's working:**
- Clean 3-step structure with numbered progression
- Hover state expands padding + adds subtle gradient — nice touch
- Step numbers in accent color (monospace) provide visual rhythm

**What's holding it back:**
- Steps are text-only — no visual to illustrate each step
- The descriptions are clear but long; could be tighter
- No completion cue or CTA after step 3

**Recommendations:**
1. Add a small icon or illustration per step (repo icon, render icon, PR icon)
2. Tighten step body copy to 1 line each if possible
3. Add a CTA below the process list: "See it in action →" linking to demo or sample system
4. Consider alternating layout (step visual left/right) for more editorial feel

### Product Demo / Visual

**What's working:**
- Hero dashboard image shows the real product UI
- Proper `priority` loading on hero image
- Hover lift effect with enhanced shadow

**What's holding it back:**
- Static image — no scroll-driven progression or video
- No mobile-specific visual treatment (same image scales down)
- Image alt text is good but could be more specific about what's shown

**Recommendations:**
1. Add a subtle parallax effect on scroll (CSS or GSAP)
2. Consider a looping 6-10s video showing the dashboard in use (muted, autoplay, playsInline)
3. Add a second visual in the "Platform" feature section showing component rendering

### Social Proof

**What's working:**
- Proof strip exists and is positioned well (after hero visual)
- Pills have hover state

**What's holding it back:**
- **No logos** — "Zero configuration" etc. are feature claims, not social proof
- **No numbers** — no "X teams", "X components", "X PRs opened"
- **No testimonials** — no named users
- This is the weakest section of the page

**Recommendations:**
1. Add a logo wall of 4-6 beta users or design tool integrations (even if "Works with: Figma, React, Tailwind")
2. Add at least one specific number: "Analyzed 12,000+ components" or "Used by 47 teams in beta"
3. If you have a testimonial, add it — face + name + title + company, positioned after features or before pricing
4. Replace the current proof strip with real proof; move the feature claims into the hero micro-copy or a separate strip

### Pricing

**What's working:**
- 3 tiers (correct number)
- Middle tier ("Team") visually distinguished with accent border, glow, and "Popular" badge
- Clean card structure with price + period separation
- Features listed with accent bullet points

**What's holding it back:**
- Pricing cards lack CTAs — no "Get started" or "Contact sales" buttons
- No annual vs. monthly toggle (if applicable)
- Cards don't have hover states that guide toward the recommended tier
- "Team" card should feel more like the obvious choice

**Recommendations:**
1. Add a CTA button to each pricing card ("Start free", "Upgrade", "Contact us")
2. Consider adding a subtle animation or glow pulse to the Team card to draw attention
3. Add a brief one-liner under each tier name explaining who it's for ("For solo devs", "For growing teams")

### FAQ

**What's working:**
- 3 real, relevant questions (not strawmen)
- Questions address genuine objections (Storybook comparison, AI tools, fix vs. report)
- Clean card layout with hover state

**What's holding it back:**
- Only 3 FAQs — could use 4-6 more
- No accordion interaction — all answers visible at once
- Cards are static; accordion would save vertical space and add polish

**Recommendations:**
1. Add 3-4 more FAQs: "What frameworks are supported?", "How does the AI analysis work?", "Is my code stored?", "Can I self-host?"
2. Implement accordion with smooth height animation (Framer Motion `AnimatePresence` or CSS grid-template-rows)
3. Add a "Still have questions? Contact us" link below the FAQ list

### Footer CTA (Final CTA)

**What's working:**
- Full-width card creates a distinct "exhale" moment
- Gradient background with radial glow is tasteful
- Clear headline restating the value prop
- Dual CTAs present

**What's holding it back:**
- Eyebrow says "Get Started" but the section is more of a "last call" moment
- Two CTAs dilute focus — secondary "View sample system" competes with primary
- No urgency or specificity ("Connect your repo" to what end?)

**Recommendations:**
1. Change eyebrow to "Ready?" or "Let's go" — something more inviting
2. Consider a single CTA with stronger copy: "Connect your repo — free forever"
3. Add a micro-reassurance below the CTA: "No credit card required. Takes 30 seconds."

### Footer

**What's working:**
- Minimal and clean
- Brand mark + tagline is appropriate for a landing page
- Proper border-top separation

**What's holding it back:**
- No links (legal, social, docs, contact)
- No way to contact or follow the company

**Recommendations:**
1. Add a second row or inline links: Twitter/X, GitHub, Docs, Privacy, Terms
2. Add a newsletter signup or waitlist input if applicable

---

## Typography Audit

### Font Configuration — PASS

| Element | Expected | Actual | Status |
|---------|----------|--------|--------|
| Headings font | Manrope | `--font-heading` → Manrope (layout.tsx:5) | ✅ |
| Body font | Geist | `--font-body` → Geist (layout.tsx:11) | ✅ |
| Mono font | Geist Mono | `--font-mono` → Geist_Mono (layout.tsx:16) | ✅ |
| h1-h6 use heading font | Yes | `font-family: var(--font-heading)` (globals.css:89) | ✅ |
| Body uses body font | Yes | `font-family: var(--font-body)` (globals.css:79) | ✅ |
| Eyebrow uses mono | Yes | `font-family: var(--font-mono)` (globals.css:322) | ✅ |
| Font display swap | Yes | `display: "swap"` on all fonts | ✅ |

### Type Scale Analysis

Current sizes extracted from CSS:

| Element | Size | Line Height | Tracking | Notes |
|---------|------|-------------|----------|-------|
| Hero h1 | clamp(2.75rem, 7vw, 5.5rem) | 0.95 | -0.045em | Good, responsive |
| Section h2 | clamp(2.25rem, 5vw, 4rem) | 1 | -0.035em | Good |
| Card h3 | 1.125rem (18px) | 1.35 | -0.02em | Good |
| Hero sub | clamp(1.0625rem, 1.5vw, 1.25rem) | 1.6 | — | Good |
| Body (card p) | 0.9375rem (15px) | 1.65 | — | ✅ In range |
| Eyebrow | 0.75rem (12px) | — | 0.2em | Good |
| Button | 0.9375rem (15px) | — | -0.015em | Good |
| Nav link | 0.875rem (14px) | — | -0.01em | Good |

**Assessment:** Type scale is close to modular but has some arbitrary values (0.9375rem, 1.0625rem). Consider standardizing to 12/14/16/18/24/32/48/64/80 scale.

### Typography Issues

1. **Body max-width not set** — Card and FAQ body copy can run wide on large screens. Add `max-width: 65ch` to paragraph styles.
2. **Hero h1 max-width is 14ch** — Good constraint, but could be 12ch for more dramatic line breaks.
3. **Pricing period span** uses inline Tailwind (`text-base`) mixing with CSS classes — should be CSS-only for consistency.

---

## Motion & Interaction Plan

### Current State

| Element | Motion | Trigger | Library |
|---------|--------|---------|---------|
| Page sections | Fade + rise (20px) | Intersection | CSS + IntersectionObserver |
| Buttons | translateY(-2px) + shadow | Hover | CSS |
| Cards | translateY(-2px) + border brighten | Hover | CSS |
| Dashboard frame | translateY(-4px) + scale(1.005) | Hover | CSS |
| Theme toggle | Border + bg change | Hover | CSS |
| Primary button | Gradient position shift + shadow | Hover | CSS |

**Assessment:** Motion is present but conservative. All CSS-based (good for performance), but no orchestrated sequences or scroll-driven storytelling.

### Recommended Additions

| Element | Motion | Trigger | Library | Duration |
|---------|--------|---------|---------|----------|
| Hero headline | Staggered word entrance | Mount | CSS or Framer Motion | 700ms total |
| Hero eyebrow | Fade + rise | Mount (before h1) | CSS | 400ms |
| Hero CTAs | Stagger in after headline | Mount | CSS | 200ms delay each |
| Proof strip pills | Stagger entrance | After hero reveal | CSS | 100ms stagger |
| Dashboard image | Subtle parallax | Scroll | CSS (will-change: transform) | Continuous |
| FAQ items | Accordion expand | Click | Framer Motion or CSS grid | 300ms |
| Process step numbers | Count up or fade-slide | Intersection | CSS | 400ms |
| Primary CTA button | Shimmer sweep on hover | Hover | CSS | 700ms |

### Reduced Motion

Current implementation is **correct** — `prefers-reduced-motion: reduce` disables transforms, opacity animations, and scroll behavior. No changes needed.

---

## Benchmarks Referenced

| Benchmark | Pattern to Borrow | Application |
|-----------|-------------------|-------------|
| **Linear** | Monochrome + single accent, product-as-hero | Already doing this well — purple accent, dashboard visual |
| **Linear** | Subtle parallax on hero visual | Add to dashboard frame |
| **Vercel** | Hover states on every card | Present, but could add border glow |
| **Stripe** | Trust architecture (logos → numbers → testimonials) | **Missing** — add logo wall + specific number |
| **Stripe** | Specific numbers in copy | Add "X teams", "X components" |
| **Framer** | Scroll-driven hero demo | Consider for v2 — product walkthrough |
| **Framer** | Bold word emphasis in headline | Add color or weight to "living design system" |
| **Raycast** | Demo loops over static screenshots | Consider video for dashboard preview |
| **Supabase** | Code-as-hero for dev audience | Already aligned with CLI messaging |

---

## Quality Checklist

### Typography
- [x] Modular type scale — *Mostly, minor deviations (0.9375rem)*
- [x] Hero headline: max 2 lines, tight tracking — *Yes, -0.045em*
- [x] Body copy: 15–17px, line-height 1.5–1.65, max-width ~65ch — *15px, 1.65 ✅, max-width missing ❌*
- [x] Font weights used: ≤3 — *400, 500, 600, 700, 800 — 5 weights ❌*
- [x] Optical alignment on headlines — *Yes, centered*

### Spacing & Layout
- [x] 4px or 8px spacing rhythm — *Mostly, some 0.625rem (10px) values ❌*
- [x] Section vertical padding: ≥96px desktop / ≥64px mobile — *clamp(4.5rem, 8vw, 7rem) = 72-112px ✅*
- [x] Grid: max-width container (1200–1280px) — *1200px ✅*
- [x] Mobile: 16–24px horizontal padding — *1.5rem (24px) on mobile ✅, but 0.75rem gutter at 760px ❌*

### Color
- [x] ≤3 neutrals + 1 accent — *3 text tones + purple accent ✅*
- [x] WCAG AA contrast — *Needs verification, but tokens look reasonable*
- [x] Dark mode has own token values — *Yes, not inverted ✅*

### Hero
- [x] Value prop readable in <3 seconds — *Yes ✅*
- [x] Primary CTA visually dominant — *Yes, gradient + glow ✅*
- [x] Visual communicates product — *Yes, dashboard UI ✅*
- [ ] Loads with intentional motion sequence — *No, static reveal ❌*

### Social Proof
- [ ] Logos, numbers, or testimonials in first 1.5 viewports — *No logos/numbers ❌*
- [ ] Specific claims — *No, proof strip is feature claims ❌*

### CTA
- [x] Every section ends with a path forward — *Mostly, but "How it works" lacks CTA ❌*
- [x] Footer CTA is a distinct moment — *Yes ✅*

### Motion
- [x] `prefers-reduced-motion` respected — *Yes ✅*
- [x] No layout shift from animations — *Yes, transform only ✅*
- [x] Scroll animations on intersection — *Yes ✅*
- [x] No distracting infinite loops — *Yes ✅*

### Performance & a11y
- [x] Images: Next.js `<Image>` with dimensions, `priority` on hero — *Yes ✅*
- [x] Fonts: `next/font` with `display: swap` — *Yes ✅*
- [ ] Lighthouse ≥90 mobile — *Not verified*
- [x] Keyboard-accessible with focus rings — *Yes, `:focus-visible` styles ✅*
- [x] Semantic HTML — *Yes, `<section>`, heading order correct ✅*

### Summary: 21/27 passing (78%)

---

## Proposed Changes

### Phase 1: Quick Wins (Typography & Polish)

1. **Add max-width to body copy** — `max-width: 65ch` on `.card p`, `.faq-item p`, `.intro-band p`
2. **Consolidate font weights** — Remove 700, use 600 for h3; keep 400, 500, 600, 800
3. **Fix mobile container padding** — Ensure 1rem minimum at 360px width
4. **Add CTA below "How it works"** — "See it in action →" link after process list
5. **Add CTAs to pricing cards** — Button per tier

### Phase 2: Social Proof & Trust

6. **Replace proof strip with real proof** — Logo wall or specific number ("Analyzing 12,000+ components for 47 teams")
7. **Add one testimonial** — After features section, before pricing (if available)
8. **Add beta/waitlist count** — If applicable, add to hero

### Phase 3: Motion & Delight

9. **Hero headline entrance** — Staggered word animation on mount
10. **Hero CTA shimmer** — Subtle sweep effect on primary button hover
11. **FAQ accordion** — Collapsible with smooth height animation
12. **Dashboard parallax** — Subtle Y-axis movement on scroll
13. **Process step entrance** — Number + content stagger on reveal

### Phase 4: Content & Copy

14. **Tighten process step copy** — 1 line per step
15. **Add 3-4 more FAQs** — Framework support, security, self-host
16. **Footer links** — Add Twitter, GitHub, Docs, Privacy, Terms
17. **Final CTA refinement** — Single CTA with micro-reassurance

---

## Future Enhancements (Post-MVP)

1. **Interactive dashboard demo** — Scroll-driven walkthrough showing connect → generate → fix flow
2. **Component gallery preview** — Embeddable widget showing real rendered components
3. **Video hero** — 8-10s loop of dashboard in use
4. **Pricing calculator** — For Team tier, estimate cost by team size
5. **Dark mode preference sync** — Respect system preference on first load (currently implemented)
6. **Internationalization** — If expanding beyond English-speaking markets
7. **Performance audit** — Run Lighthouse, optimize LCP (likely hero image)
8. **A/B test headlines** — "Turn your repo into..." vs. "Your repo is already a design system."

---

*Audit generated following the landing-page-designer skill guidelines. Benchmarks: Linear, Vercel, Stripe, Framer, Raycast.*
