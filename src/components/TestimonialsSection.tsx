import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="bg-paper-warm py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Kind words from couples</p>
          <h2 className="display text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] mt-7 text-ink kerning-tight">
            <span className="script text-burnish-deep">175+</span> five-star
            reviews on Google.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="bg-paper border border-line-soft p-9 lg:p-10 flex flex-col"
            >
              <div
                aria-hidden
                className="text-burnish display text-5xl leading-none -mb-2"
              >
                &ldquo;
              </div>
              <blockquote className="display text-[1.4rem] lg:text-[1.55rem] text-ink leading-[1.35] kerning-tight">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-8 text-[0.74rem] tracking-[0.22em] uppercase text-mute">
                <div className="text-burnish-deep">{t.author}</div>
                <div className="mt-1 normal-case tracking-normal text-mute/80 text-[0.9rem]">
                  {t.venue}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
