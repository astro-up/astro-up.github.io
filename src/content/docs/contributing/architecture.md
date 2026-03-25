---
title: Architecture
description: Overview of Astro-Up's internal architecture.
---

Astro-Up is organized into independent packages, each corresponding to a specification:

## Package Overview

```
cmd/astro-up/         Entry point (CLI or GUI routing)
internal/core/        Domain types, interfaces, events
internal/config/      Koanf app config + TOML manifest loading
internal/catalog/     Manifest fetching, three-tier cache, minisign verification
internal/detect/      Version detection (registry, PE, config, file)
internal/provider/    Remote version checking (GitHub, GitLab, HTTP)
internal/download/    HTTP downloads with progress
internal/backup/      Config backup/restore
internal/install/     Silent installers (MSI, EXE, ZIP, InnoSetup)
internal/engine/      Update orchestration, dependency resolution
internal/custom/      User-added custom tools
internal/selfupdate/  Self-update mechanism
internal/bootstrap/   Installed vs portable build detection
ui/gui/               Wails v2 + Svelte frontend
```

Manifests are maintained in a separate repository ([astro-up-manifests](https://github.com/astro-up/astro-up-manifests)) and fetched at runtime via the catalog package.

## Key Design Decisions

### Config: Koanf + TOML
Koanf provides layered configuration with TOML as the file format. This was chosen over Viper/Cobra for its simplicity and clean API.

### Version Parsing: hashicorp/go-version
Handles semver and non-standard version strings common in astrophotography software.

### Platform-Agnostic Core
The core domain types and interfaces don't import Windows-specific packages. Platform-specific implementations are injected via interfaces, enabling testing on any OS.

### Single Binary
The CLI (urfave/cli) and GUI (Wails v2 + Svelte) share the same backend packages. The binary routes to GUI by default or CLI when subcommands are used.

## Data Flow

```
User Action
  → Engine (orchestration)
    → Provider (check remote versions)
    → Detect (check local versions)
    → Download (fetch installers)
    → Backup (save config)
    → Install (run installer)
```

## Frontend

The GUI uses:
- **Wails v2** for Go ↔ JavaScript bridging
- **Svelte 5** with TypeScript
- **shadcn-svelte** for UI components
- **Tailwind CSS** for styling
- **Lucide-svelte** for icons
