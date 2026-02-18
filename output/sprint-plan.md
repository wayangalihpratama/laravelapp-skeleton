# Sprint Plan — Batuan Village Tourism Website
*Produced by Bob (Scrum Master) — Phase 5*

---

## Sprint Overview

Due to the content-heavy nature of this project with 7 data models, a CMS, and 9+ frontend pages, the work is organized into **3 sprints** following a dependency-first order.

---

## Sprint 1: Foundation & Data Layer
*Goal: Set up models, migrations, seeders, and Filament admin CMS*

| # | Story | Points | Priority | Depends On |
|---|-------|--------|----------|------------|
| S01 | Database Models & Migrations | 5 | P0 | — |
| S02 | Factories & Seeders (Batuan content) | 3 | P0 | S01 |
| S03 | Filament Admin Resources (CRUD) | 8 | P0 | S01 |
| S04 | SiteSetting Service (cached) | 2 | P0 | S01 |
| S05 | SEO Service (meta tags, JSON-LD) | 3 | P0 | S01 |
| **Total** | | **21** | | |

---

## Sprint 2: Frontend Pages & Routing
*Goal: Build all public-facing pages with React + Inertia*

| # | Story | Points | Priority | Depends On |
|---|-------|--------|----------|------------|
| S06 | Layout + Navbar + Footer (MainLayout) | 5 | P0 | S01 |
| S07 | Homepage | 5 | P0 | S06, S02 |
| S08 | About Page | 2 | P0 | S06 |
| S09 | Attractions Index + Detail | 5 | P0 | S06, S02 |
| S10 | Art & Culture + Artist Detail | 5 | P0 | S06, S02 |
| S11 | Visit Information Page | 2 | P0 | S06 |
| S12 | Photo Gallery (masonry + lightbox) | 5 | P0 | S06, S02 |
| S13 | Events Page | 3 | P1 | S06, S02 |
| S14 | Contact & Inquiry (form + validation) | 5 | P0 | S06 |
| **Total** | | **37** | | |

---

## Sprint 3: SEO, Polish & Bilingual
*Goal: SEO optimization, bilingual support, responsive polish*

| # | Story | Points | Priority | Depends On |
|---|-------|--------|----------|------------|
| S15 | SEO Head Component (meta/OG/Twitter) | 3 | P0 | S05 |
| S16 | JSON-LD Structured Data (all page types) | 3 | P0 | S05, S07-S14 |
| S17 | Sitemap Generation | 2 | P0 | S09, S10, S13 |
| S18 | Responsive Polish (all breakpoints) | 3 | P0 | S07-S14 |
| S19 | Language Switcher + SetLocale Middleware | 3 | P1 | S06 |
| S20 | Filament Dashboard Widget (inquiry stats) | 2 | P1 | S03 |
| **Total** | | **16** | | |

---

## Total: 74 Story Points across 3 Sprints

---

*Handoff ready → Phase 6: Implement (Amelia, Developer)*
