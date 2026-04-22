import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';

export default function DentistsPage() {
  return (
    <main>
      <SubBanner 
        title="Our Dentists" 
        breadcrumb="Dentists"
      />
      <TextSlider />
      <TeamSection />
      <CTASection />
    </main>
  );
}
