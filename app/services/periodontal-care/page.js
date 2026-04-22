import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import PeriodontalCareDetail from '@/components/PeriodontalCareDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Periodontal Care | Smilora',
  description:
    'Gum disease treatment, deep cleaning and periodontal maintenance at Smilora — protect the foundation of your teeth.',
};

export default function PeriodontalCarePage() {
  return (
    <main>
      <SubBanner
        title="Periodontal Care"
        breadcrumb="Periodontal Care"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <PeriodontalCareDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
