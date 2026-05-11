import { notableClients } from "@/lib/site";

export function NotableClients() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Selected portraiture</p>
            <h2 className="display text-[2.6rem] sm:text-[3.2rem] mt-6 text-ink kerning-tight">
              Faces we have had the privilege of photographing.
            </h2>
            <p className="mt-6 text-mute leading-[1.7] max-w-md">
              A small list. The studio&rsquo;s editorial work has put us in
              front of actors, musicians, painters and Olympians, and on
              wedding days alongside many of them too.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-1">
              {notableClients.map((person) => (
                <li
                  key={person}
                  className="border-b border-line-soft py-4 display text-[1.5rem] lg:text-[1.65rem] text-ink kerning-tight"
                >
                  {person}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
