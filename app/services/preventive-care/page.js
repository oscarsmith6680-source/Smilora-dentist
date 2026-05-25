import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import PreventiveCareDetail from '@/components/PreventiveCareDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Preventive Care | Oralsquad',
  description:
    'Preventive care at Oralsquad — regular checkups, professional cleaning, and early detection to protect your teeth and gums for the long term.',
};

export default function PreventiveCarePage() {
  return (
    <main>
      <SubBanner
        title="Preventive Care"
        breadcrumb="Preventive Care"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <PreventiveCareDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
