import { SEO } from "@/components/SEO";
import { FAQ } from "@/pages/partials/FAQ";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/cards/Cards";
import { useState } from "react";
import heroImage from "@/assets/boulder-flatirons-sunrise.jpg";
import boulderResidential from "@/assets/boulder-residential.jpg";

const OwnerFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <SEO
        title="Boulder Property Management | Peak Properties"
        description="Comprehensive property management services across Boulder County. Maximize your rental income with our proven 3-stage process."
        canonicalPath="/owner-faq"
        type="Service"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            <p className="font-script text-2xl md:text-3xl text-primary mb-4">Peak Properties</p>
            <p className="text-lg mb-2 tracking-wide">BOULDER COUNTY PROPERTY MANAGEMENT</p>
            <h1 className="font-head text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Protect Your Property,<br />
              Maximize Your Returns
            </h1>
            <Button size="lg" variant="hero" className="mt-6">
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center max-w-4xl">
          <p className="font-script text-3xl text-primary mb-6">Landlords feel like...</p>
          <h2 className="font-head text-4xl md:text-5xl mb-8 text-foreground">
            Chaos is always just a call away.
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Whether you become a landlord by choice or necessity, you need your investment property to pay off. The trouble is, all sorts of things can get in the way.
            </p>
            <p className="italic">
              What if the property sits empty? gets trashed? or monopolizes your time? What if your renter doesn't pay? the market tanks? or you regret your decision?
            </p>
            <p>
              The truth is, rental property ownership is stressful because it requires landlord knowledge you might not have... yet. But here's the good news: We have that knowledge, and we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-t">
        <div className="container">
          <p className="text-center text-muted-foreground mb-8">Trusted by property owners across Boulder County</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            <Badge variant="outline" className="px-4 py-2">CU Boulder Area</Badge>
            <Badge variant="outline" className="px-4 py-2">Pearl Street District</Badge>
            <Badge variant="outline" className="px-4 py-2">Longmont Tech Corridor</Badge>
            <Badge variant="outline" className="px-4 py-2">Louisville Historic</Badge>
            <Badge variant="outline" className="px-4 py-2">Superior Communities</Badge>
          </div>
        </div>
      </section>

      {/* Three Stages Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-head text-4xl md:text-5xl mb-4">What you can expect</h2>
            <p className="text-xl text-muted-foreground">The 3 stages of property management.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Stage 1: Prepare */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-head text-2xl mb-4">Prepare</h3>
              <p className="text-muted-foreground mb-6">
                When we onboard your home, we run it through our detailed checklist to coordinate and complete any necessary work to get it ready for market. That way, your home will make the best first impression, rent faster at top dollar, and maintain its value longer.
              </p>
              
              <div className="border-t pt-6">
                <button 
                  onClick={() => toggleAccordion('prepare')}
                  className="w-full flex items-center justify-between text-left font-medium"
                >
                  <span>How We Handle Maintenance & Upgrades</span>
                  <span className={`transform transition-transform ${openAccordion === 'prepare' ? 'rotate-180' : ''}`}>↓</span>
                </button>
                {openAccordion === 'prepare' && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-3">
                    <p>We know upgrades and unexpected repairs can make even the most seasoned investors uneasy. Don't worry, we're always thinking about long-term profits.</p>
                    <p>We do only what's really needed while not letting you trip over dollars to get to pennies. If a repair quote is more than our agreed-upon amount, we'll call you and make a smart decision together.</p>
                    <p>Our network of Boulder County vendors is well-known and highly trusted. Every vendor maintains up-to-date insurance and licensing. If we wouldn't have them in our own homes, they won't be in yours.</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Stage 2: Market */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-head text-2xl mb-4">Market</h3>
              <p className="text-muted-foreground mb-6">
                Maximizing exposure is crucial to minimizing vacancy. Our rentals plug into Boulder County's most effective marketing strategies, taking advantage of local networks and seasonal demand patterns.
              </p>
              
              <div className="border-t pt-6">
                <button 
                  onClick={() => toggleAccordion('market')}
                  className="w-full flex items-center justify-between text-left font-medium"
                >
                  <span>How We Market & Screen</span>
                  <span className={`transform transition-transform ${openAccordion === 'market' ? 'rotate-180' : ''}`}>↓</span>
                </button>
                {openAccordion === 'market' && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-3">
                    <p>We treat your investment property with the same care as our premium listings. Every rental receives professional photography and is marketed across multiple channels.</p>
                    <p>Every rental home is entered into the MLS, syndicated to Zillow, Trulia, and other major sites, plus promoted through our extensive Boulder County network.</p>
                    <p>We screen carefully - criminal background checks, credit evaluation, income verification, and landlord references. Detailed vetting leads to quality tenants and fewer surprises.</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Stage 3: Profit */}
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-head text-2xl mb-4">Profit</h3>
              <p className="text-muted-foreground mb-6">
                We take our responsibility for helping you reach your real estate goals seriously. Track your progress with detailed monthly and year-end reports while maximizing your Boulder County investment returns.
              </p>
              
              <div className="border-t pt-6">
                <button 
                  onClick={() => toggleAccordion('profit')}
                  className="w-full flex items-center justify-between text-left font-medium"
                >
                  <span>How We Help You Reach Your Goals</span>
                  <span className={`transform transition-transform ${openAccordion === 'profit' ? 'rotate-180' : ''}`}>↓</span>
                </button>
                {openAccordion === 'profit' && (
                  <div className="mt-4 text-sm text-muted-foreground space-y-3">
                    <p>Whether you're maximizing ROI on your current Boulder County portfolio or identifying new properties with potential, we can help with our local market expertise.</p>
                    <p>We craft your monthly owner statement into a concise snapshot of income and expenses. Access past reports from your dashboard anytime.</p>
                    <p>At year-end, we provide 1099s and itemized profit/loss statements for your tax professional, making tax time straightforward.</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-head text-3xl md:text-4xl mb-6">Smart tech solutions</h2>
              <h3 className="text-2xl mb-6 text-primary">Work smarter, not harder.</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We use advanced technology to maximize efficiency and minimize costly mistakes. Our inspection software combines high-resolution photos and videos to document properties comprehensively, creating an irrefutable reference for all parties.
              </p>
            </div>
            <div className="relative">
              <img 
                src={boulderResidential} 
                alt="Property management technology" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-head text-3xl md:text-4xl mb-4">Client testimonials</h2>
            <p className="text-xl text-muted-foreground">See what Boulder County property owners are saying</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Peak Properties made my first rental experience seamless. They found quality tenants for my Boulder home within two weeks and handle everything professionally."
              name="Sarah M., Boulder"
            />
            <TestimonialCard 
              quote="The monthly reports are detailed and transparent. I always know exactly where my Longmont property stands financially. Highly recommend their services."
              name="Mike R., Longmont"
            />
            <TestimonialCard 
              quote="After a bad experience with another company, Peak Properties restored my confidence in property management. Their local Boulder County expertise is unmatched."
              name="Jennifer L., Louisville"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="font-head text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's talk specifics about Boulder County property management.</p>
        </div>
        
        <FAQ
          title=""
          items={[
            { 
              q: "How quickly can you lease my Boulder County home?", 
              a: "Seasonality matters in Boulder County. With accurate pricing and strong marketing leveraging our local network, our goal is 2–3 weeks on market on average. Spring and summer typically see faster leasing, while winter may take longer due to seasonal demand patterns." 
            },
            { 
              q: "How do you recommend a rental price?", 
              a: "We analyze recent comparable rentals across Boulder County, neighborhood demand (proximity to CU, Pearl Street, tech corridors), seasonal factors, and property condition. We'll review a pricing range with you and adjust if market response indicates needed changes." 
            },
            { 
              q: "Do you allow pets in rental properties?", 
              a: "Most properties benefit from allowing pets with reasonable restrictions. We use third-party pet screening and charge appropriate deposits/fees per Colorado regulations. This broadens your applicant pool while protecting your investment through proper screening and documentation." 
            },
            { 
              q: "How are maintenance requests handled?", 
              a: "Residents submit requests through our tenant portal with photos. We triage by urgency—heating issues in Boulder winters get immediate priority. We dispatch our vetted local vendors and keep you informed with estimates for non-emergency work over agreed thresholds." 
            },
            { 
              q: "When are owner payouts sent?", 
              a: "Monthly payouts are sent after rent clears and approved expenses are processed, typically by the last business day of each month. Detailed statements and year-end 1099s are available through your Owner Portal for easy record keeping." 
            },
            { 
              q: "What are your management fees?", 
              a: "Our fees are transparent and competitive for the Boulder County market. We tailor pricing to your property type and service level needs. You'll see all leasing and monthly management fees clearly outlined before we begin—no hidden surprises." 
            },
            { 
              q: "Can you take over management mid-lease?", 
              a: "Absolutely. We coordinate smooth transitions from other management companies, notify tenants of the change, collect all necessary documentation, and onboard your property with minimal disruption to rental income." 
            },
            { 
              q: "I don't own a rental property yet—can you help me purchase wisely?", 
              a: "Yes! We can analyze potential Boulder County investment properties before you purchase, reviewing rental income potential, HOA fees, neighborhood trends, and cash flow projections. Our local market expertise helps you make informed investment decisions." 
            }
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-head text-3xl md:text-4xl mb-4">
            Even if you're planning to invest in the future
          </h2>
          <p className="text-xl mb-8 opacity-90">Start the conversation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Let's Connect
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnerFAQ;