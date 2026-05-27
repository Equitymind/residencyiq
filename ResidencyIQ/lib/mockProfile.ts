export type ItemStatus = 'completed' | 'in progress' | 'missing' | 'uploaded' | 'review pending';

export const residencyProfile = {
  person: 'Demo Member',
  claimedDomicile: 'Nevada',
  secondaryState: 'California',
  residence: {
    nevadaResidenceAdded: true,
    californiaCondoRetained: true,
  },
  documents: {
    nevadaDriversLicense: 'completed' as ItemStatus,
    nevadaVoterRegistration: 'missing' as ItemStatus,
    utilityEvidence: 'missing' as ItemStatus,
  },
  behavior: {
    californiaOvernights: 'moderate',
  },
  score: {
    value: 42,
    status: 'Emerging Nevada Profile',
    nevadaCorroboration: 42,
    californiaExposure: 'Elevated',
    evidenceStrength: 'Limited',
    weeklyTrend: [34, 36, 39, 37, 41, 40, 42],
  },
};

export const checklistGroups = [
  {
    title: 'Identity',
    items: [
      { label: "Driver's license", status: 'completed' as ItemStatus },
      { label: 'Voter registration', status: 'missing' as ItemStatus },
      { label: 'Vehicle registration', status: 'in progress' as ItemStatus },
    ],
  },
  {
    title: 'Home & Utilities',
    items: [
      { label: 'Utility bill', status: 'missing' as ItemStatus },
      { label: 'Lease/deed', status: 'completed' as ItemStatus },
      { label: 'Insurance', status: 'in progress' as ItemStatus },
    ],
  },
  {
    title: 'Financial',
    items: [
      { label: 'Banking address', status: 'in progress' as ItemStatus },
      { label: 'Credit card address', status: 'missing' as ItemStatus },
      { label: 'Investment accounts', status: 'missing' as ItemStatus },
    ],
  },
  {
    title: 'Behavioral',
    items: [
      { label: 'Overnight continuity', status: 'in progress' as ItemStatus },
      { label: 'Work location', status: 'completed' as ItemStatus },
      { label: 'Travel patterns', status: 'in progress' as ItemStatus },
    ],
  },
  {
    title: 'Advisor',
    items: [
      { label: 'CPA review', status: 'missing' as ItemStatus },
      { label: 'Attorney review', status: 'missing' as ItemStatus },
    ],
  },
];

export const evidenceItems = [
  { title: "Driver's license", status: 'uploaded' as ItemStatus, detail: 'Nevada license on file' },
  { title: 'Utility bill', status: 'missing' as ItemStatus, detail: 'Residential corroboration needed' },
  { title: 'Lease/deed', status: 'uploaded' as ItemStatus, detail: 'Nevada residence added' },
  { title: 'Insurance', status: 'review pending' as ItemStatus, detail: 'Policy address awaiting review' },
  { title: 'Vehicle registration', status: 'review pending' as ItemStatus, detail: 'State registration not finalized' },
  { title: 'Travel receipt', status: 'uploaded' as ItemStatus, detail: 'Recent Nevada travel record' },
  { title: 'Other evidence', status: 'missing' as ItemStatus, detail: 'Optional corroborating documents' },
];

export const advisorRoles = ['CPA', 'Attorney', 'Wealth Advisor', 'Travel Coordinator', 'Agent / Manager', 'Other'];

export const scoreActivity = [
  { label: "Nevada driver's license added", impact: '+6', tone: 'positive' },
  { label: 'California overnight trend increased', impact: '-4', tone: 'negative' },
  { label: 'Utility evidence missing', impact: '0', tone: 'warning' },
  { label: 'Nevada continuity improving', impact: '+3', tone: 'positive' },
];

export function statusTone(status: ItemStatus) {
  if (status === 'completed' || status === 'uploaded') return 'text-success bg-success/10 border-success/25';
  if (status === 'in progress' || status === 'review pending') return 'text-amber bg-amber/10 border-amber/25';
  return 'text-risk bg-risk/10 border-risk/25';
}
