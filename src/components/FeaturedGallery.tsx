import Image from "next/image";
import Link from "next/link";
import { featuredWeddings } from "@/lib/site";

export function FeaturedGallery() {
  return (
    <section className="bg-cream pt-4 pb-32 lg:pb-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {featuredWeddings.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/weddings/${item.slug}`}
              className="group block"
            >
              <div className="image-frame aspect-[2/3] relative">
                <Image
                  src={item.hero || item.cover}
                  alt={`${item.couple} at ${item.venue}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                  loading={idx < 3 ? "eager" : "lazy"}
                  quality={80}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="display text-[1.45rem] lg:text-[1.65rem] text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                  {item.couple}
                </h3>
                <span className="text-[0.65rem] tracking-[0.28em] uppercase text-mute whitespace-nowrap">
                  {item.venue}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
