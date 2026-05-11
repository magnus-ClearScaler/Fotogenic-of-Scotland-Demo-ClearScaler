import Image from "next/image";
import Link from "next/link";
import { featuredWeddings } from "@/lib/site";

export function FeaturedGallery() {
  return (
    <section className="bg-cream pt-4 pb-32 lg:pb-40">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {featuredWeddings.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/weddings/${item.slug}`}
              className={`group relative block ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`image-frame relative ${
                  idx === 0 || idx === 3
                    ? "aspect-[21/9]"
                    : idx % 2 === 1
                      ? "aspect-[4/5]"
                      : "aspect-[5/6]"
                }`}
              >
                <Image
                  src={item.cover}
                  alt={`${item.couple} at ${item.venue}`}
                  fill
                  sizes={
                    idx === 0 || idx === 3
                      ? "100vw"
                      : "(max-width: 1024px) 100vw, 50vw"
                  }
                  className="object-cover"
                  loading={idx < 2 ? "eager" : "lazy"}
                  quality={86}
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <h3 className="display text-[1.65rem] lg:text-[2rem] text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                  {item.couple}
                </h3>
                <span className="text-[0.7rem] tracking-[0.28em] uppercase text-mute whitespace-nowrap">
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
