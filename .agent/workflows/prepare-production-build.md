---
description: Prepare artifacts for non-containerized production deployment
---

# Trigger
User requests "Build for production".

# Steps
1.  **Asset Build**: Run `npm run build`.
2.  **Route Cache**: `php artisan route:cache`.
3.  **Config Cache**: `php artisan config:cache`.
4.  **View Cache**: `php artisan view:cache`.
5.  **Manifest Generation**: specific package manifest generation.
6.  **Cleanup**: Remove `node_modules` (if deployment strategy handles install remotely) or prune dev deps.

# Validation
- Ensure `public/build/manifest.json` exists.
- Ensure no "debug" flags are enabled in config.
