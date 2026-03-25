---
title: CLI Commands
description: Complete reference for all Astro-Up CLI commands.
---

All commands support `--json` for machine-readable output.

## `astro-up list`

Show all managed software with installed and available versions.

```bash
astro-up list              # All software
astro-up list --outdated   # Only packages with updates
astro-up list --json       # JSON output
```

## `astro-up check`

Check for available updates without installing anything.

```bash
astro-up check             # Check all packages
astro-up check nina-app phd2-app   # Check specific packages
```

## `astro-up update`

Download and install updates.

```bash
astro-up update --all      # Update everything
astro-up update nina-app phd2-app  # Update specific packages
astro-up update --dry-run  # Show what would be updated
```

## `astro-up add`

Add a custom tool from a GitHub or GitLab repository.

```bash
astro-up add https://github.com/owner/repo
```

## `astro-up remove`

Remove a custom tool from your catalog.

```bash
astro-up remove my-custom-tool
```

## `astro-up backup`

Manage configuration backups.

```bash
astro-up backup list [package]        # List backups
astro-up backup restore [package]     # Restore latest backup
astro-up backup prune --keep 3        # Keep only 3 most recent
```

## `astro-up self-update`

Update Astro-Up itself to the latest version.

```bash
astro-up self-update
```

## Global Flags

| Flag | Description |
|------|-------------|
| `--json` | Output in JSON format |
| `--verbose` | Show detailed output |
| `--version` | Print version and exit |
| `--help` | Show help |
