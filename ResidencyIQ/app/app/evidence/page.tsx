import { AppShell } from '@/components/AppShell';
import { Card } from '@/components/Section';
import { FileCheck, Upload } from '@/components/Icons';
import { evidenceItems, statusTone } from '@/lib/mockProfile';

export default function EvidencePage() {
  return <AppShell title="Evidence Vault">
    <div className="mb-6 max-w-3xl">
      <p className="text-base leading-7 text-graphite">Upload placeholders for residency evidence categories. This phase only visualizes evidence status and corroboration gaps.</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {evidenceItems.map((item) => <Card key={item.title} className="min-h-52">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold">
            {item.status === 'missing' ? <Upload size={20} /> : <FileCheck size={20} />}
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs capitalize ${statusTone(item.status)}`}>{item.status}</span>
        </div>
        <h2 className="mt-6 font-serif text-3xl text-ivory">{item.title}</h2>
        <p className="mt-3 text-sm leading-6 text-graphite">{item.detail}</p>
        <div className="mt-6 rounded-lg border border-dashed border-gold/20 bg-black/25 px-4 py-3 text-sm text-graphite">Placeholder only</div>
      </Card>)}
    </div>
  </AppShell>;
}
