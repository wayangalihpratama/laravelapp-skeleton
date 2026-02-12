---
name: Inertia.js + React Frontend
description: Guidelines for building the user-facing React frontend using Inertia.js.
---

# Purpose
Manage the "User" application state and UI logic using React and Inertia.js, styled strictly with Tailwind CSS.

# Scope
- `resources/js/`
- `resources/css/app.css`
- `tailwind.config.js`
- `vite.config.js`

# Responsibilities
1.  **Routing**: Map Laravel routes to Inertia Pages.
2.  **State Management**: Use React Hooks and Inertia Form helpers (`useForm`). Avoid Redux/Zustand unless complexity demands global state.
3.  **Styling**:
    - Use Utility-first Tailwind classes.
    - No `style={{}}` unless dynamic coordinates.
    - Dark mode via `dark:` class prefix.
4.  **Components**:
    - Atomic design is optional but recommended for `components/`.
    - `Pages/` must correspond to Controller methods.

# Validation Rules
- All pages must export a default React component.
- `Link` component from `@inertiajs/react` must be used for internal navigation.
- No jQuery or direct DOM manipulation.
