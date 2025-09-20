import { SEO } from "@/components/SEO";
import { locations } from "@/data/locations";
import { LocationCard } from "@/components/cards/Cards";
import ServiceAreasMap from "@/components/ServiceAreasMap";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const ServiceAreas = () => (
  <>
    <SEO 
      title="Service Areas | Peak Properties" 
      description="Property management across Boulder, Longmont, Louisville, Lafayette, Superior, Broomfield, Erie, Niwot, and Gunbarrel. Expert local knowledge and responsive service." 
      canonicalPath="/service-areas" 
      type="Service"
      keywords="Boulder property management, Longmont rentals, Louisville property management, Lafayette rentals, Colorado property management"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Property Management Services',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Peak Properties'
        },
        areaServed: locations.map(l => `${l.name}, CO`),
        serviceType: 'Property Management'
      }}
    />
    
    <div className="container">
      <Breadcrumbs />
    </div>
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Service Areas</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Peak Properties serves Boulder County and surrounding communities. Hover over the map to explore each area.
      </p>
      
      <ServiceAreasMap />
      
      <div className="mt-12">
        <h2 className="font-head text-2xl mb-6">Our Markets</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((l) => <LocationCard key={l.slug} name={l.name} blurb={l.overview} to={`/service-areas/${l.slug}`} slug={l.slug} />)}
        </div>
      </div>
    </section>
  </>
);
export default ServiceAreas;
