---
description: Bootstrap the initial Laravel + Inertia + Filament stack
---

# Trigger
User requests "Initialize new project" or "Scaffold architecture".

# Preconditions
- Docker installed and running.
- Git installed.

# Steps
1.  **Laravel Install**:
    ```bash
    docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/var/www/html -w /var/www/html laravelsail/php84-composer:latest composer create-project laravel/laravel . --force
    ```
2.  **Install Dependencies (Inertia + Filament)**:
    ```bash
    docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/var/www/html -w /var/www/html laravelsail/php84-composer:latest composer require filament/filament:"^3.0" inertiajs/inertia-laravel
    ```
3.  **Install Filament Panel**:
    ```bash
    docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/var/www/html -w /var/www/html laravelsail/php84-composer:latest php artisan filament:install-panel --identifier=admin
    ```
4.  **Frontend Setup & Tailwind Init**:
    ```bash
    docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/var/www/html -w /var/www/html node:20-alpine sh -c "npm install && npm install @inertiajs/react react react-dom @vitejs/plugin-react && npx tailwindcss init -p"
    ```
5.  **Structure Cleanup**: Remove default migration comments, setup strict types.
6.  **Git Init**: Initialize git repository.

# Expected Artifacts
- `composer.json` with all dependencies.
- `vite.config.js` with React plugin.
- `tailwind.config.js` properly configured.
- Clean git history.
