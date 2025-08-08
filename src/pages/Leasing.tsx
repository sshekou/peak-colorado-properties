import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";

const Leasing = () => (
  <>
    <SEO title="Leasing Services | Peak Properties" description="High‑quality listings, showings, and screening tailored to Boulder’s market." canonicalPath="/leasing" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Leasing Services</h1>
      <p className="text-muted-foreground mb-8">We craft listings that stand out, schedule showings fast, and screen carefully.</p>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-lg border bg-card p-5">Pro listing copy and photos at ideal Boulder times of day</div>
        <div className="rounded-lg border bg-card p-5">Online scheduling and prompt follow‑up</div>
        <div className="rounded-lg border bg-card p-5">Application, screening, and lease preparation</div>
      </div>
    </section>
    <FAQ title="Leasing FAQs" items={[
      { q: 'How are showings handled?', a: 'Self‑tour tech where appropriate plus hosted tours for premium homes.' },
      { q: 'What’s included in screening?', a: 'Credit, income, background, eviction history, and prior rental references.' },
      { q: 'Do you do site‑unseen leases?', a: 'Only with clear video tours and extra confirmations.' },
    ]} />
  </>
);
export default Leasing;
