'use client';

import React from 'react';
import Link from 'next/link';

const HeroSlider = () => {
  const scrollToComprehensiveServices = (e) => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/') return;
    e.preventDefault();
    document
      .getElementById('comprehensive-dental-services')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#comprehensive-dental-services');
  };

  return (
    <div className="padding-rl float-left w-100">
      <section className="float-left w-100 banner-con position-relative d-flex align-items-center justify-content-between padding-rl-responsive">
        <div className="main-container d-flex align-items-center justify-content-between">
          <div className="banner-left-con br-20 position-relative">
            <div className="inner-con1">
              <span className="d-inline-block service-available-text urbanist-font">Your Smile. Our Expertise.</span>
              <h1 className="text-size-80">Where Dental Care Meets Comfort</h1>
              <p>From kids to adults, Oralsquad provides comprehensive dental <br /> care tailored to your family’s needs.</p>
              <Link href="/login" className="text-decoration-none primary_btn d-inline-block">
                Schedule a Visit
                <span>
                  <img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" />
                </span>
              </Link>
              <Link
                href="/#comprehensive-dental-services"
                onClick={scrollToComprehensiveServices}
                className="text-decoration-none secondary_btn d-inline-block"
              >
                View Services
                <span>
                  <img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" />
                </span>
              </Link>
            </div>
            <div className="d-flex align-items-center banner-bottom-con">
              <Link className="text-decoration-none" href="/dentists">
                <div className="banner-white-box1 purple-btn-box">
                  <h2 className="text-size-20">Find the Best <br /> Dentists</h2>
                  <figure className="purple-btn">
                    <img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" />
                  </figure>
                </div>
              </Link>
              <Link className="text-decoration-none" href="/#pricing-section">
                <div className="banner-white-box2 purple-btn-box">
                  <h2 className="text-size-20"> Best Pricing <br /> Plans</h2>
                  <figure className="purple-btn">
                    <img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" />
                  </figure>
                </div>
              </Link>
            </div>
          </div>
          <div className="banner-right-con">
            <div className="inner-con2 d-flex align-items-center">
              <div className="banner-video-con">
                <a 
                  className="popup-vimeo d-block position-relative"
                  href="https://previews.customer.envatousercontent.com/6614ec72-f261-4f82-98ed-5bad5d345948/watermarked_preview/watermarked_preview.mp4"
                >
                  <div className="video_wrapper">
                    <figure className="mb-0">
                      <img 
                        className="thumb img-fluid text-center" 
                        style={{ cursor: 'pointer' }}
                        src="/assets/images/banner-play-icon.png" 
                        alt="video-icon" 
                      />
                    </figure>
                  </div>
                </a>
              </div>
              <div className="user-box d-flex flex-column">
                <div className="d-flex imgz-wrap">
                  <img src="/assets/images/user1.png" alt="icon" className="d-inline-block ml-0" />
                  <img src="/assets/images/user2.png" alt="icon" className="d-inline-block" />
                  <img src="/assets/images/user3.png" alt="icon" className="d-inline-block" />
                  <img src="/assets/images/user4.png" alt="icon" className="d-inline-block" />
                </div>
                <div className="user-text d-flex align-items-center">
                  <span className="d-inline-block counter text-black urbanist-font">4</span>
                  <span className="d-inline-block alphabet text-black urbanist-font">k</span>
                  <sup className="d-inline-block text-black urbanist-font">+</sup>
                  <span className="span-text d-inline-block">Happy clients with positive reviews.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;
