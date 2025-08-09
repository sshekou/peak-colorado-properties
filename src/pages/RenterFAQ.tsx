import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";

const RenterFAQ = () => (
  <>
    <SEO
      title="Renter FAQ | Peak Properties"
      description="Answers for Boulder County residents: applying, qualifications, pets, rent payments, and maintenance requests."
      canonicalPath="/renter-faq"
      type="FAQPage"
    />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Renter Frequently Asked Questions</h1>
      <p className="text-muted-foreground max-w-2xl">
        Helpful info for living in Boulder and nearby communities—applications, pets, payments, and more.
      </p>
    </section>
    <FAQ
      title="Common Renter Questions"
      items={[
        { q: "How do I apply for a home?", a: "Click Apply from a listing and complete the online application for each adult. Have a photo ID, income docs, and pet info ready if applicable." },
        { q: "What are the qualification criteria?", a: "We review credit, income, rental history, and background checks. Cosigners may be considered case‑by‑case; student scenarios near CU are common and reviewed carefully." },
        { q: "Are pets allowed?", a: "Many homes allow pets with screening and deposits/fees. Breed/size limits depend on the property and owner preferences." },
        { q: "How do I pay rent?", a: "Use the Resident Portal for ACH or card payments. We encourage auto‑pay to avoid late fees." },
        { q: "How do I request maintenance?", a: "Submit a request with photos in the portal. For emergencies (e.g., active leaks, loss of heat in winter), call the emergency line listed in your portal." },
        { q: "Do I need renter’s insurance?", a: "Yes, we require active renter’s insurance. It protects your belongings and offers liability coverage." },
        { q: "Who handles utilities?", a: "Utilities vary by property. Your lease outlines what’s included and what you need to set up (e.g., Xcel Energy, City of Boulder, etc.)." },
        { q: "How much notice is required to move out?", a: "Check your lease for specific terms. Typically 60 days' written notice prior to lease end is required in Boulder County rentals." },
      ]}
    />
  </>
);

export default RenterFAQ;
