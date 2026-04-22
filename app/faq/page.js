import PageShell from '@/components/PageShell';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'FAQs | Smilora',
};

export default function FaqPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Quick answers about appointments, treatments, and what to expect at Smilora."
      breadcrumb="FAQs"
    >
      <FaqSection />
    </PageShell>
  );
}
