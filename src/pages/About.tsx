import { SEO } from "@/components/SEO";
import boulderFlatirons from "@/assets/about-hero-flatirons.jpg";
import pearlStreet from "@/assets/pearl-street-mall.jpg";
import boulderResidential from "@/assets/boulder-residential.jpg";

const About = () => (
  <>
    <SEO title="About | Peak Properties" description="Boulder‑based and people‑focused. Learn why owners choose Peak." canonicalPath="/about" type="Organization" />
    
    {/* Hero Section */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img 
        src={boulderFlatirons} 
        alt="Boulder Colorado Flatirons at sunrise" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container text-center text-white">
        <h1 className="font-head text-5xl md:text-6xl mb-6">About Peak Properties</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Property management in Boulder is about more than just buildings—it's about quality of life.
        </p>
      </div>
    </section>

    {/* Introduction */}
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Nestled in the foothills of the Rockies, Boulder has a unique character: outdoor adventure, environmental awareness, 
          strong community values, and high expectations. We built Peak Properties to match that character: exceptional service, 
          deep local knowledge, and a commitment to excellence.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-head text-3xl mb-8">Who We Are</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">Locally Rooted, Professionally Operated</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Peak Properties is Boulder‑based and owned. We live, work, and recreate here, so we know the rhythms 
                  of Pearl Street, the seasons in the Flatirons, and the unique challenges and opportunities of the Boulder housing market.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Focused on Relationships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We see ourselves as partners—not just managers. For owners, tenants, vendors, and neighbors alike, 
                  our goal is to build trust through transparency, clear communication, and consistent follow‑through.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Driven by Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity. Responsiveness. Stewardship. Sustainability. These aren't just words—they guide every decision we make. 
                  Whether it's selecting a tenant, scheduling maintenance, or evaluating property upgrades, our values are woven into our work.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={pearlStreet} 
              alt="Pearl Street Mall in Boulder Colorado" 
              className="rounded-xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-head text-3xl mb-8 text-center">What We Do</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            We offer full‑service property management that takes care of everything so you don't have to.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-elevated">
              <h3 className="font-semibold text-xl mb-3">Comprehensive Marketing & Leasing</h3>
              <p className="text-muted-foreground">
                We market your property to the right tenants using high‑quality photography, clear listings, 
                and strategic pricing. Our screening process balances fairness with protecting your investment.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elevated">
              <h3 className="font-semibold text-xl mb-3">Tenant Relations & Retention</h3>
              <p className="text-muted-foreground">
                Happy tenants make stable returns. We invest in maintenance, clear communication, and follow‑up, 
                so tenants want to stay and take care of your property.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elevated">
              <h3 className="font-semibold text-xl mb-3">Maintenance & Upkeep</h3>
              <p className="text-muted-foreground">
                From scheduled preventive maintenance to emergency repairs, we maintain your property with respect 
                and efficiency. Local contractors. High standards. Safe, well‑kept homes.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elevated">
              <h3 className="font-semibold text-xl mb-3">Financial Management & Reporting</h3>
              <p className="text-muted-foreground">
                Detailed, timely accounting. Transparent expense and income reporting. Regular assessments of performance. 
                We help you understand where your investment stands, and how to improve its returns.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-elevated md:col-span-2">
              <h3 className="font-semibold text-xl mb-3">Regulatory Compliance & Legal Oversight</h3>
              <p className="text-muted-foreground">
                Boulder (and Colorado more broadly) has its own set of housing and landlord‑tenant laws, 
                environmental codes, and rental licensing requirements. We make sure your properties are always in compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Peak Properties */}
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={boulderResidential} 
              alt="Residential properties in Boulder Colorado" 
              className="rounded-xl shadow-elevated w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="font-head text-3xl mb-8">Why Choose Peak Properties</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Deep Boulder Market Expertise</h3>
                <p className="text-muted-foreground">
                  We know the neighborhoods—from north Boulder to Gunbarrel, from Baseline to the outskirts. 
                  We understand what renters want: proximity to trailheads, transit, CU campus, excellent schools, 
                  access to green space—and what it costs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Proactive & Personalized Service</h3>
                <p className="text-muted-foreground">
                  Instead of reacting, we anticipate: season‑based maintenance, lease renewals, market shifts. 
                  Instead of one‑size‑fits‑all, we tailor our services to each property and owner.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Commitment to High Standards & Sustainability</h3>
                <p className="text-muted-foreground">
                  Boulderites value sustainability and long‑term thinking. We aim to preserve property value, 
                  minimize waste, and incorporate energy and eco‑friendly improvements wherever they make sense.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Transparent Fees & Honest Communication</h3>
                <p className="text-muted-foreground">
                  No surprises. Clear contracts. Regular updates. Responsive support. We're available when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-head text-3xl mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To help property owners in Boulder preserve and grow their investments while enhancing the living 
            experiences of their tenants—and contributing positively to the fabric of Boulder communities.
          </p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="font-head text-3xl mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          If you're an owner seeking peace of mind and better returns—or a tenant seeking a property that feels like home—Peak Properties is here to deliver.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Contact Us Today
          </a>
          <a 
            href="/services" 
            className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Learn About Our Services
          </a>
        </div>
      </div>
    </section>
  </>
);

export default About;