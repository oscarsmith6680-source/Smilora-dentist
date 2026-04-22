'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ServiceDetailContent({ service }) {
  const img2 = service.imageSecondary || service.imagePrimary;
  const resultsIntro =
    service.resultsIntro ||
    'Real transformations from our patients — natural-looking, lasting results you can feel confident about.';

  return (
    <div className="service-detail-compact padding-rl float-left w-100">
      <div className="main-container">
        <section className="service-detail-compact__intro float-left w-100">
          <div className="container px-3 px-lg-4">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <div className="row g-2 g-sm-3">
                  <div className="col-6">
                    <figure className="service-detail-compact__thumb mb-0">
                      <img
                        src={service.imagePrimary}
                        alt={service.title}
                        className="service-detail-compact__img"
                        loading="eager"
                      />
                    </figure>
                  </div>
                  <div className="col-6">
                    <figure className="service-detail-compact__thumb mb-0">
                      <img
                        src={img2}
                        alt=""
                        className="service-detail-compact__img"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                {service.categoryLabel ? (
                  <span className="service-detail-compact__chip">{service.categoryLabel}</span>
                ) : null}
                <h2 className="service-detail-compact__title text-size-32 mb-2">{service.title}</h2>
                <p className="service-detail-compact__lead text-size-18 mb-3">{service.tagline}</p>

                <div className="service-detail-compact__overview">
                  <h3 className="service-detail-compact__h3 text-size-20 mb-2">How we care for you</h3>
                  <p className="mb-0">{service.overview}</p>
                  {service.overviewExtra ? (
                    <p className="service-detail-compact__overview-extra mb-0">{service.overviewExtra}</p>
                  ) : null}
                </div>

                <div className="row g-2 g-md-3 mt-3">
                  <div className="col-md-6">
                    <div className="service-detail-compact__panel h-100">
                      <h4 className="service-detail-compact__h4 text-size-17 mb-2">
                        <i className="fa-solid fa-list-check me-2 text-primary" aria-hidden />
                        What&apos;s included
                      </h4>
                      <ul className="list-unstyled p-0 mb-0 service-detail-compact__list">
                        {service.included.map((item) => (
                          <li key={item}>
                            <i className="fa-solid fa-check" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-detail-compact__panel service-detail-compact__panel--accent h-100">
                      <h4 className="service-detail-compact__h4 text-size-17 mb-2">
                        <i className="fa-solid fa-wand-magic-sparkles me-2" aria-hidden />
                        Why choose this
                      </h4>
                      <ul className="list-unstyled p-0 mb-0 service-detail-compact__list">
                        {service.benefits.map((item) => (
                          <li key={item}>
                            <i className="fa-solid fa-check" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="service-detail-compact__actions mt-3 pt-3">
                  <p className="service-detail-compact__callout small mb-2 mb-md-0">
                    <i className="fa-solid fa-tooth me-2" aria-hidden />
                    {service.footerCallout}
                  </p>
                  <Link href="/contact" className="text-decoration-none primary_btn d-inline-block">
                    Schedule a visit
                    <span>
                      <img
                        src="/assets/images/up-arrow.png"
                        alt=""
                        className="img-fluid up-right-arrow-img"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-detail-compact__results float-left w-100">
          <div className="container px-3 px-lg-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <span className="service-detail-compact__eyebrow">Patient outcomes</span>
                <h2 className="text-size-28 mb-2 service-detail-compact__results-title">
                  Before &amp; after results
                </h2>
                <p className="service-detail-compact__muted small mb-3">{resultsIntro}</p>
                <ul className="list-unstyled p-0 mb-0 service-detail-compact__list service-detail-compact__list--results">
                  {service.resultHighlights.map((line) => (
                    <li key={line}>
                      <i className="fa-regular fa-circle-check" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="service-detail-compact__swiper-wrap">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    loop
                    autoplay={{ delay: 4800 }}
                    navigation
                    className="difference-carousel service-detail-compact__swiper rounded-2 overflow-hidden"
                  >
                    {service.beforeAfterSlides.map((slide, slideIndex) => (
                      <SwiperSlide key={`${slide.src}-${slideIndex}`}>
                        <figure className="mb-0 service-detail-compact__slide-figure">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="img-fluid w-100"
                            loading="lazy"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-detail-compact__cta float-left w-100">
          <div className="container px-3 px-lg-4">
            <p className="service-detail-compact__cta-line mb-0">
              Interested in <strong>{service.title}</strong>?{' '}
              <Link href="/contact" className="text-decoration-none">
                Book a consultation
              </Link>
              {' · '}
              <Link href="/services" className="text-decoration-none">
                All services
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
