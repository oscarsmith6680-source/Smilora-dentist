'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const serviceMegaGroups = [
  {
    title: 'Smile & appearance',
    items: [
      { href: '/services/professional-teeth-whitening', label: 'Professional Whitening', icon: 'fa-solid fa-wand-magic-sparkles' },
      { href: '/services/cosmetic-dentistry', label: 'Cosmetic Dentistry', icon: 'fa-solid fa-gem' },
      { href: '/services/orthodontics', label: 'Orthodontics', icon: 'fa-solid fa-arrows-left-right' },
    ],
  },
  {
    title: 'Prevention & gum health',
    items: [
      { href: '/services/preventive-care', label: 'Preventive Care', icon: 'fa-solid fa-shield-heart' },
      { href: '/services/pediatric-dentistry', label: 'Pediatric Dentistry', icon: 'fa-solid fa-child' },
      { href: '/services/periodontal-care', label: 'Periodontal Care', icon: 'fa-solid fa-heart-pulse' },
    ],
  },
  {
    title: 'Restoration & surgery',
    items: [
      { href: '/services/restorative-treatments', label: 'Restorative Treatments', icon: 'fa-solid fa-teeth' },
      { href: '/services/endodontics', label: 'Endodontics', icon: 'fa-solid fa-circle-notch' },
      { href: '/services/oral-surgery', label: 'Oral Surgery', icon: 'fa-solid fa-user-doctor' },
    ],
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const toggleNav = () => {
    if (isNavOpen) {
      setActiveDropdown(null);
    }
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const isServicesActive = pathname.startsWith('/services');

  const isServiceLinkActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="padding-rl float-left w-100">
        <div className="topbar-con w-100 float-left position-relative main-box text-center bg-blue br-10">
          <div className="main-container">
            <div className="top-bar-inner-content d-flex align-items-center justify-content-between">
              <p className="mb-0 text-white">Now Accepting New Patients – <strong>Book Your Free Consultation Today!</strong></p>
              <ul className="list-unstyled p-0 m-0">
                <li className="d-inline-block"><a href="https://www.facebook.com/" className="text-decoration-none"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className="d-inline-block"><a href="https://www.linkedin.com/" className="text-decoration-none"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li className="d-inline-block"><a href="https://instagram.com/" className="text-decoration-none"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="w-100 float-left header-con position-relative main-box">
        <div className="main-container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" href="/" onClick={closeNav}>
              <figure className="mb-0">
                <img src="/assets/images/logo.png" alt="logo-icon" />
              </figure>
            </Link>
            <button
              className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleNav}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-0">
                  <Link className={`nav-link p-0 ${isActive('/') ? 'active' : ''}`} href="/" onClick={closeNav}>Home</Link>
                </li>
                <li className="nav-item mr-0">
                  <Link className={`nav-link p-0 ${isActive('/about') ? 'active' : ''}`} href="/about" onClick={closeNav}>About</Link>
                </li>
                <li className={`nav-item nav-item-services-mega dropdown ${activeDropdown === 'services' ? 'show' : ''}`}>
                  <a
                    id="services-mega-toggle"
                    className={`nav-link dropdown-toggle p-0 ${isServicesActive ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); toggleDropdown('services'); }}
                    role="button"
                    aria-haspopup="true"
                    aria-controls="services-mega-menu"
                    aria-expanded={activeDropdown === 'services'}
                  >
                    Services
                  </a>
                  <div
                    id="services-mega-menu"
                    className={`dropdown-menu services-mega-menu ${activeDropdown === 'services' ? 'show' : ''}`}
                  >
                    <div className="services-mega-menu__shell">
                      <div className="services-mega-menu__grid">
                        {serviceMegaGroups.map((group) => (
                          <div className="services-mega-menu__column" key={group.title}>
                            <p className="services-mega-menu__group-title">{group.title}</p>
                            <ul className="services-mega-menu__list list-unstyled mb-0">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={`services-mega-menu__link ${isServiceLinkActive(item.href) ? 'is-active' : ''}`}
                                    onClick={closeNav}
                                  >
                                    <span className="services-mega-menu__icon" aria-hidden="true">
                                      <i className={item.icon} />
                                    </span>
                                    <span className="services-mega-menu__label">{item.label}</span>
                                    <i className="fa-solid fa-chevron-right services-mega-menu__chev" aria-hidden="true" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="services-mega-menu__footer">
                        <Link href="/services" className="services-mega-menu__all-link" onClick={closeNav}>
                          <span>View all services</span>
                          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item mr-0">
                  <Link className={`nav-link p-0 ${isActive('/testimonials') ? 'active' : ''}`} href="/testimonials" onClick={closeNav}>Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link p-0 ${isActive('/dentists') ? 'active' : ''}`} href="/dentists" onClick={closeNav}>Dentists</Link>
                </li>
                <li className="nav-item mr-0">
                  <Link className={`nav-link p-0 ${isActive('/contact') ? 'active' : ''}`} href="/contact" onClick={closeNav}>Contact</Link>
                </li>
            
                {/* 
                <li className="nav-item mr-0">
                  <Link className={`nav-link p-0 ${isActive('/faq') ? 'active' : ''}`} href="/faq" onClick={closeNav}>FAQ</Link>
                </li>
                <li className={`nav-item dropdown ${activeDropdown === 'pages' ? 'show' : ''}`}>
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    onClick={(e) => { e.preventDefault(); toggleDropdown('pages'); }}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === 'pages'}
                  >
                    Pages
                  </a>
                  <div className={`dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`} role="menu">
                    <Link className="dropdown-item" href="/about" onClick={closeNav}>About Us</Link>
                    <Link className="dropdown-item" href="/contact" onClick={closeNav}>Contact Us</Link>
                    <Link className="dropdown-item" href="/faq" onClick={closeNav}>FAQs</Link>
                    <Link className="dropdown-item" href="/testimonials" onClick={closeNav}>Testimonial</Link>
                    <Link className="dropdown-item" href="/404" onClick={closeNav}>404</Link>
                    <Link className="dropdown-item" href="/coming-soon" onClick={closeNav}>Coming Soon</Link>
                    <Link className="dropdown-item" href="/privacy-policy" onClick={closeNav}>Privacy Policy</Link>
                    <Link className="dropdown-item" href="/term-of-use" onClick={closeNav}>Terms of Use</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link p-0 ${isActive('/pricing') ? 'active' : ''}`} href="/pricing" onClick={closeNav}>Price List</Link>
                </li>
                */}
              </ul>
            </div>
            <div className="header-contact">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                {/* 
                <li className="d-inline-block">
                  <Link href="/contact" className="contact-btn d-inline-block">
                    <i className="fa-solid fa-comment-dots"></i> Live Chat
                  </Link>
                </li>
                */}
                <li className="d-flex align-items-center">
                  <figure className="header-phone mb-0">
                    <img src="/assets/images/call-icon.png" alt="image" className="img-fluid d-inline-block" />
                  </figure>
                  <div>
                    <span className="d-block text-uppercase text-black call-us-today">Call Us Today:</span>
                    <a href="tel:+61383766284" className="text-decoration-none cell-no">
                      <span className="number d-inline-block urbanist-font">+61 3 8376 6284</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
