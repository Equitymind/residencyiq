'use client';

import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { FileCheck, Upload } from '@/components/Icons';

const evidenceCards = [
  { title: "Driver's license", status: 'uploaded', detail: 'Nevada identity evidence placeholder is present.' },
  { title: 'Utility bill', status: 'missing', detail: 'Residential corroboration placeholder has not been added.' },
  { title: 'Lease/deed', status: 'uploaded', detail: 'Primary residence document placeholder is present.' },
  { title: 'Vehicle registration', status: 'pending', detail: 'Vehicle state registration placeholder awaits review.' },
  { title: 'Bank statement', status: 'missing', detail: 'Financial geography is not connected in Phase 1D.' },
  { title: 'Travel receipt', status: 'pending', detail: 'Travel record placeholder is awaiting classification.' },
] as const;

export default function EvidencePage() {
  return <AppShell title="Evidence Vault">
    <div className="mb-6 max-w-3xl">
      <p className="text-base leading-7 text-graphite">Mock evidence cards show uploaded, missing, and pending states. Upload buttons are visual only and do not handle files.</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {evidenceCards.map((item) => <Card key={item.title} className="min-h-60">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
            {item.status === 'uploaded' ? <FileCheck size={20} /> : <Upload size={20} />}
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs capitalize ${tone(item.status)}`}>{item.status}</span>
        </div>
        <h2 className="mt-6 font-serif text-3xl text-ivory">{item.title}</h2>
        <p className="mt-3 text-sm leading-6 text-graphite">{item.detail}</p>
        <button className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gold/25 bg-black/25 px-4 py-3 text-sm font-semibold text-gold-light transition hover:border-gold/50 hover:bg-gold/10">
          <Upload size={17} /> Fake upload button
        </button>
      </Card>)}
    </div>
  </AppShell>;
}

function tone(status: 'uploaded' | 'missing' | 'pending') {
  if (status === 'uploaded') return 'border-success/25 bg-success/10 text-success';
  if (status === 'pending') return 'border-amber/25 bg-amber/10 text-amber';
  return 'border-risk/25 bg-risk/10 text-risk';
}
