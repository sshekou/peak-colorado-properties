import hero from "@/assets/boulder-flatirons-hero.jpg";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/cards/Cards";
import { ServiceCard } from "@/components/cards/Cards";
import { LocationCard } from "@/components/cards/Cards";
import { blogPosts } from "@/data/blogPosts";
import { testimonials } from "@/data/testimonials";
import { locations } from "@/data/locations";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <SEO
        title="Peak Properties | Boulder Property Management"
        description="Friendly, data‑driven property management and leasing across Boulder County."
        canonicalPath="/"
        type="website"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Peak Properties',
          url: window.location.origin,
          areaServed: ['Boulder','Longmont','Louisville','Lafayette','Superior','Broomfield','Erie','Niwot','Gunbarrel'],
          address: { '@type': 'PostalAddress', addressLocality: 'Boulder', addressRegion: 'CO' }
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container relative z-10 py-16">
          <div className="max-w-2xl">
            <h1 className="font-head text-4xl md:text-5xl leading-tight mb-4 text-white">Property management that feels local—and performs like a pro.</h1>
            <p className="text-lg text-white/90 mb-6">We lease, care for, and optimize Boulder‑area rentals with clear communication and modern tools.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/pricing">See pricing</Link></Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black"><Link to="/contact">Schedule a consultation</Link></Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div><strong className="block text-lg text-white">48 hrs</strong><span className="text-white/80">Avg. maintenance response</span></div>
              <div><strong className="block text-lg text-white">7 days</strong><span className="text-white/80">Typical on‑market time</span></div>
              <div><strong className="block text-lg text-white">4.8★</strong><span className="text-white/80">Owner satisfaction</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services quick hits */}
      <section className="container py-14">
        <h2 className="font-head text-3xl mb-6">Everything owners need—under one roof</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <ServiceCard title="Leasing" description="High‑impact marketing, showings, and careful tenant screening." />
          <ServiceCard title="Management" description="Responsive maintenance, resident care, and compliance oversight." />
          <ServiceCard title="Reporting" description="Clear statements, performance insights, and renewal planning." />
        </div>
      </section>

      {/* Locations */}
      <section className="container py-14">
        <h2 className="font-head text-3xl mb-6">Our Markets</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((l) => (
            <LocationCard key={l.slug} name={l.name} blurb={l.overview} to={`/service-areas/${l.slug}`} slug={l.slug} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-14">
        <h2 className="font-head text-3xl mb-6">Owners who trust us</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (<TestimonialCard key={t.name} quote={t.quote} name={t.name} />))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="container py-14">
        <h2 className="font-head text-3xl mb-6">From the blog</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.slice(0,3).map((p) => (
            <a key={p.slug} href={`/blog#${p.slug}`} className="block rounded-lg border bg-card p-6 hover-scale">
              <h3 className="font-medium mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.abstract}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="container py-14 text-primary-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-head text-3xl mb-1">Ready for easier ownership?</h2>
              <p className="text-primary-foreground/90">Request a free rent estimate and a friendly expert will follow up.</p>
            </div>
            <Button asChild size="lg" variant="hero"><Link to="/pricing">Get started</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
