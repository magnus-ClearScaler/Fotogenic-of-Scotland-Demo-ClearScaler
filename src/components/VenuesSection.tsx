import Image from "next/image";
import { venues, regions } from "@/lib/site";

export function VenuesSection() {
  return (
    <section className="bg-ink text-paper py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow-light">Where we photograph</p>
            <h2 className="display text-[2.6rem] sm:text-[3.2rem] lg:text-[4rem] mt-7 text-paper kerning-tight">
              From castles to coastlines,
              <em className="script text-burnish-soft"> all of Scotland.</em>
            </h2>
            <p className="mt-7 text-paper/75 leading-[1.7]">
              Glasgow and Edinburgh sit at the heart of the practice. From there
              we travel across the country and beyond — and we know the venues
              well enough to plan the day around the best light.
            </p>
            <div className="mt-10">
              <p className="eyebrow-light">Areas served</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="text-[0.72rem] tracking-[0.22em] uppercase border border-paper/22 px-3 py-1.5 text-paper/85"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow-light">Recommended venues</p>
            <ul className="mt-5 divide-y divide-paper/12">
              {venues.map((v) => (
                <li
                  key={v.name}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="display text-2xl lg:text-[1.95rem] text-paper kerning-tight">
                    {v.name}
                  </span>
                  <span className="text-[0.74rem] tracking-[0.22em] uppercase text-paper/55">
                    {v.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
