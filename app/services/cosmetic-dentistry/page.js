import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import CosmeticDentistryDetail from '@/components/CosmeticDentistryDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Cosmetic Dentistry | Oralsquad',
  description:
    'Whitening, veneers, bonding and smile makeovers at Oralsquad — natural-looking cosmetic dentistry in Melbourne.',
};

export default function CosmeticDentistryPage() {
  return (
    <main>
      <SubBanner
        title="Cosmetic Dentistry"
        breadcrumb="Cosmetic Dentistry"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <CosmeticDentistryDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
