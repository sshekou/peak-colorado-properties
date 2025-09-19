import { SEO } from "@/components/SEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Availability = () => (
  <>
    <SEO
      title="Availability | Peak Properties"
      description="Browse available rentals across Boulder County. Modern listings with easy online scheduling and applications."
      canonicalPath="/availability"
      type="WebPage"
    />
    <section className="container py-12">
      <h1 className="font-head text-4xl mb-4">Available Rentals in Boulder County</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl">
        Explore current homes and apartments in Boulder, Longmont, Louisville, Lafayette, Superior, and beyond. Book tours and apply online in minutes.
      </p>
      <div className="flex gap-3 mb-8">
        <Button asChild variant="outline"><a href="https://portal.getaptly.com/grWTDBRgQ4gjJXBa3/applicant/home/login" target="_blank" rel="noopener noreferrer">Apply Now</a></Button>
        <Button asChild><a href="#listings">View Listings</a></Button>
      </div>
      <div id="listings" />
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://portal.getaptly.com/search/grWTDBRgQ4gjJXBa3/"
          title="Peak Properties rental search"
          className="h-full w-full rounded-lg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio>
    </section>
    <section className="container py-12 grid md:grid-cols-3 gap-5">
      <div className="rounded-lg border bg-card p-5">
        <h3 className="font-medium mb-2">How to Apply</h3>
        <p className="text-sm text-muted-foreground">Select a listing above, click Apply, and complete one application per adult. Have ID and income docs ready.</p>
      </div>
      <div className="rounded-lg border bg-card p-5">
        <h3 className="font-medium mb-2">Touring Options</h3>
        <p className="text-sm text-muted-foreground">Self‑tour tech where appropriate plus hosted showings for premium homes. We’ll confirm quickly after you request a time.</p>
      </div>
      <div className="rounded-lg border bg-card p-5">
        <h3 className="font-medium mb-2">Resident Support</h3>
        <p className="text-sm text-muted-foreground">After move‑in, use the Resident Portal for payments and maintenance. We keep communication clear and prompt.</p>
      </div>
    </section>
  </>
);

export default Availability;
