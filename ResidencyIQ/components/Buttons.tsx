import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = { children: ReactNode; href?: string; className?: string };
const base = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-light/40';
export function PrimaryButton({ children, href = '#', className = '' }: ButtonProps) {
  return <Link href={href} className={`${base} bg-gold-gradient text-black shadow-gold ${className}`}>{children}</Link>;
}
export function OutlineButton({ children, href = '#', className = '' }: ButtonProps) {
  return <Link href={href} className={`${base} border border-[rgba(212,175,55,0.34)] bg-white/[0.035] text-ivory hover:border-gold-light/70 ${className}`}>{children}</Link>;
}
