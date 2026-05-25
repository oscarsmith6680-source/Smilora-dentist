import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import OralSurgeryDetail from '@/components/OralSurgeryDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Oral Surgery | Oralsquad',
  description:
    'Tooth extractions and wisdom teeth at Oralsquad — careful planning, clear aftercare, and support through healing.',
};

export default function OralSurgeryPage() {
  return (
    <main>
      <SubBanner
        title="Oral Surgery"
        breadcrumb="Oral Surgery"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <OralSurgeryDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
