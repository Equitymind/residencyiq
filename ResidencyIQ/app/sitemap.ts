import type { MetadataRoute } from 'next';
import { migrationPages } from '@/lib/migrations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://residencyiq.com';
  const routes = ['/', '/app/dashboard', '/app/checklist', '/app/evidence', '/app/advisors', '/app/settings'];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1 : 0.4,
    })),
    ...migrationPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
