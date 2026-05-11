import Image from "next/image";
import Link from "next/link";
import { journal } from "@/lib/site";

export function JournalPreview() {
  const featured = journal.slice(0, 3);

  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <h2 className="display text-[2.4rem] lg:text-[3.2rem] text-ink kerning-tight">
            Journal
          </h2>
          <Link href="/journal" className="link-arrow">
            All stories
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 lg:gap-9">
          {featured.map((post) => (
            <Link key={post.slug} href={post.href} className="group block">
              <div className="image-frame aspect-[4/5] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  quality={84}
                />
              </div>
              <h3 className="display text-[1.45rem] lg:text-[1.65rem] mt-6 text-ink leading-[1.2] kerning-tight group-hover:text-burnish-deep transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
