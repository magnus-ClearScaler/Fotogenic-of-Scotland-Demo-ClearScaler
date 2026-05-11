import Image from "next/image";

export function IntroStatement() {
  return (
    <section id="story" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow">A photography studio in Glasgow</p>
            <h2 className="display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] mt-7 text-ink kerning-tight">
              The beauty of a wedding day is the meeting of hearts,
              <em className="script text-burnish-deep"> the longing, </em>
              the joy of family, the quiet moments that make it shine.
            </h2>
            <div className="mt-9 grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl">
              <p className="text-mute leading-[1.7] text-[1.02rem]">
                We have photographed in Scotland for nineteen years, and we are
                committed to capturing the spirit of the day, not a list of
                shots. Documentary, fine art, with a background in fashion and
                editorial.
              </p>
              <p className="text-mute leading-[1.7] text-[1.02rem]">
                Our work has been published in Vogue Brides, Condé Nast
                Traveler, Marie Claire and Elle. We have photographed
                bridesmaids called Keira and grooms called Brian, and we have
                quietly become one of Scotland&rsquo;s most-booked studios.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-[0.78rem] tracking-[0.22em] uppercase text-mute">
              <span>
                <span className="rule mr-3" />
                Documentary
              </span>
              <span>Fine Art</span>
              <span>Editorial</span>
              <span>Cinematic Film</span>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="image-frame aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85"
                alt="A quiet bridal portrait in soft Scottish daylight"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[0.74rem] tracking-[0.22em] uppercase text-mute">
              <span className="rule mr-3 align-middle" />
              Alexandra &amp; Angus · Mount Stuart, Isle of Bute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
