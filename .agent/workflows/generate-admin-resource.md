---
description: Generate a Filament Resource for an existing Model
---

# Trigger
User requests "Add admin management for [Model]".

# Steps
1.  **Identify Model**: Verify Model class exists.
2.  **Generate Resource**: Run `php artisan make:filament-resource [Model] --generate`.
3.  **Customize Form**: Update `form()` schema with correct field types (TextInput, Select, toggle).
4.  **Customize Table**: Update `table()` columns (TextColumn, ImageColumn).
5.  **Permissions**: Register Policy for the model.

# Failure Strategy
- If Model does not exist, fail and suggest `generate-feature` workflow.
- If Filament is not installed, fail validatively.
