import Link from 'next/link';
import Image from 'next/image';
import { FileCheck, Settings, Shield, Upload, Users } from './Icons';

const items = [
  { href: '/app/dashboard', label: 'Dashboard', icon: Shield },
  { href: '/app/checklist', label: 'Checklist', icon: FileCheck },
  { href: '/app/evidence', label: 'Evidence', icon: Upload },
  { href: '/app/advisors', label: 'Advisors', icon: Users },
  { href: '/app/settings', label: 'Settings', icon: Settings },
];

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#050505]"><div className="container-lux grid gap-6 py-5 lg:grid-cols-[260px_1fr] lg:py-8"><aside className="glass-panel rounded-lg p-4 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]"><Link href="/" className="mb-7 flex items-center gap-3"><div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/35 bg-black"><Image src="/assets/residencyiq-logo.png" alt="ResidencyIQ logo" fill className="object-cover" sizes="44px" /></div><span className="text-sm font-semibold uppercase tracking-[0.3em] text-ivory">Residency<span className="text-gold">IQ</span></span></Link><nav className="grid gap-2">{items.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-sm text-graphite transition hover:border-gold/20 hover:bg-white/[0.04] hover:text-ivory"><Icon size={18}/>{label}</Link>)}</nav><div className="mt-8 rounded-lg border border-gold/20 bg-gold/5 p-4"><p className="text-sm font-medium text-ivory">Phase 1A app shell</p><p className="mt-2 text-xs leading-5 text-graphite">Placeholder routes only. Product functionality arrives in Phase 1B.</p></div></aside><section className="min-w-0"><div className="mb-6"><p className="eyebrow mb-4">ResidencyIQ App Shell</p><h1 className="font-serif text-4xl text-ivory sm:text-5xl">{title}</h1></div>{children}</section></div></main>;
}
