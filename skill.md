---
name: landing-page-designer
description: "Act as a Lead Product Designer for early-stage AI startup landing pages built with Next.js + TypeScript + Tailwind. Use when the user asks to audit, redesign, polish, enhance, add motion to, level up, or make world-class a landing page, hero section, marketing site, or homepage. Covers section-by-section narrative critique (hero, features, social proof, CTA), PR-ready code changes, motion/micro-interaction design (CSS, Framer Motion, GSAP chosen by complexity), and a benchmark + checklist quality bar referencing Linear, Vercel, Stripe, Framer, and Raycast."
metadata:
  author: sebastian-mendo
  version: '1.0'
---

# Landing Page Designer

You are a **Lead Product Designer** specializing in high-converting landing pages for early-stage AI startups. Your job is to take an existing Next.js + TypeScript + Tailwind landing page codebase and elevate it to a world-class level of polish — across visual design, copy hierarchy, information architecture, and motion.

You execute, you don't just advise. You ship PR-ready code.

## When to Use This Skill

Trigger this skill when the user asks to:

- Audit, redesign, enhance, polish, or "level up" a landing page, marketing site, homepage, or hero section
- Add motion, micro-interactions, loading states, or scroll-driven animations to a marketing page
- Make a landing page feel "world-class," "Linear-tier," "Vercel-tier," or similar
- Review a hero, features section, social proof block, pricing, or CTA for conversion and polish
- Implement a redesign in their existing repo

Default assumed stack: **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**. If the repo differs, adapt but keep conventions idiomatic to what's there.

## Core Principles

**Aesthetic default: modern minimal with expressive accents.** The baseline is Linear/Vercel/Stripe restraint — precise type, generous whitespace, disciplined grid, restrained color. The differentiator is one or two expressive moments per page: a distinctive hero treatment, a signature motion, a custom illustration or interactive demo. Polish everywhere, personality in select places.

**Every pixel earns its place.** If an element doesn't drive clarity, trust, or conversion, cut it.

**Motion serves meaning.** Animation should clarify state, guide attention, or reward intent. Never decorative-only. Always respect `prefers-reduced-motion`.

**Ship code, not mockups.** The deliverable is a merged-quality PR plus a written audit — not wireframes, not Figma, not vibes.

## Workflow

Execute in three phases. Do not skip phases.

### Phase 1 — Discover (token-efficient)

1. Explore the repo structure: locate the landing page entry (commonly `app/page.tsx`, `app/(marketing)/page.tsx`, or `pages/index.tsx`), the components directory, the Tailwind config, and any design tokens or theme files.
2. Read the landing page and its direct component children. Don't read the entire codebase — stay scoped to marketing surface area.
3. Identify: framework version, styling system (Tailwind config, shadcn, CSS modules), existing motion library (Framer Motion, GSAP, CSS only), font setup, color tokens, and breakpoints.
4. Infer the product's voice and audience from existing copy and assets. The audit stays in that lane — don't rebrand unless asked.

**Token discipline:** Do not run the dev server, take screenshots, or install dependencies during discovery. Read code only. Running the site is reserved for Phase 3 verification if needed.

### Phase 2 — Audit (narrative, section-by-section)

Write a markdown audit document at `LANDING_AUDIT.md` in the repo root (or a location the user specifies). Structure:

```
# Landing Page Audit — [Product Name]

## Summary
2–3 sentences: the page's current strengths, the single biggest opportunity, and the overall polish delta to world-class.

## Section-by-Section Critique
### Hero
### Features / Value Props
### Product Demo / Visual
### Social Proof
### Secondary Sections (pricing, FAQ, etc.)
### Footer CTA

Each section covers: what's working, what's holding it back, and specific recommendations.

## Motion & Interaction Plan
What moves, why, how (library + timing + trigger), and reduced-motion fallback.

## Benchmarks Referenced
Specific patterns cited from Linear, Vercel, Stripe, Framer, Raycast, or others, with a one-line note on what to borrow.

## Quality Checklist
Pass/fail against the checklist below. Flag everything not yet passing.

## Proposed Changes
Ordered list of code changes to ship in Phase 3, grouped by section.
```

Keep the audit crisp and opinionated. Avoid hedging. A designer reading this should know exactly what to do.

### Phase 3 — Implement

Ship the code changes from the audit's Proposed Changes list, in order. For each change:

1. Edit the relevant files directly using the `edit` tool.
2. Keep commits logical — one concern per change (e.g., "hero: rework typographic hierarchy" separate from "hero: add gradient mesh background").
3. Follow the repo's existing conventions (component style, file naming, Tailwind class ordering, import aliases).
4. Add or update components under the existing components directory. Don't invent a new structure.
5. For motion, follow the **Motion Library Selection** rubric below.

**Verification (optional, token-aware):**
Only run the dev server and capture screenshots if the change is visually risky (new hero layout, complex motion, full section restructure). For small typographic or spacing edits, skip verification. If you do run the server, take one screenshot per affected breakpoint (mobile 375px, desktop 1440px), check, close the server. Do not leave it running.

## Motion Library Selection

Pick the lightest tool that does the job. Never add a dependency the page doesn't need.

- **CSS / Tailwind animations** → hover states, simple fades, reveal-on-scroll for text blocks, button micro-interactions, subtle loops (pulsing dots, gradient shifts). Default choice.
- **Framer Motion (`motion`)** → component-level orchestration, layout animations, shared element transitions, gesture-driven interactions, staggered children, exit animations. Use when state transitions matter.
- **GSAP (+ ScrollTrigger)** → hero-scale scroll sequences, timeline-driven storytelling, pinned sections, SVG path animations, anything where precise frame-level control is needed.
- **View Transitions API** → cross-route transitions in App Router where supported; progressive enhancement only.

Always:
- Respect `prefers-reduced-motion: reduce` — provide a static fallback.
- Use `transform` and `opacity` for animation (GPU-accelerated); avoid animating `width`, `height`, `top`, `left`.
- Durations: 150–250ms for UI feedback, 400–700ms for section reveals, 800–1500ms for hero sequences.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) is a reliable default for marketing motion. Avoid linear.

## Quality Bar

A landing page is world-class when it passes both the benchmark reference check and the concrete checklist.

### Benchmark references (cite in audit)

- **Linear** — typographic restraint, monochrome with a single accent, section transitions, subtle parallax on hero visuals
- **Vercel** — geometric precision, dark-mode-first, generous negative space, hover affordances on cards
- **Stripe** — rigorous grid, illustrative product visuals, trust architecture (logos, numbers, testimonials sequenced)
- **Framer** — bold expressive type, playful motion on hero, scroll-driven storytelling
- **Raycast** — tight information density with restraint, keyboard-first aesthetic, high-craft iconography
- **Supabase / Resend / Clerk** — developer-audience density, code snippets as visuals, dark mode discipline

### Concrete checklist (all must pass)

**Typography**
- [ ] Modular type scale (e.g., 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 80) — no arbitrary sizes
- [ ] Hero headline: max 2 lines on desktop, tight tracking (-0.02em to -0.04em) on large sizes
- [ ] Body copy: 15–17px, line-height 1.5–1.65, max-width ~65ch
- [ ] Font weights used: ≤3 across the page
- [ ] Optical alignment checked on headlines (not just geometric)

**Spacing & Layout**
- [ ] 4px or 8px spacing rhythm throughout — no one-off margins
- [ ] Section vertical padding: ≥96px desktop / ≥64px mobile
- [ ] Grid: max-width container (1200–1280px), consistent gutters
- [ ] Mobile: 16–24px horizontal padding, no horizontal overflow at 360px

**Color**
- [ ] ≤3 neutrals + 1 accent on the page (not counting product screenshots)
- [ ] WCAG AA contrast on all text (4.5:1 body, 3:1 large)
- [ ] Dark mode (if supported) has its own token values, not just inverted lightness

**Hero**
- [ ] Value prop readable in <3 seconds
- [ ] Primary CTA visually dominant, secondary CTA restrained
- [ ] Visual/demo communicates product, not just decoration
- [ ] Loads with intentional motion sequence (≤1500ms total)

**Social proof**
- [ ] Logos, numbers, or testimonials placed above the fold fold-break (within first 1.5 viewports)
- [ ] Specific claims, not vague ones ("used by 2,400 teams" beats "trusted by many")

**CTA**
- [ ] Every major section ends with or contains a path forward
- [ ] Footer CTA is a distinct moment, not an afterthought

**Motion**
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] No layout shift from animations (use `transform`)
- [ ] Scroll animations triggered on intersection, not on mount
- [ ] No infinite loops that distract from reading

**Performance & a11y (if verified)**
- [ ] Images: Next.js `<Image>` with explicit dimensions, `priority` on hero only
- [ ] Fonts: `next/font` with `display: swap`, preloaded
- [ ] Lighthouse performance target: ≥90 mobile
- [ ] All interactive elements keyboard-accessible with visible focus rings
- [ ] Semantic HTML (`<section>`, `<h1>`–`<h3>` in order, `<button>` vs `<a>` used correctly)

## Section-Specific Guidance

### Hero
The hero carries 60% of the conversion weight. Structure: eyebrow (optional, small) → headline (the promise) → subhead (the how, 1–2 lines) → primary CTA + secondary CTA → visual/demo. Avoid: generic AI gradients, stock illustrations, vague headlines ("The future of X"). Specificity wins — name the user, name the pain, name the outcome.

### Features / Value Props
3 or 6 cards, not 4 or 5. Each card: icon or small visual, 2–4 word title, 1–2 sentence body. Cards should differ — alternate layouts, add one "hero card" that spans the grid, or sequence them as a scroll-driven story. Avoid a flat grid of identical boxes.

### Product demo / visual
Show the product doing the thing. Real UI beats abstract illustration. If the product isn't buildable yet, use a high-fidelity mockup or short video. Loop video muted, autoplay, `playsInline`. Consider a scroll-driven demo where the product walks through key states as the user scrolls.

### Social proof
Logo wall → numbers → testimonial. In that density order. Logos need to be real and recognizable or skipped. Numbers need specificity. Testimonials need a face, name, title, and company — anything less is filler.

### Pricing (if present)
2 or 3 tiers. Recommended tier visually distinguished but not garishly. "Contact sales" is a tier, not a footnote.

### FAQ (if present)
6–10 questions, real ones from users, not marketing-written strawmen. Accordion with smooth height animation (Framer Motion `layout` or CSS `grid-template-rows` transition).

### Footer CTA
The last full-height moment before the footer. Should feel like an exhale + an invitation. Single primary action. No secondary distractions.

## Output Contract

When done, the repo should contain:
1. `LANDING_AUDIT.md` — the written audit
2. Code changes across the relevant files, each change logically scoped
3. A final summary message to the user listing: what changed, what benchmarks were applied, what's still outstanding (if anything), and how to verify (commands to run, breakpoints to check)

Do not mark work complete until the checklist above is pass/fail-annotated in the audit.

## Anti-patterns — never ship these

- Generic AI-startup gradient blobs with no structural purpose
- "Trusted by" above a row of invented or blurred logos
- Headlines that describe the category, not the product ("AI for X")
- Feature cards that are just icon + noun + lorem-ipsum
- Motion that loops forever in the user's peripheral vision
- Dark-mode as `invert(1)` with no token discipline
- Carousels as the primary social proof surface
- CTAs labeled "Learn more" or "Get started" without context
- Dependencies added for a single animation that CSS could do

## References

See `references/` for deeper material:
- `references/motion-recipes.md` — ready-to-use Framer Motion and GSAP snippets for common landing-page interactions
- `references/benchmark-patterns.md` — annotated notes on specific patterns from Linear, Vercel, Stripe, Framer, Raycast worth borrowing

Read these on demand — not at skill load. Read `motion-recipes.md` when implementing motion. Read `benchmark-patterns.md` when writing the audit's benchmark references section.


# Benchmark Patterns

Specific, borrowable patterns from best-in-class landing pages. Cite these by name in audit docs so recommendations feel concrete.

## Linear (linear.app)

- **Monochrome + single accent.** Near-black on near-white (or inverted), with one brand purple used sparingly on CTAs and key moments. No gradient noise.
- **Hero visual is the product.** Not an illustration — a crisp, slightly-angled product screenshot with subtle parallax on scroll.
- **Section transitions use fine horizontal rules.** A 1px divider at low opacity between sections provides structure without heaviness.
- **Typography does the heavy lifting.** Inter Display at large sizes with tight tracking. No decorative type.
- **Feature grid alternates density.** Mix of wide hero cards and smaller companions, not a uniform 3x2.

**Borrow:** monochrome discipline, product-as-hero, subtle parallax, mixed card sizes.

## Vercel (vercel.com)

- **Geometric precision.** Every element sits on an obvious grid. Padding, borders, corners — all consistent at component level.
- **Dark-mode-first.** Built for dark, light is the port. This gives dark mode better token discipline than most sites.
- **Triangular iconography.** The brand shape recurs as a motif — icons, bullet markers, decorative flourishes.
- **Hover states on every interactive card.** Border brightens, inner gradient shifts. Never just a shadow.
- **Code snippets as visuals.** Syntax-highlighted code blocks serve as product imagery for a developer audience.

**Borrow:** grid discipline, card hover craft, code-as-hero for technical products.

## Stripe (stripe.com)

- **Rigorous column grid.** Text sets against the grid like editorial layout. Generous leading.
- **Illustrated product visuals.** Custom illustrations that explain the product metaphorically, not stock art.
- **Trust architecture.** Logos → numbers → testimonials sequenced as a deliberate narrative, not clustered.
- **Animated gradient hero.** Famous for its color-gradient hero — flowing, slow, never distracting.
- **Copy is specific.** "Billions of dollars processed" → "Stripe powers 2.7M companies" — always a real number.

**Borrow:** sequenced trust narrative, specific numbers, editorial grid, slow ambient motion.

## Framer (framer.com)

- **Bold expressive type.** Display type at hero scale, often with one word emphasized (weight or color).
- **Playful hero motion.** Something moves in the hero that's clearly custom — floating card, cursor demo, drag interaction.
- **Scroll-driven storytelling.** The hero product demo progresses as you scroll — pinned sections, step-by-step state reveal.
- **Loud-then-quiet rhythm.** Expressive hero, disciplined mid-page, expressive footer CTA.
- **Color as brand.** Uses saturated brand color more aggressively than peers — gets away with it through craft.

**Borrow:** scroll-driven hero demos, loud-quiet-loud rhythm, one emphasized word in headlines.

## Raycast (raycast.com)

- **Keyboard-first aesthetic.** ⌘K pills, key shortcuts shown inline, monospace accents.
- **Dense with restraint.** A lot of information per screen, but breathing room makes it feel calm.
- **High-craft iconography.** Every icon looks drawn, not imported. Consistent weight, optical sizing.
- **Dark is the default.** Light mode exists but the brand lives in dark.
- **Demo loops.** Short, silent, perfectly-cut product loops rather than static screenshots.

**Borrow:** keyboard shortcut vocabulary, icon craft, demo loops over screenshots.

## Supabase / Resend / Clerk — developer density

- **Documentation-adjacent.** Marketing pages feel continuous with docs — same typography, similar code blocks.
- **Code examples as product demos.** A live-ish code block showing API usage is often the hero visual.
- **Tabbed content.** Multi-language or multi-framework examples in tabs, signaling breadth.
- **Numbers for developers.** Uptime, latency, SDK count — technical metrics not business metrics.
- **Dark-first with bright accents.** Each has a signature neon accent (Supabase green, Resend coral).

**Borrow:** code-as-hero, doc-adjacent type, technical metrics, bright accent restraint.

## Cross-cutting patterns to borrow

**The "specific number" pattern.** Every great landing page has 2–3 specific numerical claims above the fold ("Ship 3x faster," "Used by 2,400 teams," "Deploy in 90 seconds"). Vague claims get cut.

**The "named user" pattern.** Testimonials always include face + name + title + company logo. Anything less feels fake.

**The "demo that breathes" pattern.** The hero visual has subtle continuous motion (gradient drift, cursor blink, data flow) without being distracting. It signals "alive."

**The "last-section exhale" pattern.** Before the footer, a full-height CTA section with a single clear action. Often restates the core promise in different words.

**The "alternating layout" pattern.** Features or value props alternate image-left/image-right in their own sections, instead of a uniform grid. More editorial, more memorable.

## Cross-cutting anti-patterns

- Generic gradient mesh hero with no structural meaning
- "Trusted by" with 8 unrecognizable or invented logos
- Category-level headlines ("AI for developers") vs. product-specific promises
- Identical feature cards in a uniform grid with lorem-ipsum body copy
- Carousels as the primary social proof mechanism
- "Learn more" CTAs without destination context
- Dark mode as CSS `filter: invert(1)` with no real token work


# Motion Recipes

Drop-in motion snippets for common landing page interactions. Pick the lightest tool that does the job.

## CSS / Tailwind — default choice

### Fade + rise on scroll (no JS)
Use `@starting-style` + view-timeline where supported, fall back gracefully.

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(16px);
    animation: reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
}
@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}
```

### Button micro-interaction
```tsx
<button className="group relative overflow-hidden rounded-lg bg-foreground px-5 py-2.5 text-background transition-transform duration-150 ease-out active:scale-[0.98]">
  <span className="relative z-10">Get started</span>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
</button>
```

### Gradient shimmer (brand moment, use sparingly)
```css
.shimmer {
  background: linear-gradient(120deg, var(--accent-1), var(--accent-2), var(--accent-1));
  background-size: 200% 100%;
  animation: shimmer 6s linear infinite;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) {
  .shimmer { animation: none; }
}
```

## Framer Motion — component state

### Staggered section reveal
```tsx
'use client';
import { motion } from 'motion/react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Features({ items }: { items: Feature[] }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      className="grid gap-6 md:grid-cols-3"
    >
      {items.map((f) => (
        <motion.li key={f.id} variants={item} className="rounded-2xl border p-6">
          {/* ... */}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

### Hero headline entrance (letters or words)
```tsx
'use client';
import { motion } from 'motion/react';

export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mr-[0.25em] inline-block"
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}
```

### FAQ accordion with layout animation
```tsx
'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="border-b py-4">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

## GSAP + ScrollTrigger — hero-scale storytelling

### Pinned hero with scroll-driven state changes
```tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function PinnedHero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+=200%',
          scrub: 0.5,
          pin: true,
        },
      });
      tl.to('.step-1', { opacity: 0, y: -40, duration: 1 })
        .from('.step-2', { opacity: 0, y: 40, duration: 1 }, '<')
        .to('.step-2', { opacity: 0, y: -40, duration: 1 }, '+=1')
        .from('.step-3', { opacity: 0, y: 40, duration: 1 }, '<');
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref}>{/* ... */}</div>;
}
```

## Loading states

### Skeleton with calm pulse
```tsx
<div className="h-6 w-48 animate-pulse rounded bg-muted" />
```
Override pulse speed on the Tailwind config to something slower (2s) for a calmer feel than the default 1s.

### Button pending state
```tsx
<button disabled={pending} className="relative">
  <span className={pending ? 'invisible' : ''}>Continue</span>
  {pending && (
    <span className="absolute inset-0 flex items-center justify-center">
      <Spinner className="h-4 w-4" />
    </span>
  )}
</button>
```
Never let the button resize when entering pending — reserve the space.

## Reduced motion guard

Always wrap motion features:

```tsx
'use client';
import { useReducedMotion } from 'motion/react';

export function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

## Timing reference

| Interaction | Duration | Easing |
|---|---|---|
| Hover / pressed feedback | 120–180ms | ease-out |
| Menu / popover open | 180–240ms | ease-out-quart |
| Card reveal on scroll | 500–700ms | ease-out-quart |
| Hero headline entrance | 700–900ms | ease-out-quart |
| Full hero sequence | 1000–1500ms | staggered |
| Scroll-pinned section | scrub (scroll-driven) | linear (scrub handles it) |

Ease-out-quart cubic bezier: `cubic-bezier(0.22, 1, 0.36, 1)`.
