---
title: Introduction
description: What is Astro-Up and why does it exist?
---

Astro-Up is a purpose-built package manager for astrophotography software on Windows. It ships as a single binary that provides a GUI by default and supports CLI for headless or unattended operation.

## The Problem

Setting up an astrophotography imaging PC means installing dozens of applications, drivers, and tools from different vendors. Keeping everything updated requires visiting multiple websites, checking version numbers, and running installers manually. Whether your imaging PC is a permanent observatory setup you rarely touch, or a portable rig you take to dark sites, managing software across all those vendors is tedious and error-prone.

## What Astro-Up Does

Astro-Up manages the complete lifecycle of your imaging software:

- **Detect** installed versions of your applications, drivers, and tools
- **Check** for available updates from GitHub, GitLab, and vendor websites
- **Backup** configuration before upgrading (profiles, settings, equipment configs)
- **Install and update** software silently or interactively
- **Manage dependencies** (ASCOM platform, .NET runtimes, USB drivers)
- **Track** star databases and resources (ASTAP catalogs, N.I.N.A. framing cache)

## Key Design Principles

- **Imaging-PC optimized** — dark theme, lightweight, fast on low-spec hardware
- **Major version awareness** — warns before breaking upgrades
- **Config backup** — automatic backup before every upgrade
- **Extensible** — TOML manifests make adding new software trivial
- **Self-updating** — astro-up keeps itself up to date
