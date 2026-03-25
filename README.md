# Astro-Up Documentation

[![Deploy](https://github.com/astro-up/astro-up.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/astro-up/astro-up.github.io/actions/workflows/deploy.yml)

Documentation, software catalog, and RSS feed for [Astro-Up](https://github.com/astro-up/astro-up) — a package manager for astrophotography software on Windows.

**https://astro-up.github.io/**

## Features

- Starlight docs site with getting started guides, reference, and contributing docs
- Dynamic software catalog with search, filter, version badges, and download links
- RSS feed at `/releases.xml` for release notifications
- Data fetched at build time from [astro-up-manifests](https://github.com/astro-up/astro-up-manifests)

## Data Pipeline

```
manifest TOML change → compile-manifests → check-versions → docs rebuild
                                              ↑
                         6h cron schedule ────┘
```

The deploy workflow fetches `stats.json`, `manifests.json`, and `versions.json` from the manifests repo before building.

## Development

```bash
pnpm install
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build to ./dist/
```

For local development with catalog data, fetch the JSON files first:

```bash
mkdir -p src/data
curl -fsSL https://raw.githubusercontent.com/astro-up/astro-up-manifests/main/stats.json -o src/data/stats.json
curl -fsSL https://raw.githubusercontent.com/astro-up/astro-up-manifests/main/manifests.json -o src/data/manifests.json
curl -fsSL https://raw.githubusercontent.com/astro-up/astro-up-manifests/main/versions.json -o src/data/versions.json
```

## License

[Apache License 2.0](https://github.com/astro-up/astro-up/blob/main/LICENSE)
