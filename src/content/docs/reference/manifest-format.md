---
title: Manifest Format
description: Reference for the TOML manifest format used to define software packages.
---

Each software package in Astro-Up is defined by a TOML manifest file in the [astro-up-manifests](https://github.com/astro-up/astro-up-manifests) repository at `manifests/<category>/<id>.toml`.

## Example

```toml
id = "nina-app"
name = "N.I.N.A."
type = "application"
category = "capture"
description = "Nighttime Imaging 'N' Astronomy — advanced capture sequencer"
homepage = "https://nighttime-imaging.eu"
requires = ["ascom-platform", "dotnet-desktop-8"]

[detection]
method = "registry"
registry_key = "SOFTWARE\\NINA"
registry_value = "DisplayVersion"

[detection.fallback]
method = "pe_file"
file_path = "{program_dir}/NINA/NINA.exe"

[install]
method = "innosetup"
quiet_args = ["/VERYSILENT", "/NORESTART", "/SUPPRESSMSGBOXES"]
interactive_args = ["/NORESTART"]
install_dir = "{program_dir}/NINA"

[remote]
provider = "github"
owner = "isbeorn"
repo = "nina"
asset_pattern = "NINASetupBundle_*.zip"

[backup]
config_paths = [
    "{config_dir}/NINA/Profiles",
    "{config_dir}/NINA/Settings",
]
```

## Top-Level Fields

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `id` | string | Yes | Unique identifier (`vendor-product` convention, used in CLI commands) |
| `name` | string | Yes | Display name |
| `description` | string | No | Short description |
| `homepage` | string | No | Project homepage URL |
| `category` | string | Yes | One of: `capture`, `guiding`, `platesolving`, `planetarium`, `databases`, `driver`, `usb`, `utilities`, `prerequisites` |
| `type` | string | Yes | One of: `application`, `driver`, `runtime`, `database`, `usb_driver`, `resource` |
| `requires` | array | No | List of manifest IDs that must be installed first |
| `manual_download` | bool | No | `true` if download links are signed/expiring |
| `download_page` | string | No | Vendor download page URL (for manual downloads) |

## `[detection]`

How Astro-Up detects whether the software is installed and which version.

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `method` | string | Yes | `registry`, `pe_file`, `config_file`, `file_exists` |
| `registry_key` | string | Conditional | Windows registry key path |
| `registry_value` | string | Conditional | Registry value name containing the version |
| `file_path` | string | Conditional | Path to executable or config file |
| `version_regex` | string | No | Regex to extract version from file contents |

A `[detection.fallback]` section can provide an alternative detection method if the primary fails.

## `[remote]`

Where to check for the latest version.

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `provider` | string | Yes | Version check strategy (see below) |
| `owner` | string | Conditional | Repository owner (GitHub/GitLab) |
| `repo` | string | Conditional | Repository name (GitHub/GitLab) |
| `asset_pattern` | string | No | Glob pattern to match release assets |
| `tag_prefix` | string | No | Strip this prefix from tags to get the version |
| `download_url` | string | Conditional | Direct download URL |
| `scrape_url` | string | Conditional | URL to scrape for version info |
| `scrape_regex` | string | Conditional | Regex to extract version from scraped page |
| `version_check` | string | No | `scrape` for CI-based version detection |

### Provider strategies

| Provider | Description |
|----------|-------------|
| `github` | GitHub Releases API |
| `gitlab` | GitLab Releases API |
| `direct_url` | HEAD request to a known URL, version from filename or headers |
| `scrape` | Playwright-based web scraping (CI only) |
| `http_head` | HTTP HEAD for last-modified/ETag (versionless entries like databases) |
| `pe_download` | Download PE executable and extract version from file properties |
| `runtime_scrape` | Go-native HTML scraping with goquery (no browser needed) |
| `manual` | Version checked manually, not automated |

## `[install]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `method` | string | Yes | `exe`, `msi`, `zip`, `innosetup` |
| `quiet_args` | array | No | Arguments for silent installation |
| `interactive_args` | array | No | Arguments for interactive installation |
| `install_dir` | string | No | Target installation directory |

## `[backup]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `config_paths` | array | Yes | Directories to back up before upgrade |

Path tokens: `{appdata}`, `{localappdata}`, `{programfiles}`, `{program_dir}`, `{programdata}`, `{userprofile}`, `{config_dir}`
