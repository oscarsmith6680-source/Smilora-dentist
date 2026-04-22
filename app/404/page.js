import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Page Not Found | Smilora',
};

export default function NotFoundDemoPage() {
  return (
    <PageShell
      title="Page Not Found"
      description="The page you are looking for does not exist or has been moved."
      breadcrumb="404"
    >
      <section className="float-left w-100 position-relative padding-top padding-bottom main-box text-center">
        <div className="container">
          <p className="text-size-18 mb-4">Error 404 — we could not find that URL.</p>
          <Link href="/" className="text-decoration-none primary_btn d-inline-block">
            Back to home
            <span>
              <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
            </span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
