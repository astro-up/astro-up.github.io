---
title: Backups
description: How Astro-Up backs up your configuration before updates.
---

Astro-Up automatically backs up software configuration before every upgrade. This protects your profiles, equipment settings, and preferences.

## What Gets Backed Up

Each manifest defines which paths to back up. Common examples:

- **N.I.N.A.**: profiles, equipment, layout, plugin settings
- **PHD2**: guiding profiles and dark libraries
- **SharpCap**: capture profiles and settings
- **ASTAP**: configuration and preferences

## Backup Location

Backups are stored at:

```
{config_dir}/astro-up/backups/{software-id}/{timestamp}/
```

Each backup is a timestamped snapshot of the configuration directories.

## Restoring a Backup

If an update causes issues, you can restore the previous configuration:

```bash
# List available backups
astro-up backup list nina

# Restore the most recent backup
astro-up backup restore nina
```

## Backup Retention

Backups are retained indefinitely by default. You can clean up old backups with:

```bash
astro-up backup prune --keep 3
```

This keeps the 3 most recent backups for each package and removes older ones.
