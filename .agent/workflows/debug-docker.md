---
description: Debugs the Docker environment by checking status, logs, and configuration.
---

1.  Run the `debug-docker` skill to analyze the current state of the containers.
2.  If the issue persists or if containers are missing, run `docker compose up -d` to attempt to start them.
3.  If the build seems outdated or broken, suggest running `docker compose build --no-cache`.
