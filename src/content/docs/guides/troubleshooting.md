---
title: Troubleshooting
description: Common issues and how to resolve them.
---

## Version Detection

### Software is installed but Astro-Up doesn't detect it

Astro-Up detects software through Windows Registry keys, PE file properties, or config files. If detection fails:

1. Check the [supported software](/reference/supported-software/) page — confirm the software is in the catalog
2. Some software registers differently depending on install method (MSI vs EXE vs ZIP)
3. Portable installations may not create registry entries

### Wrong version detected

Some vendors store version numbers inconsistently between the registry and the actual executable. If you see the wrong version, this is likely a manifest issue — please [report it](https://github.com/astro-up/astro-up-manifests/issues).

## Updates

### Installer fails silently

Silent installation arguments vary by vendor. If an update fails:

1. Try running the update with `--interactive` to see the installer UI
2. Check if the software requires admin privileges (some installers need elevation)
3. Check if another instance of the software is running

### Download fails

- Verify your internet connection
- Some vendor download links expire or change — try again later
- If the issue persists, the version check data may be stale. Astro-Up refreshes version data periodically from CI.

### Major version warning

When a major version update is available (e.g., 3.x → 4.x), Astro-Up warns you before proceeding. Major updates may break profiles, plugins, or equipment configurations. Use `--allow-major` to proceed if you're sure.

## Backups

### Restore doesn't fix the issue

Backups cover configuration files (profiles, settings, equipment configs) but not the application itself. If an update broke the software, you may need to:

1. Restore the backup: `astro-up backup restore <package>`
2. Manually reinstall the previous version from the vendor's website

### Backup paths are empty

Some software doesn't create config files until first run. If you've never launched the software, there's nothing to back up.

## General

### Verbose output

Use `--verbose` for detailed logging:

```bash
astro-up check --verbose
```

### Reporting issues

When reporting a bug, include:
- The command you ran
- The full output (use `--verbose`)
- Your Windows version
- Which software was affected
