# UX Design Specification — Batuan Village Tourism Website
*Produced by Sally (UX Designer) — Phase 4*

---

## 1. Design Vision

### Emotional Goal
> Visitors should feel **transported to Batuan Village** — a sense of wonder, cultural reverence, and warmth. The website should evoke the same feeling as walking through an ancient temple courtyard or watching an artist paint with a single-strand brush.

### Core Experience
The ONE thing users will do most: **Explore and discover Batuan Village's cultural richness** — browsing attractions, art, and planning their visit.

### Design Personality
| Trait | Expression |
|-------|-----------|
| **Authentic** | Warm earth tones inspired by Balinese art palette |
| **Elegant** | Clean typography, generous whitespace, refined grid |
| **Immersive** | Large photography, subtle parallax, smooth transitions |
| **Welcoming** | Friendly copy tone, clear navigation, no information overload |

---

## 2. Design System

### Framework: Tailwind CSS 4 (Utility-First)
No external component library — custom components built with Tailwind for maximum performance and uniqueness.

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display / Headlines | **Playfair Display** | 700 | Hero titles, page headings (h1, h2) |
| Body / UI | **Inter** | 400, 500, 600 | Body text, navigation, buttons, cards |
| Accent | **Satisfy** | 400 | Decorative taglines, quotes (sparingly) |

*Load via Google Fonts — subset for Latin characters.*

### Color Palette

```
──── Batuan Heritage Theme ────

Primary:
  Gold         #C8A55C   (temple gold, offerings)
  Deep Gold    #A67C3D   (hover/active)

Secondary:
  Temple Stone #2D2A26   (dark volcanic stone)
  Warm Black   #1A1714   (deep backgrounds)

Accent:
  Emerald      #3A7D44   (rice paddy green)
  Terracotta   #B5553A   (Balinese brick)

Neutrals:
  Cream        #FAF7F0   (page backgrounds)
  Sand         #E8E0D0   (card backgrounds)
  Stone Gray   #6B6560   (secondary text)
  Light Gray   #D1CBC3   (borders, dividers)

Semantic:
  Success      #3A7D44   (emerald)
  Error        #C0392B
  Warning      #D4A017
  Info         #2980B9

White:         #FFFFFF
```

### Spacing Scale
Follow Tailwind's default 4px base: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

### Border Radius
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Images: `rounded-2xl` (16px) for gallery, `rounded-none` for hero

### Shadows
- Card hover: `shadow-lg` with warm tone `shadow-stone-200/50`
- Modal: `shadow-2xl`

---

## 3. Page Layouts

### Navbar
```
┌──────────────────────────────────────────────────────┐
│ 🏛️ Batuan Village   Attractions  Art  Visit  Events  │
│                        Gallery  Contact    [EN|ID]   │
└──────────────────────────────────────────────────────┘
```
- Fixed top, transparent on hero → solid on scroll
- Logo + village name on left
- Navigation links center
- Language switcher right
- Mobile: Hamburger menu → slide-out drawer

### Homepage Layout
```
┌──────────────────────────────────────────────────────┐
│                    HERO SECTION                       │
│        Full-bleed temple/village image                │
│    "Where a Thousand Years of Art Lives On"          │
│              [Explore Batuan →]                       │
├──────────────────────────────────────────────────────┤
│           ── Quick Navigation Cards ──               │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│   │Temple│  │ Art  │  │Visit │  │Events│           │
│   │  🏛️  │  │  🎨  │  │  🗺️  │  │  📅  │           │
│   └──────┘  └──────┘  └──────┘  └──────┘           │
├──────────────────────────────────────────────────────┤
│          ── Featured Attractions ──                   │
│   Horizontal scroll carousel with image cards        │
├──────────────────────────────────────────────────────┤
│           ── About Section ──                        │
│   Split: Text left | Image right                     │
│   Brief village intro + [Read More →]                │
├──────────────────────────────────────────────────────┤
│           ── Art Highlight ──                        │
│   Full-width Batuan painting image banner            │
│   "The Legendary Batuan Painting Style"              │
│   [Discover Our Art →]                               │
├──────────────────────────────────────────────────────┤
│           ── Photo Grid Preview ──                   │
│   3×2 masonry of best gallery images                 │
│   [View Full Gallery →]                              │
├──────────────────────────────────────────────────────┤
│                   FOOTER                             │
│   Contact info | Social links | Quick links | Map    │
└──────────────────────────────────────────────────────┘
```

### Attractions Index
```
┌──────────────────────────────────────────────────────┐
│  Page Header: "Discover Our Attractions"             │
│  ── Category Filters ──                              │
│  [All] [Temples] [Galleries] [Landmarks] [Nature]    │
├──────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐                  │
│  │  Image        │  │  Image        │                │
│  │  Category Tag │  │  Category Tag │                │
│  │  Name         │  │  Name         │                │
│  │  Short desc   │  │  Short desc   │                │
│  │  [View →]     │  │  [View →]     │                │
│  └──────────────┘  └──────────────┘                  │
│  (Responsive: 1 col mobile, 2 tablet, 3 desktop)    │
└──────────────────────────────────────────────────────┘
```

### Attraction Detail
```
┌──────────────────────────────────────────────────────┐
│  Hero Image (full-width, 60vh)                       │
│  Category badge overlay                              │
├──────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌──────────────┐          │
│  │  Description          │  │ Info Sidebar  │         │
│  │  (Rich text content)  │  │ 📍 Location   │         │
│  │                       │  │ 🕐 Hours      │         │
│  │                       │  │ 💰 Fee        │         │
│  │                       │  │ 👗 Dress Code │         │
│  │                       │  │ [Get Directions]│       │
│  └─────────────────────┘  └──────────────┘          │
├──────────────────────────────────────────────────────┤
│  ── Photo Gallery ──                                 │
│  Horizontal scroll / lightbox thumbnails             │
├──────────────────────────────────────────────────────┤
│  ── Related Attractions ──                           │
│  3 cards from same/related category                  │
└──────────────────────────────────────────────────────┘
```

---

## 4. Interaction Patterns

### Navigation States
| State | Behavior |
|-------|----------|
| Default | Transparent navbar over hero, white text |
| Scrolled | Solid cream background, dark text, subtle shadow |
| Active link | Gold underline accent |
| Mobile open | Full-screen overlay with stacked links |

### Card Interactions
| State | Behavior |
|-------|----------|
| Default | Subtle shadow, rounded corners |
| Hover | Translatey(-4px), stronger shadow, image slight zoom (scale 1.03) |
| Active | Scale(0.98) press effect |
| Loading | Skeleton pulse animation |

### Image Gallery
| State | Behavior |
|-------|----------|
| Default | Masonry grid, lazy-loaded with blur-up placeholder |
| Image hover | Slight zoom, overlay with title/caption |
| Lightbox open | Dark overlay, centered image, caption below, prev/next arrows, close X |
| Lightbox swipe | Gesture support for mobile (swipe left/right) |

### Contact Form
| State | Behavior |
|-------|----------|
| Default | Clean form with floating labels |
| Focus | Gold border highlight on focused input |
| Validation error | Red border, error message below field |
| Submitting | Button shows spinner, disabled |
| Success | Green success message, form resets |
| Rate limited | Error message: "Too many submissions. Please try again later." |

### Language Switcher
| State | Behavior |
|-------|----------|
| Default | Simple toggle: `EN | ID` |
| Active language | Gold/bold styling |
| Switch | Page reloads with selected language content |

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | Single column, hamburger nav, stacked cards |
| Tablet | 640–1023px | 2-column grids, condensed nav |
| Desktop | 1024–1439px | Full nav, 3-column grids, sidebar layouts |
| Wide | ≥ 1440px | Max-width container (1280px), centered |

### Mobile-Specific Adaptations
- Hero height: 70vh (vs 80vh desktop)
- Navbar: Hamburger → slide-out drawer
- Cards: Full-width stacked
- Gallery: 2-column grid
- Attraction detail: Sidebar collapses below main content

---

## 6. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| Color contrast | All text meets 4.5:1 ratio (verified: Gold #C8A55C on white fails → use Deep Gold #A67C3D or Temple Stone #2D2A26 for text) |
| Keyboard navigation | All interactive elements focusable. Tab order follows visual order. Focus ring visible (gold outline) |
| Alt text | All images have descriptive alt text (managed via CMS `alt_text` field) |
| Screen reader | Semantic HTML5 (nav, main, article, section). ARIA labels on interactive elements |
| Motion | `prefers-reduced-motion` respected — disable parallax and hover animations |
| Focus indicator | 3px gold (#C8A55C) outline-offset-2 on focus-visible |

---

## 7. Empty / Loading / Error States

| Component | Empty State | Loading State | Error State |
|-----------|-------------|---------------|-------------|
| Attractions grid | "No attractions found" + illustration | Skeleton cards (3x pulsing) | "Failed to load. Please refresh." |
| Gallery | "No photos yet. Check back soon!" | Blur placeholder → sharp | "Image failed to load" placeholder |
| Events | "No upcoming events. Follow us for updates!" | Skeleton list | — |
| Contact form | — | Button spinner | Inline field errors + summary |
| Artist grid | "No artists featured yet" | Skeleton cards | — |

---

*Handoff ready → Phase 5: Plan (Bob, Scrum Master)*
