export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  sections: Array<{ heading: string; body: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'weekend-problem-california-residency',
    title: 'The Weekend Problem: How California Visits Affect Residency Continuity',
    description: 'Understand how recurring California weekends can affect a multi-state residency continuity profile.',
    eyebrow: 'Exposure Awareness',
    sections: [
      { heading: 'Weekend patterns matter', body: 'Residency continuity is shaped by repeated behavior. Frequent California weekends can become a visible pattern when paired with retained housing, local spending, or professional activity.' },
      { heading: 'What to organize', body: 'Track overnight counts, travel purpose, advisor notes, and corroborating records that explain why visits occurred and where the primary center of life remained.' },
    ],
  },
  {
    slug: 'california-to-nevada-keeping-california-ties',
    title: 'Moving From California to Nevada While Keeping California Ties',
    description: 'A practical residency intelligence overview for building Nevada continuity while retaining California relationships or property.',
    eyebrow: 'Migration Planning',
    sections: [
      { heading: 'Retained ties need context', body: 'A Nevada move can still include California relationships, business travel, or property. The important question is whether the overall behavioral profile supports Nevada as the center of life.' },
      { heading: 'Evidence should align', body: 'Identity records, utilities, insurance, overnight behavior, financial records, and advisor review should reinforce the same continuity narrative.' },
    ],
  },
  {
    slug: 'residency-is-behavioral',
    title: 'Why Residency Is Behavioral, Not Just Administrative',
    description: 'Residency tracking increasingly depends on behavioral indicators, not just forms and mailing addresses.',
    eyebrow: 'Residency Intelligence',
    sections: [
      { heading: 'Forms are only one layer', body: 'Administrative changes can help, but residency intelligence also looks at where someone sleeps, works, travels, spends, keeps records, and maintains relationships.' },
      { heading: 'Continuity creates defensibility', body: 'A stronger profile is built when documents and daily behavior corroborate each other over time.' },
    ],
  },
  {
    slug: 'residency-evidence-file-before-year-end',
    title: 'How To Build A Residency Evidence File Before Year-End',
    description: 'A year-end framework for organizing domicile evidence, advisor notes, and continuity records.',
    eyebrow: 'Evidence File',
    sections: [
      { heading: 'Start with core categories', body: 'Identity, home, utilities, financial records, travel history, work location, and advisor review create the backbone of a residency evidence file.' },
      { heading: 'Make gaps visible', body: 'The goal is not volume. It is clarity. Missing evidence, inconsistent records, and unexplained travel should be visible before advisor review.' },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
