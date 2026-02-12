---
description: Sync Docker environment variables and configurations
---

# Trigger
Changes to `.env.example` or `docker-compose.yml`.

# Steps
1.  **Env Comparison**: Check if variables in `.env.example` are missing in `.env`.
2.  **Docker Build**: If `Dockerfile` changed, signal rebuild requirement.
3.  **Services Restart**: Check if Redis/MySQL configs changed.

# SafeToAutoRun
True (Non-destructive validation).
