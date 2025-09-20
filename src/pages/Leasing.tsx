import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Leasing = () => (
  <>
    <SEO 
      title="Leasing Services | Peak Properties" 
      description="Expert rental leasing services in Boulder County. Professional photography, strategic marketing, thorough tenant screening, and fast lease execution." 
      canonicalPath="/leasing" 
      type="Service"
      keywords="rental leasing Boulder, tenant screening Colorado, property marketing Longmont, rental photography Boulder County"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Property Leasing Services',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Peak Properties',
          address: { '@type': 'PostalAddress', addressLocality: 'Boulder', addressRegion: 'CO' }
        },
        description: 'Professional rental leasing services including marketing, showings, and tenant screening',
        areaServed: ['Boulder','Longmont','Louisville','Lafayette','Superior','Broomfield','Erie','Niwot','Gunbarrel'],
        serviceType: 'Property Leasing'
      }}
    />
    
    <div className="container">
      <Breadcrumbs />
    </div>
    
    <section className="container py-12">
      <header>
        <h1 className="font-head text-4xl mb-6">Leasing Services</h1>
        <p className="text-muted-foreground mb-8">We craft listings that stand out, schedule showings fast, and screen carefully.</p>
      </header>
      
      <div className="grid md:grid-cols-3 gap-5">
        <article className="rounded-lg border bg-card p-5">
          <h3 className="font-medium mb-2">Professional Marketing</h3>
          <p className="text-sm text-muted-foreground">Pro listing copy and photos at ideal Boulder times of day</p>
        </article>
        <article className="rounded-lg border bg-card p-5">
          <h3 className="font-medium mb-2">Efficient Showings</h3>
          <p className="text-sm text-muted-foreground">Online scheduling and prompt follow-up</p>
        </article>
        <article className="rounded-lg border bg-card p-5">
          <h3 className="font-medium mb-2">Thorough Screening</h3>
          <p className="text-sm text-muted-foreground">Application, screening, and lease preparation</p>
        </article>
      </div>
    </section>
    
    <section className="container py-12">
      <h2 className="font-head text-2xl mb-4">Browse Available Rentals</h2>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://portal.getaptly.com/search/grWTDBRgQ4gjJXBa3/"
          title="Peak Properties rental search - Browse available properties in Boulder County"
          className="h-full w-full rounded-lg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
    </section>
    
    <FAQ 
      title="Leasing FAQs" 
      items={[
        { q: 'How are showings handled?', a: 'Self-tour tech where appropriate plus hosted tours for premium homes.' },
        { q: 'What is included in screening?', a: 'Credit, income, background, eviction history, and prior rental references.' },
        { q: 'Do you do site-unseen leases?', a: 'Only with clear video tours and extra confirmations.' },
      ]} 
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How are showings handled?',
            acceptedAnswer: { '@type': 'Answer', text: 'Self-tour tech where appropriate plus hosted tours for premium homes.' }
          },
          {
            '@type': 'Question', 
            name: 'What is included in screening?',
            acceptedAnswer: { '@type': 'Answer', text: 'Credit, income, background, eviction history, and prior rental references.' }
          },
          {
            '@type': 'Question',
            name: 'Do you do site-unseen leases?', 
            acceptedAnswer: { '@type': 'Answer', text: 'Only with clear video tours and extra confirmations.' }
          }
        ]
      }}
    />
  </>
);

export default Leasing;