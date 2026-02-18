# Product Requirements Document (PRD)
## Batuan Village Tourism Website — *Desa Wisata Batuan*

---

## 1. Vision & Goals

### Vision
> Create the definitive online presence for Batuan Village that celebrates its thousand-year heritage, promotes its world-class art tradition, and drives sustainable tourism growth — positioning Batuan as a must-visit cultural destination in Bali.

### Goals
1. **Establish Digital Identity** — Give Batuan Village its first official tourism website, reclaiming narrative control from third-party tour operators
2. **Drive Visitor Traffic** — Convert online discovery into physical village visits and art gallery engagement
3. **Preserve Heritage** — Digitize and share Batuan's cultural assets for global audiences
4. **Enable Self-Management** — Provide a CMS (Filament admin) so village administrators can update content without developer help
5. **Support Local Economy** — Spotlight local artists and galleries to drive art sales and cultural tourism

### Background
Batuan Village lies ~10 km south of Ubud and ~7 km north of Denpasar in Sukawati district, Gianyar regency. It has been an artistic and spiritual center since 1022 AD. The village is globally recognized for:
- **Batuan Painting Style** (emerged 1930s) — intricate, sombre-palette artworks depicting spiritual narratives, Hindu epics, and daily life
- **Pura Puseh Temple** — 11th-century temple with elaborate stone carvings
- **Gambuh Dance** — ancient court dance performed on Full Moon days
- **Master Artisans** — teak wood carvers, painters, and performers

---

## 2. Target Users

### Primary Personas

#### 🌍 International Tourist (Anna)
- **Age**: 25–55
- **Context**: Planning a Bali trip, has already visited mainstream tourist spots, looking for authentic cultural experiences
- **Pain Points**: Hard to find reliable info about Batuan, scattered across tour operator sites with conflicting details
- **Needs**: Clear directions, what to expect, opening hours, cultural etiquette, photo gallery to set expectations
- **Language**: English

#### 🇮🇩 Domestic Tourist (Budi)
- **Age**: 20–45
- **Context**: Indonesian traveler interested in "Desa Wisata" experiences, possibly on a weekend trip from Denpasar/Jakarta
- **Pain Points**: Wants local-language content, interested in cultural programs and events
- **Needs**: Event calendar, Indonesian language content, practical visit info
- **Language**: Bahasa Indonesia

#### 🎨 Art Enthusiast (Sophie)
- **Age**: 30–60
- **Context**: Collector or enthusiast specifically seeking Batuan paintings
- **Pain Points**: Can't find a centralized directory of Batuan artists and galleries
- **Needs**: Artist profiles, gallery directory, art history, contact for commissions
- **Language**: English/Indonesian

### Secondary Personas

#### 🧳 Tour Operator (Made)
- Needs reliable, up-to-date info to include Batuan in itineraries. Wants downloadable media and contact for group bookings.

#### 📚 Researcher (Dr. Lin)
- Needs historical and cultural reference material about Batuan art and heritage.

---

## 3. User Journeys

### Journey 1: Discovery → Visit (International Tourist)
```
Google Search "Batuan Village Bali"
  → Lands on Homepage (hero with stunning temple imagery)
    → Explores "Attractions" page (reads about temples, galleries)
      → Checks "Visit Information" (directions, hours, dress code)
        → Views "Gallery" (gets excited by photos)
          → Submits "Contact & Inquiry" form (asks about guided tour)
```

### Journey 2: Art Exploration → Gallery Visit (Art Enthusiast)
```
Search "Batuan painting style"
  → Lands on "Art & Culture" page
    → Browses artist profiles and gallery directory
      → Reads history of Batuan painting tradition
        → Contacts specific gallery or submits inquiry
```

### Journey 3: Event Discovery → Attendance (Domestic Tourist)
```
Sees social media post about Batuan
  → Visits website, switches to Indonesian
    → Checks "Events & Calendar" for upcoming ceremonies
      → Gets practical info from "Visit Information"
        → Plans trip around event date
```

### Journey 4: Content Management (Village Admin)
```
Logs into Filament Admin Panel
  → Updates event calendar with upcoming Galungan ceremony
    → Adds new artist profile to gallery directory
      → Uploads new photos to media gallery
        → Reviews and responds to visitor inquiries
```

---

## 4. Feature Requirements (MoSCoW) — Refined with Acceptance Criteria

### Must Have (P0)

#### F01 — Homepage
Hero section with full-bleed Batuan imagery, tagline, featured attractions carousel, quick navigation cards to key sections.

**Acceptance Criteria:**
- [ ] Hero section renders a full-width image with overlay text (village tagline)
- [ ] Featured attractions carousel displays up to 6 attractions marked `is_featured = true`
- [ ] Navigation cards link to: Attractions, Art & Culture, Visit Info, Gallery, Contact
- [ ] Page loads in < 3s on mobile 3G (Lighthouse audit)
- [ ] All content is CMS-managed via Filament

#### F02 — About Page
Village history (1022 AD origins), cultural significance, community overview, location map.

**Acceptance Criteria:**
- [ ] Rich text body rendered from CMS `Page` entity
- [ ] Embedded map showing Batuan Village location
- [ ] Meta title and description are set (SEO)
- [ ] Page renders correctly on mobile and desktop

#### F03 — Attractions Page
Listing + detail pages for attractions. Each with description, photos, visitor tips.

**Acceptance Criteria:**
- [ ] Index page shows all published attractions as cards with image, name, short description, category badge
- [ ] Category filter (temple, gallery, landmark, performance, nature)
- [ ] Detail page displays: description, image gallery, opening hours, entrance fee, visitor tips, map pin
- [ ] Each attraction detail page has unique meta title/description
- [ ] `TouristAttraction` Schema.org JSON-LD rendered on each detail page

#### F04 — Art & Culture Page
Overview of Batuan painting style, artist grid, gallery directory.

**Acceptance Criteria:**
- [ ] Overview section with rich text content about Batuan painting tradition
- [ ] Featured artists grid showing name, photo, specialization
- [ ] Each artist card links to artist detail page (F14)
- [ ] Gallery directory section listing affiliated galleries

#### F05 — Visit Information Page
Getting there, hours, dress code, fees, nearby attractions.

**Acceptance Criteria:**
- [ ] Sections for: Transportation, Opening Hours, Dress Code, Entrance Fees, Nearby Attractions
- [ ] Nearby attractions show distance from Batuan with external links
- [ ] Content is CMS-managed

#### F06 — Contact & Inquiry Page
Contact form + embedded map + village contact details.

**Acceptance Criteria:**
- [ ] Form fields: name (required), email (required, validated), subject (required), message (required), preferred_date (optional)
- [ ] Server-side validation via Laravel Form Request
- [ ] CSRF protection enabled
- [ ] Rate limited: max 5 submissions per IP per hour
- [ ] Success message displayed after submission
- [ ] Inquiries appear in Filament admin with status tracking (new → read → responded)
- [ ] Embedded Google Maps iframe

#### F07 — Photo Gallery
Masonry/grid gallery organized by category.

**Acceptance Criteria:**
- [ ] Images displayed in responsive masonry/grid layout
- [ ] Category filter tabs (temple, art, culture, nature, village_life, event)
- [ ] Images lazy-loaded with blur placeholder
- [ ] Lightbox modal on image click with caption and navigation
- [ ] All images have `alt_text` (managed via CMS)

#### F08 — Responsive Design
Mobile-first responsive design.

**Acceptance Criteria:**
- [ ] All pages render correctly at 320px, 768px, 1024px, 1440px breakpoints
- [ ] Touch-friendly navigation (hamburger menu on mobile)
- [ ] Images scale appropriately without layout shift (CLS < 0.1)
- [ ] No horizontal scrolling on any viewport

#### F09 — SEO Optimization
Meta tags, Open Graph, structured data, sitemap.

**Acceptance Criteria:**
- [ ] Every page has dynamic `<title>` and `<meta description>`
- [ ] Open Graph tags (og:title, og:description, og:image, og:url) on every page
- [ ] Twitter Card meta tags on every page
- [ ] `LocalBusiness` JSON-LD on homepage
- [ ] `TouristAttraction` JSON-LD on each attraction detail page
- [ ] `ArtGallery` JSON-LD on art & culture page
- [ ] Auto-generated `sitemap.xml` including all published pages, attractions, artists
- [ ] `robots.txt` present and correctly configured
- [ ] Canonical URLs set on all pages
- [ ] `hreflang` tags for EN/ID language variants

#### F10 — Filament Admin CMS
Admin panel for all content management.

**Acceptance Criteria:**
- [ ] Filament admin accessible at `/admin` with authentication
- [ ] CRUD resources for: Pages, Attractions, Artists, Events, GalleryImages, Inquiries, SiteSettings
- [ ] Rich text editor (Tiptap) for long-form content fields
- [ ] Image upload with preview for all media fields
- [ ] Inquiry management: view, mark as read, mark as responded
- [ ] Dashboard widget showing inquiry count and recent submissions
- [ ] Only authenticated admin users can access (FilamentUser interface)

### Should Have (P1)

| ID | Feature | Description |
|----|---------|-------------|
| F11 | **Events & Calendar** | Upcoming events/ceremonies with dates, descriptions, and images. Supports recurring events (e.g., "Every Full Moon"). |
| F12 | **Bilingual Support** | English/Indonesian language toggle. Content entities have `language` field. URL-based switching (`/en/`, `/id/`). |
| F13 | **Nearby Attractions** | Tegenungan Waterfall, Goa Gajah, Bali Zoo — with distance and external links. |
| F14 | **Artist Profiles** | Individual artist detail pages with bio, portfolio images, gallery affiliation, contact. Schema.org `Person` markup. |

### Could Have (P2)

| ID | Feature | Description |
|----|---------|-------------|
| F15 | **Virtual Tour** | 360° embedded view of key temples and art studios |
| F16 | **Blog / News** | Articles about village life, artist spotlights, event recaps |
| F17 | **Newsletter Signup** | Email subscription for event/exhibition notifications |
| F18 | **Social Media Integration** | Instagram feed embed, social sharing buttons |

### Won't Have (Out of Scope)

| ID | Feature | Reason |
|----|---------|--------|
| F19 | E-commerce / Online Art Sales | Complex logistics, future phase |
| F20 | Online Ticket Booking / Payment | Requires payment gateway, future phase |
| F21 | User Accounts / Registration | Not needed for an informational tourism site |
| F22 | Chat / Live Support | Overkill for MVP, contact form suffices |

---

## 5. Non-Functional Requirements

| Category | Requirement | Measurable Target |
|----------|-------------|-------------------|
| **Performance** | Fast page loads, lazy images | LCP < 2.5s, FID < 100ms, CLS < 0.1, Lighthouse > 80 |
| **Accessibility** | WCAG 2.1 AA | Alt text on all images, keyboard navigable, sufficient contrast |
| **Security** | Input validation, CSRF, rate limiting | Form Requests on all inputs, 5 req/hr rate limit on inquiries |
| **Scalability** | Handle traffic spikes | 10K concurrent visitors, image CDN-ready architecture |
| **SEO** | Full technical SEO | Structured data, sitemap.xml, robots.txt, canonical URLs, hreflang |
| **Browser Support** | Modern browsers | Chrome, Firefox, Safari, Edge (last 2 versions) + Mobile |
| **i18n** | Bilingual content | DB-stored translations with `language` field per entity |

---

## 6. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Monthly Unique Visitors | 5,000+ within 6 months | Google Analytics |
| Avg. Session Duration | > 2 minutes | Google Analytics |
| Inquiry Form Submissions | 50+ per month | Admin dashboard counter |
| Google Search Rank | Top 5 for "Batuan Village Bali" | Google Search Console |
| Bounce Rate | < 50% | Google Analytics |
| Lighthouse Score (Performance) | > 80 | Lighthouse audit |
| Mobile Traffic Share | > 60% | Google Analytics |
| Admin Content Updates | Weekly | Filament admin activity log |

---

## 7. Out of Scope (Explicit)

- Payment processing / e-commerce
- User registration and authentication (public-facing)
- Native mobile app
- Multi-tenant support (this is for Batuan Village only)
- Video streaming / hosting (embed YouTube/Vimeo only)
- Advanced analytics dashboard (use Google Analytics)

---

## 8. Tech Stack (Predetermined)

| Layer | Technology |
|-------|-----------|
| Backend | Laravel (existing skeleton) |
| Frontend | Inertia.js + React 19 |
| Styling | Tailwind CSS |
| Admin | Filament 3 |
| Database | MySQL 8.0 |
| Cache | Redis |
| Build | Vite |
| Containerization | Docker Compose |

---

## 9. Content Model

> **Detailed field-level specifications** with types, validation rules, and constraints are documented in [research-findings.md](file:///Users/galihpratama/Dev/laravelapp-skeleton/output/research-findings.md) § Section 6.

| Entity | Purpose | Key Fields |
|--------|---------|-----------|
| **Page** | CMS-managed static pages | title, slug, body, meta_title, meta_description, language, status |
| **Attraction** | Temple, gallery, landmark entries | name, slug, description, category, lat/lng, opening_hours, entrance_fee |
| **Artist** | Artist profiles | name, bio, specialization, gallery_name, contact_info, portfolio |
| **Event** | Cultural events + ceremonies | title, event_date, end_date, is_recurring, recurrence_note |
| **GalleryImage** | Photo gallery items | title, image, category, alt_text, sort_order |
| **Inquiry** | Visitor contact submissions | name, email, subject, message, preferred_date, status |
| **SiteSetting** | Global configuration | key, value, group (contact, social, general) |

---

*Produced by John (PM) — Phase 1: Ideate*
*Refined by Mary (Analyst) — Phase 2: Analyze*
*BMAD Lifecycle for Batuan Village Tourism Website*
