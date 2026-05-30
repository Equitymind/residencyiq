'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FileCheck, Settings, Shield, Upload, Users } from './Icons';

const items = [
  { href: '/app/dashboard', label: 'Dashboard', icon: Shield },
  { href: '/app/checklist', label: 'Checklist', icon: FileCheck },
  { href: '/app/evidence', label: 'Evidence', icon: Upload },
  { href: '/app/advisors', label: 'Advisors', icon: Users },
  { href: '/app/settings', label: 'Settings', icon: Settings },
];

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return <main className="relative min-h-screen overflow-hidden bg-[#050505]">
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(212,175,55,.14),transparent_28rem),radial-gradient(circle_at_18%_72%,rgba(212,175,55,.08),transparent_22rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
    </div>
    <div className="container-lux relative z-10 grid gap-6 py-5 lg:grid-cols-[260px_1fr] lg:py-8">
      <aside className="glass-panel rounded-lg p-4 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
        <Link href="/" className="mb-7 flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/35 bg-black"><Image src="/assets/residencyiq-logo.png" alt="ResidencyIQ logo" fill className="object-cover" sizes="44px" /></div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-ivory">Residency<span className="text-gold">IQ</span></span>
        </Link>
        <nav className="grid gap-2">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return <Link key={href} href={href} className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${active ? 'border-gold/30 bg-gold/10 text-ivory' : 'border-transparent text-graphite hover:border-gold/20 hover:bg-white/[0.04] hover:text-ivory'}`}><Icon size={18}/>{label}</Link>;
          })}
        </nav>
        <div className="mt-8 rounded-lg border border-gold/20 bg-gold/5 p-4">
          <p className="text-sm font-medium text-ivory">Phase 1D demo loop</p>
          <p className="mt-2 text-xs leading-5 text-graphite">Frontend-only mock profile state. No backend, auth, payments, uploads, email, or integrations are active.</p>
        </div>
      </aside>
      <section className="min-w-0">
        <div className="mb-6"><p className="eyebrow mb-4">ResidencyIQ Private Profile</p><h1 className="font-serif text-4xl text-ivory sm:text-5xl">{title}</h1></div>
        {children}
      </section>
    </div>
  </main>;
}
