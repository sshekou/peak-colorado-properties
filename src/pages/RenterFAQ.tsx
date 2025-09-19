import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RenterFAQ = () => (
  <>
    <SEO
      title="Renter FAQ | Peak Properties"
      description="Answers for Boulder County residents: applying, qualifications, pets, rent payments, and maintenance requests."
      canonicalPath="/renter-faq"
      type="FAQPage"
    />
    
    {/* Hero Section */}
    <section className="bg-muted/30">
      <div className="container py-16">
        <h1 className="font-head text-4xl md:text-5xl mb-4">Renter Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Answers to your common questions about renting with Peak Properties in Boulder County.
        </p>
      </div>
    </section>

    {/* Prospective Renter FAQs */}
    <section className="container py-16">
      <h2 className="font-head text-3xl mb-8">Prospective Renter FAQs</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="apply">
          <AccordionTrigger className="text-left">How do I apply for a rental home?</AccordionTrigger>
          <AccordionContent>
            When you find a home you'd like to apply for, note the street address and click "Apply" on the listing. 
            Complete the online application with all required information. Each adult applicant must submit their own application.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fees">
          <AccordionTrigger className="text-left">What are the application fees?</AccordionTrigger>
          <AccordionContent>
            There are no upfront fees to view information or schedule showings. Once you decide to apply, there is a 
            non-refundable application fee plus a pet screening fee if you have pets. All fees are collected when you submit your application.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="locations">
          <AccordionTrigger className="text-left">Where are rental homes available?</AccordionTrigger>
          <AccordionContent>
            We have rental homes throughout Boulder County including Boulder, Longmont, Louisville, Lafayette, Superior, 
            Broomfield, Erie, Niwot, and Gunbarrel. Whether you want to be close to CU campus, downtown Boulder, or the tech corridor, 
            we have options to fit your lifestyle.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price-range">
          <AccordionTrigger className="text-left">What is the typical price range?</AccordionTrigger>
          <AccordionContent>
            Our rental homes range from approximately $1,500 to $6,000+ per month, depending on size, location, and amenities. 
            Boulder County offers everything from cozy condos to luxury single-family homes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="lease-length">
          <AccordionTrigger className="text-left">What is the typical lease length?</AccordionTrigger>
          <AccordionContent>
            Most of our leases are for 12 months. If you need a shorter-term lease, please contact us to discuss availability and options.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pets">
          <AccordionTrigger className="text-left">Are pets allowed?</AccordionTrigger>
          <AccordionContent>
            Many of our properties are pet-friendly! Pet policies vary by property and owner. Generally, we allow dogs and cats 
            with a monthly pet fee and one-time pet deposit. There may be size and breed restrictions. All pets must be approved 
            prior to move-in and go through our pet screening process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="processing-time">
          <AccordionTrigger className="text-left">How long does application processing take?</AccordionTrigger>
          <AccordionContent>
            Application processing typically takes 1-2 business days. We verify background, credit, income, and rental history. 
            Once approved, we'll send lease documents via electronic signature for quick completion.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="requirements">
          <AccordionTrigger className="text-left">What are the screening requirements?</AccordionTrigger>
          <AccordionContent>
            We review credit history, income verification (typically 3x monthly rent), rental history, background check, and references. 
            Each application is reviewed individually. Cosigners may be considered on a case-by-case basis.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="security-deposit">
          <AccordionTrigger className="text-left">How much is the security deposit?</AccordionTrigger>
          <AccordionContent>
            The security deposit is typically equal to one month's rent, though this may vary by property and applicant qualifications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="move-in-costs">
          <AccordionTrigger className="text-left">What do I need to pay before moving in?</AccordionTrigger>
          <AccordionContent>
            Before move-in, you'll need: first month's rent, security deposit, any pet fees (if applicable), 
            lease administration fee, and key/lock rekey fee.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="renters-insurance">
          <AccordionTrigger className="text-left">Is renter's insurance required?</AccordionTrigger>
          <AccordionContent>
            Yes, all tenants are required to maintain renter's insurance throughout the lease term. This protects your personal 
            belongings and provides liability coverage.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Current Renter FAQs */}
    <section className="bg-muted/30 py-16">
      <div className="container">
        <h2 className="font-head text-3xl mb-8">Current Renter FAQs</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="rent-payment">
            <AccordionTrigger className="text-left">When is rent due and how do I pay?</AccordionTrigger>
            <AccordionContent>
              Rent is due on the 1st of each month. You can pay online through your resident portal using ACH transfer (free) 
              or credit/debit card. We strongly recommend setting up autopay to avoid late fees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="late-fees">
            <AccordionTrigger className="text-left">When do late fees apply?</AccordionTrigger>
            <AccordionContent>
              If rent is not received by the due date, a late fee will apply as specified in your lease agreement. 
              We must be consistent with late fee enforcement for all residents.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pets-after-moving">
            <AccordionTrigger className="text-left">Can I get a pet after moving in?</AccordionTrigger>
            <AccordionContent>
              Pets are only allowed with prior written approval from Peak Properties. This includes temporary pet-sitting. 
              If an unauthorized pet is discovered, you'll receive a notice to remedy the situation or face potential lease termination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="early-termination">
            <AccordionTrigger className="text-left">What if I need to move out before my lease ends?</AccordionTrigger>
            <AccordionContent>
              Early lease termination requires written notice and typically involves a re-letting fee. You remain responsible 
              for rent until a new qualified tenant is found and begins their lease. Specific terms are outlined in your lease agreement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="utilities">
            <AccordionTrigger className="text-left">Who handles utilities?</AccordionTrigger>
            <AccordionContent>
              Utility responsibilities vary by property and are specified in your lease. Common Boulder County utilities include 
              Xcel Energy (electric/gas), local water departments, internet providers, and waste management services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    {/* Maintenance FAQs */}
    <section className="container py-16">
      <h2 className="font-head text-3xl mb-8">Maintenance FAQs</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="maintenance-requests">
          <AccordionTrigger className="text-left">How do I submit maintenance requests?</AccordionTrigger>
          <AccordionContent>
            Submit non-emergency maintenance requests through your resident portal with photos and detailed descriptions. 
            For emergencies (no heat in winter, major leaks, security issues), call our emergency maintenance line immediately.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tenant-responsibilities">
          <AccordionTrigger className="text-left">What maintenance is my responsibility?</AccordionTrigger>
          <AccordionContent>
            Tenants are responsible for: replacing light bulbs and HVAC filters (every 3 months), 
            battery replacement in smoke detectors, basic cleaning, lawn care (if specified), snow removal from walkways, 
            and keeping the property in good condition.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="emergency-maintenance">
          <AccordionTrigger className="text-left">What constitutes emergency maintenance?</AccordionTrigger>
          <AccordionContent>
            Emergency situations include: no heat (especially in winter), major water leaks, no hot water, 
            sewer backup, inability to secure the property, or no air conditioning when temperatures exceed 85°F. 
            Call our emergency line for these situations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="smoke-detectors">
          <AccordionTrigger className="text-left">Who maintains smoke detectors?</AccordionTrigger>
          <AccordionContent>
            You are responsible for replacing smoke detector batteries when they chirp. Never remove batteries from smoke detectors. 
            If a detector malfunctions or you can't locate all detectors in your home, contact us immediately.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Moving Out FAQs */}
    <section className="bg-muted/30 py-16">
      <div className="container">
        <h2 className="font-head text-3xl mb-8">Moving Out FAQs</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="notice-period">
            <AccordionTrigger className="text-left">How much notice do I need to give?</AccordionTrigger>
            <AccordionContent>
              Check your lease for specific notice requirements. Typically, 60 days written notice is required before 
              your lease expiration date for Boulder County rentals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deposit-return">
            <AccordionTrigger className="text-left">When will I get my security deposit back?</AccordionTrigger>
            <AccordionContent>
              Under Colorado law, landlords have 30 days to return your security deposit or provide an itemized list of 
              deductions. We'll inspect the property after you move out and process your deposit accordingly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deposit-as-rent">
            <AccordionTrigger className="text-left">Can I use my deposit as last month's rent?</AccordionTrigger>
            <AccordionContent>
              No, security deposits cannot be applied to your last month's rent. You must pay your final month's rent 
              as agreed in your lease, and the deposit will be processed separately after move-out.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    {/* Troubleshooting FAQs */}
    <section className="container py-16">
      <h2 className="font-head text-3xl mb-8">Troubleshooting Common Issues</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="garbage-disposal">
          <AccordionTrigger className="text-left">My garbage disposal stopped working</AccordionTrigger>
          <AccordionContent>
            First, try the reset button (usually red or black) on the bottom of the unit. If it's jammed, turn off the power 
            and use a wooden spoon handle to manually turn the blades. Avoid putting bones, grease, or large quantities 
            of food waste in the disposal. If these steps don't work, submit a maintenance request.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="electrical-outlets">
          <AccordionTrigger className="text-left">No power in bathroom/kitchen outlets</AccordionTrigger>
          <AccordionContent>
            Check for GFCI (Ground Fault Circuit Interucter) outlets with reset buttons. Look for outlets with "TEST" and "RESET" 
            buttons in bathrooms, kitchens, garages, and outdoor areas. Press the RESET button firmly. Sometimes one GFCI 
            controls multiple outlets. If this doesn't restore power, submit a maintenance request.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="plumbing-backup">
          <AccordionTrigger className="text-left">Plumbing is backed up or won't drain</AccordionTrigger>
          <AccordionContent>
            Try using a plunger first for toilets and basic drain clogs. You're responsible for keeping drains clear of hair, 
            food, and debris. For persistent clogs or backups that affect multiple fixtures, submit a maintenance request immediately.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pest-issues">
          <AccordionTrigger className="text-left">I have bugs or pest issues</AccordionTrigger>
          <AccordionContent>
            Minor insect problems (ants, spiders) should be treated with over-the-counter sprays. Keep the property clean 
            and eliminate food sources. For persistent or major pest problems, submit a maintenance request for professional treatment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Contact Section */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="font-head text-3xl mb-6">Still Have Questions?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our Boulder-based team is here to help.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors"
        >
          Contact Our Team
        </a>
      </div>
    </section>
  </>
);

export default RenterFAQ;