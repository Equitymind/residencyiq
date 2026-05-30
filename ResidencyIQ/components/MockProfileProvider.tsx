'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type ChecklistItem = {
  id: string;
  label: string;
  checked: boolean;
  impact: number;
};

export type AdvisorRole = 'CPA' | 'Attorney' | 'Wealth Advisor' | 'Travel Coordinator' | 'Agent / Manager' | 'Other';
export type AdvisorStatus = Record<AdvisorRole, 'not invited' | 'invited'>;

export type MockProfile = {
  claimedDomicile: string;
  secondaryState: string;
  primaryResidence: string;
  secondaryResidence: string;
  checklistItems: ChecklistItem[];
  score: number;
  evidenceCount: number;
  advisorStatus: AdvisorStatus;
};

type MockProfileContextValue = {
  profile: MockProfile;
  checklistProgress: number;
  nevadaCorroboration: number;
  californiaExposure: string;
  updateResidences: (values: Pick<MockProfile, 'claimedDomicile' | 'secondaryState' | 'primaryResidence' | 'secondaryResidence'>) => void;
  toggleChecklistItem: (id: string) => void;
  inviteAdvisor: (role: AdvisorRole) => void;
};

const initialChecklistItems: ChecklistItem[] = [
  { id: 'nv-license', label: "Nevada driver's license", checked: false, impact: 6 },
  { id: 'nv-voter', label: 'Nevada voter registration', checked: false, impact: 5 },
  { id: 'utility', label: 'Utility bill', checked: false, impact: 5 },
  { id: 'vehicle', label: 'Vehicle registration', checked: false, impact: 4 },
  { id: 'banking', label: 'Banking address', checked: false, impact: 4 },
  { id: 'credit-card', label: 'Credit card address', checked: false, impact: 4 },
  { id: 'cpa-review', label: 'CPA review', checked: false, impact: 5 },
  { id: 'attorney-review', label: 'Attorney review', checked: false, impact: 5 },
];

const initialAdvisorStatus: AdvisorStatus = {
  CPA: 'not invited',
  Attorney: 'not invited',
  'Wealth Advisor': 'not invited',
  'Travel Coordinator': 'not invited',
  'Agent / Manager': 'not invited',
  Other: 'not invited',
};

const baseProfile: MockProfile = {
  claimedDomicile: 'Nevada',
  secondaryState: 'California',
  primaryResidence: '3750 Howard Hughes Pkwy, Las Vegas, NV',
  secondaryResidence: '1 Market Street, San Francisco, CA',
  checklistItems: initialChecklistItems,
  score: 42,
  evidenceCount: 3,
  advisorStatus: initialAdvisorStatus,
};

const MockProfileContext = createContext<MockProfileContextValue | null>(null);

function calculateScore(items: ChecklistItem[]) {
  return Math.min(82, 42 + items.filter((item) => item.checked).reduce((sum, item) => sum + item.impact, 0));
}

export function MockProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<MockProfile>(baseProfile);

  const value = useMemo<MockProfileContextValue>(() => {
    const completed = profile.checklistItems.filter((item) => item.checked).length;
    const checklistProgress = Math.round((completed / profile.checklistItems.length) * 100);
    const nevadaCorroboration = Math.min(86, 42 + completed * 6);
    const californiaExposure = completed >= 6 ? 'Moderate' : completed >= 3 ? 'Elevated' : 'High';

    return {
      profile,
      checklistProgress,
      nevadaCorroboration,
      californiaExposure,
      updateResidences: (values) => {
        setProfile((current) => ({ ...current, ...values }));
      },
      toggleChecklistItem: (id) => {
        setProfile((current) => {
          const checklistItems = current.checklistItems.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item,
          );
          return {
            ...current,
            checklistItems,
            score: calculateScore(checklistItems),
            evidenceCount: 3 + checklistItems.filter((item) => item.checked && ['nv-license', 'utility', 'vehicle'].includes(item.id)).length,
          };
        });
      },
      inviteAdvisor: (role) => {
        setProfile((current) => ({
          ...current,
          advisorStatus: { ...current.advisorStatus, [role]: 'invited' },
        }));
      },
    };
  }, [profile]);

  return <MockProfileContext.Provider value={value}>{children}</MockProfileContext.Provider>;
}

export function useMockProfile() {
  const value = useContext(MockProfileContext);
  if (!value) throw new Error('useMockProfile must be used inside MockProfileProvider');
  return value;
}
