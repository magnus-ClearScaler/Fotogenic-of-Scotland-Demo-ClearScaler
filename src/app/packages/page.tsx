import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { packages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Photography Packages",
  description:
    "Wedding photography packages from Fotogenic of Scotland — Digital, Box, Classic Album and Storybook. Glasgow & Edinburgh studio, Scotland and destination weddings.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wedding packages"
        title={
          <>
            Four ways to keep the day —
            <em className="script text-burnish-deep"> all built around the album.</em>
          </>
        }
        intro="Pricing is tailored to the wedding. Send us the date, the venue and a sentence about the two of you, and we will reply with the full brochure and a quote within 24 hours."
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {packages.map((pkg) => {
              const featured = "featured" in pkg && pkg.featured;
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-8 lg:p-10 ${
                    featured
                      ? "bg-ink text-paper lg:-mt-4 lg:pt-12 lg:pb-12"
                      : "bg-paper border border-line-soft"
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
                  <Link
                    href="/contact"
                    className={`mt-9 text-[0.72rem] tracking-[0.28em] uppercase font-medium inline-flex items-center gap-2 ${
                      featured ? "text-burnish-soft" : "text-ink"
                    } hover:gap-3 transition-all`}
                  >
                    Request brochure
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow">Films</p>
              <h2 className="display text-[2.6rem] lg:text-[3.4rem] mt-7 text-ink kerning-tight">
                Or add a film.
                <em className="script text-burnish-deep"> A short and a long.</em>
              </h2>
              <p className="mt-7 text-mute leading-[1.7]">
                Wedding films are a separate practice in the studio, available
                as an add-on to any photography package. You receive two films
                from the day: a four-to-six minute highlight, and a fifteen-to-
                twenty minute documentary edit.
              </p>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8 self-center">
              {[
                ["Two filmmakers", "All day, alongside the photographers."],
                ["Discreet kit", "Mirrorless, on-camera mics, no rigs."],
                ["Cinematic edit", "Story-led, paced like a film."],
                ["Two films", "A short and a long-form documentary."],
                ["Ambient sound", "Real voices, real toasts, never library."],
                ["Delivered in 8 weeks", "Online and downloadable."],
              ].map(([title, desc]) => (
                <li key={title}>
                  <div className="display text-[1.65rem] text-ink kerning-tight">
                    {title}
                  </div>
                  <p className="mt-2 text-mute leading-[1.7] text-[0.98rem]">
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32 border-t border-line-soft">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="display text-[2.6rem] lg:text-[3.4rem] mt-7 text-ink kerning-tight">
              The questions we are asked most.
            </h2>
          </div>
          <div className="mt-14 max-w-3xl mx-auto divide-y divide-line-soft">
            {[
              {
                q: "How far in advance should we book?",
                a: "We are typically booked 12 to 18 months out for peak Saturdays. Off-peak dates and weekday weddings often have shorter notice.",
              },
              {
                q: "Do you travel?",
                a: "Yes. Glasgow is home, but a third of our weddings are outside the central belt and several each year are destination weddings abroad.",
              },
              {
                q: "Are travel costs included?",
                a: "Within the Scottish central belt, yes. Beyond, we add travel at cost — flights, an overnight stay if needed, fuel. No mark-ups.",
              },
              {
                q: "Two photographers — always?",
                a: "Always, on every package. A lead and a second. The lead handles the directed work, the second covers the moments that would otherwise be missed.",
              },
              {
                q: "When do we get the photographs?",
                a: "Within four to six weeks. A first-look preview within 72 hours. The album, if you ordered one, follows about ten weeks after we agree the design.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes. A booking fee secures the date and the rest is split into payments due at four months, one month and on the day. No interest, no admin.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-7">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="display text-[1.5rem] lg:text-[1.7rem] text-ink kerning-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="text-burnish-deep text-2xl mt-1 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-mute leading-[1.75] max-w-2xl">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
