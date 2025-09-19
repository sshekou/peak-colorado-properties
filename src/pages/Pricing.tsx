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
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Gold Plan */}
        <div className="bg-card rounded-lg border p-8 flex flex-col h-full">
          <div className="text-center mb-6">
            <h3 className="font-head text-2xl font-bold mb-2">Gold Plan</h3>
            <p className="text-accent font-medium mb-6">Solid Core Management Services</p>
          </div>
          
          {/* Pricing Section - Aligned */}
          <div className="text-center border-t border-border pt-6 mb-8">
            <div className="text-5xl font-bold text-primary mb-2">8%</div>
            <p className="text-sm text-muted-foreground">of monthly rent ($120 minimum)</p>
            <p className="text-xs text-muted-foreground mt-1">+ Leasing Fee: 1 month's rent</p>
          </div>
          
          {/* Services List */}
          <div className="flex-grow mb-8">
            <h4 className="font-semibold mb-4 text-center">What's Included</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Professional Property Marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Comprehensive Tenant Screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Online Rent Collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>24/7 Emergency Response</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Property Maintenance Coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Monthly Financial Reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Owner & Tenant Portals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Direct Deposit Payments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Move-in & Move-out Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Eviction Process Handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Single Point of Contact</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground mr-2">•</span>
                <span className="text-muted-foreground">Annual Inspection ($95 fee)</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground mr-2">•</span>
                <span className="text-muted-foreground">Semi-annual Evaluation ($120 fee)</span>
              </li>
            </ul>
          </div>
          
          {/* CTA Button - Always at bottom */}
          <Button className="w-full">Choose Gold Plan</Button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-card rounded-lg border-2 border-primary p-8 flex flex-col h-full relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="font-head text-2xl font-bold mb-2">Platinum Plan</h3>
            <p className="text-accent font-medium mb-6">Comprehensive Management</p>
          </div>
          
          {/* Pricing Section - Aligned */}
          <div className="text-center border-t border-border pt-6 mb-8">
            <div className="text-5xl font-bold text-primary mb-2">10%</div>
            <p className="text-sm text-muted-foreground">of monthly rent ($150 minimum)</p>
            <p className="text-xs text-muted-foreground mt-1">+ Leasing Fee: 1 month's rent</p>
          </div>
          
          {/* Services List */}
          <div className="flex-grow mb-8">
            <h4 className="font-semibold mb-4 text-center">Everything in Gold Plan, Plus:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Professional Photography & Virtual Tours</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Enhanced Marketing Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Annual Property Inspection (Included)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Semi-annual Evaluation (Included)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Lease Renewal Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Market Rent Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Priority Maintenance Response</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Detailed Property Reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Capital Improvement Planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Advanced Tenant Communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Satisfaction Guarantee</span>
              </li>
            </ul>
          </div>
          
          {/* CTA Button - Always at bottom */}
          <Button className="w-full" variant="hero">Choose Platinum Plan</Button>
        </div>

        {/* Total Assurance Plan */}
        <div className="bg-card rounded-lg border p-8 flex flex-col h-full">
          <div className="text-center mb-6">
            <h3 className="font-head text-2xl font-bold mb-2">Total Assurance</h3>
            <p className="text-accent font-medium mb-6">Complete Peace of Mind</p>
          </div>
          
          {/* Pricing Section - Aligned */}
          <div className="text-center border-t border-border pt-6 mb-8">
            <div className="text-5xl font-bold text-primary mb-2">12%</div>
            <p className="text-sm text-muted-foreground">of monthly rent ($180 minimum)</p>
            <p className="text-xs text-muted-foreground mt-1">+ Leasing Fee: 1 month's rent</p>
          </div>
          
          {/* Services List */}
          <div className="flex-grow mb-8">
            <h4 className="font-semibold mb-4 text-center">Everything in Platinum, Plus:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>On-Time Rent Guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bi-annual Property Inspections</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Property Damage Protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Extended Tenant Screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Premium Maintenance Network</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Quarterly Property Reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Investment Advisory Services</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tax Preparation Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Legal Protection Plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>24/7 Premium Support Hotline</span>
              </li>
            </ul>
          </div>
          
          {/* CTA Button - Always at bottom */}
          <Button className="w-full">Choose Total Assurance</Button>
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
