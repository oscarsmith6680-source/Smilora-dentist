import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="float-left w-100">
      <Navbar />
      <section className="float-left w-100 sub-banner-con position-relative br-20">
        <div className="container">
          <div className="sub-banner-content-con text-center">
            <h1 className="sub-heading1">Page Not Found</h1>
            <p>The page you requested could not be found.</p>
            <div className="breadcrumb-con d-inline-block">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  404
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="float-left w-100 position-relative padding-top padding-bottom main-box text-center">
        <div className="container">
          <p className="text-size-18 mb-4">Check the URL or return to the homepage.</p>
          <Link href="/" className="text-decoration-none primary_btn d-inline-block">
            Go to home
            <span>
              <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
            </span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
