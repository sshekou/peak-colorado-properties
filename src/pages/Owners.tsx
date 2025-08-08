import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";

const Owners = () => (
  <>
    <SEO title="Property Management for Owners | Peak Properties" description="Hands‑on management for Boulder and nearby rentals—clear reporting, careful leasing, and responsive care." canonicalPath="/owners" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Property Management for Owners</h1>
      <p className="text-muted-foreground mb-8">We protect your property, keep good residents, and make the numbers easy to understand.</p>
      <ul className="grid md:grid-cols-3 gap-5 text-sm">
        <li className="rounded-lg border bg-card p-5">Leasing with pro photos and Boulder‑specific marketing</li>
        <li className="rounded-lg border bg-card p-5">Thorough screening and fair housing compliance</li>
        <li className="rounded-lg border bg-card p-5">Maintenance coordination with trusted vendors</li>
        <li className="rounded-lg border bg-card p-5">Clear owner statements and tax‑time reports</li>
        <li className="rounded-lg border bg-card p-5">Renewals that balance retention and revenue</li>
        <li className="rounded-lg border bg-card p-5">Inspections with photos and suggestions</li>
      </ul>
    </section>
    <FAQ title="Owner FAQs" items={[
      { q: 'When do owners get paid?', a: 'We disburse monthly after rents clear the bank and any approved invoices are posted.' },
      { q: 'How do you screen residents?', a: 'Credit, income, background, and prior rental history—aligned with Colorado guidelines.' },
      { q: 'Can I switch from another manager?', a: 'Yes. We’ll help with a smooth handoff and onboarding.' },
    ]} />
  </>
);
export default Owners;
