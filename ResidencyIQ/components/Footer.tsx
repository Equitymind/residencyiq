import Link from 'next/link';
import Image from 'next/image';

const links = ['Privacy', 'Terms', 'Advisor Network', 'Contact'];
export function Footer() {
  return <footer className="border-t border-gold/20 py-10"><div className="container-lux flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/35"><Image src="/assets/residencyiq-logo.png" alt="ResidencyIQ logo" fill className="object-cover" sizes="40px" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-ivory">Residency<span className="text-gold">IQ</span></p><p className="mt-1 text-sm text-graphite">Behavioral residency intelligence for modern mobility.</p></div></div><nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-graphite">{links.map((link)=><Link key={link} href="#" className="hover:text-gold-light">{link}</Link>)}</nav></div></footer>;
}
