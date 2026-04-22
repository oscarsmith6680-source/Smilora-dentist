import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import RestorativeTreatmentsDetail from '@/components/RestorativeTreatmentsDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Restorative Dentistry | Smilora',
  description:
    'Fillings, crowns, bridges and implant restorations at Smilora — strong, natural-looking restorative dentistry.',
};

export default function RestorativeTreatmentsPage() {
  return (
    <main>
      <SubBanner
        title="Restorative Dentistry"
        breadcrumb="Restorative Dentistry"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <RestorativeTreatmentsDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
