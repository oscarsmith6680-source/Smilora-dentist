import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import PediatricDentistryDetail from '@/components/PediatricDentistryDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Pediatric Dentistry | Oralsquad',
  description:
    'Children’s dentist at Oralsquad — gentle exams, cleans, sealants, and positive first visits in Melbourne.',
};

export default function PediatricDentistryPage() {
  return (
    <main>
      <SubBanner
        title="Pediatric Dentistry"
        breadcrumb="Pediatric Dentistry"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <PediatricDentistryDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
