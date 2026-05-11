import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Begin an Enquiry",
  description:
    "Begin an enquiry with Fotogenic of Scotland. We reply personally to every enquiry within 24 hours. Glasgow studio: 77 Berkeley Street.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Begin an enquiry"
        title={
          <>
            Tell us about the day.
            <em className="script text-burnish-deep"> We will reply within 24 hours.</em>
          </>
        }
        intro="Every enquiry comes to one of the photographers, not to an assistant. We reply with availability, a quote, and the full brochure within a day."
      />

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-line-soft">
              <p className="eyebrow">Studio</p>
              <address className="not-italic mt-5 text-charcoal text-[1.05rem] leading-[1.7]">
                <div className="display text-[1.65rem] text-ink">Berkeley Street, Glasgow</div>
                <div className="mt-2">{site.address.street}</div>
                <div>
                  {site.address.city}, {site.address.postcode}
                </div>
                <div>{site.address.country}</div>
              </address>

              <div className="mt-9">
                <p className="eyebrow">Direct</p>
                <ul className="mt-5 space-y-3 text-[1.02rem]">
                  <li>
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="text-ink hover:text-burnish-deep transition-colors"
                    >
                      Studio · {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.mobile.replace(/\s/g, "")}`}
                      className="text-ink hover:text-burnish-deep transition-colors"
                    >
                      Mobile · {site.mobile}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink hover:text-burnish-deep transition-colors"
                    >
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-9">
                <p className="eyebrow">Hours</p>
                <p className="mt-4 text-charcoal text-[1.02rem]">
                  {site.hours}
                </p>
                <p className="mt-2 text-mute text-[0.95rem]">
                  Closed on wedding days. We will reply on the next working day.
                </p>
              </div>

              <div className="mt-9">
                <p className="eyebrow">Follow</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-burnish-deep transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.social.pinterest}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-burnish-deep transition-colors"
                  >
                    Pinterest
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-burnish-deep transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-burnish-deep transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
