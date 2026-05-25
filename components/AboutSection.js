'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px 25% 0px',
  });

  return (
    <div className="padding-rl float-left w-100">
      <section
        ref={ref}
        className="float-left w-100 position-relative about-us-con padding-bottom padding-rl-responsive"
      >
        {/* <figure>
          <img src="/assets/images/vector.png" alt="vector" className="img-fluid position-absolute vector" />
        </figure> */}
        <div className="container-fluid p-0">
          <div className="about-us-inner-con align-items-center justify-content-between">
            <motion.div 
              className="about-left-con d-flex"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <figure><img src="/assets/images/about-us-img1.jpg" alt="image" className="img-fluid" /></figure>
              <div className="position-relative">
                <figure className="position-relative about-img2">
                  <img src="/assets/images/about-us-img2.jpg" alt="image" className="img-fluid" />
                </figure>
                <div className="years-experience-con">
                  <div>
                    <span className="text-blue d-inline-block font-weight-bold urbanist-font digit">15</span>
                    <sup className="text-blue d-inline-block font-weight-bold urbanist-font">+</sup>
                  </div>
                  <span className="d-inline-block">Years of <br /> Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="about-right-con"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="heading-title-con mb-0">
                <span className="special-text d-inline-block">Your Family’s Smile Partner</span>
                <h2 className="text-size-46">Advanced Dentistry with a Gentle Touch</h2>
                <span className="d-block text-blue text-uppercase font-weight-bold Oralsquad-text">At Oralsquad, we believe every smile tells a story. </span>
                <p>Our experienced dentists combine compassion with advanced dental technology to deliver personalized care. From routine checkups to cosmetic dentistry, we make your dental journey stress-free and comfortable.</p>
                <ul className="list-unstyled p-0">
                  <li className="position-relative"> <i className="fa-solid fa-tooth"></i> 15+ Years of Trusted Care </li>
                  <li className="position-relative"> <i className="fa-solid fa-user-doctor"></i> Certified & Experienced Dentists </li>
                  <li className="position-relative"> <i className="fa-solid fa-star"></i> 5,000+ Happy Patients </li>
                </ul>
                <div className="statistics-wrapper d-flex">
                  <div className="statistics-box">
                    <span className="d-inline-block digit urbanist-font font-weight-bold text-black">
                      {inView && <CountUp end={250} duration={2.5} />}
                    </span>
                    <sup className="d-inline-block urbanist-font font-weight-bold text-black">+</sup>
                    <span className="span-text d-block">Expert Doctors</span>
                  </div>
                  <div className="statistics-box">
                    <span className="d-inline-block digit urbanist-font font-weight-bold text-black">
                      {inView && <CountUp end={2} duration={2.5} />}
                    </span>
                    <sup className="d-inline-block urbanist-font font-weight-bold text-black">k</sup>
                    <sup className="d-inline-block urbanist-font font-weight-bold text-black">+</sup>
                    <span className="span-text d-block">Recovered Patients</span>
                  </div>
                  <div className="statistics-box last-stats-box">
                    <span className="d-inline-block digit urbanist-font font-weight-bold text-black">
                      {inView && <CountUp end={98} duration={2.5} />}
                    </span>
                    <sup className="d-inline-block urbanist-font font-weight-bold text-black">%</sup>
                    <span className="span-text d-block">Satisfied Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
