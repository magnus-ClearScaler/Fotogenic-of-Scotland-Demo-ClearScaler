"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-line-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between h-[78px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[0.72rem] uppercase tracking-[0.28em] font-medium transition-colors duration-300 ${
                    active
                      ? "text-burnish-deep"
                      : "text-ink hover:text-burnish-deep"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-burnish" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-[0.72rem] tracking-[0.22em] uppercase text-mute hover:text-ink transition-colors"
            >
              {site.phone}
            </a>
            <Link href="/contact" className="btn-primary !py-3 !px-5">
              Enquire
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          >
            <span className="relative w-6 h-3 block">
              <span
                className={`absolute left-0 top-0 w-full h-px bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-px bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line-soft bg-cream">
          <div className="px-6 py-8 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="display text-3xl text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-line-soft mt-3 flex flex-col gap-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-[0.72rem] tracking-[0.28em] uppercase text-mute"
              >
                {site.phone}
              </a>
              <Link href="/contact" className="btn-primary self-start">
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
