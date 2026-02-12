---
name: Debug Docker
description: Diagnoses common issues with the Docker development environment.
---

# Debug Docker Skill

This skill analyzes the state of the Docker environment to identify why containers might not be running or functioning correctly.

## Instructions

1.  **Check Container Status**:
    -   Run `docker compose ps -a` to see the status of all containers.
    -   Identify any containers with status `Exited` or `dead`.

2.  **Analyze Logs**:
    -   For any container that is not `Up` or has `Exited` with a non-zero code, fetch the last 50 lines of logs using `docker compose logs --tail=50 <service_name>`.
    -   Look for common keywords: `error`, `exception`, `fatal`, `address already in use`, `connection refused`.

3.  **Check Port Conflicts**:
    -   Verify if the host ports defined in `docker-compose.yml` (usually 80, 8000, 3306, 5173, 6379) are already in use by other processes on the host machine. (e.g., using `lsof -i :<port>` on Mac).

4.  **Validate Environment**:
    -   Check if `.env` exists.
    -   Verify that essential variables like `APP_PORT`, `DB_PASSWORD`, `DB_DATABASE` are set.
    -   Check if the `vendor` directory exists (did `composer install` run?).
    -   Check if `node_modules` exists (did `npm install` run?).

5.  **Resource Usage**:
    -   Run `docker stats --no-stream` to see if any container is consuming excessive CPU or Memory.

6.  **Report Findings**:
    -   Summarize the status of each service (App, Web, DB, Redis, Node).
    -   Highlight specific errors found in logs.
    -   Suggest fixes based on findings (e.g., "Run `docker compose up -d`", "Install dependencies", "Kill process on port 8000").
