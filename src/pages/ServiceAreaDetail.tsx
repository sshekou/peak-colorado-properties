import { useParams } from "react-router-dom";
import { locations } from "@/data/locations";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const ServiceAreaDetail = () => {
  const { slug } = useParams();
  const info = locations.find((l) => l.slug === slug);
  if (!info) return <div className="container py-12">Area not found.</div>;
  return (
    <>
      <SEO title={`${info.name} Property Management | Peak Properties`} description={`Local management and leasing in ${info.name}, Colorado.`} canonicalPath={`/service-areas/${info.slug}`} type="Service" />
      <section className="container py-12">
        <h1 className="font-head text-4xl mb-2">{info.name} Property Management</h1>
        <p className="text-muted-foreground mb-6">{info.overview}</p>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-lg border bg-card p-5">Owner value: Careful resident screening</div>
          <div className="rounded-lg border bg-card p-5">Owner value: Proactive maintenance</div>
          <div className="rounded-lg border bg-card p-5">Owner value: Local compliance awareness</div>
        </div>
        <div className="mt-6 p-5 rounded-lg border bg-card">
          <strong>Example rents:</strong> {info.exampleRent} (placeholder; request a custom estimate)
        </div>
        <div className="mt-6">
          <Button variant="hero">Request a rent estimate</Button>
        </div>
      </section>
    </>
  );
};
export default ServiceAreaDetail;
