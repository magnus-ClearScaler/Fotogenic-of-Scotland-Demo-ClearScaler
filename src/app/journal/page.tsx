import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactCTA } from "@/components/ContactCTA";
import { journal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal — Wedding & Lifestyle Stories",
  description:
    "Recent wedding stories, behind-the-scenes notes, and editorial features from the Fotogenic of Scotland journal.",
};

export default function JournalPage() {
  const [feature, ...rest] = journal;

  return (
    <>
      <PageHeader
        eyebrow="The journal"
        title={
          <>
            Long-form stories from the studio —
            <em className="script text-burnish-deep"> weddings, films, the practice of seeing.</em>
          </>
        }
        intro="Recent weddings in detail, notes from the edit room, and a few essays on the craft. We publish around once a month."
      />

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link
            href={feature.href}
            className="group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-7 image-frame aspect-[5/3] relative">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.28em] uppercase text-mute">
                <span className="tag-pill">{feature.category}</span>
                <time dateTime={feature.date}>
                  {new Date(feature.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h2 className="display text-[2.6rem] lg:text-[3.4rem] mt-6 text-ink kerning-tight leading-[1.05] group-hover:text-burnish-deep transition-colors">
                {feature.title}
              </h2>
              <p className="mt-6 text-mute leading-[1.75] text-[1.05rem]">
                {feature.excerpt}
              </p>
              <span className="link-arrow mt-9 inline-flex">
                Read the story
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-paper-warm py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group block"
              >
                <div className="image-frame aspect-[4/5] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.28em] uppercase text-mute">
                    <span className="text-burnish-deep">{post.category}</span>
                    <span aria-hidden>·</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                  </div>
                  <h3 className="display text-[1.7rem] lg:text-[1.85rem] mt-4 text-ink leading-[1.15] kerning-tight group-hover:text-burnish-deep transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-mute leading-[1.65] text-[0.98rem]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
