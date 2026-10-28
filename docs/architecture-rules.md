# Architecture rules

These rules are invariants. A change that breaks one is a defect, not a style choice.

## Layering

1. Module `api/` does not import `db/` directly; all data access goes through `services/`.
2. Module `services/` may import `db/`.
3. Module `db/` imports neither `api/` nor `services/`.

## Why

`api/` handlers stay thin and testable without a database. Keeping every query
behind `services/` gives one place for validation, authorization and caching —
a handler that talks to `db/` directly bypasses all of it.
