import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="bg-cream py-32 lg:py-44 border-t border-line-soft">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10 text-center">
        <h2 className="display text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] text-ink kerning-tight leading-[1.05]">
          Tell us about
          <em className="script text-burnish-deep"> your day.</em>
        </h2>
        <p className="mt-9 text-mute text-lg leading-[1.7] max-w-xl mx-auto">
          A few of our 2026 and 2027 dates are still open. Send the date, the
          venue, and a sentence about the two of you.
        </p>
        <div className="mt-12">
          <Link href="/contact" className="btn-primary">
            Begin an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
