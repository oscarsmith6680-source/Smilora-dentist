'use client';

import React, { useState } from 'react';

const FAQ_GROUPS = [
  {
    id: 'general',
    heading: 'General information',
    icon: 'fa-solid fa-circle-info',
    items: [
      {
        id: 'g1',
        q: 'How often should I visit the dentist?',
        a: 'Most patients benefit from a checkup and professional cleaning every six months. Your dentist may suggest a different schedule based on your gums, history, and overall oral health.',
      },
      {
        id: 'g2',
        q: 'Do you accept new patients?',
        a: 'Yes. We are accepting new patients and will help you book a first visit at a time that works for you, including evenings where available.',
      },
      {
        id: 'g3',
        q: 'What payment and insurance options do you offer?',
        a: 'We accept major cards and can discuss insurance, payment plans, and financing so treatment fits your budget. Ask at reception or contact us before your visit.',
      },
      {
        id: 'g4',
        q: 'Is professional teeth whitening safe?',
        a: 'Whitening supervised by a dentist is safe for most people. We check your enamel and sensitivity first and recommend in-office or take-home options for even, predictable results.',
      },
    ],
  },
  {
    id: 'visits',
    heading: 'Appointments & treatment',
    icon: 'fa-solid fa-calendar-check',
    items: [
      {
        id: 'v1',
        q: 'How do I book or reschedule an appointment?',
        a: 'Call us, use the contact form on this site, or visit the clinic. If you need to reschedule, please give as much notice as possible so we can offer your slot to another patient.',
      },
      {
        id: 'v2',
        q: 'What should I bring to my first visit?',
        a: 'Bring a list of medications, any previous dental X-rays if you have them, and your insurance details. Arrive a few minutes early to complete new-patient paperwork.',
      },
      {
        id: 'v3',
        q: 'Do you treat dental emergencies?',
        a: 'We prioritize urgent cases such as severe pain, swelling, or a broken tooth. Call us right away; we will advise you on the next steps or same-day care.',
      },
      {
        id: 'v4',
        q: 'Will my treatment hurt?',
        a: 'We use gentle techniques and modern anesthesia where needed. Tell us if you are anxious — we can explain each step and go at a pace that keeps you comfortable.',
      },
    ],
  },
];

function AccordionColumn({ group, openId, onToggle }) {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="accordian-section-inner">
        <h4 className="sub-heading-four text-size-24 urbanist-font font-weight-bold">
          <i className={`${group.icon} me-2`} aria-hidden />
          {group.heading}
        </h4>
      </div>
      <div className="accordian-inner">
        {group.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div className="accordion-card" key={item.id}>
              <div className="card-header">
                <a
                  href="#"
                  className={`btn btn-link ${isOpen ? '' : 'collapsed'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onToggle(item.id);
                  }}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-heading-${item.id}`}
                >
                  <span className="text-size-20 urbanist-font font-weight-bold">{item.q}</span>
                </a>
              </div>
              <div
                id={`faq-panel-${item.id}`}
                className={`collapse ${isOpen ? 'show' : ''}`}
                role="region"
                aria-labelledby={`faq-heading-${item.id}`}
              >
                <div className="card-body">
                  <p className="mb-0">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openLeft, setOpenLeft] = useState(FAQ_GROUPS[0].items[0].id);
  const [openRight, setOpenRight] = useState(FAQ_GROUPS[1].items[0].id);

  const toggleLeft = (id) => {
    setOpenLeft((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id) => {
    setOpenRight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="float-left w-100 faq-con position-relative padding-top padding-bottom main-box">
      <div className="container">
        <div className="heading-title-con text-center faq_content">
          <span className="special-text d-inline-block">Support center</span>
          <h2 className="text-size-46 mb-0">
            Common Questions <br /> About Your Dental Care.
          </h2>
          <p className="mb-0">
            Find quick answers below. If you need more detail, our team is one message or call away.
          </p>
        </div>
        <div className="row">
          <AccordionColumn
            group={FAQ_GROUPS[0]}
            openId={openLeft}
            onToggle={toggleLeft}
          />
          <AccordionColumn
            group={FAQ_GROUPS[1]}
            openId={openRight}
            onToggle={toggleRight}
          />
        </div>
      </div>
    </section>
  );
}
