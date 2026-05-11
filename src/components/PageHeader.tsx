type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="bg-cream pt-36 pb-20 lg:pt-48 lg:pb-28 border-b border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl">
          <p className="eyebrow fade-up">{eyebrow}</p>
          <h1 className="display text-[3.2rem] sm:text-[4.4rem] lg:text-[5.6rem] mt-7 text-ink kerning-tight fade-up fade-up-1">
            {title}
          </h1>
          {intro && (
            <p className="mt-9 max-w-2xl text-mute text-lg leading-[1.7] fade-up fade-up-2">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
