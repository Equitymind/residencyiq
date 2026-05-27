import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrimaryButton, OutlineButton } from '@/components/Buttons';
import { PricingCard } from '@/components/Cards';
import { PageContainer, Section, Card } from '@/components/Section';
import { Activity, ArrowRight, Briefcase, FileCheck, MapPin, Shield, Upload, Users } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'ResidencyIQ | Residency Tracking for Multi-State Living',
  description: 'Track residency, organize domicile evidence, and monitor behavioral continuity when living, working, or traveling across multiple states.',
};

const valueCards = [
  { title: 'Dynamic Residency Score', copy: 'Continuity, corroboration, and exposure in one operational view.', icon: Activity },
  { title: 'Evidence Vault', copy: 'Identity, home, travel, financial, and advisor records organized by category.', icon: Upload },
  { title: 'Advisor Sharing', copy: 'Prepared views for CPAs, attorneys, and wealth teams.', icon: Users },
  { title: 'Exposure Alerts', copy: 'Static preview of cross-state indicators that deserve review.', icon: Shield },
];

const problemCards = [
  { title: 'Behavioral Continuity', copy: 'Track where life patterns concentrate across sleep, work, travel, and daily activity.', icon: Activity },
  { title: 'Residency Evidence', copy: 'Organize corroborating records into a profile that advisors can review.', icon: FileCheck },
  { title: 'Exposure Awareness', copy: 'Understand which retained ties and travel patterns may need explanation.', icon: Shield },
  { title: 'Advisor Collaboration', copy: 'Share a cleaner residency profile with the professionals who help maintain it.', icon: Users },
];

const advisorRoles = ['CPA', 'Attorney', 'Wealth Advisor', 'Travel Coordinator', 'Agent / Manager', 'Other'];

const dashboardStats = [
  ['Nevada Corroboration', '68%', 'text-gold-light'],
  ['California Exposure', 'Moderate', 'text-amber'],
  ['Days in Nevada', '124', 'text-ivory'],
  ['Days in California', '81', 'text-ivory'],
  ['Evidence Uploaded', '12 documents', 'text-success'],
  ['Checklist Progress', '7 of 12', 'text-gold-light'],
  ['Advisor Sharing', 'CPA invited', 'text-success'],
];

const evidenceSignals = [
  ['Identity', 'Strong'],
  ['Home & Utilities', 'Medium'],
  ['Travel Records', 'Review'],
  ['Advisor Notes', 'Open'],
];

const migrationTeasers = [
  { title: 'California to Nevada', href: '/moving-from-california-to-nevada', copy: 'Nevada continuity, retained California ties, and overnight exposure.' },
  { title: 'California to Texas', href: '/moving-from-california-to-texas', copy: 'Texas home base, financial records, and work-location indicators.' },
  { title: 'California to Florida', href: '/moving-from-california-to-florida', copy: 'Florida residence, travel patterns, and advisor-ready evidence.' },
  { title: 'California to Tennessee', href: '/moving-from-california-to-tennessee', copy: 'Tennessee household continuity and California record alignment.' },
  { title: 'California to Idaho', href: '/moving-from-california-to-idaho', copy: 'Idaho residence evidence and seasonal travel context.' },
  { title: 'New York to Florida', href: '/moving-from-new-york-to-florida', copy: 'Florida continuity with New York travel and relationship context.' },
];

const cityLights = [
  [70, 180], [96, 220], [128, 252], [158, 210], [198, 238], [240, 198], [282, 232], [315, 278],
  [350, 212], [388, 244], [426, 196], [468, 222], [510, 178], [548, 214], [590, 166], [632, 202],
  [672, 246], [706, 188], [748, 226], [790, 270], [824, 214], [858, 250], [612, 338], [654, 368],
  [702, 392], [744, 360], [800, 410], [548, 376], [494, 348], [438, 386], [370, 356], [306, 392],
  [760, 126], [794, 152], [832, 178], [870, 208], [910, 238], [954, 276], [676, 112], [724, 106],
  [226, 332], [260, 356], [292, 340], [332, 318], [378, 326], [412, 304], [452, 318], [492, 298],
];

function MobilityMap() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020303]" aria-hidden="true">
    <svg className="absolute right-[-22rem] top-[-6rem] h-[54rem] w-[86rem] max-w-none opacity-95 sm:right-[-14rem] lg:right-[-8rem]" viewBox="0 0 1080 680" fill="none">
      <rect width="1080" height="680" fill="#020303" />
      <path d="M650 76c78-15 173 8 251 67 54 41 89 92 114 149-70 6-134-15-197-48-67-36-124-43-183-16-57 26-120 14-171-19 28-58 89-118 186-133Z" fill="rgba(95,103,102,0.14)" stroke="rgba(248,245,239,0.055)" />
      <path d="M278 236c94-52 214-58 326-18 82 30 147 78 217 128-72 27-148 24-223-3-78-28-141-20-207 13-80 39-158 26-221-11 23-43 58-79 108-109Z" fill="rgba(95,103,102,0.115)" stroke="rgba(248,245,239,0.05)" />
      <path d="M612 395c87-15 177 8 250 65 49 39 78 84 96 137-73-2-122-34-174-62-66-36-122-34-182-16-55 17-108-4-146-41 37-39 83-70 156-83Z" fill="rgba(95,103,102,0.12)" stroke="rgba(248,245,239,0.05)" />
      <path d="M132 400c73-34 170-35 254 1 59 25 105 69 148 118-62 8-113-9-164-33-54-25-101-21-153 5-56 29-116 26-165 0 17-36 44-68 80-91Z" fill="rgba(95,103,102,0.095)" stroke="rgba(248,245,239,0.045)" />
      <path d="M112 508C252 368 438 276 780 150" stroke="rgba(244,210,122,0.54)" strokeWidth="1.35" />
      <path d="M258 430C434 334 612 330 922 482" stroke="rgba(212,175,55,0.34)" strokeWidth="1.1" />
      <path d="M502 176C576 284 640 378 806 535" stroke="rgba(156,118,40,0.45)" strokeWidth="1" />
      <path d="M104 156h900M82 284h950M106 414h886M156 544h780" stroke="rgba(255,255,255,0.03)" />
      <path d="M210 72v544M408 54v574M612 62v554M822 96v500" stroke="rgba(255,255,255,0.026)" />
      {cityLights.map(([cx, cy], index) => <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r={index % 5 === 0 ? 2.5 : 1.45} fill="#F4D27A" opacity={index % 4 === 0 ? 0.82 : 0.48} />
        {index % 6 === 0 && <circle cx={cx} cy={cy} r="8" stroke="rgba(244,210,122,0.14)" />}
      </g>)}
      <circle cx="780" cy="150" r="5" fill="#F4D27A" />
      <circle cx="116" cy="506" r="5" fill="#F4D27A" />
      <circle cx="922" cy="482" r="5" fill="#F4D27A" />
      <circle cx="806" cy="535" r="4" fill="#D4AF37" />
    </svg>
    <div className="absolute inset-0 bg-[linear-gradient(90deg,#020303_0%,rgba(2,3,3,0.92)_30%,rgba(2,3,3,0.48)_72%,#020303_100%)]" />
  </div>;
}

function DashboardPreview() {
  return <Card className="relative w-full overflow-hidden p-0 shadow-[0_24px_90px_rgba(0,0,0,0.58)]">
    <div className="border-b border-gold/15 bg-white/[0.04] px-4 py-3 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.22em] text-gold-light">Private Residency Profile</p>
        <span className="rounded-full border border-success/25 bg-success/10 px-3 py-1 text-xs text-success">Live mock</span>
      </div>
    </div>
    <div className="p-4 sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_124px] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-graphite">ResidencyIQ Score</p>
          <div className="mt-2 flex items-end gap-3">
            <p className="font-serif text-6xl leading-none text-gold-light sm:text-7xl">72</p>
            <span className="pb-2 text-sm text-graphite">/100</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl text-ivory">Nevada Continuity Strengthening</h2>
        </div>
        <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#F4D27A_0_68%,#66D17A_68%_72%,rgba(255,255,255,0.10)_72%)] sm:h-32 sm:w-32">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-[#070707] sm:h-24 sm:w-24"><Shield className="text-gold-light" size={34} /></div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map(([label, value, color]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
          <p className="text-[0.64rem] uppercase tracking-[0.16em] text-graphite">{label}</p>
          <p className={`mt-2 text-sm font-medium ${color}`}>{value}</p>
        </div>)}
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.84fr]">
        <div className="rounded-lg border border-gold/15 bg-black/35 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Recent Score Activity</p>
          <div className="mt-4 grid gap-3">
            {[["Nevada driver's license added", '+6', 'text-success'], ['Utility bill uploaded', '+4', 'text-success'], ['California overnight trend', '-3', 'text-risk']].map(([label, value, color]) => <div key={label} className="flex items-center justify-between gap-3 text-sm"><span className="text-ivory/90">{label}</span><span className={`font-semibold ${color}`}>{value}</span></div>)}
          </div>
        </div>
        <div className="rounded-lg border border-gold/15 bg-black/35 p-4" aria-label="Residency score trend visualization">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Trend</p>
          <div className="mt-4 flex h-24 items-end gap-2">
            {[42, 48, 51, 57, 54, 62, 68, 72].map((height, index) => <span key={index} className="flex-1 rounded-sm bg-gradient-to-t from-gold-deep to-gold-light" style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-4">
        {evidenceSignals.map(([label, status]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
          <p className="text-[0.66rem] uppercase tracking-[0.12em] text-graphite">{label}</p>
          <p className="mt-2 text-sm text-ivory">{status}</p>
        </div>)}
      </div>
    </div>
  </Card>;
}

export default function HomePage() {
  return <>
    <Header />
    <main>
      <section className="relative overflow-hidden border-b border-gold/10">
        <MobilityMap />
        <PageContainer className="relative grid min-h-[calc(100vh-5rem)] items-center gap-6 py-7 sm:py-8 lg:grid-cols-[0.74fr_1.26fr] lg:py-9">
          <div className="max-w-2xl">
            <p className="eyebrow">Residency Intelligence. Real Continuity.</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[0.98] text-ivory sm:text-5xl lg:text-6xl">Know Where Your <span className="gold-text">Life Is Centered</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-graphite sm:text-lg sm:leading-8">ResidencyIQ helps users organize residency evidence, monitor behavioral continuity, and navigate modern multi-state living.</p>
            <p className="mt-4 max-w-xl text-xs uppercase tracking-[0.15em] text-gold-light sm:text-sm">Residency tracking, domicile evidence, and advisor-ready residency intelligence.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="#pricing">Start Your 14-Day ResidencyIQ Trial <ArrowRight size={18} /></PrimaryButton>
              <OutlineButton href="/app/dashboard">See Your Residency Score</OutlineButton>
              <OutlineButton href="/app/advisors">Invite Your CPA or Attorney</OutlineButton>
            </div>
            <div className="mt-6 grid max-w-lg grid-cols-3 gap-2">
              {['Continuity', 'Corroboration', 'Exposure'].map((item) => <div key={item} className="rounded-lg border border-gold/15 bg-black/35 px-3 py-3 text-center text-xs uppercase tracking-[0.12em] text-graphite">{item}</div>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-4xl">
            <DashboardPreview />
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-gold/10 bg-white/[0.018] py-5">
        <PageContainer>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map(({ title, copy, icon: Icon }) => <Card key={title} className="h-full p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold"><Icon size={18} /></div>
                <h3 className="text-sm font-semibold text-ivory">{title}</h3>
              </div>
              <p className="text-sm leading-6 text-graphite">{copy}</p>
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map(({ title, copy, icon: Icon }) => <Card key={title} className="h-full"><Icon className="mb-5 text-gold" size={28} /><h3 className="font-serif text-2xl text-ivory">{title}</h3><p className="mt-3 text-sm leading-6 text-graphite">{copy}</p></Card>)}
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

      <Section className="border-b border-gold/10">
        <PageContainer>
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="eyebrow">Advisor Sharing</p>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Share the right information with the right people.</h2>
              <p className="mt-5 text-base leading-8 text-graphite">Each advisor receives a role-appropriate view of your residency profile.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {advisorRoles.map((role) => <Card key={role} className="flex min-h-24 items-center gap-3"><Briefcase className="text-gold" size={20} /><span className="text-sm font-medium text-ivory">{role}</span></Card>)}
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section id="pricing">
        <PageContainer>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="eyebrow mx-auto">Pricing</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Residency intelligence tiers for modern mobility.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <PricingCard featured name="Essential" price="$29/mo" note="$249/year. Includes a 14-day trial." features={['2-state tracking','residency timeline','evidence organization','advisor sharing','ResidencyIQ Score','annual defensibility reports']} button={<PrimaryButton href="#" className="w-full">Start Trial</PrimaryButton>} />
            <PricingCard name="Connected" price="$99/mo" note="$899/year. Expanded corroboration capabilities planned for later phases." features={['banking geography previews','calendar context','residency narratives','center-of-life indicators','advanced corroboration','advisor-ready exports']} button={<OutlineButton href="#" className="w-full">Coming Soon</OutlineButton>} />
            <PricingCard name="Exposure™" price="Custom Pricing" note="For proactive exposure monitoring and operational residency intelligence." features={['exposure monitoring previews','advisor alerts concept','scheduling impact analysis','jurisdiction intelligence','mobility monitoring','operational dashboards']} button={<OutlineButton href="#" className="w-full">Request Access</OutlineButton>} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-graphite">Static demo content only. Connected data, monitoring, and automation features are not implemented in this phase.</p>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
