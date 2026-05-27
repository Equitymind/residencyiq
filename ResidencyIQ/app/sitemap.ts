import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { migrationPages } from '@/lib/migrations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://residencyiq.com';

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    ...migrationPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
