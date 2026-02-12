---
name: Development Hot Reload (HMR)
description: Integration strategy for Vite HMR within the Docker environment.
---

# Purpose
Enable instant frontend updates in the browser when files change in the local environment, bridging the Docker->Host gap.

# Scope
- `vite.config.js`
- `docker-compose.yml` (ports)

# Strategy
1.  **Vite Server**: Runs inside the container or on the host (Host is preferred for file watching reliability, Container preferred for networking encapsulation). *Decision: Host-based Node/Vite for best file watching performance on Mac/Windows, routed to container.*
2.  **Config**:
    ```javascript
    server: {
        hmr: {
            host: 'localhost',
        },
    }
    ```
3.  **Conflict Prevention**: Ensure port 5173 is available and exposed.

# Validation
- Ensure `@vite` directive is present in `app.blade.php`.
- Check that changing a `.jsx` file triggers a browser update without reload.
