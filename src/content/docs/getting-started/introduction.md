---
title: Introduction
description: What is Astro-Up and why does it exist?
---

Astro-Up is a purpose-built package manager for astrophotography software on Windows. It ships as a single binary that provides a GUI by default and supports CLI for headless or unattended operation.

## The Problem

Setting up an astrophotography imaging PC means installing dozens of applications, drivers, and tools from different vendors. Keeping everything updated requires visiting multiple websites, checking version numbers, and running installers manually — often in the field with limited connectivity.

## What Astro-Up Does

Astro-Up manages the complete lifecycle of your imaging software:

- **Detect** installed versions of your applications, drivers, and tools
- **Check** for available updates from GitHub, GitLab, and vendor websites
- **Backup** configuration before upgrading (profiles, settings, equipment configs)
- **Install and update** software silently or interactively
- **Manage dependencies** (ASCOM platform, .NET runtimes, USB drivers)
- **Track** star databases and offline resources (ASTAP catalogs, N.I.N.A. sky atlas)

## Key Design Principles

- **Field-first** — dark theme, offline-capable, reliable on imaging PCs
- **Major version awareness** — warns before breaking upgrades
- **Config backup** — automatic backup before every upgrade
- **Extensible** — TOML manifests make adding new software trivial
- **Self-updating** — astro-up keeps itself up to date
