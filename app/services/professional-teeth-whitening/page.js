import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import TeethWhiteningDetail from '@/components/TeethWhiteningDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Professional Teeth Whitening | Oralsquad',
  description:
    'Discover professional teeth whitening at Oralsquad — safe, dentist-supervised treatment that lifts years of staining in a single visit, with sensitivity managed throughout.',
};

export default function TeethWhiteningPage() {
  return (
    <main>
      <SubBanner
        title="Professional Teeth Whitening"
        breadcrumb="Professional Teeth Whitening"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <TeethWhiteningDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
