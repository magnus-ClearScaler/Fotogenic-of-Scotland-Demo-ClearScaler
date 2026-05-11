import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="display text-[2rem] sm:text-[2.4rem] leading-[1.1] mt-8 text-paper/95 max-w-md kerning-tight">
              Honest, light-filled wedding photography &amp; films from Glasgow,
              Edinburgh and the Highlands.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-burnish">
                Begin an enquiry
              </Link>
              <Link href="/packages" className="btn-ghost-light">
                View packages
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow-light">Studio</p>
            <address className="not-italic mt-5 space-y-1 text-paper/80 text-[0.95rem] leading-relaxed">
              <div>{site.address.street}</div>
              <div>
                {site.address.city}, {site.address.postcode}
              </div>
              <div>{site.address.country}</div>
            </address>
            <div className="mt-7 space-y-1 text-paper/80 text-[0.95rem]">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="block hover:text-burnish-soft transition-colors"
              >
                {site.phone}
              </a>
              <a
                href={`tel:${site.mobile.replace(/\s/g, "")}`}
                className="block hover:text-burnish-soft transition-colors"
              >
                {site.mobile}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block hover:text-burnish-soft transition-colors mt-3"
              >
                {site.email}
              </a>
            </div>
            <p className="mt-7 text-[0.78rem] tracking-[0.16em] uppercase text-paper/55">
              {site.hours}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow-light">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-paper/80 hover:text-burnish-soft transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow-light">Follow</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.social.instagram}
                  className="text-[0.95rem] text-paper/80 hover:text-burnish-soft transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.pinterest}
                  className="text-[0.95rem] text-paper/80 hover:text-burnish-soft transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  className="text-[0.95rem] text-paper/80 hover:text-burnish-soft transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.youtube}
                  className="text-[0.95rem] text-paper/80 hover:text-burnish-soft transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-paper/45">
            © {year} Fotogenic of Scotland Ltd · Company SC728263
          </p>
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-paper/45">
            Photography &amp; film · Scotland &amp; worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
