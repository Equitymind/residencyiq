import Image from 'next/image';
import Link from 'next/link';

export function BrandMark({ href = '/', compact = false, priority = false }: { href?: string; compact?: boolean; priority?: boolean }) {
  return <Link href={href} className="flex min-w-0 items-center gap-3" aria-label="ResidencyIQ home">
    <div className={`${compact ? 'h-11 w-11' : 'h-16 w-16 sm:h-20 sm:w-20'} relative shrink-0 overflow-hidden rounded-full border border-gold/40 bg-black shadow-gold`}>
      <Image src="/assets/residencyiq-logo.png" alt="ResidencyIQ R mark" fill priority={priority} className="scale-[2.55] object-cover object-[50%_28%]" sizes={compact ? '44px' : '80px'} />
    </div>
    <div className="min-w-0">
      <p className={`${compact ? 'text-sm tracking-[0.28em]' : 'text-lg tracking-[0.34em] sm:text-2xl'} whitespace-nowrap font-semibold uppercase text-ivory`}>Residency<span className="text-gold">IQ</span></p>
      {!compact && <p className="mt-1 max-w-[18rem] text-[0.62rem] uppercase tracking-[0.16em] text-gold-light sm:text-xs">Residency intelligence. Real continuity.</p>}
    </div>
  </Link>;
}
