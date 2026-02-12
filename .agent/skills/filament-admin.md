---
name: Filament Admin Panel
description: Configuration and generation rules for the Filament Admin Panel.
---

# Purpose
Provide a robust, auto-generated admin interface for managing database records, separate from the customer-facing frontend.

# Scope
- `app/Filament/`
- `app/Providers/Filament/`

# Constraints
1.  **Isolation**: Admin logic must not bleed into `app/Http/Controllers`.
2.  **Theme**: Use Filament's default Tailwind theme or a dedicated `admin.css`. Do not mix with `resources/css/app.css` purge paths unless carefully scoped.
3.  **Authorization**: All Resources must implement `can*` policies via proper Policy classes.

# Output Expectations
- **Resources**: `app/Filament/Resources/XResource.php`
- **Widgets**: Dashboard stats and charts.
- **Pages**: Custom admin pages if CRUD is insufficient.

# Validation
- Ensure User model implements `FilamentUser` interface if strict access control is enabled.
- Verify defined Resources have corresponding Eloquent Models.
