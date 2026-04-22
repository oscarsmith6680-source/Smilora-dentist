import HeroSlider from '@/components/HeroSlider';
import TextSlider from '@/components/TextSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import PricingSection from '@/components/PricingSection';
import PatientTrust from '@/components/PatientTrust';
import ContactForm from '@/components/ContactForm';
import VideoSection from '@/components/VideoSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <TextSlider />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PricingSection noVerticalPadding />
      <PatientTrust />
      <ContactForm />
      <VideoSection />
      <TestimonialSection />
    </main>
  );
}
