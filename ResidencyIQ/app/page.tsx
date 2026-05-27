import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrimaryButton, OutlineButton } from '@/components/Buttons';
import { PricingCard } from '@/components/Cards';
import { PageContainer, Section, Card } from '@/components/Section';
import { Activity, ArrowRight, Briefcase, Check, FileCheck, MapPin, Shield, Users } from '@/components/Icons';

const problemCards = [
  { title: 'Behavioral Continuity', copy: 'Understand where life patterns actually concentrate across sleep, work, travel, and daily activity.', icon: Activity },
  { title: 'Residency Evidence', copy: 'Keep documents and corroborating records organized around a defensible residency profile.', icon: FileCheck },
  { title: 'Exposure Awareness', copy: 'See where cross-state behavior may create elevated attention or unresolved contradictions.', icon: Shield },
  { title: 'Advisor Collaboration', copy: 'Prepare a clean, role-appropriate view for trusted professionals without oversharing.', icon: Users },
];

const advisorRoles = ['CPA', 'Attorney', 'Wealth Advisor', 'Travel Coordinator', 'Agent / Manager', 'Other'];

const missingItems = ['Utility bill', 'Voter registration', 'Advisor review'];

export default function HomePage() {
  return <>
    <Header />
    <main>
      <section className="relative overflow-hidden border-b border-gold/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" aria-hidden="true" />
        <PageContainer className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_0.88fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Residency Intelligence. Real Continuity.</p>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[0.95] text-ivory sm:text-6xl lg:text-7xl">Know Where Your <span className="gold-text">Life Is Centered.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite">ResidencyIQ helps users organize residency evidence, monitor behavioral domicile indicators, and share advisor-ready profiles with trusted professionals.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#pricing">Start 14-Day Essential Trial <ArrowRight size={18} /></PrimaryButton>
              <OutlineButton href="#how-it-works">See How It Works</OutlineButton>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-graphite">Built for founders, executives, investors, athletes, entertainers, and globally mobile professionals.</p>
          </div>

          <Card className="relative mx-auto w-full max-w-lg overflow-hidden p-0">
            <div className="border-b border-gold/15 bg-white/[0.025] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gold-light">ResidencyIQ Score</p>
            </div>
            <div className="p-5 sm:p-6">
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-serif text-7xl text-gold-light">42</p>
                  <p className="mt-2 text-lg text-ivory">Emerging Nevada Profile</p>
                  <p className="mt-2 text-sm text-graphite">Mock values for Phase 1A display only.</p>
                </div>
                <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#D4AF37_0_42%,rgba(255,255,255,0.10)_42%)]">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[#070707] text-xl font-semibold text-gold-light">42%</div>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  ['Nevada Corroboration', '42%', 'text-amber'],
                  ['California Exposure', 'Elevated', 'text-risk'],
                  ['Evidence Strength', 'Limited', 'text-amber'],
                ].map(([label, value, color]) => <div key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"><span className="text-sm text-graphite">{label}</span><span className={`text-sm font-medium ${color}`}>{value}</span></div>)}
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Missing</p>
                <div className="mt-3 grid gap-2">
                  {missingItems.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-ivory/90"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{item}</div>)}
                </div>
              </div>

              <div className="mt-7 h-20 rounded-lg border border-gold/15 bg-black/30 p-3" aria-label="Subtle trend visualization">
                <div className="flex h-full items-end gap-2">
                  {[28, 38, 34, 45, 42, 50, 48, 56, 52, 61, 58, 66].map((height, index) => <span key={index} className="flex-1 rounded-sm bg-gradient-to-t from-gold-deep to-gold-light/85" style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </div>
          </Card>
        </PageContainer>
      </section>

      <Section id="how-it-works" className="border-b border-gold/10">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">Modern residency is behavioral.</h2>
            <p className="mt-5 text-lg leading-8 text-graphite">Residency is no longer just where your mail goes. It is reflected in where you sleep, work, travel, spend, manage, and build your life.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map(({ title, copy, icon: Icon }) => <Card key={title} className="h-full"><Icon className="mb-5 text-gold" size={28} /><h3 className="font-serif text-2xl text-ivory">{title}</h3><p className="mt-3 text-sm leading-6 text-graphite">{copy}</p></Card>)}
          </div>
        </PageContainer>
      </Section>

      <Section className="border-b border-gold/10 bg-white/[0.018]">
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
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-graphite">Phase 1A presents the product foundation and design system only. Connected data, monitoring, and automation features are not implemented in this phase.</p>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
