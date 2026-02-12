---
description: Generate Docker configuration files for the project
---

# Trigger
User requests "Dockerize project" or "Add Docker support".

# Steps
1.  **Generate docker-compose.yml**: Create the standard Antigravity docker-compose structure.
2.  **Generate Configs**: Create `docker/nginx/default.conf` and `docker/php/local.ini`.
3.  **Update Vite**: Update `vite.config.js` to support Docker networking.
4.  **Instructions**: Notify user to run `docker compose up -d`.

# Expected Artifacts
- `docker-compose.yml`
- `docker/` directory
- Updated `vite.config.js`
