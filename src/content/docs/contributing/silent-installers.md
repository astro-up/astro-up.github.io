---
title: Silent Installer Guide
description: How to discover and test silent installation arguments for manifest contributions.
---

When adding a manifest, you need to specify how the installer runs silently. This guide covers common patterns.

## Identifying the Installer Type

Right-click the installer → Properties → Details. Look for:
- **InnoSetup**: Usually mentions "Inno Setup" in the description or has an `unins000.exe` after install
- **NSIS**: Often has a NSIS icon or mentions "Nullsoft" in properties
- **MSI**: File extension is `.msi`
- **WiX**: MSI-based, same silent args as MSI
- **ZIP**: Just an archive to extract

You can also run the installer with `/?` or `/help` to see available flags.

## Common Silent Arguments

### InnoSetup (most astrophotography software)

```toml
[install]
method = "innosetup"
quiet_args = ["/VERYSILENT", "/NORESTART", "/SUPPRESSMSGBOXES"]
interactive_args = ["/NORESTART"]
```

`/VERYSILENT` hides the installer completely. `/SUPPRESSMSGBOXES` prevents dialog popups.

### NSIS

```toml
[install]
method = "exe"
quiet_args = ["/S"]
```

NSIS uses `/S` (capital S) for silent mode.

### MSI

```toml
[install]
method = "msi"
quiet_args = ["/qn", "/norestart"]
```

Standard Windows Installer flags. `/qn` means no UI, `/norestart` prevents automatic reboot.

### ZIP (extract only)

```toml
[install]
method = "zip"
install_dir = "{program_dir}/SoftwareName"
```

No silent args needed — Astro-Up extracts the archive to the target directory.

## Testing Silent Install

Before submitting a manifest, test the silent install on a Windows machine:

```powershell
# InnoSetup
.\setup.exe /VERYSILENT /NORESTART /SUPPRESSMSGBOXES

# NSIS
.\setup.exe /S

# MSI
msiexec /i installer.msi /qn /norestart
```

Verify the software installed correctly and check the registry for version detection.

## When Silent Install Isn't Possible

Some vendors don't support silent installation (e.g., click-through web installers, license-gated downloads). In these cases:

- Set `manual_download = true` in the manifest
- Provide a `download_page` URL so Astro-Up can open the vendor's download page
- The user handles the download and installation manually
