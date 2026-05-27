import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PrimaryButton } from '@/components/Buttons';
import { Card, PageContainer, Section } from '@/components/Section';
import { ArrowRight } from '@/components/Icons';
import { blogPosts, getBlogPost } from '@/lib/blog';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ResidencyIQ`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return <>
    <Header />
    <main>
      <section className="border-b border-gold/10">
        <PageContainer className="py-14 sm:py-16 lg:py-20">
          <p className="eyebrow">{post.eyebrow}</p>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ivory sm:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">{post.description}</p>
        </PageContainer>
      </section>
      <Section>
        <PageContainer className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <article className="glass-panel rounded-lg p-6 sm:p-8">
            {post.sections.map((section) => <section key={section.heading} className="border-b border-white/10 py-7 first:pt-0 last:border-b-0 last:pb-0">
              <h2 className="font-serif text-3xl text-ivory">{section.heading}</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{section.body}</p>
            </section>)}
          </article>
          <aside className="grid gap-4 self-start">
            <Card className="bg-[rgba(212,175,55,0.07)]">
              <h2 className="font-serif text-3xl text-ivory">Build your continuity profile.</h2>
              <p className="mt-4 text-sm leading-7 text-graphite">Organize behavioral indicators and advisor-ready evidence before year-end.</p>
              <PrimaryButton href="/app/dashboard" className="mt-6 w-full">View Demo Profile</PrimaryButton>
            </Card>
            <Card>
              <h2 className="font-serif text-3xl text-ivory">Related</h2>
              <div className="mt-5 grid gap-3">
                {related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-ivory hover:border-gold/35"><span>{item.title}</span><ArrowRight className="shrink-0 text-gold" size={15} /></Link>)}
              </div>
            </Card>
          </aside>
        </PageContainer>
      </Section>
    </main>
    <Footer />
  </>;
}
