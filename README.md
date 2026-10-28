# devdigest-ac54-lab

A tiny layered TypeScript service used as a lab repository for DevDigest
(SPEC-01 project context, AC-54): an agent with `docs/architecture-rules.md`
attached should flag a PR that breaks the layering rule.

Layers:

- `api/` — HTTP handlers
- `services/` — business logic and data access orchestration
- `db/` — database client

See [docs/architecture-rules.md](docs/architecture-rules.md).
