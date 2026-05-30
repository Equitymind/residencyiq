'use client';

import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { Briefcase, Users } from '@/components/Icons';
import { useMockProfile, type AdvisorRole } from '@/components/MockProfileProvider';

const advisorDescriptions: Record<AdvisorRole, string> = {
  CPA: 'Review filing-position evidence, continuity indicators, and documentation gaps.',
  Attorney: 'Review domicile narrative, risk indicators, and advisor-ready evidence summaries.',
  'Wealth Advisor': 'Understand financial-address alignment and household residency planning context.',
  'Travel Coordinator': 'Coordinate travel records, lodging patterns, and calendar-related documentation.',
  'Agent / Manager': 'Coordinate public schedule, appearances, and work-location documentation.',
  Other: 'Create a limited placeholder view for another trusted professional.',
};

export default function AdvisorsPage() {
  const { profile, inviteAdvisor } = useMockProfile();
  const roles = Object.keys(advisorDescriptions) as AdvisorRole[];

  return <AppShell title="Advisor Sharing">
    <div className="mb-6 max-w-3xl">
      <p className="text-base leading-7 text-graphite">Mock advisor sharing shows role-specific invite states only. No email is sent, no permissions are created, and no advisor access exists in Phase 1D.</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {roles.map((role) => {
        const invited = profile.advisorStatus[role] === 'invited';
        return <Card key={role}>
          <div className="flex items-start justify-between gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
              {role === 'CPA' || role === 'Attorney' || role === 'Wealth Advisor' ? <Briefcase size={20} /> : <Users size={20} />}
            </div>
            <span className={`rounded-full border px-3 py-1 text-xs capitalize ${invited ? 'border-success/25 bg-success/10 text-success' : 'border-white/10 bg-white/[0.04] text-graphite'}`}>{profile.advisorStatus[role]}</span>
          </div>
          <h2 className="mt-6 font-serif text-3xl text-ivory">{role}</h2>
          <p className="mt-3 min-h-20 text-sm leading-6 text-graphite">{advisorDescriptions[role]}</p>
          <button onClick={() => inviteAdvisor(role)} className={`mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${invited ? 'border border-success/25 bg-success/10 text-success' : 'bg-gold-gradient text-black shadow-gold'}`}>
            {invited ? 'Invited' : 'Invite'}
          </button>
        </Card>;
      })}
    </div>
  </AppShell>;
}
