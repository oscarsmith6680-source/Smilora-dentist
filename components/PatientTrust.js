'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const PatientTrust = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="float-left w-100 position-relative patient-trust-con padding-top padding-bottom main-box" ref={ref}>
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-lg-6 col-md-6 d-flex"
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="patient-box w-100 position-relative">
              <figure className="blue-elipse position-absolute">
                <img src="/assets/images/blue-elipse.png" alt="elipse" className="img-fluid" />
              </figure>
              <div className="heading-title-con mb-0">
                <span className="special-text d-inline-block">Bright Smiles, Better Confidence</span>
                <h2 className="text-size-46">Why Patients Trust <br /> Oralsquad.</h2>
                <ul className="list-unstyled p-0">
                  <li className="position-relative"> <i className="fa-solid fa-circle-check"></i> Gentle, Painless Procedures </li>
                  <li className="position-relative"> <i className="fa-solid fa-circle-check"></i> Advanced Technology & Modern Equipment </li>
                  <li className="position-relative"> <i className="fa-solid fa-circle-check"></i> Flexible Payment & Insurance Plans </li>
                  <li className="position-relative"> <i className="fa-solid fa-circle-check"></i> Patient-Centered Approach </li>
                </ul>
                <Link href="/contact" className="text-decoration-none primary_btn d-inline-block ">
                  Schedule a Visit
                  <span><img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" /></span>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-6 col-md-6 d-flex"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="patient-img-con w-100 position-relative">
              <figure>
                <img src="/assets/images/patient-img.jpg" alt="patient image" className="img-fluid" />
                </figure>
              {/* <figure className="vector2 position-absolute">
                <img src="/assets/images/vector2.png" alt="vector" className="img-fluid" />
                </figure> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PatientTrust;
