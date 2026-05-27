export function SectionHeader({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">{eyebrow && <p className="mx-auto mb-4 eyebrow">{eyebrow}</p>}<h2 className="font-serif text-4xl font-semibold leading-tight text-ivory sm:text-5xl">{title}</h2>{copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-graphite sm:text-lg">{copy}</p>}</div>;
}
