import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section className="bg-paper-warm py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="display text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] text-ink kerning-tight">
            What we make,
            <em className="script text-burnish-deep"> in four practices.</em>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block"
            >
              <div className="image-frame aspect-[3/4] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  className="object-cover"
                  quality={78}
                />
              </div>
              <h3 className="display text-[1.25rem] lg:text-[1.5rem] mt-5 text-ink kerning-tight group-hover:text-burnish-deep transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
