---
title: Quick Start
description: Get up and running with Astro-Up in minutes.
---

## GUI (default)

Simply run `astro-up` with no arguments to launch the graphical interface:

```
astro-up
```

The GUI will scan your system, show installed software with available updates, and let you update with a single click.

## CLI

For headless or scripted operation, use CLI subcommands:

```bash
# Show all managed software with versions
astro-up list

# Check for available updates
astro-up check

# Update everything
astro-up update --all

# Update specific software (use manifest IDs from the catalog)
astro-up update nina-app phd2-app

# Add a custom tool from GitHub
astro-up add https://github.com/owner/repo

# Update astro-up itself
astro-up self-update
```

All CLI commands support `--json` for machine-readable output.

## What Happens During an Update

1. Astro-Up checks the vendor source for the latest version
2. If an update is available, it downloads the installer
3. Your configuration is backed up automatically
4. The installer runs silently (or interactively, if configured)
5. The backup is retained in case you need to roll back
