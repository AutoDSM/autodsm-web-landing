# Design System — AutoDSM landing (Planar-informed, purple–white)

A design specification for the **AutoDSM marketing landing** in `app/page.tsx`, merging editorial discipline from the **Planar** SaaS template with this repo’s **purple–white** product identity and the tokens in [`app/globals.css`](app/globals.css). Use this doc when extending sections, adding motion, or auditing contrast.

**Planar reference (structure & craft):** [Planar — Framer SaaS Template](https://planar-saas-software-template.framer.website/)  
**Aesthetic archetype (Planar):** Linear × Framer Creative — editorial, warm, light-mode-first, photography-forward, minimal-with-personality.  
**AutoDSM variant:** Warm neutrals + **single purple accent** (`#8f23fa`) for primary actions, focus, and subtle gradients — not full-bleed chrome except hero / emphasis moments.

---

## Brand hybrid: Planar discipline × AutoDSM identity

| Dimension | Planar (source) | AutoDSM (this repo) |
|-----------|----------------|---------------------|
| Page canvas | Cream `#f0ede6`, never pure white as default | Light: `--bg-primary` `#ffffff`, `--bg-secondary` `#faf9f7` (warm off-white). *Stretch goal:* drift page toward `#f0ede6` if we unify with Planar surfaces. |
| Primary CTA | Dark pill `#1a1a18` on cream text | **Purple** `.btn.primary` — `--accent` `#8f23fa`, fg `--accent-fg` `#ffffff` ([`app/globals.css`](app/globals.css)). |
| Color in UI chrome | Monochrome warm; color only in imagery | **Allowed:** accent on buttons, links on hover, hero radial glow (`hero::before`), optional `--gradient-subtle` bands, FAQ toggle, feature icons. **Avoid** second saturated brand hue. |
| Typography | Inter single family | **Manrope** headings, **Geist** body, **Geist_Mono** mono — [`app/layout.tsx`](app/layout.tsx) via `next/font/google`, `display: "swap"`. |
| Dark mode | Not Planar default | Supported: `:root[data-theme="dark"]` ([`app/globals.css`](app/globals.css)); user toggle + `localStorage` in [`app/page.tsx`](app/page.tsx). |

---

## 1. Design principles

1. **Warmth over cold tech.** Prefer warm off-whites (`--bg-secondary`, borders) over flat gray fills; light mode is default.
2. **Hierarchy through color and weight.** Section `h2` + muted `span` / `--text-tertiary` for secondary lines ([`.section-head h2 span`](app/globals.css)); hero H1 uses gradient text on light (`hero-entrance` + `background-clip`).
3. **Product truth over decoration.** Hero and cards use **SVG product art** (`/visuals/landing/…`) for credibility; Planar-style **photography / paint strips** are **aspirational** (not yet a full 3-panel hero strip).
4. **One expressive moment per section.** Example: replica cards lift on hover; `#features` uses pale cards on `--bg-primary` canvas.
5. **Pill geometry.** Primary controls use `border-radius: 999px` (`.btn`, nav pills, waitlist input, theme switch).
6. **Single accent.** Purple is the product accent — use for CTAs, focus rings, icon tint, and controlled gradients — **not** competing neons across large fields.
7. **Purple is the product accent.** Reserve for action, highlights, and focus — not full-viewport fields unless intentional (e.g. hero glow).

---

## 2. Color tokens (implementation map)

Light and dark tokens live on `:root` and `:root[data-theme="dark"]` in [`app/globals.css`](app/globals.css). Tailwind `@theme` mirrors several as `--color-*`.

### Surfaces (AutoDSM)

| Role | CSS variable(s) | Light value | Usage |
|------|-----------------|------------|--------|
| Page | `--bg-primary` | `#ffffff` | `body` background |
| Secondary band | `--bg-secondary` | `#faf9f7` | Alternate rhythm (Planar *stretch*: map toward `#f0ede6`) |
| Elevated / card | `--bg-elevated` | `#ffffff` | Cards, panels |
| Inset / FAQ | `--bg-surface-inset` | `#ebebeb` | FAQ items, neutral panels |
| Glass | `--bg-glass` | `rgba(255,255,255,0.72)` | Sticky header (scrolled) |
| Feature cards (light) | `#f3f3f4` | hard-coded on `#features .feature-card` | Feature grid panels |

### Text

| Role | CSS variable | Light | Usage |
|------|--------------|-------|--------|
| Primary | `--text-primary` | `#121212` | Headings, body emphasis |
| Secondary | `--text-secondary` | `#4f4a43` | Subcopy, cards |
| Tertiary / muted line | `--text-tertiary` | `#726c63` | Section `h2 span`, de-emphasis |

### Accent (purple–white brand)

| Token | Value | Usage |
|-------|--------|--------|
| `--accent` | `#8f23fa` | Primary buttons, feature icons, links, selection |
| `--accent-hover` | `#7a17e2` | Primary button hover |
| `--accent-fg` | `#ffffff` | Text on purple |
| `--accent-soft` | `#f1e8ff` | Soft purple surfaces |
| `--accent-glow` | `rgba(143,35,250,0.25)` | Hero glow, shadows |
| `--gradient-hero` | purple–lavender gradient | Decorative (hero / accents) |
| `--gradient-subtle` | purple tint → transparent | `.section-muted` bands elsewhere |

**Planar rule adapted:** UI chrome stays **warm neutral + one purple**; avoid rainbow accents. Editorial paint / photography colors remain **future assets** only.

### Borders

`--border-subtle` / `--border-default` / `--border-strong` — warm-tinted, not cold gray.

### Dark mode

Summarize by reading `:root[data-theme="dark"]` in [`app/globals.css`](app/globals.css): deep navy-gray surfaces (`#0a0c10`, `#161a24`), cool-tinted text, same `--accent` purple for continuity.

---

## 3. Typography

### Families (actual stack)

| Role | Font | Variable | Source |
|------|------|----------|--------|
| Headings | Manrope | `--font-heading` | [`app/layout.tsx`](app/layout.tsx) `next/font/google` |
| Body | Geist Sans | `--font-body` | [`app/layout.tsx`](app/layout.tsx) |
| Mono | Geist Mono | `--font-mono` | [`app/layout.tsx`](app/layout.tsx) — steps / numbering |

**Planar guideline adapted:** Single grotesque *feel* (no serif); we use **two** sans families (Manrope + Geist) — keep weights disciplined (see below).

### Weights in use

Prefer at most **three** distinct weights on a single scroll: e.g. **800** hero, **700–800** section titles, **400–600** body (align with existing `globals.css` rules).

### Scale (align with implementation)

| Role | Approx | Notes |
|------|--------|--------|
| Hero H1 | `clamp` ~2.6rem–4.5rem via `.hero-lead` | Letter-spacing `-0.035em`; gradient text on `.hero-entrance` in light theme |
| Section H2 | `clamp(1.5rem, 3.5vw, 2.25rem)` | `.section h2`, `#final-cta h2` |
| Body / card | 0.9375rem–1.0625rem | Card / FAQ / mobile bumps in `@media (max-width: 760px)` |

### Patterns

- **Two-tone section titles:** Primary line + `<span>` in `--text-tertiary` ([`.section-head h2 span`](app/globals.css)).
- **Letter-spaced editorial heading:** Optional future craft; not required for current hero.
- **No** extra display font — stay within Manrope + Geist.

---

## 4. Spacing & layout

### Container

- **Max width:** `min(1200px, calc(100% - 2.5rem))` — [`.container`](app/globals.css) (matches Planar ~1200px).
- **Mobile gutters:** tighten to `calc(100% - 2rem)` under 760px for `.container` / header strip.

### Section rhythm

- Default: `.section { padding: clamp(4.5rem, 8vw, 7rem) 0; }` ([`app/globals.css`](app/globals.css)).
- `#how-it-works`: custom `padding-top/bottom` overrides for tighter cadence.
- `#product.section`: optional `min-height` for scroll presence.

### Spacing scale (Planar-aligned)

Use a **4px** mental model: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120 — prefer `rem` utilities already reflected in `clamp()` and gaps in CSS.

### Grid

- **Replica cards:** `.replica-cards-row` — responsive 1 / 2 / 3 columns (`min-width` breakpoints in [`app/globals.css`](app/globals.css)).
- **Features:** `.feature-grid` — 3 → 2 → 1 columns; `#features` cards use neutral gray `#f3f3f4` in light mode.
- **Process:** `.process-list` single column with divider lines.

---

## 5. Components (AutoDSM + Planar overlap)

### Primary button (purple pill)

Implementation: [`.btn.primary`](app/globals.css) — `border-radius: 999px`, purple fill `var(--accent)`, white text `var(--accent-fg)`, hover `translateY(-2px)`, optional `box-shadow` with `--accent-glow` on hover (see `.btn.primary:hover` and shared button block).

### Ghost / secondary

[`.btn.ghost`](app/globals.css) — glassy neutral, blur — for secondary actions where used.

### Waitlist

[`.waitlist-input`](app/globals.css) — pill input + `.btn.primary` submit; [`components/WaitlistSignup.tsx`](components/WaitlistSignup.tsx).

### Cards

- **Replica / product:** [`.replica-card-image`](app/globals.css) hover lift + shadow.
- **Feature:** `.card.feature-card` — optional top accent line `--gradient-hero` on hover (`.feature-card::before`); icon in `--accent-soft` chip ([`.feature-icon`](app/globals.css)).
- **FAQ:** `.faq-item` — borderless `#f3f3f4` light (per current spec); accordion grid rows ([`.faq-answer`](app/globals.css)).

### Navigation

- **Header:** [`components/Header.tsx`](components/Header.tsx) — wordmark, `.main-nav` pill cluster, desktop **View demo** + [`MobileNav`](components/MobileNav.tsx).
- **Sticky glass:** [`.header-wrapper.scrolled`](app/globals.css) — `backdrop-filter` blur when scrolled.

### Theme

[`components/ThemeModeSwitch.tsx`](components/ThemeModeSwitch.tsx) + `.theme-switch` in [`app/globals.css`](app/globals.css) — bottom footer, sun/moon.

### Footer

[`app/page.tsx`](app/page.tsx) `.site-footer` — logo row + theme; *Planar 4-column + teal line* not yet implemented — **future enhancement**.

---

## 6. Imagery & iconography

**Current:** SVG dashboards and product cards under `/public/visuals/landing/`; theme swap light/dark in hero.

**Planar-inspired future:** candid photography, paint/backdrop strips, **no** stock illustration in feature grids; keep line icons ~20–24px stroke (`FeatureIcon` in [`app/page.tsx`](app/page.tsx)).

---

## 7. Motion

Principles match Planar: **scroll-driven reveal**, **opacity + transform** (avoid layout thrash), **`prefers-reduced-motion`** respected.

| Pattern | Implementation | Spec (approx) |
|---------|----------------|---------------|
| Section reveal | `.reveal` + `IntersectionObserver` in [`app/page.tsx`](app/page.tsx) | Opacity `0→1`, `translateY(24px)→0`, blur `2px→0`, **700ms** `cubic-bezier(0.22, 1, 0.36, 1)` ([`.reveal`](app/globals.css)); `#features` overrides blur to `none` |
| Hero entrance | `.hero-entrance` | `heroFadeUp` **800–900ms**, staggered delays 0 / 150 / 300 / 450ms ([`@keyframes heroFadeUp`](app/globals.css)); dashboard uses `heroScaleIn` **1000ms** |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` | Disables transitions / reveal blur ([`app/globals.css`](app/globals.css)) |
| FAQ | `.faq-answer` | `grid-template-rows` **300ms** |
| Button | `.btn` | **200ms** transition; hover `translateY(-2px)` |

---

## 8. Section composition (Planar blocks → AutoDSM page)

Current [`app/page.tsx`](app/page.tsx) vs Planar’s recommended order:

| # | Planar block | AutoDSM (now) | Notes |
|---|--------------|---------------|--------|
| 1 | Announcement bar | *None* | Optional |
| 2 | Navigation | `Header` + `MobileNav` | ✓ |
| 3 | Hero | `.hero-shell` + waitlist + dashboard media | Single headline (not split two-tone H1 lines); SVG not 3-panel photo strip |
| 4 | Mission / manifesto | *Partial* — product definition paragraph under `#product` | |
| 5 | Tabbed features | *None* | Future |
| 6 | Stats | *None* | Future |
| 7 | Feature grid | `#product` replica cards + `#features` platform cards | ✓ |
| 8 | Pricing | *None* | Future |
| 9 | FAQ | `#faq` + `LANDING_FAQS` | ✓ |
| 10 | Testimonial | *None* | Future |
| 11 | Pre-footer CTA | `#final-cta` + `WaitlistSignup` | ✓ |
| 12 | Footer banner image | *None* | Optional paint/photo |
| 13 | Footer | `site-footer` | Simpler than Planar 4-col; theme toggle ✓ |

---

## 9. Quality bar (ship checklist)

**Planar-inspired**

- [ ] Warm neutral surfaces dominate; avoid muddy gray slabs.
- [ ] Hero and section headings show clear **type hierarchy** (weight + muted span where used).
- [ ] Buttons are **pills** (`999px` radius) for primary marketing actions.
- [ ] Cards use **12–16px** radius (see `.card`, `.faq-item`).
- [ ] Motion: scroll reveal + reduced-motion path; no spurious infinite loops (except intentional if added later).
- [ ] **WCAG AA** for body text on `--bg-primary` / `--bg-secondary`; verify purple on white for small text.

**AutoDSM-specific**

- [ ] **Single purple accent**; no second product hue on CTAs.
- [ ] Light mode default; dark mode toggles without breaking contrast (`:root[data-theme="dark"]`).
- [ ] Focus visible: `:focus-visible` uses `--accent` where defined ([`app/globals.css`](app/globals.css)).
- [ ] No horizontal overflow on mobile (`overflow-x` guards on `html`, `main`, `page-shell`).
- [ ] `#features` special casing (neutral cards, `filter: none` on reveal) preserved if still required.

**Relaxed vs Planar (allowed)**

- Pure white `--bg-primary` for **cards / default light canvas** is OK; use `--bg-secondary` for banding when you want more warmth.
- **Purple primary CTA** is brand — not a Planar dark pill.

---

## 10. Anti-patterns

**From Planar (still avoid)**

- Default **dark** landing for this product.
- Generic **full-viewport purple gradient mesh** replacing product story (subtle hero glow only).
- **Sharp** corners on primary buttons.
- Meaningless **logo carousels** (“Trusted by” with fake logos).
- **Stock illustration** substituting for product proof — use SVG product or real photography when upgrading.

**AutoDSM-specific**

- Second saturated accent **competing** with purple (e.g. bright teal CTAs + purple).
- **Low-contrast** purple body text on lavender (`--accent-soft`) for long reading.
- Hiding **focus** styles for keyboard users.

---

## 11. File reference (keep in sync)

| Concern | Primary file(s) |
|---------|-------------------|
| Tokens & components | [`app/globals.css`](app/globals.css) |
| Fonts | [`app/layout.tsx`](app/layout.tsx) |
| Page structure | [`app/page.tsx`](app/page.tsx) |
| Header / nav | [`components/Header.tsx`](components/Header.tsx), [`components/MobileNav.tsx`](components/MobileNav.tsx) |
| FAQ content | [`data/faqs.ts`](data/faqs.ts) (if present; imported as `LANDING_FAQS`) |

When tokens or section structure change, update **this file** and the relevant CSS so the design system stays a single narrative.

---

*End of design specification.*
