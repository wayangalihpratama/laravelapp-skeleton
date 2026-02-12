---
description: Verify that the project adheres to the defined architecture
// turbo-all
---

# Trigger
Periodic check or pre-commit.

# Steps
1.  **Structure Scan**: Ensure no logic exists in `routes/web.php` closures (must use Controllers).
2.  **Style Scan**: Grep for inline `style="..."` in `.jsx` files (Force failure if found).
3.  **Dependency Scan**: Ensure dev-dependencies (Faker, Ignition) are in `require-dev`.
4.  **Test Run**: Execute `php artisan test`.

# Failure Handling
- Report specific violations.
- Do not auto-fix complex logic.
