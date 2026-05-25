import { notFound } from 'next/navigation';
import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';
import ServiceDetailContent from '@/components/ServiceDetailContent';
import PatientTrust from '@/components/PatientTrust';
import TestimonialSection from '@/components/TestimonialSection';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/servicesContent';

const STATIC_SERVICE_SLUGS = new Set([
  'preventive-care',
  'professional-teeth-whitening',
  'cosmetic-dentistry',
  'periodontal-care',
  'restorative-treatments',
  'endodontics',
  'oral-surgery',
  'orthodontics',
  'pediatric-dentistry',
]);

export function generateStaticParams() {
  return getAllServiceSlugs()
    .filter((slug) => !STATIC_SERVICE_SLUGS.has(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: 'Service | Oralsquad' };
  }
  return {
    title: `${service.title} | Oralsquad`,
    description: service.metaDescription,
  };
}

export default function ServiceSlugPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const { slug: _slug, metaDescription: _meta, ...serviceForClient } = service;

  return (
    <main>
      <SubBanner
        title={service.title}
        breadcrumb={service.title}
        breadcrumbParent={{ href: '/services', label: 'Services' }}
      />
      <TextSlider />
      <ServiceDetailContent service={serviceForClient} />
      <div className="padding-rl float-left w-100">
        <PatientTrust />
      </div>
      <TestimonialSection />
    </main>
  );
}
