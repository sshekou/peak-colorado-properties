import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";

const OwnerFAQ = () => (
  <>
    <SEO
      title="Owner FAQs | Peak Properties"
      description="Answers for Boulder rental owners: leasing timelines, fees, payouts, maintenance, and compliance."
      canonicalPath="/owner-faq"
      type="FAQPage"
    />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Owner Frequently Asked Questions</h1>
      <p className="text-muted-foreground max-w-2xl">
        Straightforward answers for Boulder and nearby towns including Longmont, Louisville, Lafayette, Superior, and more.
      </p>
    </section>
    <FAQ
      title="Common Owner Questions"
      items={[
        { q: "How quickly can you lease my Boulder home?", a: "Seasonality matters here. With accurate pricing and strong marketing, our goal is 2–3 weeks on market on average, faster in spring/summer, sometimes longer in winter." },
        { q: "How do you recommend a rental price?", a: "We analyze comps across Boulder County, neighborhood demand (e.g., near Pearl Street or CU), time of year, and condition. We’ll review a pricing range with you and revisit if interest is soft." },
        { q: "Do you allow pets?", a: "Most homes do with sensible limits. We use third‑party pet screening and charge deposits or fees per Colorado norms to reduce risk while broadening the applicant pool." },
        { q: "How are maintenance requests handled?", a: "Residents submit requests via the portal with photos. We triage for urgency (frozen pipes and heat in winter get priority), dispatch trusted vendors, and keep you informed with estimates for non‑emergencies." },
        { q: "When are owner payouts sent?", a: "Monthly, after rent clears and approved invoices post. Statements and 1099s are available in your Owner Portal for easy tax time." },
        { q: "What are your management fees?", a: "Transparent and simple. We tailor fees to your property type and service level; you’ll see leasing and monthly management fees outlined clearly before we begin." },
        { q: "Can you take over mid‑lease from another manager?", a: "Yes. We coordinate a smooth handoff, notify residents, collect key documents, and onboard your property with minimal disruption." },
        { q: "How do you document move‑ins and move‑outs?", a: "Detailed checklists with time‑stamped photos. We aim to prevent disputes and make security deposit accounting clear and timely per Colorado law (no legal advice)." },
      ]}
    />
  </>
);

export default OwnerFAQ;
