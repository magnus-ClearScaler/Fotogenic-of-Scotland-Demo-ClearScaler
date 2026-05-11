import { press } from "@/lib/site";

export function PressStrip() {
  return (
    <section className="bg-ink text-paper py-16 lg:py-20 border-y border-paper/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
          <div className="flex items-center gap-4 lg:max-w-[18rem]">
            <span className="rule-light" />
            <p className="eyebrow-light">As featured in</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-1 lg:justify-between gap-x-8 gap-y-5">
            {press.map((name) => (
              <span
                key={name}
                className="display text-xl lg:text-2xl text-paper/85 kerning-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
