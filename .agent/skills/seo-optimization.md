---
name: SEO Optimization Strategy
description: Rules for ensuring high SEO performance in a SPA/Inertia environment.
---

# Purpose
Ensure the React-based frontend is crawlable and indexable by search engines, adhering to Core Web Vitals.

# Responsibilities
1.  **SSR**: Ensure Inertia SSR is configured (Node.js sidecar process) if required, or implement pre-rendering.
2.  **Meta Tags**: Use `@inertiajs/react` `<Head>` component for dynamic Title and Description.
3.  **Structured Data**: Inject JSON-LD scripts into the `<Head>` for entities (Product, Article, Organization).
4.  **Sitemap**: Generate `sitemap.xml` dynamically via `spatie/laravel-sitemap`.

# Constraints
- **Performance**: Lighthouse score must be > 90.
- **Images**: All `<img>` tags must have `alt` attributes and explicit `width`/`height` to prevent layout shift (CLS).
- **Robots**: `robots.txt` must allow crawling of all public routes.

# Validation
- Check existence of `<Head>` in Layouts.
- Verify `sitemap.xml` route exists and is public.
