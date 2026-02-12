---
description: Audit and Apply SEO best practices to the codebase
---

# Trigger
User requests "Optimize SEO" or before production build.

# Steps
1.  **Sitemap Check**: Ensure `spatie/laravel-sitemap` is installed and configured.
2.  **Meta Tag Audit**: Scan `resources/js/Pages` for missing `<Head>` definitions.
3.  **Robots Check**: Ensure `public/robots.txt` exists.
4.  **Asset Optimization**: Check `vite.config.js` for compression plugins.

# Expected Artifacts
- Updated `resources/js/Pages/**/*.jsx` with correct Title/Description.
- configuration for sitemap generator.
