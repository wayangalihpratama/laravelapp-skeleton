# Research Findings — Batuan Village Tourism Website
*Produced by Mary (Business Analyst) — Phase 2: Analyze*

---

## 1. Research Questions & Scope

| # | Question | Status |
|---|----------|--------|
| RQ1 | What specific cultural assets does Batuan Village have that should be highlighted? | ✅ Answered |
| RQ2 | What is the typical visitor experience and what information do they need? | ✅ Answered |
| RQ3 | What SEO strategies are most effective for cultural heritage tourism sites? | ✅ Answered |
| RQ4 | How do competitor tourism villages structure their websites? | ✅ Answered |
| RQ5 | What content model best supports a bilingual CMS for a tourism village? | ✅ Answered |

---

## 2. Key Cultural Assets (RQ1)

### Temples
| Temple | Significance | Visitor Notes |
|--------|-------------|---------------|
| **Pura Puseh** | Founded 1022 AD. "Tri Kahyangan" concept. Dedicated to Vishnu. 11th-century stone carvings. Black palm fiber roof. | Sarongs provided. Entry by donation. |
| **Pura Desa** | Dedicated to Brahma. Classical Balinese architecture. | Adjacent to Pura Puseh. |
| **Pura Dasar** | Elaborate carved structures. | Part of the village temple complex. |

### Art & Painting
- **Batuan Painting Style** (emerged 1930s): Intricate, sombre-palette (black/white dominant), crowded compositions
- Depicts: spiritual narratives, Hindu epics, daily life, mystic figures, sorcery/witchcraft motifs
- Techniques: Natural pigments, fine brushes (some single-strand), layered application
- **Key differentiator from Ubud style**: Less Western influence, maintained traditional roots
- Skills inherited through generations; painting schools in temple complexes

### Performing Arts
- **Gambuh Dance**: Ancient court dance, performed on Full Moon days
- **Barong & Legong Dances**: Daily performances for tourists — intimate settings
- Performance pavilions available for cultural showcases

### Handicrafts
- Carved teak wood furnishings — a secondary but notable craft tradition

### Landmarks
- **Fat Buddha/Fat Baby Statue**: Located at a crossroad, local landmark and photo spot

---

## 3. Visitor Experience Research (RQ2)

### What Visitors Expect
1. **Art galleries and studios** — observe painters at work, buy original pieces
2. **Temple visits** — sarongs provided, entry by donation, guided explanations
3. **Dance performances** — intimate, less commercialized than tourist hubs
4. **Cultural immersion** — "culture still breathes" — authentic Balinese daily life
5. **Friendly local guides** — many visitors praise personal, unhurried tours

### Practical Info Visitors Need
| Category | Details |
|----------|---------|
| Location | ~10 km south of Ubud, ~7 km north of Denpasar, Sukawati district, Gianyar |
| Best time | Dry season (April–October). Early morning or late afternoon for fewer crowds |
| Dress code | Modest dress; sarongs provided at temples |
| Payment | Cash for temple donations; galleries may accept cards |
| Duration | 1.5–3 hours typical visit |
| Transport | Private driver or scooter from Ubud/Denpasar |
| Festivals | Galungan and Kuningan — most vibrant cultural spectacle |

### Nearby Attractions (commonly combined)
| Attraction | Distance from Batuan |
|-----------|---------------------|
| Tegenungan Waterfall | ~4 km |
| Goa Gajah (Elephant Cave) | ~5 km |
| Hidden Canyon Beji Guwang | ~6 km |
| Sukawati Art Market | ~3 km |
| Bali Zoo / Safari Park | ~5 km |

---

## 4. SEO Strategy for Cultural Heritage Tourism (RQ3)

### Priority Keywords
| Keyword Cluster | Examples | Search Intent |
|----------------|----------|---------------|
| **Primary** | "Batuan Village Bali", "Desa Batuan" | Navigational |
| **Art-focused** | "Batuan painting style", "Batuan art gallery" | Informational/Commercial |
| **Temple** | "Batuan Temple Bali", "Pura Puseh Batuan" | Navigational |
| **Experience** | "best cultural village Bali", "traditional village near Ubud" | Informational |
| **Long-tail** | "Batuan Village opening hours", "how to get to Batuan Village" | Transactional |

### Technical SEO Requirements
1. **Server-Side Rendering** — Inertia.js SSR mode for crawlable HTML
2. **Schema.org Structured Data**:
   - `TouristAttraction` for each attraction
   - `LocalBusiness` for village info
   - `Event` for ceremonies/performances
   - `ArtGallery` for gallery directory
   - `ImageGallery` for photo galleries
3. **Meta Tags**: Dynamic per-page `<title>`, `<meta description>`, Open Graph, Twitter Card
4. **Sitemap.xml**: Auto-generated, including all attraction/artist pages
5. **Canonical URLs**: Prevent duplicate content from language variants
6. **Image SEO**: WebP format, lazy loading, descriptive `alt` text, compressed thumbnails
7. **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
8. **Internal Linking**: Cross-link attractions ↔ art ↔ events pages
9. **Google My Business**: Village should register as a tourist attraction
10. **hreflang Tags**: For English/Indonesian content variants

### Content Strategy
- Long-form content on art history and temple heritage (1,500+ words)
- "Visit Guide" landing page targeting "how to visit Batuan Village"
- Event-driven content updates (ceremony dates, exhibition announcements)
- Image-rich pages (Google Image Search is a major traffic source for tourism)

---

## 5. Competitor Analysis Deep Dive (RQ4)

| Feature | Penglipuran | Desa Mas | Pemuteran | Batuan (Proposed) |
|---------|-------------|----------|-----------|-------------------|
| Official website | ✅ penglipuran.com | ✅ desawisatamas.com | ✅ pemuterancoastalvillage.com | ✅ (building!) |
| Bilingual | ❌ | ❌ | ✅ | ✅ |
| CMS-managed | Unknown | Unknown | Unknown | ✅ Filament |
| Art gallery feature | ❌ | Basic | ❌ | ✅ Full directory |
| Event calendar | ❌ | ❌ | ❌ | ✅ |
| Schema.org markup | ❌ | ❌ | Partial | ✅ Full |
| Mobile responsive | Partial | Basic | ✅ | ✅ |
| Photo gallery | Basic | Basic | ✅ | ✅ Masonry |
| Online inquiry | ❌ | ❌ | ✅ | ✅ |

**Opportunity**: Batuan's website can leapfrog all competitors by combining bilingual support, structured data SEO, CMS-managed content, and a rich art gallery feature that none of them offer.

---

## 6. Content Model Validation (RQ5)

### Refined Entity Model with Acceptance Criteria

#### Page
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | string(255) | required | |
| slug | string(255) | required, unique | auto-generated from title |
| body | longtext | required | Rich text (Tiptap/CKEditor via Filament) |
| meta_title | string(70) | nullable | Defaults to title if empty. Max 70 chars for Google |
| meta_description | string(160) | nullable | Max 160 chars for Google SERP |
| og_image | string | nullable | Open Graph social sharing image |
| language | enum(en,id) | required, default: en | |
| status | enum(draft,published) | required, default: draft | |
| featured_image | string | nullable | Hero/thumbnail |
| sort_order | integer | default: 0 | For page ordering in navigation |

#### Attraction
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | string(255) | required | |
| slug | string(255) | required, unique | |
| description | longtext | required | Rich text |
| short_description | string(500) | nullable | For cards/previews |
| category | enum(temple,gallery,landmark,performance,nature) | required | |
| latitude | decimal(10,8) | nullable | For map integration |
| longitude | decimal(11,8) | nullable | For map integration |
| opening_hours | string | nullable | e.g., "08:00–17:00" |
| entrance_fee | string | nullable | e.g., "By donation" or "IDR 15,000" |
| visitor_tips | text | nullable | Dress code, etiquette notes |
| meta_title | string(70) | nullable | |
| meta_description | string(160) | nullable | |
| is_featured | boolean | default: false | Show on homepage |
| status | enum(draft,published) | required | |

#### Artist
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | string(255) | required | |
| slug | string(255) | required, unique | |
| bio | text | required | |
| specialization | string(255) | nullable | e.g., "Batuan Painting", "Wood Carving" |
| gallery_name | string(255) | nullable | Affiliated gallery |
| profile_photo | string | nullable | |
| contact_info | json | nullable | {phone, email, instagram} |
| is_featured | boolean | default: false | |
| status | enum(draft,published) | required | |

#### Event
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | string(255) | required | |
| slug | string(255) | required, unique | |
| description | text | required | |
| event_date | date | required | |
| end_date | date | nullable | For multi-day events |
| location | string(255) | nullable | |
| is_recurring | boolean | default: false | |
| recurrence_note | string | nullable | e.g., "Every Full Moon" |
| status | enum(draft,published) | required | |

#### GalleryImage
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | string(255) | required | |
| image | string | required | File path |
| category | enum(temple,art,culture,nature,village_life,event) | required | |
| caption | text | nullable | |
| alt_text | string(255) | required | SEO requirement |
| sort_order | integer | default: 0 | |
| is_published | boolean | default: true | |

#### Inquiry
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | string(255) | required | |
| email | string(255) | required, email format | |
| subject | string(255) | required | |
| message | text | required | |
| preferred_date | date | nullable | |
| status | enum(new,read,responded) | default: new | |
| responded_at | datetime | nullable | |

#### SiteSetting
| Field | Type | Notes |
|-------|------|-------|
| key | string(255) | unique, e.g., "site_phone", "site_email" |
| value | text | JSON-capable for complex values |
| group | string | e.g., "contact", "social", "general" |

---

## 7. Identified Gaps & Recommendations

| # | Gap | Impact | Recommendation |
|---|-----|--------|----------------|
| G1 | No SSR configuration in current skeleton | SEO impact — SPA pages not crawlable | Configure Inertia.js SSR (Node server) |
| G2 | No image optimization pipeline | Slow page loads, poor Core Web Vitals | Use Spatie Media Library + WebP conversion |
| G3 | No sitemap generation | Google can't discover all pages | Use `spatie/laravel-sitemap` package |
| G4 | No structured data system | Missing rich snippets in search results | Build JSON-LD components for each page type |
| G5 | No translation system | Can't serve bilingual content | Use DB-based translations per content entity |
| G6 | Language field per entity | Better than full i18n for content-heavy site | Add `language` + `translation_group` fields |

---

*All requirements are now testable, traceable to business needs, and validated against real visitor behaviors and SEO best practices.*

*Handoff ready → Phase 3: Architect (Winston)*
