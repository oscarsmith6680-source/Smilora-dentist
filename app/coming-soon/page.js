import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Coming Soon | Smilora',
};

export default function ComingSoonPage() {
  return (
    <PageShell
      title="Coming Soon"
      description="We are working on something new. Check back shortly or contact us for urgent care."
      breadcrumb="Coming Soon"
    >
      <section className="float-left w-100 position-relative padding-top padding-bottom main-box text-center">
        <div className="container">
          <p className="text-size-18 mb-4">
            Our team is preparing new content and features. For appointments or questions, please reach out anytime.
          </p>
          <Link href="/contact" className="text-decoration-none primary_btn d-inline-block">
            Contact us
            <span>
              <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
            </span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
