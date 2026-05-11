import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { WeddingGallery } from "@/components/WeddingGallery";
import { featuredWeddings } from "@/lib/site";
import { galleries } from "@/lib/galleries";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return featuredWeddings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const w = featuredWeddings.find((x) => x.slug === slug);
  if (!w) return {};
  return {
    title: `${w.couple} at ${w.venue}`,
    description: `${w.couple} were married at ${w.venue}, ${w.location}. ${w.story[0].slice(0, 140)}`,
    openGraph: {
      title: `${w.couple} · ${w.venue}`,
      description: w.story[0].slice(0, 200),
      images: [w.hero || w.cover],
    },
  };
}

export default async function WeddingDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const wedding = featuredWeddings.find((w) => w.slug === slug);
  if (!wedding) notFound();

  const images = galleries[slug] ?? [];
  const otherWeddings = featuredWeddings
    .filter((w) => w.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={wedding.hero || wedding.cover}
            alt={`${wedding.couple} at ${wedding.venue}`}
            fill
            priority
            sizes="100vw"
            className="object-cover slow-zoom"
            quality={88}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/15 to-ink/75" />
        </div>

        <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-16 flex flex-col justify-end">
          <Link
            href="/weddings"
            className="self-start link-arrow-light fade-up"
          >
            <span aria-hidden>←</span>
            All weddings
          </Link>
          <p className="eyebrow-light mt-9 fade-up fade-up-1">
            {wedding.location} · {wedding.date}
          </p>
          <h1 className="display text-paper text-[3.2rem] sm:text-[4.5rem] lg:text-[6rem] mt-5 leading-[0.98] fade-up fade-up-2 text-shadow-soft">
            {wedding.couple}
          </h1>
          <p className="display text-burnish-soft text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] mt-2 fade-up fade-up-3 script">
            at {wedding.venue}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="eyebrow">The story</p>
              <div className="mt-7 space-y-5 text-charcoal leading-[1.8] text-[1.08rem]">
                {wedding.story.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "display text-[1.65rem] lg:text-[1.9rem] text-ink leading-[1.4] kerning-tight"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-line-soft">
              <p className="eyebrow">The day</p>
              <dl className="mt-6 divide-y divide-line-soft">
                {wedding.details.map((d) => (
                  <div key={d.label} className="py-4 flex justify-between gap-6">
                    <dt className="text-[0.72rem] tracking-[0.28em] uppercase text-mute pt-1.5">
                      {d.label}
                    </dt>
                    <dd className="display text-[1.25rem] text-ink text-right kerning-tight">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-9 pt-7 border-t border-line-soft">
                <Link href="/contact" className="btn-primary">
                  Enquire for a similar day
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">The gallery</p>
              <h2 className="display text-[2.4rem] lg:text-[3.2rem] mt-5 text-ink kerning-tight">
                {images.length} photographs from the day.
              </h2>
            </div>
            <p className="text-mute leading-[1.65] max-w-md">
              A selection from {wedding.couple}&rsquo;s full gallery. The
              complete set, around three to four hundred frames, is delivered
              privately online within six weeks of the wedding.
            </p>
          </div>
          <WeddingGallery images={images} alt={`${wedding.couple} at ${wedding.venue}`} />
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32 border-t border-line-soft">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <h2 className="display text-[2.4rem] lg:text-[3.2rem] text-ink kerning-tight">
              More recent weddings.
            </h2>
            <Link href="/weddings" className="link-arrow self-start">
              View the full portfolio
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {otherWeddings.map((w) => (
              <Link
                key={w.slug}
                href={`/weddings/${w.slug}`}
                className="group block"
              >
                <div className="image-frame aspect-[4/5] relative">
                  <Image
                    src={w.cover}
                    alt={`${w.couple} at ${w.venue}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <div className="text-[0.65rem] tracking-[0.28em] uppercase text-burnish-deep">
                    {w.location}
                  </div>
                  <div className="display text-[1.55rem] mt-2 text-ink group-hover:text-burnish-deep transition-colors kerning-tight">
                    {w.couple}
                  </div>
                  <div className="text-[0.92rem] text-mute mt-1">
                    {w.venue}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
