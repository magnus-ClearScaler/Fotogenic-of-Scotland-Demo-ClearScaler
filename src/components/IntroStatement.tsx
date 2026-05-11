import Image from "next/image";

export function IntroStatement() {
  return (
    <section id="story" className="bg-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
        <p className="display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] text-ink leading-[1.1] kerning-tight">
          The beauty of a wedding day is the meeting of hearts,
          <em className="script text-burnish-deep"> the longing,</em> the joy
          of family, the quiet moments that make it shine.
        </p>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-20 lg:mt-28">
        <div className="image-frame aspect-[16/9] lg:aspect-[21/9] relative">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2880&q=90"
            alt="A wedding portrait at golden hour in the Scottish Highlands"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
