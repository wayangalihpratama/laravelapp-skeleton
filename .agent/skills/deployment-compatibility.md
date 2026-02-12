---
name: Deployment Compatibility
description: Ensures the application is deployable to standard VPS/Shared hosting constraints.
---

# Purpose
Guarantee that the application does not rely on container orchestration for production, enabling deployment to platforms like Forge, Ploi, or standard cPanel/Shared hosting.

# Constraints
1.  **No Docker Runtime**: Production build must produce static assets and standard PHP files.
2.  **Environment Variables**: All configuration must be driven by `.env`.
3.  **Storage Links**: Deployment workflow must handle `php artisan storage:link`.
4.  **Scheduler**: Depend on standard Crontab entries (`* * * * * php artisan schedule:run`).

# Redis Fallback
- `config/database.php` and `config/queue.php` must support `QUEUE_CONNECTION=database` and `CACHE_STORE=file` if Redis is unavailable.
- **Rule**: Code must not use raw Redis commands; use Laravel Cache/Queue facades.

# Validation
- Verify `vendor/` and `node_modules/` are excluded from git.
- Verify public build directory contains hashed assets after build.
