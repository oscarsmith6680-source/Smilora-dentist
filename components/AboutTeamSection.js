'use client';

import React from 'react';
import TeamSection from '@/components/TeamSection';
import { aboutTeamMembers } from '@/lib/teamData';

/**
 * About page team block: data stays inside the client bundle so props are not
 * passed across the RSC → client serialization boundary (avoids edge-case failures).
 */
export default function AboutTeamSection() {
  return (
    <TeamSection
      eyebrow={null}
      title="Your Smile, Our Expertise"
      intro="Behind every confident smile is a dentist who cares. At Oralsquad, our team of experienced dental professionals is dedicated to providing gentle, modern, and personalized care for every patient."
      members={aboutTeamMembers}
    />
  );
}
