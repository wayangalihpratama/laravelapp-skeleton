---
description: Debugs the Laravel application by checking logs, routes, and configuration.
---

1.  Run the `debug-laravel` skill inside the app container to diagnose issues.
    -   *Note*: Use `docker compose exec app <command>` to run the diagnostic commands.
2.  If configuration seems stale, clear the cache:
    -   `docker compose exec app php artisan optimize:clear`
3.  If database errors occur, check migration status:
    -   `docker compose exec app php artisan migrate:status`
