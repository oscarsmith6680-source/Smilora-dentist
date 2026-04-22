'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="padding-rl float-left w-100 cta-team-section-wrap" ref={ref}>
      <section className="float-left w-100 position-relative cta-con cta-team-banner bg-blue text-center br-20">
        <div className="container">
          <div className="cta-inner-con cta-team-banner__inner">
            <motion.h2
              className="cta-team-banner__title text-white mb-0"
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Your Smile is Safe With Our Caring Dental Team.
            </motion.h2>
            <span className="cta-team-banner__divider" aria-hidden="true" />
            <motion.div
              className="cta-team-banner__actions"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="text-decoration-none elementary_btn cta-team-banner__btn d-inline-block"
              >
                Book Your Appointment
                <span>
                  <img src="/assets/images/up-arrow.png" alt="" className="img-fluid up-right-arrow-img" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
