import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { Activity, Briefcase, FileCheck, MapPin, Shield } from '@/components/Icons';
import { checklistGroups, residencyProfile, scoreActivity, statusTone, type ItemStatus } from '@/lib/mockProfile';

const profileRows = [
  ['Claimed domicile', residencyProfile.claimedDomicile],
  ['Secondary state', residencyProfile.secondaryState],
  ['Nevada residence', residencyProfile.residence.nevadaResidenceAdded ? 'Added' : 'Missing'],
  ['California condo', residencyProfile.residence.californiaCondoRetained ? 'Retained' : 'Not retained'],
  ['California overnights', residencyProfile.behavior.californiaOvernights],
];

function impactClass(tone: string) {
  if (tone === 'positive') return 'text-success';
  if (tone === 'negative') return 'text-risk';
  return 'text-amber';
}

export default function DashboardPage() {
  const score = residencyProfile.score;
  return <AppShell title="Dashboard">
    <div className="grid gap-6">
      <section className="glass-panel rounded-lg p-5 sm:p-6">
        <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-light">ResidencyIQ Score</p>
                <div className="mt-4 flex items-end gap-3">
                  <p className="font-serif text-7xl leading-none text-gold-light sm:text-8xl">{score.value}</p>
                  <p className="pb-2 text-sm uppercase tracking-[0.18em] text-graphite">demo state</p>
                </div>
                <h2 className="mt-4 font-serif text-3xl text-ivory">{score.status}</h2>
              </div>
              <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full bg-[conic-gradient(#D4AF37_0_42%,rgba(255,255,255,0.10)_42%)]">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-[#070707]"><Shield className="text-gold-light" size={36} /></div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-graphite">Behavioral continuity strengthens as corroborating evidence and residency consistency increase over time.</p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">Nevada Corroboration</p><p className="mt-3 text-3xl text-gold-light">{score.nevadaCorroboration}%</p></Card>
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">California Exposure</p><p className="mt-3 text-3xl text-risk">{score.californiaExposure}</p></Card>
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">Evidence Strength</p><p className="mt-3 text-3xl text-amber">{score.evidenceStrength}</p></Card>
            </div>
          </div>
          <Card className="p-5">
            <div className="mb-5 flex items-center justify-between"><p className="text-xs uppercase tracking-[0.22em] text-gold-light">Weekly Trend</p><Activity className="text-gold" /></div>
            <div className="flex h-44 items-end gap-3 rounded-lg border border-white/10 bg-black/30 p-4">
              {score.weeklyTrend.map((value, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><span className="w-full rounded-sm bg-gradient-to-t from-gold-deep to-gold-light" style={{ height: `${value + 30}%` }} /><span className="text-[0.65rem] text-graphite">W{index + 1}</span></div>)}
            </div>
          </Card>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <div className="mb-5 flex items-center gap-3"><MapPin className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Mock Residency Profile</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {profileRows.map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">{label}</p><p className="mt-2 text-lg capitalize text-ivory">{value}</p></div>)}
          </div>
        </Card>
        <Card>
          <div className="mb-5 flex items-center gap-3"><FileCheck className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Continuity Snapshot</h2></div>
          <div className="grid gap-3">
            {checklistGroups.slice(0, 4).map((group) => {
              const missing = group.items.filter((item) => item.status === 'missing').length;
              return <div key={group.title} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4"><span className="text-sm text-ivory">{group.title}</span><span className={missing ? 'text-sm text-amber' : 'text-sm text-success'}>{missing ? `${missing} gap${missing > 1 ? 's' : ''}` : 'aligned'}</span></div>;
            })}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1fr]">
        <Card>
          <div className="mb-5 flex items-center gap-3"><Activity className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Recent Score Activity</h2></div>
          <div className="grid gap-3">
            {scoreActivity.map((item) => <div key={item.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4"><span className="text-sm text-ivory">{item.label}</span><span className={`text-sm font-semibold ${impactClass(item.tone)}`}>{item.impact}</span></div>)}
          </div>
        </Card>
        <Card>
          <div className="mb-5 flex items-center gap-3"><Briefcase className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Priority Indicators</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Nevada driver's license", residencyProfile.documents.nevadaDriversLicense],
              ['Nevada voter registration', residencyProfile.documents.nevadaVoterRegistration],
              ['Utility evidence', residencyProfile.documents.utilityEvidence],
              ['Advisor review', 'missing'],
            ].map(([label, status]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4"><p className="text-sm text-ivory">{label}</p><span className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs capitalize ${statusTone(status as ItemStatus)}`}>{status}</span></div>)}
          </div>
        </Card>
      </div>
    </div>
  </AppShell>;
}
