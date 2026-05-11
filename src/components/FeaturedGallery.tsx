import Image from "next/image";
import Link from "next/link";
import { featuredWeddings } from "@/lib/site";

export function FeaturedGallery() {
  const items = featuredWeddings;

  return (
    <section className="bg-paper-warm py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured weddings · 2024 – 2026</p>
            <h2 className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mt-7 text-ink kerning-tight">
              The day, told gently. Frame by quiet frame.
            </h2>
          </div>
          <div className="max-w-md text-mute leading-[1.7]">
            A small selection from the last two seasons — castles, country
            houses, glens and chapels. Click through for the full story behind
            each wedding.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[180px] lg:auto-rows-[240px]">
          {items.map((item, idx) => {
            const layout = layoutFor(idx);
            return (
              <Link
                key={`${item.couple}-${idx}`}
                href={`/weddings/${item.slug}`}
                className={`image-frame group relative ${layout}`}
              >
                <Image
                  src={item.cover}
                  alt={`${item.couple} at ${item.venue}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/0 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 text-paper">
                  <div className="text-[0.65rem] tracking-[0.28em] uppercase text-burnish-soft">
                    {item.location}
                  </div>
                  <div className="display text-2xl lg:text-[1.75rem] mt-1 kerning-tight">
                    {item.couple}
                  </div>
                  <div className="text-[0.85rem] text-paper/80 mt-1">
                    {item.venue}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="/weddings" className="link-arrow">
            View the full portfolio
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function layoutFor(idx: number) {
  const positions = [
    "col-span-2 lg:col-span-7 row-span-2",
    "col-span-2 lg:col-span-5 row-span-2",
    "col-span-2 lg:col-span-4 row-span-2",
    "col-span-2 lg:col-span-4 row-span-2",
    "col-span-2 lg:col-span-4 row-span-2",
    "col-span-2 lg:col-span-6 row-span-2",
    "col-span-2 lg:col-span-6 row-span-2",
  ];
  return positions[idx % positions.length];
}
