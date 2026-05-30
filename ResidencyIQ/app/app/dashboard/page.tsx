'use client';

import type { CSSProperties, ReactNode } from 'react';
import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { Activity, Briefcase, FileCheck, MapPin, Shield, Upload } from '@/components/Icons';
import { useMockProfile } from '@/components/MockProfileProvider';

function exposureClass(value: string) {
  if (value === 'Moderate') return 'text-amber';
  if (value === 'Elevated') return 'text-risk';
  return 'text-risk';
}

export default function DashboardPage() {
  const { profile, checklistProgress, nevadaCorroboration, californiaExposure } = useMockProfile();
  const completed = profile.checklistItems.filter((item) => item.checked);
  const recentActivity = [
    completed[completed.length - 1]?.label ? [`${completed[completed.length - 1].label} completed`, '+5', 'positive'] : ['Initial Nevada profile started', '+0', 'neutral'],
    ['California overnight exposure requires monitoring', '-3', 'negative'],
    ['Advisor packet not shared yet', '0', 'warning'],
  ] as const;

  return <AppShell title="Dashboard">
    <div className="grid gap-6">
      <section className="glass-panel rounded-lg p-5 sm:p-6">
        <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-light">ResidencyIQ Score</p>
                <div className="mt-4 flex items-end gap-3">
                  <p className="font-serif text-7xl leading-none text-gold-light sm:text-8xl">{profile.score}</p>
                  <p className="pb-2 text-sm uppercase tracking-[0.18em] text-graphite">/100 demo</p>
                </div>
                <h2 className="mt-4 font-serif text-3xl text-ivory">Nevada Continuity Strengthening</h2>
              </div>
              <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full bg-[conic-gradient(#D4AF37_0_var(--score),rgba(255,255,255,0.10)_var(--score))]" style={{ '--score': `${profile.score}%` } as CSSProperties}>
                <div className="grid h-24 w-24 place-items-center rounded-full bg-[#070707]"><Shield className="text-gold-light" size={36} /></div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-graphite">Behavioral continuity strengthens as checklist completion, evidence placeholders, and advisor review readiness improve.</p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">Nevada Corroboration</p><p className="mt-3 text-3xl text-gold-light">{nevadaCorroboration}%</p></Card>
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">California Exposure</p><p className={`mt-3 text-3xl ${exposureClass(californiaExposure)}`}>{californiaExposure}</p></Card>
              <Card className="p-4"><p className="text-xs uppercase tracking-[0.16em] text-graphite">Checklist Progress</p><p className="mt-3 text-3xl text-amber">{checklistProgress}%</p></Card>
            </div>
          </div>
          <Card className="p-5">
            <div className="mb-5 flex items-center justify-between"><p className="text-xs uppercase tracking-[0.22em] text-gold-light">Score Movement</p><Activity className="text-gold" /></div>
            <div className="flex h-44 items-end gap-3 rounded-lg border border-white/10 bg-black/30 p-4">
              {[38, 42, 44, 45, 48, 51, profile.score].map((value, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><span className="w-full rounded-sm bg-gradient-to-t from-gold-deep to-gold-light" style={{ height: `${value}%` }} /><span className="text-[0.65rem] text-graphite">W{index + 1}</span></div>)}
            </div>
          </Card>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-4">
        <MetricCard icon={<MapPin />} label={`Days in ${profile.claimedDomicile}`} value="124" />
        <MetricCard icon={<MapPin />} label={`Days in ${profile.secondaryState}`} value="81" />
        <MetricCard icon={<Upload />} label="Evidence Uploaded" value={`${profile.evidenceCount}`} />
        <MetricCard icon={<FileCheck />} label="Checklist Progress" value={`${completed.length} / ${profile.checklistItems.length}`} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1fr]">
        <Card>
          <div className="mb-5 flex items-center gap-3"><Activity className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Recent Score Activity</h2></div>
          <div className="grid gap-3">
            {recentActivity.map(([label, impact, tone]) => <div key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4"><span className="text-sm text-ivory">{label}</span><span className={`text-sm font-semibold ${tone === 'positive' ? 'text-success' : tone === 'negative' ? 'text-risk' : 'text-amber'}`}>{impact}</span></div>)}
          </div>
        </Card>
        <Card>
          <div className="mb-5 flex items-center gap-3"><Briefcase className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Exposure Warning</h2></div>
          <div className="rounded-lg border border-amber/25 bg-amber/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">Potential documentation gap</p>
            <p className="mt-3 text-sm leading-7 text-graphite">California exposure remains visible until residency checklist items and advisor review signals become more complete. This is an informational indicator, not legal or tax advice.</p>
          </div>
        </Card>
      </div>
    </div>
  </AppShell>;
}

function MetricCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <Card className="p-4"><div className="mb-4 text-gold">{icon}</div><p className="text-xs uppercase tracking-[0.16em] text-graphite">{label}</p><p className="mt-3 text-3xl text-gold-light">{value}</p></Card>;
}
