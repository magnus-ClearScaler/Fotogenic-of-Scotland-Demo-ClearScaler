import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { galleries } from "@/lib/galleries";

export function ContactCTA() {
  const bg =
    galleries["hannah-alexander-dumfries-house"]?.[8] ??
    galleries["alexandra-angus-mount-stuart"]?.[3] ??
    "";
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/85" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <p className="eyebrow-light">Begin an enquiry</p>
        <h2 className="display text-[2.8rem] sm:text-[4rem] lg:text-[5.2rem] mt-7 text-paper kerning-tight">
          A few of our 2026 &amp; 2027 dates
          <em className="script text-burnish-soft"> are still open.</em>
        </h2>
        <p className="mt-7 max-w-2xl mx-auto text-paper/80 text-lg leading-[1.65]">
          Send the date, the venue, and a sentence about the two of you. We
          reply personally to every enquiry within 24 hours, with availability
          and a full brochure.
        </p>
        <div className="mt-11 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-burnish">
            Check our availability
          </Link>
          <a href={`mailto:${site.email}`} className="btn-ghost-light">
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
