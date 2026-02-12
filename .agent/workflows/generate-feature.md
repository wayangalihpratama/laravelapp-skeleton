---
description: End-to-end generation of a vertical feature (Migration -> Model -> API -> Frontend)
---

# Trigger
User requests "Add feature X" (e.g., "Add a Blog system").

# Steps
1.  **Migration**: Create database schema.
2.  **Model**: Create Eloquent model with relationships and casts.
3.  **Service**: Create Service class for business logic (if complex).
4.  **Controller**: Create Controller returning `Inertia::render`.
5.  **React Page**: Create `resources/js/Pages/Feature/Index.jsx` and related components.
6.  **Route**: Add entry to `routes/web.php`.
7.  **Admin**: (Optional) Run `generate-admin-resource` workflow.

# Validation Checklist
- [ ] Migration rolls back cleanly.
- [ ] Model has fillables guarding attributes.
- [ ] React Page uses common Layout.
- [ ] Routes are auth-protected if necessary.
