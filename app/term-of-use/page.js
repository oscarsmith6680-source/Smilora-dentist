import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Terms of Use | Smilora',
};

export default function TermsOfUsePage() {
  return (
    <PageShell
      title="Terms of Use"
      description="Terms and conditions for using the Smilora website and online services."
      breadcrumb="Terms of Use"
    >
      <section className="float-left w-100 position-relative padding-top padding-bottom main-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="legal-content text-size-16 line-height-28">
                <p className="mb-4">
                  By accessing this website, you agree to these Terms of Use. If you do not agree, please do not use
                  the site.
                </p>
                <h2 className="text-size-22 mb-3">Use of the website</h2>
                <p className="mb-4">
                  Content is for general information and does not replace professional dental advice. Always consult a
                  qualified clinician for diagnosis and treatment.
                </p>
                <h2 className="text-size-22 mb-3">Limitation of liability</h2>
                <p className="mb-4">
                  We strive for accuracy but do not guarantee that the site will be error-free or uninterrupted. To the
                  extent permitted by law, we are not liable for indirect or consequential damages arising from use of
                  the site.
                </p>
                <h2 className="text-size-22 mb-3">Changes</h2>
                <p className="mb-0">
                  We may update these terms from time to time. Continued use of the site after changes constitutes
                  acceptance of the revised terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
