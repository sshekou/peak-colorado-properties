import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms/ContactForm";

const Contact = () => (
  <>
    <SEO title="Contact | Peak Properties" description="Schedule a consultation or ask a question—Boulder team, ready to help." canonicalPath="/contact" type="ContactPage" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-2">Send us a note</h3>
          <ContactForm />
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-2">Prefer to talk?</h3>
          <p className="text-sm text-muted-foreground">We’ll share a direct line when you reach out—no call centers.</p>
        </div>
      </div>
    </section>
  </>
);
export default Contact;
