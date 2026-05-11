import Image from "next/image";
import Link from "next/link";
import { journal } from "@/lib/site";

export function JournalPreview() {
  const featured = journal.slice(0, 3);

  return (
    <section className="bg-paper-warm py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <p className="eyebrow">From the journal</p>
            <h2 className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mt-7 text-ink kerning-tight">
              Recent stories,
              <em className="script text-burnish-deep"> in long form.</em>
            </h2>
          </div>
          <Link href="/journal" className="link-arrow self-start">
            All journal posts
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/journal`}
              className="group block"
            >
              <div className="image-frame aspect-[4/5] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
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
  );
}
