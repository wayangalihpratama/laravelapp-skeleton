---
description: Global Orchestration Policy for Antigravity Laravel Vibe Coding
target: Antigravity Agent
version: 1.0.0
---

# Global Orchestration Policy

## Core Directives
1.  **Deterministic Generation**: All code generation must be purely deterministic. Given the same input context, the output must be identical.
2.  **File Safety**:
    - NEVER modify files outside the declared scope of a task.
    - NEVER overwrite `composer.json` or `package.json` unless explicitly instructed by a workflow.
    - ALWAYS backup critical configuration files before modification.
3.  **Stack Integrity**:
    - Project is **Laravel (Fullstack) + React (Inertia) + Filament (Admin)**.
    - styling is **Tailwind CSS ONLY**. No Bootstrap, no plain CSS (except minor overrides).
    - Database is **MySQL**. Cache/Queue is **Redis**.

## Validation Layers
Before any code generation step, you MUST validate:
1.  **Dependency Matrix**: Ensure requested feature doesn't introduce conflicting packages.
2.  **Hosting Compatibility**: Ensure code does not rely on OS-level dependencies unavailable in standard shared hosting (e.g., standard PHP extensions only).
3.  **Strict Separation**:
    - **Frontend**: `resources/js/Pages` (User facing)
    - **Admin**: `app/Filament` (Admin facing)
    - **API**: `routes/api.php` (External consumers only)

## Pre-Generation Checklist
- [ ] Verify standard Laravel directory structure exists.
- [ ] Confirm `npm run build` passes on current state.
- [ ] Confirm `php artisan test` passes on current state.
- [ ] Check `.agent/skills/` for relevant architecturual constraints.

## Post-Generation Checklist
- [ ] Run `php artisan lint` (if available) or `pint`.
- [ ] Verify no hardcoded absolute paths.
- [ ] Verify no production dependency on Docker containers.
- [ ] verify `routes/web.php` does not overlap with `routes/console.php`.

## Cross-Skill Dependency Matrix
| Skill | Depends On | Conflicts With |
| :--- | :--- | :--- |
| `inertia-react-frontend` | `laravel-architecture` | `filament-admin` (routing) |
| `filament-admin` | `laravel-architecture` | `inertia-react-frontend` (styling) |
| `docker-orchestration` | `dev-hot-reload` | `deployment-compatibility` (prod) |
