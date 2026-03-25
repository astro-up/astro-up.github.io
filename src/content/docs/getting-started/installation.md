---
title: Installation
description: How to install astro-up on your Windows imaging PC.
---

## Scoop (recommended)

```powershell
scoop bucket add astro-up https://github.com/astro-up/scoop-bucket
scoop install astro-up
```

Updates via `scoop update astro-up`. Handles PATH and cleanup automatically.

## Windows Installer

Download the latest installer from [GitHub Releases](https://github.com/astro-up/astro-up/releases):

- **`astro-up-x.y.z-x64-setup.exe`** — for Intel/AMD (most PCs)
- **`astro-up-x.y.z-arm64-setup.exe`** — for ARM64 (Surface Pro X, etc.)

The installer:
- Installs to `%LOCALAPPDATA%\Programs\astro-up\` (no admin required)
- Adds astro-up to your PATH
- Creates a Start Menu shortcut
- Registers in Add/Remove Programs for clean uninstall

## PowerShell One-Liner

```powershell
irm https://astro-up.github.io/install.ps1 | iex
```

Downloads and runs the installer silently.

## Portable

For USB drives or systems where you don't want to install:

- **`astro-up-portable_windows_amd64.exe`**
- **`astro-up-portable_windows_arm64.exe`**

Run from anywhere — no installation, no PATH changes. Note: the portable version does not support system tray mode or startup registration.

## System Requirements

- **OS**: Windows 10 or Windows 11
- **Architecture**: x64 (Intel/AMD) or ARM64
- **Disk**: ~20 MB for the binary, additional space for downloaded installers

## Verify the Download

Each release includes a `checksums.txt` with SHA-256 hashes. Verify your download:

```powershell
(Get-FileHash .\astro-up-1.0.0-x64-setup.exe).Hash
```

Compare with the hash in `checksums.txt` from the same release.

## Updating

astro-up can update itself:

```
astro-up self-update
```

Or use the GUI — you'll be prompted when an update is available. Scoop users should use `scoop update astro-up` instead.

## Uninstall

- **Installer**: Settings → Apps → astro-up → Uninstall (or run the uninstaller from Start Menu)
- **Scoop**: `scoop uninstall astro-up`
- **Portable**: Just delete the file
