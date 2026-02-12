---
name: Testing Strategy
description: Defines the requirements for Unit, Feature, and Browser testing.
---

# Purpose
Maintain code quality and prevent regression through automated testing layers.

# Scope
- `tests/Feature` (HTTP/Controller tests)
- `tests/Unit` (Service/Logic tests)
- `tests/Browser` (Dusk tests - Optional)

# Strategy
1.  **Feature Tests**: Primary method. Test endpoints, status codes, and database side effects.
2.  **Pest PHP**: Preferred testing framework for conciseness.
3.  **Database**: Use `RefreshDatabase` trait.
4.  **Mocking**: Mock external API calls and heavy services.

# Constraints
- Tests must pass in CI/CD pipeline.
- Do not test framework functionality (e.g., "Eloquent works"), test *business logic*.
