import type { ReactNode } from 'react';
import { Check } from './Icons';

export function DashboardCard({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return <section className="glass-panel rounded-lg p-5 sm:p-6"><div className="mb-5 flex items-start justify-between gap-4"><div>{eyebrow && <p className="mb-2 text-[0.66rem] uppercase tracking-[0.18em] text-gold-light/80">{eyebrow}</p>}<h3 className="font-serif text-2xl text-ivory">{title}</h3></div></div>{children}</section>;
}

export function PricingCard({ name, price, note, features, button, featured = false }: { name: string; price: string; note: string; features: string[]; button: ReactNode; featured?: boolean }) {
  return <article className={`glass-panel flex h-full flex-col rounded-lg p-6 ${featured ? 'border-gold/60 bg-[rgba(212,175,55,0.075)] shadow-gold' : ''}`}><div className="mb-6"><p className="text-xs uppercase tracking-[0.22em] text-gold-light">{name}</p><div className="mt-4 font-serif text-4xl text-ivory">{price}</div><p className="mt-3 min-h-12 text-sm leading-6 text-graphite">{note}</p></div><ul className="mb-7 grid gap-3 text-sm text-ivory/90">{features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-0.5 text-gold"><Check size={16} /></span><span>{feature}</span></li>)}</ul><div className="mt-auto">{button}</div></article>;
}
