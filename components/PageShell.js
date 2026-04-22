import SubBanner from '@/components/SubBanner';
import TextSlider from '@/components/TextSlider';

export default function PageShell({ title, description, breadcrumb, children }) {
  return (
    <main className="float-left w-100">
      <SubBanner
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      />
      <TextSlider />
      {children}
    </main>
  );
}
