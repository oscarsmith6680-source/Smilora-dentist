'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PhilosophySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="float-left w-100 who-we-are-con philosophy-about-con position-relative padding-top padding-bottom main-box padding-rl-responsive background-bg">
        <div className="container">
          <motion.div
            className="heading-title-con text-center philosophy-about-con__header"
            initial={{ y: 24, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="special-text d-inline-block philosophy-about-con__eyebrow">Our Philosophy</span>
            <h2 className="text-size-46 mb-0 philosophy-about-con__title">
              Your Smile Deserves The Best Care.
            </h2>
          </motion.div>

          <div className="row philosophy-about-con__row align-items-stretch g-4 g-xl-5">
            <div className="col-lg-6 col-md-12">
              <motion.div
                className="philosophy-about-con__media who-we-are-img-con"
                initial={{ x: -40, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.05 }}
              >
                <figure className="mb-0">
                  <img
                    src="/assets/images/who-we-are-img1.jpg"
                    alt="Patient-first dental care at Smilora"
                    className="img-fluid"
                  />
                </figure>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
              <motion.div
                className="philosophy-about-con__card w-100"
                initial={{ x: 40, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                <h3 className="text-size-24 philosophy-about-con__card-title">Patient-First Care</h3>
                <p className="mb-0 philosophy-about-con__card-text">
                  At Smilora, you&apos;re more than just a patient — you&apos;re family. We take the time to
                  listen, understand your concerns, and create treatment plans that fit your unique needs. Our
                  goal is to make every visit comfortable, personalized, and stress-free.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="row philosophy-about-con__row align-items-stretch g-4 g-xl-5">
            <div className="col-lg-6 col-md-12 order-lg-0 order-1 d-flex align-items-stretch">
              <motion.div
                className="philosophy-about-con__card w-100"
                initial={{ x: -40, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                <h3 className="text-size-24 philosophy-about-con__card-title">Gentle &amp; Modern Dentistry</h3>
                <p className="mb-0 philosophy-about-con__card-text">
                  We combine advanced dental technology with a gentle touch. From pain-free procedures to
                  state-of-the-art equipment, we ensure precision, comfort, and faster recovery. Dentistry
                  doesn&apos;t have to be intimidating—with Smilora, it&apos;s reassuring and easy.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 order-lg-1 order-0">
              <motion.div
                className="philosophy-about-con__media who-we-are-img-con"
                initial={{ x: 40, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.15 }}
              >
                <figure className="mb-0">
                  <img
                    src="/assets/images/who-we-are-img2.jpg"
                    alt="Modern gentle dentistry at Smilora"
                    className="img-fluid"
                  />
                </figure>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophySection;
