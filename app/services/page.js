import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import ServicesCatalogGrid from '@/components/ServicesCatalogGrid';
import CTASection from '@/components/CTASection';
import TestimonialSection from '@/components/TestimonialSection';
import { getServicesHubCards } from '@/lib/servicesContent';

export default function ServicesPage() {
  const serviceCards = getServicesHubCards();

  return (
    <main>
      <SubBanner
        title="Our Dental Services"
        breadcrumb="Services"
      />
      <TextSlider />
      <ServicesCatalogGrid cards={serviceCards} />
      <CTASection />
      <TestimonialSection />
    </main>
  );
}
