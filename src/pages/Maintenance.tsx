import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";
import { MaintenanceForm } from "@/components/forms/MaintenanceForm";

const Maintenance = () => (
  <>
    <SEO title="Maintenance & Repairs | Peak Properties" description="Responsive coordination with trusted vendors—season after season." canonicalPath="/maintenance" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Maintenance & Repairs</h1>
      <p className="text-muted-foreground mb-8">Residents get clear instructions, owners get transparency, and homes get cared for.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-2">Submit a maintenance request</h3>
          <MaintenanceForm />
        </div>
        <ul className="space-y-3 text-sm">
          <li className="rounded-lg border bg-card p-5">24/7 intake for urgent issues</li>
          <li className="rounded-lg border bg-card p-5">Preventative schedules for Boulder winters</li>
          <li className="rounded-lg border bg-card p-5">Clear approvals and no surprise markups</li>
        </ul>
      </div>
    </section>
    <FAQ title="Maintenance FAQs" items={[
      { q: 'What’s considered emergency?', a: 'No heat in winter, flooding, active leaks, and safety issues. Call immediately.' },
      { q: 'Who chooses the vendor?', a: 'We assign trusted pros based on the issue and location.' },
      { q: 'How are approvals handled?', a: 'We follow pre‑set limits and confirm with owners for larger repairs.' },
    ]} />
  </>
);
export default Maintenance;
