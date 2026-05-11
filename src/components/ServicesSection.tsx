import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mt-7 text-ink kerning-tight">
            Four practices,
            <em className="script text-burnish-deep"> one studio.</em>
          </h2>
          <p className="mt-7 text-mute leading-[1.7] text-[1.05rem]">
            Weddings are the heart of the work, but the studio shoots across
            disciplines — and the way we move between them keeps the wedding
            work alive.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-x-12 gap-y-20">
          {services.map((service, idx) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block"
            >
              <div className="image-frame aspect-[5/4] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute top-5 left-5 text-paper">
                  <span className="text-[0.7rem] tracking-[0.28em] uppercase bg-ink/55 backdrop-blur-sm px-3 py-1.5">
                    0{idx + 1}
                  </span>
                </div>
              </div>
              <div className="mt-7">
                <p className="eyebrow">{service.sub}</p>
                <h3 className="display text-3xl lg:text-[2.4rem] mt-3 text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-mute leading-[1.7] max-w-lg">
                  {service.body}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.28em] uppercase text-ink font-medium group-hover:text-burnish-deep transition-colors">
                  Explore
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
