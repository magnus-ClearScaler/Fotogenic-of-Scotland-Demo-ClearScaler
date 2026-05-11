import Link from "next/link";
import { packages } from "@/lib/site";

export function PackagesPreview() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Wedding photography packages</p>
            <h2 className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mt-7 text-ink kerning-tight">
              Four ways to keep the day.
            </h2>
          </div>
          <p className="max-w-md text-mute leading-[1.7]">
            Pricing tailored to the wedding. Send us the date through the form
            and we will reply with the full brochure within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {packages.map((pkg) => {
            const featured = "featured" in pkg && pkg.featured;
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-8 lg:p-9 transition-all duration-300 ${
                  featured
                    ? "bg-ink text-paper -mt-0 lg:-mt-6 lg:pt-12 lg:pb-12"
                    : "bg-paper border border-line-soft hover:border-burnish"
                }`}
              >
                {featured && (
                  <span className="absolute top-4 right-4 text-[0.62rem] tracking-[0.28em] uppercase text-burnish-soft border border-burnish-soft/60 px-2 py-1">
                    Most chosen
                  </span>
                )}
                <p
                  className={`eyebrow ${
                    featured ? "!text-burnish-soft" : ""
                  }`}
                >
                  {pkg.pitch}
                </p>
                <h3
                  className={`display text-[2.4rem] mt-4 kerning-tight ${
                    featured ? "text-paper" : "text-ink"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-3 text-[0.95rem] leading-[1.65] ${
                    featured ? "text-paper/85" : "text-mute"
                  }`}
                >
                  {pkg.summary}
                </p>
                <ul
                  className={`mt-7 space-y-2.5 text-[0.92rem] ${
                    featured ? "text-paper/90" : "text-charcoal"
                  }`}
                >
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`mt-2 inline-block w-1 h-1 rounded-full ${
                          featured ? "bg-burnish-soft" : "bg-burnish"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="/packages" className="link-arrow">
            See full package details
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
