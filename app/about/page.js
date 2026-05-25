import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import AboutSection from '@/components/AboutSection';
import PhilosophySection from '@/components/PhilosophySection';
import PatientTrust from '@/components/PatientTrust';
import AboutTeamSection from '@/components/AboutTeamSection';
import TestimonialSection from '@/components/TestimonialSection';

export const metadata = {
  title: 'About | Oralsquad – Dentist & Dental Care Clinic',
  description:
    'At Oralsquad, we combine advanced technology with compassionate care to provide complete dental solutions for patients of all ages.',
};

export default function AboutPage() {
  return (
    <main>
      <SubBanner
        title="About Oralsquad"
        breadcrumb="About"
      />
      <TextSlider />
      <AboutSection />
      <PhilosophySection />
      <PatientTrust />
      <AboutTeamSection />
      <TestimonialSection />
    </main>
  );
}
