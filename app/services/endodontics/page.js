import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import EndodonticsDetail from '@/components/EndodonticsDetail';
import TestimonialSectionModernFour from '@/components/TestimonialSectionModernFour';

export const metadata = {
  title: 'Endodontics | Smilora',
  description:
    'Root canal treatment at Smilora — relieve toothache and save natural teeth with careful, modern endodontic care.',
};

export default function EndodonticsPage() {
  return (
    <main>
      <SubBanner
        title="Endodontics"
        breadcrumb="Endodontics"
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <EndodonticsDetail />
      <TestimonialSectionModernFour />
    </main>
  );
}
