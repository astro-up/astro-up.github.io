---
title: Managing Software
description: How to check for updates and install software with Astro-Up.
---

## Listing Installed Software

View everything Astro-Up manages on your system:

```bash
astro-up list
```

This scans your system and shows each package with its installed version and whether an update is available.

## Checking for Updates

```bash
astro-up check
```

Astro-Up queries GitHub, GitLab, and vendor websites for the latest versions and compares them against what's installed.

## Updating Software

### Update everything

```bash
astro-up update --all
```

### Update specific packages

```bash
astro-up update nina-app phd2-app astap-app
```

### What happens during an update

1. The latest version is downloaded from the vendor source
2. Your configuration is backed up automatically
3. The installer runs (silently by default)
4. Astro-Up verifies the new version is detected

## Major Version Warnings

When a major version update is available (e.g., N.I.N.A. 3.x → 4.x), Astro-Up warns you before proceeding. Major updates may include breaking changes to profiles or plugin compatibility.

## Dependencies

Some software requires prerequisites like ASCOM Platform or .NET Desktop Runtime. Astro-Up resolves these automatically and installs them first if needed.
