# Quality Care Hospital — Design Language

> Design system for Quality Care Private Hospital (qualitycarehospital.co.za)

---

## Brand Colors

### Primary palette

| Token | Value | Usage |
|-------|-------|-------|
| `--c-primary` | `#005b5b` | Headers, navigation, buttons, footer background, icons |
| `--c-primary-2` | `#007676` | Lighter primary for hover states, accents |
| `--c-primary-85` | `rgba(0, 91, 91, 0.85)` | Hero overlay |
| `--c-primary-30` | `rgba(0, 91, 91, 0.3)` | Hero overlay gradient end |

### Surface colors

| Token | Value | Usage |
|-------|-------|-------|
| `--c-surface` | `#e7fefd` | Page background (very light teal) |
| `--c-surface-dim` | `#c8dede` | Dimmed surfaces |
| `--c-surface-container` | `#dcf2f2` | Footer bottom bar, containers |
| `--c-surface-container-high` | `#d6edec` | Elevated surfaces |
| `--c-surface-variant` | `#d0e7e6` | Image placeholders, borders |
| `--c-light` | `#e1f8f7` | Card icons, feature checks, tag backgrounds |

### Secondary (Gold)

| Token | Value | Usage |
|-------|-------|-------|
| `--c-secondary` | `#7b5800` | Dark gold text |
| `--c-secondary-container` | `#fdc347` | Gold highlight badges, mark backgrounds |
| `--c-on-secondary-container` | `#705100` | Text on gold badges |

### Neutral

| Token | Value | Usage |
|-------|-------|-------|
| `--c-white` | `#ffffff` | Cards, buttons, header background |
| `--c-black` | `#0a1f1f` | Body text, headings |
| `--c-gray` | `#6e7979` | Secondary text, descriptions |
| `--c-outline` | `#6e7979` | Borders, dividers |
| `--c-outline-variant` | `#bdc9c8` | Light borders, card outlines |
| `--c-on-surface-variant` | `#3e4948` | Muted text |
| `--shadow-gray` | `rgba(10, 31, 31, 0.15)` | Box shadows |

### Functional

| Token | Value | Usage |
|-------|-------|-------|
| `--c-red` | `#ba1a1a` | Errors, urgent indicators |

---

## Typography

**Font family:** Manrope (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
```

| Element | Weight | Size | Color |
|---------|--------|------|-------|
| Hero h1 | 800 (Extra Bold) | clamp(2rem, 5vw, 3.5rem) | `#ffffff` |
| Section h2 | 700 (Bold) | clamp(1.6rem, 3vw, 2.4rem) | `#0a1f1f` |
| Card h3 | 700 | 1.1–1.3rem | `#0a1f1f` |
| Body p | 400 | 0.9–1rem | `#6e7979` |
| Nav links | 600 (Semi Bold) | 16–17px | `#005b5b` |
| Small/tags | 600 | 0.78–0.85rem | `#005b5b` or `#6e7979` |

Line height: **1.6** (body), **1.1–1.2** (headings)

---

## Header

- **Background:** `#ffffff`, with bottom `box-shadow`
- **Position:** `sticky`, top `0`, z-index `9999`
- **Desktop height:** 120px
- **Mobile height:** auto (10px padding)

**Logo:**
- Image, height: 70px (mobile) / 100px (desktop)
- `object-fit: contain`

**Navigation:**
- Desktop: horizontal row, gap 30px
- Mobile: hidden by default, toggled via `.active` class, full-width dropdown
- Links: `#005b5b` color, `#0a1f1f` on hover
- Underline hover effect: `::after` pseudo-element, slides from left

**Dropdown (Wards):**
- Desktop: absolute position below parent
- Mobile: relative, expands in-flow
- Items: `#005b5b` → `#ffffff` on `#007676` hover

**Search bar (desktop only):**
- Background: `#005b5b`, border-radius: 6px
- Input: `#ffffff` text, `::placeholder` white
- Search icon: white SVG

---

## Hero (Homepage)

- Background image with `cover`/`center`
- Overlay: `linear-gradient(135deg, rgba(0,91,91,0.85), rgba(0,91,91,0.3))`
- Min-height: 400px
- Content: white text, max-width 650px

**Buttons:**
- **White button:** `#ffffff` bg, `#005b5b` text + border → hover: transparent bg, white text
- **Outline button:** transparent bg, white border + text → hover: white bg, `#005b5b` text

---

## Service Cards (Homepage)

### Emergency Card
- Background: `#005b5b`
- White text
- Call box: `rgba(255,255,255,0.1)` background, rounded

### Consultation Card
- Background: `#ffffff`, border `#bdc9c8`
- Avatar image: 60px, `border-radius: 50%`
- "Learn More" link: underlined, `#005b5b`

---

## Footer

- Background: **`#005b5b`**
- Text: white at various opacities (0.6–1.0)
- **4-column layout** on desktop, stacked on mobile

**Columns:**
1. **Left:** Logo, About text, white CTA buttons with chevron icons
2. **Center:** Wards, Our Services, Patient Amenities link lists
3. **Right:** Contact info (address, phone, WhatsApp, email), Pharmacy, Laboratory

**Bottom bar:**
- Background: `#dcf2f2`
- Text: `#0a1f1f`
- Language selector + Feedback button

---

## Buttons & Actions

| Style | Background | Text | Border |
|-------|-----------|------|--------|
| Primary (btn / btn-primary) | `#005b5b` | `#ffffff` | None |
| White (btn-white / home-btn-white) | `#ffffff` | `#005b5b` | `2px solid #005b5b` |
| Outline (btn-outline) | Transparent | `#ffffff` | `2px solid #ffffff` |
| Send (home-send-btn) | `#005b5b` | `#ffffff` | None |
| Feedback (footer) | `#005b5b` | `#ffffff` | None |
| Footer CTA | `#ffffff` | `#005b5b` | None |
| Alphabet letter | `#e7fefd` | `#005b5b` | `1px solid #bdc9c8` |

Border radius: **6px** (standard), **8px** (buttons), **12px** (cards/sections)

---

## Cards

- Background: `#ffffff`
- Border: `1px solid var(--c-outline-variant)`
- Border-radius: 12px
- Padding: 24–28px
- Hover: `box-shadow` elevation
- Icon area: 48px, `#e1f8f7` bg, `border-radius: 8px`

---

## Contact Info Icons

- Circle: 40px, `#005b5b` fill, `border-radius: 50%`
- SVG icon: white, centered

---

## Spacing

| Context | Padding |
|---------|---------|
| Section vertical | 60px |
| Section (mobile) | 40px |
| Header horizontal | 4–5% of viewport |
| Footer horizontal | 20–80px (responsive) |
| Card content | 24–28px |
| Between sections | 0 (use section padding) |

---

## Breakpoints

| Name | Min-width | Behavior |
|------|-----------|----------|
| Mobile | < 431px | Single column, stacked |
| Tablet | 431px | Footer becomes 2-column |
| Tablet | 600px | Minor header adjustments |
| Desktop | 769px | Full horizontal layout, 120px header, search bar visible |

---

## Image Placeholders

The site uses **`[INSERT IMAGE: description]`** placeholder text in areas where actual images are expected. These are rendered as styled placeholder divs (`background: var(--c-surface-variant)`) until replaced with real images.

**Required images:**
- `assets/images/logo.jpg` — Hospital logo
- `assets/images/hero.png` — Hero background (hospital exterior/interior)
- `assets/images/avatar.jpg` — Doctor avatar (consultation card)
- `assets/images/healing.jpg` — Patient care scene
- `assets/images/worldclass.png` — Doctor/global section
- `assets/images/contact.jpg` — Contact form background
- `assets/images/blog1.jpg` through `blog5.jpg` — Blog thumbnails

---

## Icons

Inline SVGs used throughout. Key icon types:
- **Arrow/chevron:** `lucide-chevron-right` style (footer buttons)
- **Contact:** Phone, Email, Map Pin, Clock (FontAwesome-style paths)
- **Social:** YouTube, Facebook, LinkedIn, Instagram (full SVG paths)
- **Search:** Magnifying glass (header, alphabet section)
- **Care areas:** Arrow right (featured care list)

---

## Forms

- Inputs: 10px 14px padding, `1px solid #bdc9c8`, `border-radius: 6px`
- Focus: `#005b5b` border + `#e1f8f7` shadow ring
- Netlify Forms for submissions (no backend)
- Honeypot field for spam protection
- Hidden `form-name` field required by Netlify

---

## Accessibility

- All interactive elements have hover states
- Social links have `aria-label` attributes
- Search inputs use placeholder text
- Color contrast meets WCAG AA (primary #005b5b on white)
- Font uses system-optimised antialiasing
