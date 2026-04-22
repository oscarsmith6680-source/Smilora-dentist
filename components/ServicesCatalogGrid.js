'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * @param {{ cards: Array<{ href: string; title: string; description: string; image: string; imageAlt: string; category: string }> }} props
 */
export default function ServicesCatalogGrid({ cards = [] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.06,
  });

  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <div className="main-container">
        <section
          className="services-hub-con float-left w-100 position-relative padding-top padding-bottom main-box padding-rl-responsive br-20"
          aria-labelledby="services-hub-heading"
        >
          <div className="container">
            <div className="heading-title-con text-center services-hub-con__header">
              <motion.span
                className="special-text d-inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
              >
                What we offer
              </motion.span>
              <motion.h2
                id="services-hub-heading"
                className="text-size-46 mb-0"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                Explore our dental services
              </motion.h2>
              <motion.p
                className="services-hub-con__intro mb-0 mx-auto"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                Every treatment is delivered with the same focus on comfort, clarity, and long-term oral health.
              </motion.p>
            </div>

            <div className="row services-hub-con__row">
              {cards.map((card, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={card.href}>
                  <motion.article
                    className="services-hub-card h-100"
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
                  >
                    <Link href={card.href} className="services-hub-card__link text-decoration-none d-flex flex-column h-100">
                      <div className="services-hub-card__media">
                        <img src={card.image} alt={card.imageAlt} className="services-hub-card__img img-fluid" />
                      </div>
                      <div className="services-hub-card__body d-flex flex-column flex-grow-1">
                        {card.category ? (
                          <span className="services-hub-card__category">{card.category}</span>
                        ) : null}
                        <h3 className="services-hub-card__title">{card.title}</h3>
                        <p className="services-hub-card__desc mb-0 flex-grow-1">{card.description}</p>
                        <span className="services-hub-card__cta">
                          <span>View service</span>
                          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
