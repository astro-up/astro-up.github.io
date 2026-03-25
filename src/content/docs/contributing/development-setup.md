---
title: Development Setup
description: Set up your development environment for contributing to Astro-Up.
---

## Prerequisites

- **Go 1.26+** (via [mise](https://mise.jdx.dev/))
- **Node.js 22+** and **pnpm** (for the Wails/Svelte frontend)
- **Wails CLI**: `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
- **go-task**: `go install github.com/go-task/task/v3/cmd/task@latest`
- **pre-commit**: `pip install pre-commit` or `brew install pre-commit`

## Getting Started

```bash
git clone git@github.com:astro-up/astro-up.git
cd astro-up
task setup     # installs deps, sets up pre-commit hooks
task build     # builds the application
task test      # runs all tests
```

## Development Workflow

### Branching

- Create a feature branch: `git checkout -b feat/my-feature`
- Branch naming: `feat/*`, `fix/*`, `refactor/*`, `docs/*`, `chore/*`
- Feature branches are merged with `--no-ff` to preserve history

### Conventional Commits

Commits are enforced by pre-commit hooks:

```
feat(engine): add dependency resolution
fix(detect): handle missing registry key gracefully
docs(spec): update spec 004 with TDD requirements
refactor(config): simplify path token resolution
test(backup): add restore round-trip integration test
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`, `perf`

### Test-Driven Development

TDD is mandatory. Every public function needs at least:
- One test covering the happy path
- One test covering an error path

### Pre-commit Hooks

Never skip hooks (`--no-verify` is banned). If a hook fails, fix the underlying issue.

```bash
pre-commit run --all-files    # Run hooks manually
```

## Build Commands

```bash
task setup          # Install dependencies and hooks
task build          # Build the application
task test           # Run all tests
task lint           # Run linters
wails dev           # Run with hot reload (GUI + backend)
```

Docs are in a [separate repository](https://github.com/astro-up/astro-up.github.io).
