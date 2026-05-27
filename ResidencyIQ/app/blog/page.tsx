import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, PageContainer, Section } from '@/components/Section';
import { ArrowRight, FileCheck } from '@/components/Icons';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Residency Intelligence Articles | ResidencyIQ',
  description: 'Read practical articles on residency tracking, domicile evidence, behavioral continuity, and multi-state living.',
};

export default function BlogPage() {
  return <>
    <Header />
    <main>
      <section className="border-b border-gold/10">
        <PageContainer className="py-14 sm:py-16 lg:py-20">
          <p className="eyebrow">Residency Intelligence</p>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ivory sm:text-6xl">Residency tracking insights for multi-state living.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">Short, advisor-friendly articles on continuity, corroboration, exposure, and behavioral indicators.</p>
        </PageContainer>
      </section>
      <Section>
        <PageContainer>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => <Card key={post.slug} className="flex h-full flex-col">
              <FileCheck className="mb-5 text-gold" />
              <p className="text-xs uppercase tracking-[0.2em] text-gold-light">{post.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl text-ivory">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-graphite">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">Read article <ArrowRight size={16} /></Link>
            </Card>)}
          </div>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
