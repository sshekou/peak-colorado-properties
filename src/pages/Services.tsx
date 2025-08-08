import { SEO } from "@/components/SEO";
import { ServiceCard } from "@/components/cards/Cards";
import { FAQ } from "@/pages/partials/FAQ";

const Services = () => (
  <>
    <SEO title="Services | Peak Properties" description="Residential property management, leasing, and full-service support for Boulder owners and residents." canonicalPath="/services" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Services Overview</h1>
      <p className="text-muted-foreground mb-8">From leasing to renewals, we deliver dependable results with a local touch.</p>
      <div className="grid md:grid-cols-3 gap-5">
        <ServiceCard title="Tenant Screening" description="Credit, income, background, and rental history checks tailored to Colorado norms." />
        <ServiceCard title="Maintenance Coordination" description="Trusted vendors and transparent communication—snow to summer." />
        <ServiceCard title="Rent Collection" description="Modern resident tools and consistent follow‑up." />
        <ServiceCard title="Owner Reporting" description="Clean monthly statements and year‑end summaries." />
        <ServiceCard title="Inspections" description="Move‑in, renewal, and periodic checks with photos." />
        <ServiceCard title="Investment Advisory (Lite)" description="High‑level insights on potential acquisitions around Boulder County." />
      </div>
    </section>
    <FAQ
      title="Service FAQs"
      items={[
        { q: 'How fast do you lease in Boulder?', a: 'Seasonality matters. We adjust pricing and marketing to aim for 2–3 weeks on market on average.' },
        { q: 'Do you allow pets?', a: 'Most homes do with sensible restrictions and deposits. We recommend pet screening to reduce risk.' },
        { q: 'How do inspections work?', a: 'We complete detailed move‑in, move‑out, and renewal checks with photo documentation.' },
        { q: 'What if an eviction is needed?', a: 'It’s rare. As a last resort we coordinate with a local attorney to follow Colorado law.' },
        { q: 'How do you handle snow and seasonal issues?', a: 'We schedule seasonal maintenance and prepare residents before storms and temperature swings.' },
      ]}
    />
  </>
);

export default Services;
