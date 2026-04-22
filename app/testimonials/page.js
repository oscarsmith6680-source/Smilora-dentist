import PageShell from '@/components/PageShell';
import TestimonialsPremiumSection from '@/components/TestimonialsPremiumSection';

export const metadata = {
  title: 'Testimonials | Smilora',
};

export default function TestimonialsPage() {
  return (
    <PageShell
      title="Patient Testimonials"
      breadcrumb="Testimonials"
    >
      <TestimonialsPremiumSection />
    </PageShell>
  );
}
