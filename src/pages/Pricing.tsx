import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/pages/partials/FAQ";

const Pricing = () => (
  <>
    <SEO title="Pricing | Peak Properties" description="Explore our property management plans and pricing - find the perfect management plan for your peace of mind." canonicalPath="/pricing" type="Service" />
    
    {/* Hero Section */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h1 className="font-head text-5xl font-bold mb-2">Pricing</h1>
      </div>
    </section>

    {/* Main Content */}
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="font-head text-3xl font-bold mb-4">Explore our Property Management Plans and Pricing</h2>
        <p className="text-lg text-accent font-medium">Find the perfect management plan for your peace of mind.</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Gold Plan */}
        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="font-head text-2xl font-bold mb-2">Gold Plan</h3>
          <p className="text-accent font-medium mb-6">Solid Core Management Services</p>
          <div className="border-t border-border pt-6 mb-6">
            <div className="text-4xl font-bold text-primary mb-2">8%</div>
            <p className="text-sm text-muted-foreground">of gross rents + tax ($120 min)</p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4">What's Included</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Leasing Support (1 month fee)</li>
              <li>Single Point of Contact</li>
              <li>Online Rent Collection</li>
              <li>Marketing Photos and Videos</li>
              <li>Monthly Financial Reporting</li>
              <li>Owner Portal Access</li>
              <li>Direct Deposit for Owner Payments</li>
              <li>Move-in & Move-out Services</li>
              <li>Repair Coordination</li>
              <li>Takeover Inspection</li>
              <li>24/7 Emergency Response</li>
            </ul>
          </div>
          <Button className="w-full mt-6">Choose Gold Plan</Button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="font-head text-2xl font-bold mb-2">Platinum Plan</h3>
          <p className="text-accent font-medium mb-6">Comprehensive Assistance</p>
          <div className="border-t border-border pt-6 mb-6">
            <div className="text-4xl font-bold text-primary mb-2">10%</div>
            <p className="text-sm text-muted-foreground">of gross rents + tax ($150 min)</p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4">What's Included</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Leasing Support (1 month fee)</li>
              <li>Single Point of Contact</li>
              <li>Online Rent Collection</li>
              <li>Marketing Photos and Videos</li>
              <li>Monthly Financial Reporting</li>
              <li>Owner Portal Access</li>
              <li>Direct Deposit for Owner Payments</li>
              <li>Move-in & Move-out Services</li>
              <li>Repair Coordination</li>
              <li>Takeover Inspection</li>
              <li>24/7 Emergency Response</li>
              <li>Annual Property Inspection</li>
              <li>Renewal Strategy & Market Analysis</li>
            </ul>
          </div>
          <Button className="w-full mt-6" variant="hero">Choose Platinum Plan</Button>
        </div>

        {/* Total Assurance Plan */}
        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="font-head text-2xl font-bold mb-2">Total Assurance</h3>
          <p className="text-accent font-medium mb-6">For Complete Peace of Mind</p>
          <div className="border-t border-border pt-6 mb-6">
            <div className="text-4xl font-bold text-primary mb-2">12%</div>
            <p className="text-sm text-muted-foreground">of gross rents + tax ($180 min)</p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4">What's Included</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full Leasing Support (1 month fee)</li>
              <li>Single Point of Contact</li>
              <li>Online Rent Collection</li>
              <li>Professional Marketing Photos & Videos</li>
              <li>Monthly Financial Reporting</li>
              <li>Owner Portal Access</li>
              <li>Direct Deposit for Owner Payments</li>
              <li>Move-in & Move-out Services</li>
              <li>Priority Repair Coordination</li>
              <li>Takeover Inspection</li>
              <li>24/7 Emergency Response</li>
              <li>Bi-annual Property Inspections</li>
              <li>Advanced Renewal Strategy</li>
              <li>Property Protection Plan</li>
              <li>Tenant Damage Protection</li>
            </ul>
          </div>
          <Button className="w-full mt-6">Choose Total Assurance</Button>
        </div>

        {/* Lease Only Plan */}
        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="font-head text-2xl font-bold mb-2">Lease Only</h3>
          <p className="text-accent font-medium mb-6">Strictly Leasing Service</p>
          <div className="border-t border-border pt-6 mb-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">of 1st month's rent</p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold mb-4">What's Included</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>In-Person Consultation</li>
              <li>Set the Ideal Rental Rate</li>
              <li>List Property on the MLS</li>
              <li>Professional Photography</li>
              <li>Comprehensive Marketing</li>
              <li>Tenant Screening & Selection</li>
              <li>Lease Preparation & Signing</li>
              <li>Move-in Coordination</li>
              <li>Security Deposit Handling</li>
            </ul>
          </div>
          <Button className="w-full mt-6">Choose Lease Only</Button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h3 className="font-head text-xl font-bold mb-2">Need Something Different?</h3>
        <p className="text-muted-foreground mb-4">Have a portfolio of properties or unique requirements? We offer custom solutions tailored to your specific needs.</p>
        <Button variant="outline" asChild>
          <a href="/contact">Contact Us for Custom Pricing</a>
        </Button>
      </div>
    </section>
    
    <FAQ title="Pricing FAQs" items={[
      { q: 'What fees should owners expect?', a: 'We keep it simple: a monthly management fee and leasing fee when we place a resident. No junk fees or hidden costs.' },
      { q: 'Do you mark up maintenance?', a: 'No. Vendor invoices are passed through at cost. We coordinate and ensure quality work without any markup.' },
      { q: 'Can you just lease but not manage?', a: 'Yes—our Lease Only plan handles marketing, screening, and move-in for a one-time fee.' },
      { q: 'How are renewals handled?', a: 'We review current market data and recommend rent and lease terms that balance tenant retention with maximizing your return.' },
      { q: 'Are there any setup or cancellation fees?', a: 'No setup fees. Our agreements are month-to-month with 30-day notice for cancellation.' },
      { q: 'What about emergency maintenance costs?', a: 'All plans include 24/7 emergency coordination. You only pay for actual vendor costs with no markup from us.' },
    ]} />
  </>
);

export default Pricing;
