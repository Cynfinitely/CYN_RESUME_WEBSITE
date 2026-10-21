# Hand-written file size

When generating or substantially rewriting code, keep each hand-written file around max ~600 lines.
Split larger work into co-located modules, hooks, and helpers before approaching that size.
Exceptions: generated code, lockfiles, large translation JSON, vendor artifacts, migration history, and tests.
Do not mass-refactor existing oversized files unless the current task explicitly requires it.

`scripts/check-file-size.sh` prints a non-blocking warning on pre-push for changed files over the limit (`FILE_SIZE_LIMIT` overrides 600).
