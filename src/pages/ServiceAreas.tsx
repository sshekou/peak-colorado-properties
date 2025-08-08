import { SEO } from "@/components/SEO";
import { locations } from "@/data/locations";
import { LocationCard } from "@/components/cards/Cards";

const ServiceAreas = () => (
  <>
    <SEO title="Service Areas | Peak Properties" description="Property management across Boulder, Longmont, Louisville, and more." canonicalPath="/service-areas" type="Service" />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-6">Service Areas</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {locations.map((l) => <LocationCard key={l.slug} name={l.name} blurb={l.overview} to={`/service-areas/${l.slug}`} />)}
      </div>
    </section>
  </>
);
export default ServiceAreas;
