'use client';

import React from 'react';
import { homeTeamMembers } from '@/lib/teamData';

const TeamMember = ({ image, name, designation, social }) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex">
      <div className="team-box text-center w-100">
        <figure>
          <img src={image} alt={name} className="img-fluid" />
        </figure>
        <ul className="list-unstyled p-0">
          {social.facebook && (
            <li className="d-inline-block">
              <a href={social.facebook} className="ml-0">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          )}
          {social.instagram && (
            <li className="d-inline-block">
              <a href={social.instagram}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          )}
          {social.linkedin && (
            <li className="d-inline-block">
              <a href={social.linkedin}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          )}
        </ul>
        <h3 className="text-size-24">{name}</h3>
        <span className="designation text-color">{designation}</span>
      </div>
    </div>
  );
};

/**
 * @param {string | null} eyebrow - small label above title; null hides it (About page template)
 * @param {React.ReactNode} title - main h2
 * @param {string | null} intro - optional paragraph under title
 */
const TeamSection = ({
  eyebrow = 'Meet Our Experts',
  title = (
    <>
      Experienced Doctors <br /> Dedicated to Your Smile.
    </>
  ),
  intro = null,
  members = homeTeamMembers,
}) => {
  return (
    <div className="padding-rl float-left w-100">
      <section className="float-left w-100 our-dentists-con position-relative padding-top padding-bottom padding-rl-responsive">
        <div className="container">
          <div className="heading-title-con text-center">
            {eyebrow ? <span className="special-text d-inline-block">{eyebrow}</span> : null}
            <h2 className="text-size-46 mb-0">{title}</h2>
            {intro ? (
              <p className="mb-0 mt-3 mx-auto team-section-intro">{intro}</p>
            ) : null}
          </div>
          <div className="row">
            {members.map((member, index) => (
              <TeamMember key={`${member.name}-${index}`} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
