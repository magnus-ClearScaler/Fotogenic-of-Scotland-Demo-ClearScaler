import { ContactCTA } from "@/components/ContactCTA";
import { FeaturedGallery } from "@/components/FeaturedGallery";
import { Hero } from "@/components/Hero";
import { IntroStatement } from "@/components/IntroStatement";
import { JournalPreview } from "@/components/JournalPreview";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <FeaturedGallery />
      <ServicesSection />
      <JournalPreview />
      <ContactCTA />
    </>
  );
}
