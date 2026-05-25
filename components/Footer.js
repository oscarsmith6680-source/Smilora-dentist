'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="spacer"></div>
      <div className="padding-rl float-left w-100">
        <section className="float-left w-100 footer-con position-relative br-50 padding-rl-responsive bg-blue">
          <div className="container position-relative">
            <div className="middle_portion">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                  <div className="logo-content">
                    <Link href="/" className="footer-logo">
                      <figure className="mb-0">
                      
                        <img 
                        src="/assets/images/oralsquad.svg" 
                        alt="oralsquad-logo" 
                        className="responsive-logo" // Humnay yahan class de di
                        style={{ filter: 'brightness(0) invert(1)' }} 
                        />


                      </figure>
                    </Link>
                    <p>Our team of experienced dentists and specialists is dedicated to providing personalized care in a calm, welcoming environment.</p>
                  <div className="copyright">
                    <p className="mb-0">
                  Copyright ©2026 Oralsquad. All Rights Reserved. Developed by{' '}
                  <a 
                  href="https://techomatrix.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                  color: 'inherit',          // Hash '#' hata diya taake text ka sahi color aaye
                  textDecoration: 'underline', 
                  cursor: 'pointer',         // Is se click karne wala haath (hand icon) banega
                  position: 'relative',      // Agar koi layout ka masla ho to click ho sake
                  zIndex: 10                 // Taake link kisi aur cheez ke peeche na chupe
                  }}
                  >
                  TechoMatrix
                  </a>
                  </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-0">
                  <div className="links">
                    <h2 className="text-size-20 heading"> Terms & Legal </h2>
                    <ul className="list-unstyled mb-0">

                      <li><i className="fa-solid fa-circle"></i><Link href="/privacy-policy" className="text-decoration-none">Privacy Policy</Link></li>
                      <li><i className="fa-solid fa-circle"></i><Link href="/terms-and-conditions" className="text-decoration-none">Terms &amp; Conditions</Link></li>
                      <li><i className="fa-solid fa-circle"></i><Link href="/refund-policy" className="text-decoration-none">Refund Policy</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 pl-0">
                  <div className="contact">
                    <h2 className="text-size-20 heading">Contact Info</h2>
                    <ul className="list-unstyled mb-0">
                      <li className="text">
                        <i className="fa-solid fa-phone-volume"></i>
                        <a href="tel:+61383766284" className="text-decoration-none">+61 3 8376 6284</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:info@Oralsquad.com" className="text-decoration-none">info@Oralsquad.com</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-location-dot"></i>
                        <a className="address mb-0" href="https://maps.app.goo.gl/4914bKV6VTJbfvPd7">551 Swanston Street, Melbourne Victoria 3053 Australia</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-clock"></i>
                        <p className="address mb-0">Mon - Sat: 9:00 AM to 6:00 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 col-12 last-footer-con">
                  <div className="icon">
                    <h2 className="text-size-20 heading">Follow Us</h2>
                    <ul className="list-unstyled mb-0 social-icons">
                      <li><a href="https://www.facebook.com/" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                      <li><a href="https://instagram.com/" className="text-decoration-none"><i className="fa-brands fa-instagram social-networks" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.linkedin.com/" className="text-decoration-none"><i className="fa-brands fa-linkedin social-networks"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Footer;
