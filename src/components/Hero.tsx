import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2880&q=90"
          alt="A bride and groom in soft Scottish light"
          fill
          priority
          sizes="100vw"
          className="object-cover slow-zoom"
          quality={92}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/55" />
      </div>

      <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-12 flex items-end pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow-light fade-up">Scotland · since 2006</p>
          <h1 className="display text-paper text-[3.2rem] sm:text-[4.6rem] lg:text-[6.2rem] mt-6 leading-[0.95] fade-up fade-up-1 text-shadow-soft">
            Wedding photography,
            <br />
            <em className="not-italic script text-[3.6rem] sm:text-[5rem] lg:text-[6.6rem] text-paper/95">
              quietly made.
            </em>
          </h1>
          <div className="mt-10 fade-up fade-up-2">
            <Link href="/weddings" className="link-arrow-light">
              View the weddings
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
