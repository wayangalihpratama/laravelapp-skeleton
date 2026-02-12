---
description: Interactively stage, commit, and push changes to the remote repository
---

# Trigger
User requests "Commit changes", "Push code", or after completing a significant task.

# Preconditions
- Git initialized.
- Remote `origin` configured.

# Steps
1.  **Status Check**: Run `git status -s` to see pending changes.
2.  **Analysis**:
    - If many files changed, propose grouping them into logical sets.
    - If few files, propose a single commit.
3.  **User Input Required**:
    - Ask: "Please provide the Issue Number for these changes."
    - Ask: "Do you want to group these as [Proposed Groups] or a single commit?"
4.  **Staging**:
    - `git add [files]` based on the decided groups.
5.  **Committing**:
    - Generate a message following `.agent/skills/git-management.md`.
    - Execute `git commit -m "..."`.
    - Repeat for other groups if applicable.
6.  **Pushing**:
    - `git pull --rebase origin [current_branch]`
    - `git push origin [current_branch]`

# Validation
- Ensure working directory is clean after workflow.
- Ensure commits appear in `git log`.
