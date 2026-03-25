---
title: Manifest Format
description: Reference for the TOML manifest format used to define software packages.
---

Each software package in Astro-Up is defined by a TOML manifest file in the [astro-up-manifests](https://github.com/astro-up/astro-up-manifests) repository at `manifests/<category>/<id>.toml`.

## Basic Structure

```toml
[tool]
id = "nina"
name = "N.I.N.A."
description = "Nighttime Imaging 'N' Astronomy"
homepage = "https://nighttime-imaging.eu"
category = "capture"
type = "application"

[tool.remote]
provider = "github"
repo = "nina-project/nina"

[tool.detect]
method = "registry"
path = "HKLM\\SOFTWARE\\NINA"
value = "Version"

[tool.install]
method = "exe"
silent_args = "/VERYSILENT /SUPPRESSMSGBOXES"

[tool.backup]
paths = [
    "{appdata}/NINA/Profiles",
    "{appdata}/NINA/Equipment",
]
```

## Sections

### `[tool]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `id` | string | Yes | Unique identifier (used in CLI commands) |
| `name` | string | Yes | Display name |
| `description` | string | No | Short description |
| `homepage` | string | No | Project homepage URL |
| `category` | string | Yes | One of: `capture`, `guiding`, `platesolving`, `planetarium`, `driver`, `usb`, `viewers`, `prerequisites` |
| `type` | string | Yes | One of: `application`, `driver`, `runtime`, `database`, `usb_driver`, `resource` |

### `[tool.remote]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `provider` | string | Yes | `github`, `gitlab`, `website`, `sourceforge` |
| `repo` | string | Conditional | GitHub/GitLab repo path (e.g., `owner/repo`) |
| `download_page` | string | Conditional | URL for website-based downloads |
| `version_check` | string | No | `scrape` for CI-based version detection |
| `manual_download` | bool | No | `true` if links are signed/expiring |

### `[tool.detect]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `method` | string | Yes | `registry`, `executable`, `config`, `file` |
| `path` | string | Yes | Registry key, file path, or config path |
| `value` | string | Conditional | Registry value name |

### `[tool.install]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `method` | string | Yes | `exe`, `msi`, `zip`, `innosetup` |
| `silent_args` | string | No | Silent installation arguments |

### `[tool.backup]`

| Field | Type | Required | Description |
|-------|------|:--------:|-------------|
| `paths` | array | Yes | Directories to back up before upgrade |

Path tokens: `{appdata}`, `{localappdata}`, `{programfiles}`, `{programdata}`, `{userprofile}`, `{config_dir}`

### `[tool.dependencies]`

```toml
[tool.dependencies]
requires = ["ascom", "dotnet-desktop-8"]
```
