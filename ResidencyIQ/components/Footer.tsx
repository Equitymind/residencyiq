import Link from 'next/link';
import { BrandMark } from './BrandMark';

const links = [
  { label: 'Blog', href: '/blog' },
  { label: 'Migration Guides', href: '/#migration-guides' },
  { label: 'Advisor Network', href: '/app/advisors' },
  { label: 'Contact', href: '#' },
];
export function Footer() {
  return <footer className="border-t border-gold/20 py-10"><div className="container-lux flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><BrandMark compact /><nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-graphite">{links.map((link)=><Link key={link.label} href={link.href} className="hover:text-gold-light">{link.label}</Link>)}</nav></div></footer>;
}
