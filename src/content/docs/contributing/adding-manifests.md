---
title: Adding Manifests
description: How to contribute a new software manifest to the Astro-Up catalog.
---

Adding new astrophotography software to the catalog is one of the easiest ways to contribute.

Manifests are maintained in the [astro-up-manifests](https://github.com/astro-up/astro-up-manifests) repository, separate from the main app.

## Steps

1. Clone the [astro-up-manifests](https://github.com/astro-up/astro-up-manifests) repo
2. Create a TOML file in `manifests/<category>/<id>.toml`
3. Follow the [manifest format](/reference/manifest-format/)
4. Test locally: `cd checker && go run . --manifests ../manifests --vendor <vendor-prefix> --delay 0 --output /dev/null`
5. Submit a pull request to `astro-up-manifests`

## Finding the Right Information

For each manifest, you'll need to research:

### Detection
How to detect if the software is installed and which version. Check:
- Windows Registry (`regedit` → search for the software name)
- Executable properties (right-click → Properties → Details)
- Configuration files

### Download Source
Where to find the latest version:
- **GitHub/GitLab**: use the `repo` field (e.g., `"owner/repo"`)
- **Website**: use the `download_page` field with a URL

### Installation
How the installer works:
- **EXE**: usually `/VERYSILENT` or `/S` for silent install
- **MSI**: standard `msiexec /qn` handling
- **InnoSetup**: `/VERYSILENT /SUPPRESSMSGBOXES`
- **ZIP**: extracted to the target directory

### Backup Paths
Which directories contain user configuration. Common locations:
- `{appdata}/SoftwareName/`
- `{localappdata}/SoftwareName/`
- `{programdata}/SoftwareName/`

## Example

See the [N.I.N.A. manifest](https://github.com/astro-up/astro-up-manifests/blob/main/manifests/capture/nina.toml) for a complete example.

## Tips

- Use existing manifests as templates
- If unsure about detection or install methods, open an [issue](https://github.com/astro-up/astro-up-manifests/issues) on the manifests repo
