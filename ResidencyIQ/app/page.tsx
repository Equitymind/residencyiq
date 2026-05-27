import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrimaryButton, OutlineButton } from '@/components/Buttons';
import { PricingCard } from '@/components/Cards';
import { PageContainer, Section, Card } from '@/components/Section';
import { Activity, ArrowRight, Briefcase, FileCheck, MapPin, Shield, Upload, Users } from '@/components/Icons';

const valueCards = [
  { title: 'Dynamic Residency Score', copy: 'A live-feeling view of continuity, corroboration, and exposure posture.', icon: Activity },
  { title: 'Evidence Vault', copy: 'Organized domicile evidence across identity, home, travel, and records.', icon: Upload },
  { title: 'Advisor Sharing', copy: 'Role-aware residency profiles for CPAs, attorneys, and wealth teams.', icon: Users },
  { title: 'Exposure Alerts', copy: 'Operational awareness when state-line behavior starts to create friction.', icon: Shield },
];

const problemCards = [
  { title: 'Behavioral Continuity', copy: 'Understand where life patterns actually concentrate across sleep, work, travel, and daily activity.', icon: Activity },
  { title: 'Residency Evidence', copy: 'Keep documents and corroborating records organized around a defensible residency profile.', icon: FileCheck },
  { title: 'Exposure Awareness', copy: 'See where cross-state behavior may create elevated attention or unresolved contradictions.', icon: Shield },
  { title: 'Advisor Collaboration', copy: 'Prepare a clean, role-appropriate view for trusted professionals without oversharing.', icon: Users },
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

const scoreActivity = [
  ["Nevada driver's license added", '+6', 'text-success'],
  ['Utility bill uploaded', '+4', 'text-success'],
  ['California overnight trend', '-3', 'text-risk'],
];

const migrationTeasers = [
  {
    title: 'California to Nevada',
    href: '/moving-from-california-to-nevada',
    copy: 'Strengthen Nevada continuity by aligning identity, housing, utilities, and overnight behavior.',
  },
  {
    title: 'California to Texas',
    href: '/moving-from-california-to-texas',
    copy: 'Build a Texas center-of-life profile that is supported by records and daily routines.',
  },
  {
    title: 'California to Florida',
    href: '/moving-from-california-to-florida',
    copy: 'Connect Florida residence, travel, and advisor evidence into a coherent migration profile.',
  },
  {
    title: 'California to Tennessee',
    href: '/moving-from-california-to-tennessee',
    copy: 'Document Tennessee continuity across home, work, financial records, and travel patterns.',
  },
];

function MobilityMap() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.08),transparent_18%,transparent_70%,rgba(212,175,55,0.06)),radial-gradient(ellipse_at_72%_26%,rgba(212,175,55,0.14),transparent_34rem)]" />
    <svg className="absolute right-[-10rem] top-[-1rem] h-[42rem] w-[58rem] max-w-none opacity-80 sm:right-[-7rem] lg:right-[-2rem] lg:top-0" viewBox="0 0 900 640" fill="none">
      <path d="M520 118c47-25 112-19 165 2 44 18 79 46 113 79-26 12-70 17-111 7-43-10-72-31-105-28-35 3-56 31-98 27-31-3-61-21-78-41 29-17 57-30 114-46Z" fill="rgba(184,184,184,0.10)" stroke="rgba(212,175,55,0.13)" />
      <path d="M330 242c48-35 105-41 164-28 51 11 93 35 137 58-50 27-95 35-151 25-41-7-70-25-111-14-40 11-77 39-132 31 19-25 50-57 93-72Z" fill="rgba(184,184,184,0.08)" stroke="rgba(212,175,55,0.12)" />
      <path d="M590 334c58-8 113 6 157 38 38 28 57 63 72 105-49-3-80-29-118-43-45-17-86 3-126-13-32-13-54-39-73-65 26-9 51-18 88-22Z" fill="rgba(184,184,184,0.09)" stroke="rgba(212,175,55,0.12)" />
      <path d="M170 366c50-21 111-22 164-1 46 18 79 51 107 88-35 9-72-3-104-17-38-16-69-27-111-11-34 13-69 36-119 26 15-26 36-63 63-85Z" fill="rgba(184,184,184,0.075)" stroke="rgba(212,175,55,0.10)" />
      <path d="M210 370C332 270 483 215 680 148" stroke="rgba(244,210,122,0.52)" strokeWidth="1.4" />
      <path d="M305 427C432 342 541 330 739 416" stroke="rgba(212,175,55,0.36)" strokeWidth="1.2" />
      <path d="M524 160C576 242 617 327 690 418" stroke="rgba(156,118,40,0.45)" strokeWidth="1" />
      {[
        [210, 370], [305, 427], [524, 160], [680, 148], [739, 416], [590, 334], [432, 342], [330, 242], [170, 366],
      ].map(([cx, cy], index) => <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r={index < 5 ? 4 : 2.5} fill="#F4D27A" opacity={index < 5 ? 0.9 : 0.55} />
        <circle cx={cx} cy={cy} r={index < 5 ? 12 : 8} stroke="rgba(244,210,122,0.22)" />
      </g>)}
      <path d="M124 518H812" stroke="rgba(212,175,55,0.16)" />
      <path d="M198 98v462M392 72v502M618 84v488M782 132v412" stroke="rgba(255,255,255,0.045)" />
      <path d="M82 186h782M70 318h804M102 454h750" stroke="rgba(255,255,255,0.045)" />
    </svg>
  </div>;
}

function DashboardPreview() {
  return <Card className="relative w-full overflow-hidden p-0">
    <div className="border-b border-gold/15 bg-white/[0.035] px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.22em] text-gold-light">Residency Intelligence</p>
        <span className="rounded-full border border-success/25 bg-success/10 px-3 py-1 text-xs text-success">Demo profile</span>
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-graphite">ResidencyIQ Score</p>
          <p className="mt-3 font-serif text-7xl leading-none text-gold-light">72</p>
          <h2 className="mt-3 font-serif text-2xl text-ivory">Nevada Continuity Strengthening</h2>
        </div>
        <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#F4D27A_0_72%,rgba(255,255,255,0.10)_72%)]">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-[#070707] text-lg font-semibold text-gold-light">72</div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {dashboardStats.map(([label, value, color]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
          <p className="text-[0.68rem] uppercase tracking-[0.16em] text-graphite">{label}</p>
          <p className={`mt-2 text-sm font-medium ${color}`}>{value}</p>
        </div>)}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-lg border border-gold/15 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Recent Score Activity</p>
          <div className="mt-4 grid gap-3">
            {scoreActivity.map(([label, value, color]) => <div key={label} className="flex items-center justify-between gap-3 text-sm">
              <span className="text-ivory/90">{label}</span>
              <span className={`font-semibold ${color}`}>{value}</span>
            </div>)}
          </div>
        </div>
        <div className="rounded-lg border border-gold/15 bg-black/30 p-4" aria-label="Residency score trend visualization">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Trend</p>
          <div className="mt-4 flex h-24 items-end gap-2">
            {[42, 48, 51, 57, 54, 62, 68, 72].map((height, index) => <span key={index} className="flex-1 rounded-sm bg-gradient-to-t from-gold-deep to-gold-light" style={{ height: `${height}%` }} />)}
          </div>
        </div>
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
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" aria-hidden="true" />
        <PageContainer className="relative grid min-h-[calc(100vh-5rem)] items-center gap-8 py-8 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-gold/35 bg-black shadow-gold sm:h-28 sm:w-28">
                <Image src="/assets/residencyiq-logo.png" alt="ResidencyIQ logo" fill className="object-cover" sizes="112px" priority />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-ivory sm:text-sm">Residency<span className="text-gold">IQ</span></p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold-light">Residency tracking, domicile evidence, and advisor-ready residency intelligence.</p>
              </div>
            </div>
            <p className="eyebrow mt-8">Residency Intelligence. Real Continuity.</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] text-ivory sm:text-6xl lg:text-7xl">Know Where Your <span className="gold-text">Life Is Centered.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite sm:text-lg">ResidencyIQ helps globally mobile users organize residency evidence, monitor behavioral domicile indicators, and share advisor-ready profiles with trusted professionals.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="#pricing">Start Your 14-Day ResidencyIQ Trial <ArrowRight size={18} /></PrimaryButton>
              <OutlineButton href="/app/dashboard">See Your Residency Score</OutlineButton>
              <OutlineButton href="/app/advisors">Invite Your CPA or Attorney</OutlineButton>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-graphite">Built for founders, executives, investors, athletes, entertainers, and globally mobile professionals who need continuity, corroboration, exposure awareness, and defensibility.</p>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <DashboardPreview />
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-gold/10 bg-white/[0.018] py-5">
        <PageContainer>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map(({ title, copy, icon: Icon }) => <Card key={title} className="h-full p-4">
              <div className="mb-4 flex items-center gap-3">
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

      <Section className="border-b border-gold/10 bg-white/[0.018]">
        <PageContainer>
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Migration Guides</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Planning a move from California?</h2>
            <p className="mt-5 text-base leading-8 text-graphite">Compare continuity considerations before changing your claimed center of life.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {migrationTeasers.map((page) => <Card key={page.href} className="flex h-full flex-col">
              <MapPin className="mb-5 text-gold" size={24} />
              <h3 className="font-serif text-2xl text-ivory">{page.title}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite">{page.copy}</p>
              <Link href={page.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">View migration guide <ArrowRight size={16} /></Link>
            </Card>)}
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
            <PricingCard featured name="Essential" price="$29/mo" note="$249/year. Includes a 14-day trial." features={['2-state tracking','residency timeline','evidence uploads','advisor sharing','ResidencyIQ Score','annual defensibility reports']} button={<PrimaryButton href="#" className="w-full">Start Trial</PrimaryButton>} />
            <PricingCard name="Connected" price="$99/mo" note="$899/year. Expanded corroboration capabilities planned for later phases." features={['banking geography','calendar integrations','AI narratives','center-of-life indicators','vehicle telemetry','advanced corroboration']} button={<OutlineButton href="#" className="w-full">Coming Soon</OutlineButton>} />
            <PricingCard name="Exposure™" price="Custom Pricing" note="For proactive exposure monitoring and operational residency intelligence." features={['proactive exposure monitoring','advisor alerts','scheduling impact analysis','jurisdiction intelligence','international mobility monitoring','operational dashboards']} button={<OutlineButton href="#" className="w-full">Request Access</OutlineButton>} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-graphite">Static demo content only. Connected data, monitoring, and automation features are not implemented in this phase.</p>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
