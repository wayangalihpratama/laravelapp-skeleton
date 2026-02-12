---
name: update-readme
description: Updates the project's README.md with comprehensive documentation based on the current codebase state.
---

# Update README Skill

This skill analyzes the project's configuration files and structure to generate a comprehensive and up-to-date `README.md` file.

## Instructions

1.  **Analyze Project State**:
    -   Check `composer.json` for PHP version, Laravel version, and key dependencies.
    -   Check `package.json` for Node.js dependencies (React, Vue, Inertia, Tailwind, etc.).
    -   Check `docker-compose.yml` (if present) to understand the Docker services.
    -   Identify the presence of key frameworks/tools: Filament, Jetstream, Breeze, etc.

2.  **Preserve Custom Sections**:
    -   Read the existing `README.md`.
    -   Look for sections marked as "Custom Documentation" or similar user-authored content that shouldn't be overwritten.
    -   *Note: If no specific markers exist, try to preserve the "License" section if it's custom.*

3.  **Generate `README.md` Content**:
    -   **Title**: Project Name (from `composer.json` or directory name).
    -   **Description**: A brief description of the project.
    -   **Tech Stack**: List key technologies detected (e.g., Laravel 10, React, Inertia, MySQL, Redis, TailwindCSS).
    -   **Prerequisites**: Validated requirements (e.g., Docker, PHP 8.2+, Node.js 18+).
    -   **Installation**:
        -   Provide steps for **Docker-based** installation (preferred if `docker-compose.yml` exists), including running migrations (`docker compose exec app php artisan migrate`).
        -   Provide steps for **Local** installation as a fallback, including `php artisan migrate`.
    -   **Usage**:
        -   How to run the development server (`./vendor/bin/sail up` or `php artisan serve`).
        -   How to run frontend build (`npm run dev`).
        -   Default credentials (if any, e.g., for Filament admin).
    -   **Testing**: How to run tests (`php artisan test`).

4.  **Write File**:
    -   Overwrites `README.md` with the generated content.
    -   Ensures proper Markdown formatting.

## Example Structure

```markdown
# [Project Name]

[Project Description]

## Tech Stack
- **Framework**: Laravel [Version]
- **Frontend**: [React/Vue] + Inertia
- **Styling**: TailwindCSS
- **Database**: [MySQL/PostgreSQL]
- **Admin**: [Filament/None]

## Prerequisites
- Docker & Docker Compose
- (Or) PHP [Version] & Node.js [Version]

## Installation

### Using Docker (Recommended)
...

### Local Installation
...

## Usage
...

## Testing
...
```
