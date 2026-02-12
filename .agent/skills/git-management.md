---
name: Git Management & Version Control
description: Standards and strategies for committing code, branching, and repository management.
---

# Purpose
Ensure a clean, readable, and traceable git history by enforcing consistent commit practices.

# Commit Strategy
1.  **Grouping**:
    - Group logically related changes (e.g., "Feature Implementation" vs "Refactoring" vs "Docs").
    - **NEVER** mix formatting fixes with logic changes in the same commit.
    - Split large refactors into smaller, verifiable chunks.

2.  **Message Format**:
    - **Header**: `type:#issue Short description`
    - **Body**: Bullet points explaining *why* changes were made.

    *Example*:
    ```
    feat:#42 Add user profile page

    - Created UserProfile component
    - Added route /profile
    - Updated navigation menu
    ```

3.  **Review Before Commit**:
    - Always run `git diff --cached` (or view staged changes) to self-review.
    - **Mandatory**: Ask user for the relevant Issue Number before finalizing the message.

# Branching
- `main` / `master`: Production-ready code.
- `develop` (optional): Staging.
- `feature/*`: Vertical slice features.
- `fix/*`: Bug fixes.

# Pushing
- Always pull (`git pull --rebase`) before pushing to avoid merge commits for linear history.
- Verify CI passes before pushing (if local hooks exist).
