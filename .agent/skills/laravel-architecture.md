---
name: Laravel Architecture
description: Defines the standard Laravel architectural constraints and patterns.
---

# Purpose
Enforce standard Laravel conventions without Domain Driven Design (DDD) complexity, ensuring maintainability and compatibility with the ecosystem.

# Scope
- `app/` directory structure
- Service Providers
- Eloquent Models
- Database Migrations
- Route definitions

# Constraints
1.  **No DDD Modules**: Do not create `src/Domain` or `app/Modules`. Keep standard `app/Http`, `app/Models`, `app/Services`.
2.  **Models**: All models reside in `app/Models`.
3.  **Controllers**: Keep controllers "skinny". Move business logic to `app/Services` if it exceeds 50 lines or is reusable.
4.  **Strict Typing**: Use PHP 8.2+ strict typing in all new classes.
5.  **Repository Pattern**: **AVOID** unless strictly necessary for testing mocking. Prefer direct Eloquent usage.

# Input Assumptions
- User assumes standard Laravel 11+ structure.
- Composer autoload namespace is `App\\`.

# Validation Rules
- Check `composer.json` for `laravel/framework`.
- Ensure no circular dependency in Service Providers.
