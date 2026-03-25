---
title: Custom Tools
description: Add your own software to the Astro-Up catalog.
---

Beyond the built-in catalog, you can add any GitHub or GitLab project to your personal Astro-Up installation.

## Adding a Custom Tool

### CLI

```bash
astro-up add https://github.com/owner/repo
```

### GUI

Navigate to the Custom Tools page and paste the repository URL.

## How It Works

Astro-Up creates a local manifest in your config directory (`{config_dir}/astro-up/custom/`) based on the repository's release information. It automatically detects:

- Release assets matching Windows executables
- Version tags
- Installation method (ZIP extraction or EXE installer)

## Managing Custom Tools

Custom tools appear alongside built-in software in `astro-up list` and `astro-up check`. They receive updates just like any other managed package.

To remove a custom tool:

```bash
astro-up remove my-custom-tool
```

## Limitations

- Only GitHub and GitLab repositories with published releases are supported
- The repository must have release assets (not just source archives)
- Auto-detection of install method works best with standard packaging
