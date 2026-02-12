---
name: Debug Laravel
description: Diagnoses common application-level issues in the Laravel project.
---

# Debug Laravel Skill

This skill helps diagnose issues within the Laravel application itself, such as configuration errors, route problems, or database migration inconsistencies.

## Instructions

All commands are assumed to be run inside the `app` container (e.g., `docker compose exec app ...`).

1.  **Check Application Logs**:
    -   Read the last 50 lines of the Laravel log: `tail -n 50 storage/logs/laravel.log`.
    -   Look for "Stack trace", "Exception", "Error".

2.  **Verify Configuration**:
    -   Check if configuration is cached: `test -f bootstrap/cache/config.php && echo "Config is cached" || echo "Config is NOT cached"`.
    -   *Recommendation*: If you are changing `.env` and not seeing updates, run `php artisan config:clear`.

3.  **Check Routes**:
    -   List registered routes to ensure your URL is actually defined: `php artisan route:list`.
    -   Look for method mismatches (e.g., POST vs GET).

4.  **Check Database Status**:
    -   Check migration status: `php artisan migrate:status`.
    -   If you see "Pending" migrations, run `php artisan migrate`.

5.  **Validate Environment**:
    -   Check if `APP_KEY` is set (`php artisan key:status` or check `.env`).
    -   Check database connection: `php artisan db:show` (if available) or try a simple tinker command like `php artisan tinker --execute="DB::connection()->getPdo();"`.

6.  **Directory Permissions**:
    -   Ensure `storage` and `bootstrap/cache` are writable by the web server user.
    -   Command: `ls -ld storage bootstrap/cache`
