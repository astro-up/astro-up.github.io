---
title: FAQ
description: Frequently asked questions about Astro-Up.
---

## General

### Does Astro-Up work on Linux or macOS?

No. Astro-Up is Windows-only because the astrophotography software it manages (ASCOM drivers, N.I.N.A., SharpCap, etc.) is Windows-only. The app uses Windows-specific detection methods (registry, PE files) and Windows installers.

### Does it work offline?

Astro-Up requires internet access to check for updates and download installers. It caches manifest data locally so repeated operations are fast, but the core workflow (check → download → install) needs connectivity.

### Can I use it on multiple imaging PCs?

Yes. Each installation is independent — install Astro-Up on each PC and it will detect what's installed locally. Configuration and backups are stored per-machine.

### Is it free?

Yes, Astro-Up is free and open source under the Apache 2.0 license. Support options coming soon.

## Software Catalog

### How often is the catalog updated?

The manifest catalog is updated whenever new software is added to the [astro-up-manifests](https://github.com/astro-up/astro-up-manifests) repository. Version data (latest versions for each package) is checked every 6 hours by CI.

### My software isn't in the catalog

You can [request it](https://github.com/astro-up/astro-up-manifests/issues) or [add it yourself](/contributing/adding-manifests/). If it's on GitHub or GitLab, you can also add it as a [custom tool](/guides/custom-tools/) immediately.

### What are the manifest IDs?

Each package has a unique ID following the `vendor-product` convention (e.g., `nina-app`, `zwo-ascom-driver-pack`). Use these IDs in CLI commands. You can find them on the [supported software](/reference/supported-software/) page.

## Updates

### What happens if an update breaks something?

Astro-Up backs up your configuration (profiles, settings, equipment configs) before every update. You can restore the backup with `astro-up backup restore <package>`. The backup doesn't include the application itself — for that, you'd need to reinstall the previous version manually.

### Can I skip a version?

There's no explicit "skip" feature. Astro-Up always shows the latest available version. If you don't want to update, simply don't run the update command for that package.

### What about major version upgrades?

Astro-Up warns you before major version upgrades (e.g., N.I.N.A. 3.x → 4.x) because they may break profiles or plugin compatibility. Use `--allow-major` to proceed.

## Custom Tools

### Can I add any software?

Custom tools support GitHub and GitLab repositories with published releases. The repository must have downloadable release assets (not just source archives). Astro-Up auto-detects the install method from the asset type.

### How do I remove a custom tool?

```bash
astro-up remove my-custom-tool
```

This removes it from your local catalog. It does not uninstall the software itself.
