"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';
import { PrimaryButton, OutlineButton } from './Buttons';
import { BrandMark } from './BrandMark';

const nav = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Guides', href: '/#migration-guides' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Sign In', href: '/app/dashboard' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-gold/15 bg-black/80 backdrop-blur-2xl"><div className="container-lux flex h-20 items-center justify-between gap-4"><BrandMark compact /><nav className="hidden items-center gap-6 lg:flex">{nav.map((item)=><Link key={item.label} href={item.href} className="text-sm text-graphite transition hover:text-gold-light">{item.label}</Link>)}<PrimaryButton href="/#pricing" className="min-h-10 px-4 py-2">Start Trial</PrimaryButton></nav><button onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-gold/25 bg-white/[0.035] text-gold-light lg:hidden" aria-label="Open menu">{open ? <XIcon /> : <MenuIcon />}</button></div>{open && <div className="container-lux pb-5 lg:hidden"><div className="glass-panel grid gap-2 rounded-lg p-3">{nav.map((item)=><Link onClick={()=>setOpen(false)} key={item.label} href={item.href} className="rounded-lg px-4 py-3 text-sm text-ivory hover:bg-white/[0.05]">{item.label}</Link>)}<PrimaryButton href="/#pricing" className="mt-1 w-full">Start Trial</PrimaryButton><OutlineButton href="/app/dashboard" className="w-full">See Your Score</OutlineButton></div></div>}</header>;
}
