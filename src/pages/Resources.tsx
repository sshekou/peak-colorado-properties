import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";

const Resources = () => (
  <>
    <SEO title="Resources & FAQs | Peak Properties" description="Helpful guides for Boulder rental owners and residents." canonicalPath="/resources" type="FAQPage" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Resources & FAQs</h1>
      <FAQ title="General FAQs" items={[
        { q: 'Where do I pay rent?', a: 'Use the Resident Portal link in the top right.' },
        { q: 'How do I get owner statements?', a: 'Log in to the Owner Portal anytime.' },
        { q: 'Do you manage HOAs?', a: 'We focus on residential rentals for single‑family, townhomes, and small multifamily.' },
      ]} />
    </section>
  </>
);
export default Resources;
