import Link from "next/link";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: Props) {
  const color = variant === "light" ? "text-paper" : "text-ink";
  const accent = variant === "light" ? "text-burnish-soft" : "text-burnish-deep";

  return (
    <Link
      href="/"
      aria-label="Fotogenic of Scotland — home"
      className={`group inline-flex items-baseline gap-[0.6rem] ${color} ${className}`}
    >
      <span className="display text-[1.55rem] sm:text-[1.75rem] leading-none kerning-tight">
        Fotogenic
      </span>
      <span
        className={`text-[0.62rem] tracking-[0.34em] uppercase font-medium ${accent} mt-1`}
      >
        of Scotland
      </span>
    </Link>
  );
}
