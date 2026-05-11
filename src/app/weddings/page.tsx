import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { featuredWeddings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Photography Scotland",
  description:
    "Fine art documentary wedding photography across Scotland — Glasgow, Edinburgh, the Highlands & Islands. Selected weddings from the Fotogenic of Scotland portfolio.",
};

export default function WeddingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wedding photography"
        title={
          <>
            The day, gently told.{" "}
            <em className="script text-burnish-deep">Frame by frame.</em>
          </>
        }
        intro="A documentary, fine art approach. Two photographers, one director's eye. Light-led portraits, the moments in between, and a finished gallery that feels like the day itself."
      />

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[280px]">
            {featuredWeddings.map((w, idx) => {
              const layouts = [
                "col-span-2 lg:col-span-8 row-span-2",
                "col-span-2 lg:col-span-4 row-span-2",
                "col-span-2 lg:col-span-4 row-span-2",
                "col-span-2 lg:col-span-4 row-span-2",
                "col-span-2 lg:col-span-4 row-span-2",
                "col-span-2 lg:col-span-7 row-span-2",
                "col-span-2 lg:col-span-5 row-span-2",
                "col-span-2 lg:col-span-12 row-span-2",
              ];
              return (
                <Link
                  key={`${w.couple}-${idx}`}
                  href="/contact"
                  className={`image-frame group relative ${layouts[idx % layouts.length]}`}
                >
                  <Image
                    src={w.image}
                    alt={`${w.couple} at ${w.venue}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 text-paper">
                    <div className="text-[0.65rem] tracking-[0.28em] uppercase text-burnish-soft">
                      {w.location}
                    </div>
                    <div className="display text-2xl lg:text-3xl mt-1 kerning-tight">
                      {w.couple}
                    </div>
                    <div className="text-[0.9rem] text-paper/85 mt-1">
                      {w.venue}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow">What every wedding includes</p>
              <h2 className="display text-[2.6rem] lg:text-[3.4rem] mt-7 text-ink kerning-tight">
                The standards of the studio.
              </h2>
              <p className="mt-7 text-mute leading-[1.7]">
                Every wedding, regardless of package, is photographed to the
                same standard. No upsells once you have booked. No surprises in
                the post.
              </p>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8 self-center">
              {[
                ["Two photographers", "A lead and a second, all day."],
                ["Documentary first", "Direction only when it helps."],
                ["Hand-edited", "Every frame, never AI."],
                ["Online gallery", "Within four to six weeks."],
                ["Print release", "Yours to print, share, keep."],
                ["Archival storage", "Backed up in three locations."],
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

      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
