import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, PageContainer, Section } from '@/components/Section';
import { ArrowRight, Briefcase, FileCheck, Lock, MapPin, Shield, Upload, Users } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'ResidencyIQ | Residency Tracking for Multi-State Living',
  description: 'Track residency, organize domicile evidence, and monitor behavioral continuity when living, working, or traveling across multiple states.',
};

const mobilityLights = [
  [118, 170], [144, 196], [170, 220], [196, 182], [226, 210], [256, 244], [292, 205], [324, 235],
  [364, 184], [396, 212], [430, 246], [468, 198], [506, 225], [546, 178], [586, 206], [626, 242],
  [666, 184], [706, 220], [746, 258], [786, 205], [824, 238], [862, 280], [902, 226], [946, 264],
  [560, 332], [606, 360], [652, 390], [704, 356], [754, 388], [808, 430], [476, 360], [414, 392],
  [342, 366], [284, 402], [218, 374], [160, 410], [690, 116], [738, 132], [790, 158], [842, 184],
];

const migrationTeasers = [
  { title: 'California to Nevada', href: '/moving-from-california-to-nevada', copy: 'Nevada continuity, retained California ties, and overnight exposure.' },
  { title: 'California to Texas', href: '/moving-from-california-to-texas', copy: 'Texas home base, financial records, and work-location indicators.' },
  { title: 'California to Florida', href: '/moving-from-california-to-florida', copy: 'Florida residence, travel patterns, and advisor-ready evidence.' },
  { title: 'California to Tennessee', href: '/moving-from-california-to-tennessee', copy: 'Tennessee household continuity and California record alignment.' },
  { title: 'California to Idaho', href: '/moving-from-california-to-idaho', copy: 'Idaho residence evidence and seasonal travel context.' },
  { title: 'New York to Florida', href: '/moving-from-new-york-to-florida', copy: 'Florida continuity with New York travel and relationship context.' },
];

function MobilityMapPanel({ compact = false }: { compact?: boolean }) {
  return <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#030607] ${compact ? 'h-40' : 'h-[23rem] lg:h-[31rem]'}`}>
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1080 560" fill="none" aria-hidden="true">
      <rect width="1080" height="560" fill="#030607" />
      <path d="M625 62c83-16 184 6 262 66 54 41 92 94 115 149-72 6-136-17-199-51-68-36-126-42-187-14-56 26-123 12-172-21 31-59 88-111 181-129Z" fill="rgba(99,108,110,0.16)" stroke="rgba(248,245,239,0.055)" />
      <path d="M288 214c94-54 211-61 323-20 84 30 153 80 222 129-76 29-153 25-230-4-79-29-144-20-211 13-79 40-159 29-224-10 25-44 66-82 120-108Z" fill="rgba(99,108,110,0.12)" stroke="rgba(248,245,239,0.048)" />
      <path d="M612 342c91-15 184 9 257 68 50 41 79 88 99 139-76-1-127-35-181-65-66-36-124-33-185-15-56 17-112-5-152-43 39-40 87-71 162-84Z" fill="rgba(99,108,110,0.12)" stroke="rgba(248,245,239,0.048)" />
      <path d="M132 360c76-35 177-36 260 0 62 27 107 72 150 121-63 8-115-10-168-35-54-25-104-20-158 7-58 29-119 27-169 0 18-37 48-70 85-93Z" fill="rgba(99,108,110,0.095)" stroke="rgba(248,245,239,0.042)" />
      <path d="M124 456C282 326 462 230 780 124" stroke="rgba(244,210,122,0.52)" strokeWidth="1.35" />
      <path d="M246 390C430 304 616 306 932 438" stroke="rgba(212,175,55,0.34)" strokeWidth="1.05" />
      <path d="M502 150C586 256 655 355 824 488" stroke="rgba(156,118,40,0.46)" strokeWidth="1" />
      {mobilityLights.map(([cx, cy], index) => <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r={index % 7 === 0 ? 2.6 : 1.45} fill={index % 5 === 0 ? '#F8F5EF' : '#F4D27A'} opacity={index % 5 === 0 ? 0.72 : 0.5} />
        {index % 8 === 0 && <circle cx={cx} cy={cy} r="8" stroke="rgba(244,210,122,0.14)" />}
      </g>)}
      <path d="M104 136h900M86 264h930M120 392h850" stroke="rgba(255,255,255,0.026)" />
      <path d="M206 52v456M414 46v468M622 56v442M826 76v408" stroke="rgba(255,255,255,0.022)" />
    </svg>
  </div>;
}

function DashboardPreview() {
  return <section className="rounded-lg border border-white/15 bg-[#080909]/92 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.65)] sm:p-5">
    <div className="grid gap-5 lg:grid-cols-[1fr_14rem] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-ivory">Residency Score</p>
        <div className="mt-3 flex items-end gap-3">
          <p className="font-serif text-6xl leading-none text-gold-light sm:text-7xl">72</p>
          <p className="pb-2 text-2xl text-graphite">/100</p>
        </div>
        <p className="mt-2 text-lg text-success">Nevada Continuity Strengthening</p>
        <p className="mt-2 text-sm text-graphite">Static demo profile updated today</p>
      </div>
      <div className="grid h-32 w-32 place-items-center justify-self-start rounded-full bg-[conic-gradient(#F4D27A_0_68%,#66D17A_68%_72%,rgba(255,255,255,0.10)_72%)] lg:justify-self-end">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-[#070707]">
          <Shield className="text-gold-light" size={36} />
        </div>
      </div>
    </div>

    <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
      {[
        ['Nevada Corroboration', '68%', 'text-gold-light'],
        ['California Exposure', 'Moderate', 'text-amber'],
        ['CPA', 'Invited', 'text-success'],
      ].map(([label, value, color]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-graphite">{label}</p>
        <p className={`mt-3 text-2xl ${color}`}>{value}</p>
      </div>)}
    </div>

    <div className="mt-3 grid gap-3 sm:grid-cols-4">
      {[
        ['Nevada Days', '124'],
        ['California Days', '81'],
        ['Evidence', '12'],
        ['Checklist', '7/12'],
      ].map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <p className="text-[0.65rem] uppercase tracking-[0.14em] text-graphite">{label}</p>
        <p className="mt-2 text-xl text-ivory">{value}</p>
      </div>)}
    </div>

    <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-lg border border-gold/15 bg-black/35 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Recent Score Activity</p>
        <div className="mt-4 grid gap-3 text-sm">
          {[["Nevada driver's license added", '+6', 'text-success'], ['Utility bill uploaded', '+4', 'text-success'], ['California overnight trend', '-3', 'text-risk']].map(([label, value, color]) => <div key={label} className="flex items-center justify-between gap-3">
            <span className="text-ivory/90">{label}</span>
            <span className={`font-semibold ${color}`}>{value}</span>
          </div>)}
        </div>
      </div>
      <div className="rounded-lg border border-gold/15 bg-black/35 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Trend</p>
        <div className="mt-4 flex h-24 items-end gap-2">
          {[42, 48, 51, 57, 54, 62, 68, 72].map((height, index) => <span key={index} className="flex-1 rounded-sm bg-gradient-to-t from-gold-deep to-gold-light" style={{ height: `${height}%` }} />)}
        </div>
      </div>
    </div>
  </section>;
}

function EvidenceStrength() {
  const evidence = [
    ['Location Tracking', 'Strong', MapPin],
    ['Financial Activity', 'Strong', Briefcase],
    ['Home & Utilities', 'Medium', Upload],
    ['Work & Business', 'Strong', FileCheck],
    ['Documents', 'Medium', FileCheck],
  ];

  return <section className="rounded-lg border border-white/15 bg-[#080909]/92 p-4 sm:p-5">
    <p className="text-xs uppercase tracking-[0.22em] text-ivory">Evidence Strength</p>
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
      {evidence.map(([label, status, Icon]) => <div key={label as string} className="text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/45 bg-gold/5 text-gold">
          <Icon size={24} />
        </div>
        <p className="mt-3 text-sm leading-5 text-ivory">{label as string}</p>
        <p className={`mt-1 text-sm ${status === 'Medium' ? 'text-amber' : 'text-success'}`}>{status as string}</p>
      </div>)}
    </div>
  </section>;
}

export default function HomePage() {
  return <>
    <Header />
    <main className="bg-[#020303]">
      <section className="relative overflow-hidden border-b border-gold/10">
        <div className="absolute inset-x-0 top-0 h-[34rem] lg:h-[40rem]">
          <MobilityMapPanel />
        </div>
        <PageContainer className="relative pt-8 pb-10 sm:pt-10 lg:pt-14">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div className="pt-1 lg:pt-7">
              <p className="inline-flex rounded-full border border-gold/45 bg-black/45 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-light">Residency Intelligence. Real Confidence.</p>
              <h1 className="mt-6 max-w-lg font-serif text-4xl font-semibold leading-[0.95] text-ivory sm:text-5xl lg:text-6xl">Prove Where <span className="gold-text">Life Happens.</span></h1>
              <p className="mt-5 max-w-md text-base leading-8 text-graphite">ResidencyIQ helps you build organized evidence of your domicile and defend it with confidence every single day.</p>
              <div className="mt-7 grid grid-cols-4 gap-4 text-center">
                {[
                  ['Audit Ready', Shield],
                  ['Tracking', MapPin],
                  ['Analytics', Briefcase],
                  ['Security', Lock],
                ].map(([label, Icon]) => <div key={label as string}>
                  <Icon className="mx-auto text-gold" size={31} />
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.08em] text-ivory">{label as string}</p>
                </div>)}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="#pricing" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-gold-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-black shadow-gold">Start Free Today <ArrowRight size={20} /></Link>
                <Link href="/app/dashboard" className="inline-flex min-h-14 items-center justify-center rounded-lg border border-gold/35 bg-black/45 px-6 py-4 text-sm font-semibold text-ivory">View Score</Link>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-graphite"><span className="grid h-5 w-5 place-items-center rounded-full border border-gold text-gold">✓</span>No credit card required</p>
            </div>

            <div className="lg:pt-24">
              <MobilityMapPanel compact />
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <DashboardPreview />
            <EvidenceStrength />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-gold-light">Trusted by high performers</p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {['Entrepreneurs', 'Investors', 'Athletes', 'Digital Nomads', 'Executives'].map((item) => <div key={item} className="rounded-lg border border-gold/15 bg-white/[0.025] px-3 py-4 text-xs uppercase tracking-[0.08em] text-ivory">{item}</div>)}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-gold/10 bg-white/[0.018] py-5">
        <PageContainer>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Dynamic Residency Score', 'Continuity, corroboration, and exposure in one operational view.', Shield],
              ['Evidence Vault', 'Identity, home, travel, financial, and advisor records organized by category.', Upload],
              ['Advisor Sharing', 'Prepared views for CPAs, attorneys, and wealth teams.', Users],
              ['Exposure Alerts', 'Static preview of cross-state indicators that deserve review.', FileCheck],
            ].map(([title, copy, Icon]) => <Card key={title as string} className="h-full p-4">
              <Icon className="mb-3 text-gold" size={22} />
              <h2 className="text-sm font-semibold text-ivory">{title as string}</h2>
              <p className="mt-2 text-sm leading-6 text-graphite">{copy as string}</p>
            </Card>)}
          </div>
        </PageContainer>
      </section>

      <Section id="how-it-works" className="border-b border-gold/10">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="eyebrow">Residency Tracking</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Residency tracking built for people who live across state lines.</h2>
            <p className="mt-5 text-lg leading-8 text-graphite">ResidencyIQ helps organize the behavioral signals that matter: where you sleep, work, travel, spend, maintain records, and build your center of life.</p>
          </div>
        </PageContainer>
      </Section>

      <Section id="migration-guides" className="border-b border-gold/10 bg-white/[0.018]">
        <PageContainer>
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Migration Guides</p>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Popular Migration Guides</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light">Read residency intelligence articles <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {migrationTeasers.map((page) => <Link key={page.href} href={page.href} className="rounded-lg border border-gold/20 bg-white/[0.03] p-4 transition hover:border-gold/45 hover:bg-gold/5">
              <div className="flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl text-ivory">{page.title}</h3><p className="mt-2 text-sm leading-6 text-graphite">{page.copy}</p></div><ArrowRight className="mt-1 shrink-0 text-gold" size={17} /></div>
              <p className="mt-4 text-sm font-semibold text-gold-light">View Guide</p>
            </Link>)}
          </div>
        </PageContainer>
      </Section>

      <Section id="pricing">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mx-auto">Pricing</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Residency intelligence tiers for modern mobility.</h2>
          </div>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
