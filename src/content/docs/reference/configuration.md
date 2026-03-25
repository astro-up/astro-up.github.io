---
title: Configuration
description: Astro-Up application configuration reference.
---

Astro-Up uses a TOML configuration file located at:

```
{config_dir}/astro-up/config.toml
```

On Windows, `{config_dir}` is typically `%APPDATA%`.

## Default Configuration

```toml
[app]
check_interval = "24h"
auto_backup = true

[download]
directory = "{config_dir}/astro-up/downloads"
cleanup_after_install = true

[backup]
directory = "{config_dir}/astro-up/backups"

[update]
allow_major = false
```

## Settings

### `[app]`

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `check_interval` | duration | `"24h"` | How often to check for updates |
| `auto_backup` | bool | `true` | Automatically back up config before updates |

### `[download]`

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `directory` | path | `"{config_dir}/astro-up/downloads"` | Where to store downloaded installers |
| `cleanup_after_install` | bool | `true` | Delete installers after successful install |

### `[backup]`

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `directory` | path | `"{config_dir}/astro-up/backups"` | Where to store configuration backups |

### `[update]`

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `allow_major` | bool | `false` | Allow major version updates without confirmation |
