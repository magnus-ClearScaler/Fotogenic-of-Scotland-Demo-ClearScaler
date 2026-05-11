import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { PressStrip } from "@/components/PressStrip";
import { NotableClients } from "@/components/NotableClients";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "About Fotogenic of Scotland — a Glasgow & Edinburgh wedding and lifestyle photography studio. Nineteen years in Scotland, 700 weddings, published in Vogue, Condé Nast and Marie Claire.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The studio"
        title={
          <>
            Nineteen years.
            <em className="script text-burnish-deep"> Seven hundred weddings.</em>
            <br />
            One quiet way of working.
          </>
        }
        intro="A Glasgow studio led by a photographer with editorial roots and a long memory for light. We work in a small team because the work demands it."
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="image-frame aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1400&q=85"
                  alt="A photographer at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-[0.74rem] tracking-[0.22em] uppercase text-mute">
                <span className="rule mr-3 align-middle" />
                The studio, Berkeley Street, Glasgow
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow">Our story</p>
              <h2 className="display text-[2.4rem] lg:text-[3rem] mt-6 text-ink kerning-tight">
                We started by photographing fashion, then fell in love with
                weddings —
                <em className="script text-burnish-deep">
                  {" "}
                  and never quite shook either out of the work.
                </em>
              </h2>
              <div className="mt-9 space-y-5 text-charcoal leading-[1.8] text-[1.05rem]">
                <p>
                  Fotogenic of Scotland was founded in Glasgow in the mid-2000s
                  by Michael, a Scottish photographer trained in editorial and
                  fashion. The first decade was magazines, models, and the
                  occasional wedding. The wedding work crept up on us, and now
                  it is the heart of the studio.
                </p>
                <p>
                  We have been honoured to photograph hundreds of weddings
                  across Scotland and abroad, from quiet ceremonies on Skye to
                  grand affairs at Mount Stuart and Dumfries House. We have
                  shared a viewfinder with Brian Cox, Jamie Dornan, Lara Stone
                  and Emeli Sandé. We have been published in Vogue Brides, Condé
                  Nast Traveler, Marie Claire and Elle.
                </p>
                <p>
                  And still, every wedding is photographed the same way:
                  carefully, quietly, with two photographers and one director&rsquo;s
                  eye. We turn down more dates than we take. We keep the
                  practice small for a reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PressStrip />

      <section className="bg-paper-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">The team</p>
            <h2 className="display text-[2.6rem] lg:text-[3.4rem] mt-7 text-ink kerning-tight">
              Four people. Two cameras.
              <em className="script text-burnish-deep"> One quiet hand on every print.</em>
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map((m) => (
              <div key={m.name}>
                <div className="image-frame aspect-[4/5] relative">
                  <Image
                    src={`https://images.unsplash.com/photo-${imageFor(m.name)}?auto=format&fit=crop&w=1000&q=80`}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale-[15%]"
                  />
                </div>
                <p className="eyebrow mt-6">{m.role}</p>
                <h3 className="display text-[1.85rem] mt-2 text-ink kerning-tight">
                  {m.name}
                </h3>
                <p className="mt-3 text-mute leading-[1.7] text-[0.96rem]">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NotableClients />
      <ContactCTA />
    </>
  );
}

function imageFor(name: string) {
  const map: Record<string, string> = {
    Michael: "1507003211169-0a1dd7228f2d",
    Alicja: "1494790108377-be9c29b29330",
    Harrison: "1500648767791-00dcc994a43e",
    Bart: "1531123897727-8f129e1688ce",
  };
  return map[name] ?? "1507003211169-0a1dd7228f2d";
}
