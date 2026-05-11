import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    description: `${w.couple} were married at ${w.venue}, ${w.location}.`,
    openGraph: {
      title: `${w.couple} · ${w.venue}`,
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
  const idx = featuredWeddings.findIndex((w) => w.slug === slug);
  const next =
    featuredWeddings[(idx + 1) % featuredWeddings.length];

  return (
    <>
      <section className="bg-cream pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
          <Link
            href="/weddings"
            className="link-arrow text-mute hover:text-burnish-deep inline-flex"
          >
            <span aria-hidden>←</span>
            All weddings
          </Link>
          <p className="eyebrow mt-10">{wedding.date} · {wedding.location}</p>
          <h1 className="display text-ink text-[3.2rem] sm:text-[4.6rem] lg:text-[6rem] mt-6 leading-[0.95] kerning-tight">
            {wedding.couple}
          </h1>
          <p className="script text-burnish-deep text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] mt-2">
            at {wedding.venue}
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="image-frame aspect-[4/5] sm:aspect-[3/2] lg:aspect-[21/10] relative">
            <Image
              src={wedding.hero || wedding.cover}
              alt={`${wedding.couple} at ${wedding.venue}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 lg:pb-28">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <div className="space-y-6 text-charcoal leading-[1.85] text-[1.08rem]">
            {wedding.story.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "display text-[1.65rem] lg:text-[1.85rem] text-ink leading-[1.4] kerning-tight"
                    : ""
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <WeddingGallery
            images={images}
            alt={`${wedding.couple} at ${wedding.venue}`}
          />
        </div>
      </section>

      <section className="bg-paper-warm py-24 lg:py-32 border-t border-line-soft">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link href={`/weddings/${next.slug}`} className="group block">
            <p className="eyebrow text-center">Next wedding</p>
            <div className="image-frame aspect-[21/10] relative mt-10">
              <Image
                src={next.cover}
                alt={`${next.couple} at ${next.venue}`}
                fill
                sizes="100vw"
                className="object-cover"
                quality={86}
              />
              <div className="absolute inset-0 bg-ink/15 transition-colors duration-500 group-hover:bg-ink/0" />
            </div>
            <div className="mt-8 text-center">
              <h2 className="display text-[2.4rem] lg:text-[3.4rem] text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                {next.couple}
              </h2>
              <p className="script text-burnish-deep text-[1.4rem] lg:text-[1.8rem] mt-1">
                at {next.venue}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
