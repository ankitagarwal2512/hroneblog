# HROne Design System

**HROne** is India's leading hire-to-retire HR & payroll SaaS platform, used by 1,500+ organisations and ~7.5 lakh daily users (HRs, managers, employees, C-suite). The product is a configurable HRMS / HCM covering 10+ modules — Core HR, Payroll, Attendance, Performance, Recruitment, Engagement, Helpdesk, Asset, Expense — plus a signature *InboxforHR™* workflow surface, a *One AI* voice agent, and a companion mobile app. Operator: Uneecops Workplace Solutions Pvt. Ltd. Website: https://hrone.cloud.

This design system is distilled from the **HROne Brand Guidelines v1.1** (55-page document, November 2023 — see `assets/brand/Brand Guidelines V1.1.pdf`) plus the brand fonts and logo artwork supplied by the corporate communications team.

---

## 1. Content Fundamentals

**Brand personality.** HROne is an understanding, insightful, and reliable person. Trustworthy, approachable, efficient, solutions-oriented, empathetic, and responsible. The brand believes: "People make places. People make culture. People make industry. Human resource should focus on human things."

**Voice.** Confident, plainspoken, slightly warm. HROne talks like a senior HR leader who has seen the spreadsheet-chaos and is relieved to be on the other side of it. Marketing copy leans into empathy ("fellow MSME"), capability ("127+ HR workflows, one screen"), and warmth. Product copy in-app is terse, task-oriented, and verb-led. Language should be clear, concise, and professional while maintaining a friendly and helpful demeanor.

**Person.** "Your" / "we" — never "I". Employees are *people* or *your team*, not *users*. HR professionals are *HRs* (Indian English plural is idiomatic and welcome).

**Casing.**
- Headlines: Sentence case in marketing ("Run payroll in 4 steps."), Title Case for product nav and card titles ("Pending Approvals", "Leave Balance").
- Buttons: Title Case, verb-first — *Apply Leave*, *Mark Attendance*, *Download Payslip*.
- Eyebrows / section labels: UPPERCASE with +6% tracking.
- Never ALL CAPS a full sentence.

**Tone examples (do use).**
- "Your workplace. Your way."
- "Close 110+ HR tasks in just 3 clicks."
- "Every payslip lands on time. Every approval — done without a follow-up."
- "Skip the clicks. Just speak." (One AI)

**Tone examples (avoid).**
- Bluster without proof ("revolutionary", "10× faster").
- Emoji in product UI. In marketing they show up sparingly (👋, 🎉) — **do not** sprinkle them into dashboards.
- Jargon-for-jargon's-sake ("synergise your talent capital").

**Numerals.** Indian number conventions are fine on marketing ("7.5 lakh users", "₹12,45,000"). Product surfaces use grouped digits with `,` at thousands for international clarity. Currency always has the ₹ glyph, no space before the amount.

**Compliance language.** When copy touches payroll, PF/ESI/TDS, or statutory filings, be precise. No casual abbreviations ("tax shit") — this is finance-adjacent territory and readers treat the product as a system of record.

**Calls to action.** Short imperative, no trailing exclamation mark. *Book a demo*, *Get started*, *Approve request*, *Raise helpdesk ticket*.

---

## 2. Visual Foundations

### Colours
- **Primary:** HROne Green `#02563d` (Pantone 3425 C) — the anchor. Used for the logo, primary buttons, key-metric numerals, sidebar headers, focus rings.
- **Accent:** HROne Orange `#e56046` (Pantone 7417 C) — warmth and energy; highlights, approval flags, hero illustrations, destructive-but-human states (e.g. overdue, NOT system errors).
- **Secondaries:** Lime `#009f78`, Peach `#fbb887`, Yellow `#f8d772`, Pink `#dd9ade`. Used to *categorise* modules and widgets in dashboards (e.g. Attendance = green, Payroll = orange, Engagement = pink). Use sparingly — "tints are a valuable tool, they should be used sparingly."
- **Tints** are named `--green-100…1000` and generated from the guidelines' 10-step tint ladders per hue. Backgrounds prefer the 100–200 tints; borders the 200–300; fills the 900–1000.
- **Neutrals:** warm, not cool. Page background is `#f7f7f5` (warm off-white), surfaces are pure white, body text `#272727`, secondary text `#535353`, muted `#8d8d8d`.

### Typography
- **Display / UI headlines:** *Clash Grotesk* — Semibold is the workhorse weight. Geometric, confident, slightly condensed feel. Use with `-0.015em` tracking on large sizes.
- **Body / product UI:** *Public Sans* — Regular for copy, Medium for labels & buttons, SemiBold for small caps eyebrows. Ideal for tables, forms, long content.
- Monospace: system `ui-monospace` stack — used only for codes, IDs, employee numbers. We don't ship a custom mono.
- **Scale:** see `colors_and_type.css`. Big type is very big (72px hero), body is 15px default — a touch larger than web norm because HROne is for everyday office use.

### Backgrounds & imagery
- **Photography** is central to the brand. Real photos of real customers in their natural working environments. Poses are candid and warm. Subjects interact with one another, highlighting teamwork. Both group photos and heroic individual portraits. Colours are used carefully to avoid overshadowing the photography.
- **Brand shapes** (from cropped logo) are a key design tool — used to create interesting layouts, often paired with product screenshots and human figures. Shapes can be two-colour or one-colour-plus-image-fill.
- **Illustration style** features small supporting illustrations used as highlighters alongside images in layouts.
- **Brand horns** — the flowing wave mark (see `assets/brand/brand-horns.svg`) used at 15–22% opacity over brand-green or brand-orange fields. **Always left-align to the canvas edge.**
- **Product** surfaces stay calm: `#f7f7f5` page, white cards. Accent colours appear in small rounded badges, progress bars, and numerals — never as panel fills.
- No gradients as decoration. The brand horns SVG is the only "decorative texture." If you need depth, use elevation shadows, not gradients.

### Corner radii
- Cards, modals, sheets: **14 px** (`--radius-lg`). This is the signature product radius.
- Buttons: **10 px** (`--radius-md`).
- Pill badges, avatars, tag chips: **999 px**.
- Inputs: **10 px**.
- Tables & data rows: square or 6px — keep dense surfaces quiet.

### Elevation
Three-layer system, very soft. `--shadow-sm` for resting cards, `--shadow-md` for hover and dropdowns, `--shadow-lg` for modals and menus. No coloured shadows. Avoid stacking shadows on coloured fills — the green is already strong enough.

### Borders
Hairline `1px` in `--border` (`#e4e4e4`) for card walls, dividers, and input edges. `--border-strong` (`#c7c7c7`) only on hover for selectable items. Focus is a **3 px ring** in `rgba(2,86,61,0.18)` plus a solid 1 px green edge — never the default browser outline.

### Spacing
4-pt base scale, `--space-1` (4 px) → `--space-20` (80 px). Dashboards use 24 px gutters and 16 px card padding. Marketing sections use 80 px vertical rhythm.

### Animation
Purposeful, not performative. Linear-ease 120–180 ms for state changes. Modals slide up 8 px and fade in 200 ms. Skeletons pulse at 1.6s. No bounce, no spring, no parallax. The brand is competent and calm; the motion language should feel that way.

### Hover & press states
- **Buttons (primary):** hover = `--accent-hover` (`--green-900`); press = `--accent-active` (darker). No scale, no shadow change.
- **Secondary / tertiary:** hover = `--green-100` background overlay.
- **Destructive:** hover darkens the danger red.
- **Cards (clickable):** hover raises to `--shadow-md` and border shifts to `--border-strong`.
- **Icon buttons:** hover = `--ink-100` background.

### Transparency & blur
Used sparingly. Sticky app headers use `backdrop-filter: saturate(180%) blur(12px)` on a `rgba(255,255,255,0.84)` fill. The brand-horns motif is 10–20% opacity white over brand-green or brand-orange fields. Never blur body content.

### Fixed / sticky layout rules
- App shell: 240 px left sidebar (collapsible to 64 px icon rail), 56 px top bar, main content scrolls.
- Marketing: sticky nav 72 px tall, translucent on scroll.

### Density
The product targets office workers, not power users. Default row height 44 px (touch-friendly, since mobile is a first-class surface). Form inputs are 44 px. Buttons 40 px (md) / 48 px (lg) / 32 px (sm).

### Numerals
Tabular numerals (`font-variant-numeric: tabular-nums`) are mandatory anywhere money, counts, or dates align in a column.

---

## 3. Iconography

### Official icon set (dual-color)
HROne has a **proprietary dual-color icon family** — each icon combines line and solid elements in brand colours. Module icons include: Core HR, Workforce, Payroll, Time Office, Helpdesk, Recruitment, Asset, Expense, Flexibility, Mobile Use, Headcounts, Training, Engagement, Customer Adaptation, Attendance, Insights, Goals, Offices, Entities, Experience, Performance, Customer Referral, Growth, Q&A.

> **⚠️ The icon files were not extractable from the PDF.** Please export the icon set (SVG preferred) from the source files and attach. Until then, we use **Lucide Icons** as a substitute for general UI icons.

### Substitute (Lucide)
- **Library:** Lucide `0.462.x` — `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>` then `lucide.createIcons()`.
- **Stroke width:** 2 px at 20 px size (product), 2 px at 24 px (marketing).
- **Colour:** inherits from text — typically `--fg-muted` at rest, `--accent` when selected/active.

### Mascot
HROne has a **brand mascot** in two forms. It can be cropped following the design language, but the face must remain visible. The logotype can be used separately only in internal communications. **Mascot assets were not extractable from the PDF — please supply.**

### Design Language — brand shapes
Interesting shapes can be created by **cropping the logo brandmark**. These shapes can be:
- Used in two colours (green + orange, or one colour + image fill)
- Mixed with product screenshots and human figures
- Cropped to create varied layouts for marketing collateral

### Other conventions
- **Emoji:** reserved for social, never used in product UI.
- **Unicode marks:** use ₹ (INR rupee sign, U+20B9) for currency; `·` middle-dot (U+00B7) in metadata strings; `—` em-dash for narrative separation. No ASCII hyphen substitutes.
- **Flag / country:** use `twemoji` raster flags where country is surfaced.
- **Logo mark (horns):** The "1" in the HROne logotype forms a stylised crown/horn. It appears alone as the app icon (`assets/logo/hrone-icon-green.png`) and should never be recreated by hand — always use the supplied PNG/SVG.

---

## 4. File index (manifest of this folder)

| Path | What it is |
|---|---|
| `README.md` | This document — context, content, visual + iconography rules |
| `SKILL.md` | Agent-SKILL entrypoint for Claude Code users |
| `colors_and_type.css` | All CSS variables, `@font-face` declarations, and utility classes |
| `assets/fonts/` | Clash Grotesk & Public Sans (woff2) |
| `assets/logo/` | Primary logo (green / white), app icon (green / white) |
| `assets/brand/` | Brand horns SVG, source brand-guideline PDF |
| `preview/` | ~18 small HTML cards that populate the Design System tab |
| `ui_kits/hrms/` | HROne HRMS click-through UI kit — dashboard, inbox, people, payroll |

### UI kits
- **`ui_kits/hrms/index.html`** — HROne HRMS web app recreation. Sidebar + top bar + the *InboxforHR™* view and a Home dashboard, built from modular React components. Click between tabs.

---

## 5. Caveats

1. **Dual-color icon set not extractable** from the PDF. Lucide is used as substitute. Please export SVGs from source files and attach.
2. **Mascot assets** referenced in the guidelines but not extractable. Please supply the mascot in SVG/PNG.
3. **Illustration assets** (small supporting illustrations) referenced but not extractable. Please supply.
4. **Brand shape templates** (cropped logo compositions) — described in guidelines but need source files for implementation.
5. **No screenshots of the HROne product** were attached. The UI kit follows brand guidelines faithfully but is a good-faith HRMS recreation. Attach product screenshots or Figma for pixel fidelity.
6. The spacing/radius system is derived from typical HRMS conventions — flag anything that feels off.
