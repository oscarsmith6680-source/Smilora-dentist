import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import OrthodonticsDetail from '@/components/OrthodonticsDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Orthodontics | Oralsquad',
  description:
    'Braces and clear aligners at Oralsquad — straighter teeth and a healthier bite for teens and adults in Melbourne.',
};

export default function OrthodonticsPage() {
  return (
    <main>
      <SubBanner
        title="Orthodontics"
        breadcrumb="Orthodontics"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <OrthodonticsDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
