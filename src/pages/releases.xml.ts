import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import manifests from '../data/manifests.json';
import versions from '../data/versions.json';

interface VersionEntry {
  latest_version: string | null;
  download_url: string;
  checked_at: string;
  check_method: string;
  release_date?: string;
  changelog?: string;
}

export function GET(context: APIContext) {
  const software = manifests.software as Record<string, { name: string; category: string; homepage: string; description: string }>;
  const versionData = versions.software as Record<string, VersionEntry>;

  // Build RSS items from entries that have a release_date or a real version
  const items = Object.entries(versionData)
    .filter(([id, v]) => {
      // Only include entries that exist in manifests (prune stale)
      if (!software[id]) return false;
      // Must have a real version (not date-based http_head placeholders)
      if (!v.latest_version || v.latest_version.startsWith('20')) return false;
      return true;
    })
    .map(([id, v]) => {
      const manifest = software[id];
      const pubDate = v.release_date
        ? new Date(v.release_date)
        : new Date(v.checked_at);

      return {
        title: `${manifest.name} ${v.latest_version}`,
        link: v.download_url || manifest.homepage || `https://astro-up.github.io/reference/supported-software/#${manifest.category}`,
        pubDate,
        description: v.changelog
          ? v.changelog.slice(0, 500) + (v.changelog.length > 500 ? '...' : '')
          : `${manifest.name} ${v.latest_version} is available.`,
        categories: [manifest.category],
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Astro-Up Software Releases',
    description: 'Latest version updates for astrophotography software tracked by Astro-Up.',
    site: context.site!,
    items,
    customData: '<language>en-us</language>',
  });
}
