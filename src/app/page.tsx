import { ContactCTA } from "@/components/ContactCTA";
import { FeaturedGallery } from "@/components/FeaturedGallery";
import { Hero } from "@/components/Hero";
import { IntroStatement } from "@/components/IntroStatement";
import { JournalPreview } from "@/components/JournalPreview";
import { NotableClients } from "@/components/NotableClients";
import { PackagesPreview } from "@/components/PackagesPreview";
import { PressStrip } from "@/components/PressStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VenuesSection } from "@/components/VenuesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <PressStrip />
      <FeaturedGallery />
      <ServicesSection />
      <TestimonialsSection />
      <NotableClients />
      <VenuesSection />
      <PackagesPreview />
      <JournalPreview />
      <ContactCTA />
    </>
  );
}
