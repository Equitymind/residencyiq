import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { FileCheck } from '@/components/Icons';
import { checklistGroups, statusTone } from '@/lib/mockProfile';

export default function ChecklistPage() {
  return <AppShell title="Checklist">
    <div className="mb-6 max-w-3xl">
      <p className="text-base leading-7 text-graphite">Static continuity checklist organized around identity, home, financial, behavioral, and advisor corroboration. Indicators are mock-only and do not perform actions.</p>
    </div>
    <div className="grid gap-5 lg:grid-cols-2">
      {checklistGroups.map((group) => <Card key={group.title}>
        <div className="mb-5 flex items-center gap-3"><FileCheck className="text-gold" /><h2 className="font-serif text-3xl text-ivory">{group.title}</h2></div>
        <div className="grid gap-3">
          {group.items.map((item) => <div key={item.label} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="text-sm text-ivory">{item.label}</span>
            <span className={`shrink-0 rounded-full border px-3 py-1 text-xs capitalize ${statusTone(item.status)}`}>{item.status}</span>
          </div>)}
        </div>
      </Card>)}
    </div>
  </AppShell>;
}
