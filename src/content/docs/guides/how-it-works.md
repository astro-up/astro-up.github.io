---
title: How It Works
description: Under the hood — manifest fetching, version checking, caching, and signature verification.
---

Astro-Up coordinates several systems to keep your imaging software up to date. Here's what happens behind the scenes.

## Manifest Catalog

Software definitions (manifests) are maintained in a [separate repository](https://github.com/astro-up/astro-up-manifests) and compiled into `manifests.json`. Your Astro-Up installation fetches this file at runtime — you always get the latest catalog without updating the app itself.

### Three-Tier Cache

To keep things fast and minimize bandwidth:

1. **Memory cache** — hot data stays in RAM during the current session
2. **Disk cache** — persisted to `{config_dir}/astro-up/cache/` between sessions
3. **ETag validation** — on network requests, the server is asked "has this changed?" before downloading the full file

This means repeated operations (listing software, checking versions) are near-instant after the first fetch.

### Signature Verification

Both `manifests.json` and `versions.json` are signed with [minisign](https://jedisct1.github.io/minisign/) in CI. Astro-Up verifies signatures before trusting fetched data, protecting against tampered manifests.

## Version Checking

When you run `astro-up check`, the app queries each software's upstream source for the latest version. The strategy depends on the manifest's `provider` setting:

| Provider | How it works |
|----------|-------------|
| `github` | GitHub Releases API — fast, includes changelogs |
| `gitlab` | GitLab Releases API |
| `direct_url` | HEAD request to a known download URL |
| `scrape` | Playwright-based web scraping (CI-generated, cached in `versions.json`) |
| `http_head` | HTTP HEAD for Last-Modified/ETag (databases and versionless downloads) |
| `pe_download` | Download the installer and read version from Windows PE file properties |
| `runtime_scrape` | Go-native HTML scraping with goquery |

For vendors without APIs, version data is checked every 6 hours by CI and published in `versions.json`. The app fetches this alongside the manifest catalog.

## Update Flow

When you update a package:

```
1. Check remote version (provider or versions.json)
2. Compare against locally detected version
3. If newer: download installer
4. Back up configuration (profiles, settings, equipment configs)
5. Run installer (silently by default)
6. Verify new version is detected
```

## Dependency Resolution

Some software requires prerequisites. For example, N.I.N.A. requires both ASCOM Platform and .NET Desktop Runtime 8. When you update N.I.N.A., Astro-Up checks if its dependencies are installed and up to date, installing them first if needed.

Dependencies are declared in manifests via the `requires` field and resolved in topological order (dependencies before dependents).

## GUI vs CLI Routing

The binary decides which interface to launch based on arguments:

- **No arguments** → launches the GUI (Wails v2 + Svelte)
- **Any subcommand** (e.g., `list`, `check`, `update`) → runs the CLI (urfave/cli)

Both interfaces share the same backend packages — the engine, catalog, providers, and installers are identical.
