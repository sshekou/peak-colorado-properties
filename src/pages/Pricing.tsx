import { SEO } from "@/components/SEO";
import { PricingCard } from "@/components/cards/Cards";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/pages/partials/FAQ";

const Pricing = () => (
  <>
    <SEO title="Pricing | Peak Properties" description="Simple, transparent pricing for Boulder property management." canonicalPath="/pricing" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Pricing</h1>
      <p className="text-muted-foreground mb-8">Three straightforward plans. Volume or portfolio pricing available—ask us.</p>
      <div className="grid md:grid-cols-3 gap-5">
        <PricingCard plan="Essential" price="$99" features={["Leasing support","Rent collection","Basic reporting"]} cta={<Button className="mt-6 w-full">Choose Essential</Button>} />
        <PricingCard plan="Professional" price="$149" features={["Full management","Maintenance coordination","Annual inspection"]} cta={<Button className="mt-6 w-full" variant="hero">Choose Professional</Button>} />
        <PricingCard plan="Premium" price="$199" features={["Priority service","Bi‑annual inspections","Renewal strategy"]} cta={<Button className="mt-6 w-full">Choose Premium</Button>} />
      </div>
      <div className="mt-8 p-6 rounded-lg border bg-card">
        <h3 className="font-medium mb-1">Enterprise / Portfolio</h3>
        <p className="text-sm text-muted-foreground">Have 10+ doors or unique needs? <a href="/contact" className="story-link">Contact us</a> for a tailored plan.</p>
      </div>
    </section>
    <FAQ title="Pricing FAQs" items={[
      { q: 'What fees should owners expect?', a: 'We keep it simple: a monthly management fee and leasing fee when we place a resident. No junk fees.' },
      { q: 'Do you mark up maintenance?', a: 'No. Vendor invoices are passed through. We coordinate and ensure quality.' },
      { q: 'Can you just lease but not manage?', a: 'Yes—our Leasing plan handles marketing, screening, and move‑in.' },
      { q: 'How are renewals handled?', a: 'We review market data near your address and recommend a rent and term that balances retention and return.' },
    ]} />
  </>
);

export default Pricing;
