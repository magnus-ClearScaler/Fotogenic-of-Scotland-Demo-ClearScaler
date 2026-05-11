import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Lifestyle, Editorial & Commercial Photography",
  description:
    "Editorial portraiture, hospitality and interiors, food, fashion and brand commissions from Fotogenic of Scotland. Studio and on-location work across Scotland and beyond.",
};

const lifestyleWork = [
  {
    title: "Cromlix Hotel",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Glenapp Castle",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Bridal editorial",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Heritage interiors",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Restaurant feature",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Brand portraiture",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
  },
];

const disciplines = [
  {
    name: "Editorial",
    body:
      "Portraits and long-form features for magazines, books and brands. Patient, considered, often quiet.",
  },
  {
    name: "Fashion",
    body:
      "Studio and on-location lookbooks, bridal couture, and seasonal campaigns. Years of editorial roots in the work.",
  },
  {
    name: "Hospitality",
    body:
      "Hotels, country houses, restaurants. Architecture, interiors, ambient food and the human details that sell a room.",
  },
  {
    name: "Commercial",
    body:
      "Brand commissions, product features, behind-the-scenes documentary. Built around your art direction or led by ours.",
  },
];

export default function LifestylePage() {
  return (
    <>
      <PageHeader
        eyebrow="Lifestyle · Editorial · Commercial"
        title={
          <>
            Work beyond the wedding aisle.
            <em className="script text-burnish-deep"> In studio, on location, in print.</em>
          </>
        }
        intro="A second strand of the practice. The fashion-rooted eye behind our weddings, applied to hotels, hospitality, food, interiors and brand portraiture."
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {lifestyleWork.map((w) => (
              <div key={w.title} className="image-frame aspect-[4/5] relative">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink/75 to-transparent text-paper">
                  <div className="text-[0.65rem] tracking-[0.28em] uppercase text-burnish-soft">
                    {w.category}
                  </div>
                  <div className="display text-xl mt-1 kerning-tight">
                    {w.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow">Disciplines</p>
              <h2 className="display text-[2.6rem] lg:text-[3.2rem] mt-7 text-ink kerning-tight">
                One studio,
                <em className="script text-burnish-deep"> many practices.</em>
              </h2>
              <p className="mt-7 text-mute leading-[1.7]">
                Commercial briefs from £950. Pitch us anything from a single
                portrait to a season&rsquo;s campaign. We will tell you whether
                we are the right fit.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {disciplines.map((d) => (
                <div key={d.name}>
                  <div className="display text-[1.85rem] text-ink kerning-tight">
                    {d.name}
                  </div>
                  <p className="mt-3 text-mute leading-[1.7]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
