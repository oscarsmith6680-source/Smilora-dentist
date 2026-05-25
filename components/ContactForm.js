'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Mirrors API rules: required fields, email shape, phone digits-only and min length */
function getClientFieldErrors(data) {
  const errors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const phoneDigits = data.phone.replace(/\D/g, '');
  const message = data.message.trim();
  const doctor = (data.doctor || '').trim();
  const department = (data.department || '').trim();

  if (!name) errors.name = true;
  if (!email) errors.email = true;
  else if (!isValidEmail(email)) errors.email = true;
  if (!phoneDigits) errors.phone = true;
  else if (!/^[0-9]+$/.test(phoneDigits) || phoneDigits.length < 6) errors.phone = true;
  if (!doctor || doctor.toLowerCase() === 'choose doctor') errors.doctor = true;
  if (!department) errors.department = true;
  if (!message) errors.message = true;

  return errors;
}

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    department: 'Dental Diagnostics',
    doctor: 'Choose Doctor',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  /** Inline feedback replaces browser alerts — same API flow, better UX */
  const [feedback, setFeedback] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const feedbackRef = useRef(null);

  useEffect(() => {
    if (feedback && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [feedback]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (feedback?.type === 'error') setFeedback(null);
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    const nextValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFeedback(null);

    const clientErrors = getClientFieldErrors(formData);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setFeedback({
        type: 'error',
        title: 'Please complete the form',
        message:
          'Some required fields are missing or invalid. Check the highlighted fields below.',
      });
      return;
    }

    setFieldErrors({});

    const phoneDigits = formData.phone.replace(/\D/g, '');

    const payload = {
      department: formData.department,
      doctor: formData.doctor,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: phoneDigits,
      message: formData.message.trim(),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setFeedback({
          type: 'success',
          title: 'Message sent successfully',
          message:
            'Thank you for contacting Oralsquad. Our reception team has received your request and will get back to you shortly.',
        });
        setFieldErrors({});
        setFormData({
          department: 'Dental Diagnostics',
          doctor: 'Choose Doctor',
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setFeedback({
          type: 'error',
          title: 'We couldn’t send your message',
          message: data.error || 'Something went wrong. Please try again in a moment.',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        title: 'Connection problem',
        message: 'We could not reach the server. Check your internet connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="padding-rl float-left w-100" ref={ref}>
      <section className="float-left w-100 position-relative book-appointment-con padding-top padding-bottom padding-rl-responsive br-20">
        <div className="container">
          <div className="book-apointment-inner-con">
            <div className="heading-title-con text-center">
              <motion.span 
                className="special-text d-inline-block text-white"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                Book Your Appointment Online
              </motion.span>
              <motion.h2 
                className="text-size-46 text-white"
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                Contact Our Friendly Reception <br /> Staff with Any Enquiries
              </motion.h2>
            </div>
            <motion.form 
              className="contact-form"
              noValidate
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <AnimatePresence mode="wait">
                {feedback ? (
                  <motion.div
                    key={`${feedback.type}-${feedback.message}`}
                    ref={feedbackRef}
                    className={`contact-form-feedback contact-form-feedback--${feedback.type}`}
                    role={feedback.type === 'error' ? 'alert' : 'status'}
                    aria-live="polite"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >
                    <button
                      type="button"
                      className="contact-form-feedback__dismiss"
                      onClick={() => setFeedback(null)}
                      aria-label="Dismiss notification"
                    >
                      <i className="fa-solid fa-xmark" aria-hidden />
                    </button>
                    <div className="contact-form-feedback__icon" aria-hidden>
                      {feedback.type === 'success' ? (
                        <i className="fa-solid fa-circle-check" />
                      ) : (
                        <i className="fa-solid fa-circle-exclamation" />
                      )}
                    </div>
                    <div className="contact-form-feedback__body">
                      <p className="contact-form-feedback__title">{feedback.title}</p>
                      <p className="contact-form-feedback__text">{feedback.message}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="row">
                <div className="col-12 col-md-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    name="name" 
                    className={`form-control custom-input${fieldErrors.name ? ' custom-input--error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.name ? 'true' : 'false'}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email" 
                    className={`form-control custom-input${fieldErrors.email ? ' custom-input--error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.email ? 'true' : 'false'}
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input 
                    type="text"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Phone:" 
                    name="phone" 
                    className={`form-control custom-input${fieldErrors.phone ? ' custom-input--error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.phone ? 'true' : 'false'}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select 
                    name="doctor" 
                    className={`form-control custom-input${fieldErrors.doctor ? ' custom-input--error' : ''}`}
                    value={formData.doctor}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.doctor ? 'true' : 'false'}
                  >
                    <option disabled>Choose Doctor</option>
                    <option>Dr. Johnathan Blake </option>
                    <option>Dr. Jamie Oliver </option>
                    <option>Dr. Clare Smyth </option>
                    <option>Dr. Bobby Flay </option>
                  </select>
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="position-relative">
                    {/* <div className="department-tag position-absolute text-uppercase">Department</div> */}
                    <select 
                      name="department" 
                      className={`form-control custom-input${fieldErrors.department ? ' custom-input--error' : ''}`}
                      value={formData.department}
                      onChange={handleChange}
                      aria-invalid={fieldErrors.department ? 'true' : 'false'}
                    >
                      <option disabled>Dental Diagnostics</option>
                      <option>Root Canal</option>
                      <option>Scaling</option>
                      <option>Braces Treatment</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-12">
                  <textarea
                    name="message"
                    className={`form-control custom-input${fieldErrors.message ? ' custom-input--error' : ''}`}
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.message ? 'true' : 'false'}
                  />
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn primary_btn custom-btn"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  Confirm Appointment
                  <span><img src="/assets/images/up-arrow.png" alt="up-right-arrow" className="img-fluid up-right-arrow-img" /></span>
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
