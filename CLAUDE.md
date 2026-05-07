# kylemayne.github.io

Static personal site for Kyle Mayne. Stack: **Astro** (output static), GitHub Actions deploy, domain **kylemayne.com**.

## Design Context

### Users

Primary audience is **peer designers and design leaders**: people evaluating craft, clarity of thinking, and how design is articulated in writing and CV-style work history. Visitors are often skimming between portfolio, Writing, and Work with a desktop or laptop, expecting fast loads and readable type rather than campaign theatrics.

### Brand Personality

**Credible, calm, and intentional.** Voice on the homepage is first-person, grounded in shipped work (enterprise SaaS, BBC, Sage). Visual personality reads editorial and restrained: system typography, generous line height on prose, no decorative noise. The site should feel **designer-authored**, not assembled from a template gallery.

### Aesthetic Direction

- **Minimal surface**: warm neutrals (`#1c1b19` ink family, muted browns), light default with **system-driven dark mode** tokens in `global.css`.
- **Typography**: `-apple-system` stack, **18px** root, stepped scale (`--size-xs` through `--size-3xl`), body line ~1.6–1.8 for long reading.
- **Accent behavior**: links use `--link-strong` / `--link` patterns; underline appears on hover and focus for key link blocks (home hero, writing) to reduce visual noise at rest.
- **Navigation**: floating “liquid” glass shell (blur, soft shadow). Use sparingly elsewhere; the rest of the UI stays flat and typographic.
- **Motion**: staged hero entrance, nav expand; **`prefers-reduced-motion`** honored globally for scroll and key animations.

Explicitly **avoid** a generic “AI portfolio” or flashy SaaS-marketing look; the bar is **simple, minimal, and clearly designer-made**.

### Design Principles

1. **Typography does the work.** Hierarchy from scale and weight, not from cards, stripes, or gratuitous chrome.
2. **One calm system for light and dark.** Same structure, token-swapped colors; no pure black or pure white backgrounds in tokens.
3. **Respect readers.** Skip link, visible focus, semantic landmarks, `sr-only` on outbound link hints, comfortable line length on prose (`--content-width` and hero constraints).
4. **Restraint in components.** Prefer lists, borders, and spacing rhythm over new UI patterns; add components only when they earn their place.
5. **Performance-aware craft.** Static HTML, CSS-first interaction; avoid layout-thrashing animation and unnecessary client JS.

### Open refinements

- No `README.md` in repo yet; duplicate key deploy or dev commands here or in README when useful.
- Reference URLs (sites that feel “right”) can be appended later under Aesthetic Direction.

---

*Design context seeded via teach-impeccable. Update this file when positioning or audience shifts.*
