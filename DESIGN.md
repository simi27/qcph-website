---
name: Vitality & Community
colors:
  surface: '#e7fefd'
  surface-dim: '#c8dede'
  surface-bright: '#e7fefd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e1f8f7'
  surface-container: '#dcf2f2'
  surface-container-high: '#d6edec'
  surface-container-highest: '#d0e7e6'
  on-surface: '#0a1f1f'
  on-surface-variant: '#3e4948'
  inverse-surface: '#203434'
  inverse-on-surface: '#dff5f5'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#006a6a'
  primary: '#005b5b'
  on-primary: '#ffffff'
  primary-container: '#007676'
  on-primary-container: '#a1faf9'
  inverse-primary: '#7dd5d4'
  secondary: '#7b5800'
  on-secondary: '#ffffff'
  secondary-container: '#fdc347'
  on-secondary-container: '#705100'
  tertiary: '#005c51'
  on-tertiary: '#ffffff'
  tertiary-container: '#007769'
  on-tertiary-container: '#85ffe9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#99f1f1'
  primary-fixed-dim: '#7dd5d4'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#f7bd42'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#7bf7e1'
  tertiary-fixed-dim: '#5cdac5'
  on-tertiary-fixed: '#00201b'
  on-tertiary-fixed-variant: '#005046'
  background: '#e7fefd'
  on-background: '#0a1f1f'
  surface-variant: '#d0e7e6'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system is built upon a foundation of trust, professional excellence, and community warmth. It balances the precision of healthcare with the approachability of a local support network.

The visual style is **Corporate Modern with Geometric Flair**. It utilizes structured layouts and clean typography to establish authority, while introducing organic circular motifs and rhythmic dot grids to evoke a sense of connection and growth. The interface should feel spacious and organized, using heavy whitespace to reduce cognitive load and emphasize clarity.

Key brand attributes:
- **Professionalism:** Precise alignment and systematic spacing.
- **Warmth:** Soft gold accents and rounded geometric shapes.
- **Vitality:** High-contrast teal palettes that feel energized and healthy.

## Colors

The palette is anchored by a deep, sophisticated **Vibrant Teal**, symbolizing health and stability. This is complemented by a **Warm Gold** that provides high-contrast accents for calls to action and critical highlights, injecting a sense of optimism and sun-drenched warmth.

- **Primary (Teal):** Used for headers, primary buttons, and core branding elements.
- **Secondary (Gold):** Reserved for interaction highlights, badges, and accents to draw the eye.
- **Tertiary (Mint):** Used for soft backgrounds, illustrations, and secondary data visualizations.
- **Neutral:** A deep "Midnight Teal" is used for primary text instead of pure black to maintain a cohesive, high-end feel.
- **Surface:** A very light, cool-tinted off-white ensures the UI feels clean and clinical without being cold.

## Typography

**Manrope** is used exclusively to provide a modern, highly legible, and geometric aesthetic. The typeface's wide aperture and clean lines make it exceptionally readable in clinical or data-heavy contexts.

- **Headlines:** Use Bold and ExtraBold weights with slight negative letter-spacing to create a strong, authoritative impact.
- **Body Text:** Standard weights with generous line heights ensure comfort during long-form reading.
- **Captions & Labels:** Use SemiBold weights with increased letter-spacing and uppercase styling for a disciplined, systematic look.

## Layout & Spacing

This design system employs a **Fluid Grid** model with strict adherence to an 8px base unit.

- **Desktop:** A 12-column grid with 24px gutters. Content is typically contained within a 1280px max-width container, centered on the screen.
- **Tablet:** 8-column grid with 16px margins.
- **Mobile:** 4-column grid with 16px margins.

**Geometric Accents:** Incorporate "dot grid" patterns (8px spacing) in the background of hero sections or section transitions. Use large, semi-transparent circular motifs that crop off the edge of the screen to create depth and a sense of "community circles."

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Soft Ambient Shadows** rather than heavy skeuomorphism.

- **Level 0 (Surface):** The main background.
- **Level 1 (Card):** White surfaces with a very soft, diffused shadow (0px 4px 20px rgba(26, 46, 46, 0.05)).
- **Level 2 (Interactive):** Elements like primary buttons or active cards use a slightly more pronounced shadow and a subtle 1px border in a lighter shade of Teal to define boundaries.

Avoid heavy blurs; maintain a crisp, professional "printed" feel that mimics high-quality editorial design.

## Shapes

The shape language is defined by **Rounded** geometry. This balances the "hard" precision of the grid with the "soft" nature of healthcare.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) corner radius.
- **Container Elements:** Cards and modals use a 1rem (16px) radius to feel approachable.
- **Graphic Elements:** Use perfect circles for iconography backgrounds, step indicators, and profile avatars to reinforce the "Community Circle" motif.

## Components

### Buttons
- **Primary:** Solid Teal background with White text. Bold weight.
- **Secondary:** Transparent background with a 2px Gold border and Teal text.
- **Tertiary:** Ghost style, Teal text, no border, appearing on hover with a soft Mint tint.

### Cards
Cards should be clean with white backgrounds. Header sections within cards can use a subtle "Dot Grid" pattern in the top right corner to add visual interest.

### Input Fields
Inputs use a 1px Neutral border that shifts to Primary Teal on focus. Labels are always positioned above the field using the `label-md` typography style.

### Progress & Steppers
Utilize the circular motifs. Completed steps should be solid Teal, while the active step uses a Gold ring to highlight current focus.

### Lists
Lists should be separated by thin, low-contrast dividers. Use Teal bullet points or Gold icons to maintain the high-contrast brand identity.

---

## Quick Reference

### CSS Variables (subset — most commonly used)

```css
:root {
  --c-primary: #005b5b;
  --c-on-primary: #ffffff;
  --c-primary-container: #007676;
  --c-secondary: #7b5800;
  --c-secondary-container: #fdc347;
  --c-on-secondary-container: #705100;
  --c-tertiary: #005c51;
  --c-tertiary-container: #007769;
  --c-surface: #e7fefd;
  --c-surface-container: #dcf2f2;
  --c-on-surface: #0a1f1f;
  --c-on-surface-variant: #3e4948;
  --c-outline: #6e7979;
  --c-outline-variant: #bdc9c8;
  --c-error: #ba1a1a;
  --c-gold: #e0a92e;
}
```

### Typography map

| Token | Font | Size | Weight | Line H | Letter |
|-------|------|------|--------|--------|--------|
| display-lg | Manrope | 48px | 800 | 56px | -0.02em |
| headline-lg | Manrope | 32px (28px mob) | 700 | 40px (36px) | -0.01em |
| title-md | Manrope | 20px | 600 | 28px | normal |
| body-lg | Manrope | 18px | 400 | 28px | normal |
| body-md | Manrope | 16px | 400 | 24px | normal |
| label-md | Manrope | 14px | 600 | 20px | 0.05em |

### Corner radius

| Token | Size |
|-------|------|
| sm | 4px |
| DEFAULT | 8px |
| md | 12px |
| lg | 16px |
| xl | 24px |
| full | 9999px |

### Spacing

| Token | Value |
|-------|-------|
| unit | 8px |
| gutter | 24px |
| margin (mobile) | 16px |
| margin (desktop) | 64px |
| container max | 1280px |

### Elevation

| Level | Shadow |
|-------|--------|
| Card | 0px 4px 20px rgba(26, 46, 46, 0.05) |
| Interactive (btn/card hover) | Slightly deeper + 1px teal border |
