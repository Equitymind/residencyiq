'use client';

import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { Check, FileCheck } from '@/components/Icons';
import { useMockProfile } from '@/components/MockProfileProvider';

export default function ChecklistPage() {
  const { profile, checklistProgress, toggleChecklistItem } = useMockProfile();
  const completed = profile.checklistItems.filter((item) => item.checked).length;

  return <AppShell title="Checklist">
    <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_320px]">
      <p className="max-w-3xl text-base leading-7 text-graphite">Click checklist items to move the local assessment score. State resets on refresh and remains frontend-only for this Phase 1D demo.</p>
      <Card className="p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite">Score / Progress</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <span className="font-serif text-5xl text-gold-light">{profile.score}</span>
          <span className="text-lg text-amber">{checklistProgress}%</span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gold-gradient" style={{ width: `${checklistProgress}%` }} /></div>
      </Card>
    </div>
    <Card>
      <div className="mb-5 flex items-center gap-3"><FileCheck className="text-gold" /><h2 className="font-serif text-3xl text-ivory">Domicile Checklist</h2></div>
      <div className="grid gap-3 md:grid-cols-2">
        {profile.checklistItems.map((item) => <button key={item.id} onClick={() => toggleChecklistItem(item.id)} className={`flex min-h-20 items-center justify-between gap-4 rounded-lg border p-4 text-left transition hover:-translate-y-0.5 ${item.checked ? 'border-success/30 bg-success/10' : 'border-white/10 bg-white/[0.03] hover:border-gold/25'}`}>
          <span>
            <span className="block text-sm font-medium text-ivory">{item.label}</span>
            <span className="mt-1 block text-xs text-graphite">{item.checked ? `Completed: +${item.impact} score movement` : `Tap to mark complete: +${item.impact}`}</span>
          </span>
          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border ${item.checked ? 'border-success/35 bg-success/15 text-success' : 'border-gold/20 text-gold'}`}>
            {item.checked ? <Check size={18} /> : completed + 1}
          </span>
        </button>)}
      </div>
    </Card>
  </AppShell>;
}
