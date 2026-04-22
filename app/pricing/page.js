import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import PatientTrust from '@/components/PatientTrust';
import VideoSection from '@/components/VideoSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function PricingPage() {
  return (
    <main>
      <SubBanner 
        title="Pricing Plans" 
        description="At Smilora, we combine advanced technology with compassionate care to provide complete dental solutions for patients of all ages." 
        breadcrumb="Pricing"
      />
      <TextSlider />
      <PricingSection />
      <CTASection />
      <PatientTrust />
      <VideoSection />
      <TestimonialSection />
    </main>
  );
}
