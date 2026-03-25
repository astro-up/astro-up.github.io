// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-up.github.io',
	integrations: [
		starlight({
			title: 'Astro-Up',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/astro-up/astro-up' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/theworldthroughsjors' },
				{ icon: 'star', label: 'AstroBin', href: 'https://www.astrobin.com/users/srobroek/' },
			],
sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Managing Software', slug: 'guides/managing-software' },
						{ label: 'Custom Tools', slug: 'guides/custom-tools' },
						{ label: 'Backups', slug: 'guides/backups' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'CLI Commands', slug: 'reference/cli-commands' },
						{ label: 'Supported Software', slug: 'reference/supported-software' },
						{ label: 'Manifest Format', slug: 'reference/manifest-format' },
						{ label: 'Configuration', slug: 'reference/configuration' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Development Setup', slug: 'contributing/development-setup' },
						{ label: 'Adding Manifests', slug: 'contributing/adding-manifests' },
						{ label: 'Architecture', slug: 'contributing/architecture' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
