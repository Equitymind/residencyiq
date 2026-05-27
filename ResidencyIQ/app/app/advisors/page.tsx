import { AppShell } from '@/components/AppShell';
import { PrimaryButton } from '@/components/Buttons';
import { Card } from '@/components/Section';
import { Briefcase, Users } from '@/components/Icons';
import { advisorRoles } from '@/lib/mockProfile';

export default function AdvisorsPage() {
  return <AppShell title="Advisor Sharing">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <p className="max-w-3xl text-base leading-7 text-graphite">Static advisor-sharing preview for role-appropriate residency profile views. Invitations and permissions are intentionally not implemented in Phase 1B.</p>
      <PrimaryButton href="#">Invite Advisor</PrimaryButton>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {advisorRoles.map((role) => <Card key={role}>
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
            {role === 'CPA' || role === 'Attorney' ? <Briefcase size={20} /> : <Users size={20} />}
          </div>
          <span className="rounded-full border border-success/25 bg-success/10 px-3 py-1 text-xs text-success">Preview</span>
        </div>
        <h2 className="mt-6 font-serif text-3xl text-ivory">{role}</h2>
        <p className="mt-3 text-sm leading-6 text-graphite">Role-appropriate view enabled.</p>
        <div className="mt-6 grid gap-2 text-sm text-ivory/90">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">Continuity summary</div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">Evidence status</div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">Exposure notes</div>
        </div>
      </Card>)}
    </div>
  </AppShell>;
}
