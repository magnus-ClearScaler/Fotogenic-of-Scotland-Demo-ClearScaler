import Image from "next/image";
import Link from "next/link";
import { featuredWeddings } from "@/lib/site";

export function Hero() {
  const heroImage =
    featuredWeddings.find((w) => w.slug === "alexandra-angus-mount-stuart")
      ?.hero ?? featuredWeddings[0].hero;

  return (
    <section className="relative h-[100vh] min-h-[680px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="A bride and groom at Mount Stuart, Isle of Bute"
          fill
          priority
          sizes="100vw"
          className="object-cover slow-zoom"
          quality={88}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/65" />
      </div>

      <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          <p className="eyebrow-light fade-up fade-up-1">
            Wedding & lifestyle photography · Scotland
          </p>
          <h1 className="display text-paper text-[3.2rem] sm:text-[4.5rem] lg:text-[6rem] mt-7 leading-[0.98] fade-up fade-up-2 text-shadow-soft">
            Honest, light-filled
            <br />
            <em className="not-italic script text-[3.6rem] sm:text-[5rem] lg:text-[6.6rem] text-burnish-soft">
              love stories,
            </em>
            <br />
            made in Scotland.
          </h1>
          <p className="mt-8 max-w-xl text-paper/85 text-lg lg:text-xl leading-[1.65] font-light fade-up fade-up-3">
            Fine art Glasgow &amp; Edinburgh wedding photographers and
            filmmakers. Nineteen years of weddings, 700 stories told. Documentary
            coverage across Scotland, the Highlands &amp; Islands, and
            destination weddings abroad.
          </p>
          <div className="mt-11 flex flex-wrap gap-3 fade-up fade-up-4">
            <Link href="/contact" className="btn-burnish">
              Check our availability
            </Link>
            <Link href="/weddings" className="btn-ghost-light">
              View weddings
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-10 mt-12 fade-up fade-up-5">
          <div className="flex flex-wrap gap-12">
            <Stat figure="700+" label="Weddings photographed" />
            <Stat figure="19" label="Years in Scotland" />
            <Stat figure="175+" label="5-star Google reviews" />
          </div>
          <Link href="#story" className="link-arrow-light">
            Scroll
            <span aria-hidden>↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="text-paper">
      <div className="display text-4xl lg:text-5xl text-burnish-soft kerning-tight">
        {figure}
      </div>
      <div className="text-[0.7rem] tracking-[0.28em] uppercase text-paper/70 mt-2">
        {label}
      </div>
    </div>
  );
}
