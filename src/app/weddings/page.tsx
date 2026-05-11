import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { featuredWeddings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Photography Scotland",
  description:
    "Fine art documentary wedding photography across Scotland. Glasgow, Edinburgh, the Highlands and Islands. Selected weddings from the Fotogenic of Scotland portfolio.",
};

export default function WeddingsPage() {
  return (
    <>
      <section className="bg-cream pt-36 pb-16 lg:pt-44 lg:pb-20 text-center">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <p className="eyebrow fade-up">Weddings</p>
          <h1 className="display text-ink text-[3.2rem] sm:text-[4.4rem] lg:text-[5.6rem] mt-6 kerning-tight leading-[1.02] fade-up fade-up-1">
            Selected weddings,
            <em className="script text-burnish-deep"> 2023 to 2026.</em>
          </h1>
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {featuredWeddings.map((w, idx) => (
              <Link
                key={w.slug}
                href={`/weddings/${w.slug}`}
                className="group block"
              >
                <div className="image-frame aspect-[2/3] relative">
                  <Image
                    src={w.hero || w.cover}
                    alt={`${w.couple} at ${w.venue}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover"
                    loading={idx < 3 ? "eager" : "lazy"}
                    quality={80}
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2 className="display text-[1.45rem] lg:text-[1.65rem] text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                    {w.couple}
                  </h2>
                  <span className="text-[0.65rem] tracking-[0.28em] uppercase text-mute whitespace-nowrap">
                    {w.venue}
                  </span>
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
