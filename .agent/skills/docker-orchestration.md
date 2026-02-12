---
name: Docker Orchestration (Dev Only)
description: Manages the local development environment using Docker Compose.
---

# Purpose
Provide a consistent, reproducible development environment (Nginx, PHP-FPM, MySQL, Redis) that mirrors production architecture but is NOT used in production.

# Scope
- `docker-compose.yml`
- `docker/` directory (nginx configs, php INI)

# Container Responsibilities
1.  **app** (PHP-FPM): Runs the application code.
2.  **web** (Nginx): Proxies requests to PHP-FPM and serves static files.
3.  **db** (MySQL): Persistent data storage (volume mounted).
4.  **redis** (Redis): Cache and Queue driver.

# Constraints
- **Dev Only**: `docker-compose.yml` MUST NOT be referenced in deployment scripts.
- **Ports**: Explicitly map ports (e.g., `8000:80`, `3306:3306`) to avoid conflicts, or use env vars.
- **Networking**: Use a custom bridge network `laravel-network`.

# Validation
- `nginx.conf` must proxy PHP requests to `app:9000`.
- MySQL container must wait for healthcheck before app container allows migration execution.
