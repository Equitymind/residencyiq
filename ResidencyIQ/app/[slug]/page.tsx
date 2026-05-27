import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrimaryButton } from '@/components/Buttons';
import { Card, PageContainer, Section } from '@/components/Section';
import { ArrowRight, Check, FileCheck, MapPin, Shield } from '@/components/Icons';
import { alsoConsidering, getMigrationPage, migrationPages } from '@/lib/migrations';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return migrationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMigrationPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | ResidencyIQ`,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function MigrationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMigrationPage(slug);
  if (!page) notFound();
  const links = alsoConsidering(page.slug);

  return <>
    <Header />
    <main>
      <section className="border-b border-gold/10">
        <PageContainer className="py-14 sm:py-18 lg:py-20">
          <p className="eyebrow">Residency Migration Intelligence</p>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ivory sm:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">{page.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-graphite">
            <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2">From {page.from}</span>
            <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2">To {page.to}</span>
            <span className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2">Behavioral indicators</span>
          </div>
        </PageContainer>
      </section>

      <Section>
        <PageContainer className="grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <Card>
            <MapPin className="mb-5 text-gold" />
            <h2 className="font-serif text-4xl text-ivory">Behavioral overview</h2>
            <p className="mt-5 text-base leading-8 text-graphite">{page.overview}</p>
          </Card>
          <Card>
            <Shield className="mb-5 text-gold" />
            <h2 className="font-serif text-4xl text-ivory">Key residency indicators</h2>
            <div className="mt-5 grid gap-3">
              {page.indicators.map((item) => <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4"><Check className="mt-0.5 shrink-0 text-gold" size={17} /><span className="text-sm leading-6 text-ivory">{item}</span></div>)}
            </div>
          </Card>
        </PageContainer>
      </Section>

      <Section className="border-y border-gold/10 bg-white/[0.018]">
        <PageContainer className="grid gap-6 lg:grid-cols-2">
          <Card>
            <FileCheck className="mb-5 text-gold" />
            <h2 className="font-serif text-4xl text-ivory">Common continuity mistakes</h2>
            <div className="mt-5 grid gap-3">
              {page.mistakes.map((item) => <div key={item} className="rounded-lg border border-risk/20 bg-risk/5 p-4 text-sm leading-6 text-ivory">{item}</div>)}
            </div>
          </Card>
          <Card>
            <MapPin className="mb-5 text-gold" />
            <h2 className="font-serif text-4xl text-ivory">Lifestyle, relationship, and travel considerations</h2>
            <div className="mt-5 grid gap-3">
              {page.considerations.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-ivory">{item}</div>)}
            </div>
          </Card>
        </PageContainer>
      </Section>

      <Section>
        <PageContainer>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Card>
              <h2 className="font-serif text-4xl text-ivory">Also Considering</h2>
              <div className="mt-6 grid gap-3">
                {links.map((link) => <Link key={link.slug} href={`/${link.slug}`} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-ivory transition hover:border-gold/35 hover:bg-gold/5"><span>{link.title}</span><ArrowRight className="shrink-0 text-gold" size={16} /></Link>)}
              </div>
            </Card>
            <Card className="bg-[rgba(212,175,55,0.07)]">
              <h2 className="font-serif text-4xl text-ivory">Start your ResidencyIQ continuity profile.</h2>
              <p className="mt-5 text-sm leading-7 text-graphite">Organize evidence, track behavioral indicators, and prepare advisor-ready residency intelligence before questions arise.</p>
              <PrimaryButton href="/app/dashboard" className="mt-7 w-full">Start your ResidencyIQ continuity profile</PrimaryButton>
            </Card>
          </div>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
