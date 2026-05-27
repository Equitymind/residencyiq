export type MigrationPage = {
  slug: string;
  from: string;
  to: string;
  title: string;
  description: string;
  overview: string;
  mistakes: string[];
  indicators: string[];
  considerations: string[];
};

export const migrationPages: MigrationPage[] = [
  {
    slug: 'moving-from-california-to-nevada',
    from: 'California',
    to: 'Nevada',
    title: 'Moving from California to Nevada',
    description: 'Behavioral residency guidance for building Nevada continuity while managing California exposure.',
    overview: 'A California-to-Nevada move often depends on whether daily life clearly shifts toward Nevada across home, identity, financial, work, and travel patterns.',
    mistakes: ['Retaining California routines after claiming Nevada domicile', 'Leaving key identity records in California', 'Failing to document Nevada housing and utility continuity'],
    indicators: ['Nevada residence and utility evidence', 'Nevada driver identity and voter registration', 'Reduced California overnights and work patterns'],
    considerations: ['California condo use should be visible and explainable', 'Advisor review matters when business or family ties remain in California', 'Travel calendars should corroborate the Nevada center of life'],
  },
  {
    slug: 'moving-from-california-to-texas',
    from: 'California',
    to: 'Texas',
    title: 'Moving from California to Texas',
    description: 'Behavioral continuity considerations for California residents establishing a Texas residency profile.',
    overview: 'A Texas profile is stronger when the move reflects a durable shift in home base, work rhythm, financial records, and relationship patterns.',
    mistakes: ['Treating a Texas address as the only proof point', 'Keeping California business routines unchanged', 'Missing documentation for Texas home and financial address changes'],
    indicators: ['Texas home and insurance records', 'Texas driver identity and vehicle registration', 'Consistent Texas overnights and local activity'],
    considerations: ['Business travel back to California should be contextualized', 'Family, schools, and advisors may affect the continuity narrative', 'Financial statements should match the claimed center of life'],
  },
  {
    slug: 'moving-from-california-to-florida',
    from: 'California',
    to: 'Florida',
    title: 'Moving from California to Florida',
    description: 'Residency intelligence structure for California-to-Florida moves and advisor-ready continuity evidence.',
    overview: 'A Florida move benefits from visible continuity across homestead, identity, travel, healthcare, financial, and advisor records.',
    mistakes: ['Maintaining California as the practical center of life', 'Under-documenting Florida residential and community ties', 'Ignoring overnight patterns during seasonal travel'],
    indicators: ['Florida residence and utility corroboration', 'Florida identity records and voter registration', 'Travel patterns that support Florida continuity'],
    considerations: ['Seasonal travel should not obscure the primary center of life', 'Healthcare and family routines can strengthen corroboration', 'Advisor notes help frame retained California exposure'],
  },
  {
    slug: 'moving-from-california-to-tennessee',
    from: 'California',
    to: 'Tennessee',
    title: 'Moving from California to Tennessee',
    description: 'Behavioral residency indicators for building a Tennessee continuity profile after leaving California.',
    overview: 'A Tennessee residency profile should show more than relocation intent: it should reflect durable household, identity, financial, and travel changes.',
    mistakes: ['Delaying Tennessee identity updates', 'Retaining California mailing and banking addresses', 'Not documenting work-location changes'],
    indicators: ['Tennessee home evidence and insurance', 'Updated identity and vehicle records', 'Work and travel patterns centered in Tennessee'],
    considerations: ['Remote work arrangements should be documented clearly', 'California property or business ties should be reviewed with advisors', 'Lifestyle routines should support the Tennessee profile'],
  },
  {
    slug: 'moving-from-california-to-idaho',
    from: 'California',
    to: 'Idaho',
    title: 'Moving from California to Idaho',
    description: 'Continuity and evidence considerations for California residents establishing Idaho residency.',
    overview: 'An Idaho move is more defensible when everyday behavior, documents, housing, and advisor records all point toward Idaho as the center of life.',
    mistakes: ['Using Idaho as a secondary lifestyle location without a clear primary shift', 'Keeping California registrations active', 'Leaving utility and insurance records incomplete'],
    indicators: ['Idaho residence evidence', 'Idaho driver and vehicle records', 'Reduced California overnight exposure'],
    considerations: ['Outdoor or seasonal travel patterns should be supported by a clear home base', 'California retained property may require careful explanation', 'Advisor collaboration can clarify mixed-state facts'],
  },
  {
    slug: 'moving-from-new-york-to-florida',
    from: 'New York',
    to: 'Florida',
    title: 'Moving from New York to Florida',
    description: 'High-intent migration guidance for building Florida continuity after leaving New York.',
    overview: 'New York-to-Florida moves require clear continuity across residential life, travel behavior, financial records, and advisor-reviewed evidence.',
    mistakes: ['Underestimating the importance of day and overnight records', 'Keeping New York as the functional home base', 'Failing to align financial and identity records with Florida'],
    indicators: ['Florida residence and homestead-oriented records', 'Florida identity, voting, and vehicle documentation', 'New York exposure tracked through travel and overnight patterns'],
    considerations: ['Seasonal return trips should be visible and measured', 'Family and professional relationships may affect the residency narrative', 'Financial and legal advisors should review retained New York ties'],
  },
];

export function getMigrationPage(slug: string) {
  return migrationPages.find((page) => page.slug === slug);
}

export function alsoConsidering(currentSlug: string) {
  return migrationPages.filter((page) => page.slug !== currentSlug).slice(0, 3);
}
