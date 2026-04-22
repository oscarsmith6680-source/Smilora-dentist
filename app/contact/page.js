import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <SubBanner 
        title="Contact Us" 
        breadcrumb="Contact Us"
      />
      <TextSlider />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
