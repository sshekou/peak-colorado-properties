import { SEO } from "@/components/SEO";
import { FAQ } from "./partials/FAQ";
import lifestyleMovingCouple from "@/assets/lifestyle-moving-couple.jpg";
import lifestyleWorkFromHome from "@/assets/lifestyle-work-from-home.jpg";
import lifestyleFamilyUnpacking from "@/assets/lifestyle-family-unpacking.jpg";
import lifestyleCooking from "@/assets/lifestyle-cooking.jpg";
import lifestyleCoupleP from "@/assets/lifestyle-couple-planning.jpg";

const ApplyingFAQs = () => {
  const faqItems = [
    {
      q: "What are the minimum qualifications to rent?",
      a: "• Income must be at least 3x monthly rent\n• Credit score of 650 or higher\n• No eviction judgments within the last 7 years\n• No non-discharged bankruptcies\n• Positive landlord references\n• Complete application with all required documents"
    },
    {
      q: "What documents do I need to provide with my application?",
      a: "• Proof of lawful, verifiable income (pay stubs, employment letter)\n• Government-issued photo ID\n• Rental reference information for the previous 3 years\n• Bank statements (if self-employed)\n• Pet documentation (if applicable)"
    },
    {
      q: "How do I apply for a property?",
      a: "Visit our available properties page, find the property you're interested in, and click the 'Apply Now' button. Make sure your application is complete with all required documents before submitting, as incomplete applications will not be processed."
    },
    {
      q: "Do all adults need to apply?",
      a: "Yes, everyone over the age of 18 who will be living in the property must submit their own separate application. This helps prevent processing delays."
    },
    {
      q: "Do you accept cosigners or guarantors?",
      a: "Cosigners are only accepted for applicants with no credit history. Cosigners must have verifiable income of 6x the monthly rent, be a Colorado resident, and have a credit score of 700 or above. Only one cosigner per lease is allowed."
    },
    {
      q: "What is your pet policy?",
      a: "Most properties allow pets with additional pet rent or deposit. Dogs must be at least 6 months old with proof of breed, age, and weight. We cannot rent to aggressive breeds. All pets require a photo and documentation."
    },
    {
      q: "Do you allow service animals and emotional support animals?",
      a: "Yes, we accommodate service animals and ESAs. You must complete our screening application with proper documentation. There may be a screening fee that is refunded once the animal's status is verified."
    },
    {
      q: "What happens after my application is approved?",
      a: "You must provide the security deposit and first month's rent within 24 hours of approval. The lease start date must be within 14 days of when the property becomes available. Properties come as-is with no cosmetic alterations."
    },
    {
      q: "Is the application process first-come, first-served?",
      a: "No, we use a qualified scoring system to select the most suitable tenant. Only complete application packages are processed. Incomplete applications may be subordinated to other qualified applicants."
    },
    {
      q: "Can I hold a property with a deposit?",
      a: "We do not accept holding deposits. The best way to secure a property is to view it in person and submit a complete application immediately."
    },
    {
      q: "Do I need to see the property in person?",
      a: "We strongly encourage in-person viewings. Applications from applicants who haven't seen the property may be given lower priority compared to those who have viewed it."
    },
    {
      q: "How will I know when new properties become available?",
      a: "We post all rentals on our website and major listing platforms. We recommend checking our availability page regularly or setting up notifications on rental websites for properties that meet your criteria."
    }
  ];

  return (
    <>
      <SEO 
        title="Rental Application FAQ - Peak Properties"
        description="Everything you need to know about applying for a rental property with Peak Properties. Learn about qualifications, required documents, and the application process."
        canonicalPath="/applying-faqs"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-head text-4xl md:text-5xl lg:text-6xl mb-6">
                Rental Application FAQ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about applying for a rental property with Peak Properties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/availability" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  View Available Properties
                </a>
              </div>
              
              {/* Lifestyle Photos */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={lifestyleMovingCouple} 
                    alt="Happy couple moving into rental apartment with boxes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={lifestyleCoupleP} 
                    alt="Young couple planning and looking at documents in living room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={lifestyleFamilyUnpacking} 
                    alt="Family with children unpacking boxes in new rental home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={lifestyleCooking} 
                    alt="Young man cooking in modern rental apartment kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={lifestyleWorkFromHome} 
                    alt="Professional woman working from home on laptop in apartment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-head text-2xl mb-6">Table of Contents</h2>
            <div className="bg-card rounded-lg p-6 border">
              <ol className="space-y-2 text-sm">
                <li><a href="#minimum-qualifications" className="text-primary hover:underline">1. Minimum Qualifications</a></li>
                <li><a href="#income-verification" className="text-primary hover:underline">2. Income Verification</a></li>
                <li><a href="#co-applicants" className="text-primary hover:underline">3. Co-Applicants</a></li>
                <li><a href="#property-as-is" className="text-primary hover:underline">4. Property Comes As-is</a></li>
                <li><a href="#move-in-funds" className="text-primary hover:underline">5. Move-in Funds</a></li>
                <li><a href="#cosigners" className="text-primary hover:underline">6. Cosigners & Guarantors</a></li>
                <li><a href="#service-animals" className="text-primary hover:underline">7. Service Animals & ESAs</a></li>
                <li><a href="#pet-policies" className="text-primary hover:underline">8. Pet Policies</a></li>
                <li><a href="#approved-application" className="text-primary hover:underline">9. Approved Application</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Minimum Qualifications */}
            <div id="minimum-qualifications" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Minimum Qualifications</h2>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-4 text-destructive">Reasons to be Declined</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Income less than 3x monthly rent</li>
                  <li>• Credit score below 650 (not applicable to applicants receiving a government rent subsidy who choose to provide alternative evidence of their reasonable ability to pay their portion of the rent).</li>
                  <li>• Any eviction judgments within the last 7 years</li>
                  <li>• Non-discharged bankruptcies</li>
                  <li>• We do not allow pets less than 6 months old, and we cannot rent to aggressive breeds.</li>
                  <li>• Negative Landlord Reference</li>
                  <li>• Move in date too far in future</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm"><strong>NOTE:</strong> We do not process incomplete applications. Please make sure your application includes all necessary materials prior to submitting.</p>
                </div>
                
                <h3 className="font-semibold text-lg mb-4 mt-8">Application Screening Criteria</h3>
                <h4 className="font-medium mb-3">Required Information</h4>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• Proof of Lawful Verifiable Income</li>
                  <li>• Copy of government-issued ID</li>
                  <li>• Rental reference information of previous 3 years</li>
                  <li>• Dependent information (optional)</li>
                </ul>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Co-applicants:</strong> All other occupants above the age of 18 must submit their own separate application (optional)
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p>• Service Animal information (must be screened through PetScreening – $30 fee per animal. Refundable after verified)</p>
                  <p>• Emotional Support Animal information (must be screened through PetScreening – $25 fee per animal. Refundable after verified). Pet information gets collected via PetScreening.</p>
                  <p>• Have a photo of your pet ready. Proof of breed, age, and weight (examples include a pet license or vet documentation)</p>
                </div>
              </div>
            </div>

            {/* Income Verification */}
            <div id="income-verification" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Income Verification</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground">
                  Make sure the income listed on your application matches the employer information listed. For example, you cannot list Amazon as your employer on your application, but provide pay stubs from Target. You will be asked to connect your bank in the application process. This connection is safe and secure, transferring only your statements for verifying income. Your banking information isn't stored in our system and no different than using popular payment services like PayPal and Venmo.
                </p>
              </div>
            </div>

            {/* Co-Applicants */}
            <div id="co-applicants" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Co-Applicants</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground">
                  Everyone over the age of 18 living in the home MUST apply. Therefore, to help prevent delays, please make sure all your co-applicants complete the application as well.
                </p>
              </div>
            </div>

            {/* Property Comes As-is */}
            <div id="property-as-is" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Property Comes As-is</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground">
                  Please note that all of our properties come as-is. That means we do not provide cosmetic alterations or improvements to the property upon request (e.g. cosmetic wall painting, blinds installation, etc).
                </p>
              </div>
            </div>

            {/* Move-in Funds */}
            <div id="move-in-funds" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Move-in Funds</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground">
                  Your move-in funds (your first month's rent and security deposit) are required within 24 hours of approval of your application.
                </p>
              </div>
            </div>

            {/* Cosigners & Guarantors */}
            <div id="cosigners" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Cosigners & Guarantors Policies</h2>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-4">Accepted only if applicants do not have credit history</h3>
                <p className="text-muted-foreground">
                  For applicants with no credit history, a cosigner may be considered. Cosigners must provide documentation of lawful, verifiable income of 6x the monthly rent, be a California resident, and have a credit score of 700 or above. Only one cosigner per lease.
                </p>
              </div>
            </div>

            {/* Service Animals & ESAs */}
            <div id="service-animals" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Service Animals & ESAs</h2>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-4">Required Documentation</h3>
                <p className="text-muted-foreground">
                  If you have a service animal or assistance animal, please complete our screening application by visiting <a href="https://peakproperties.petscreening.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://peakproperties.petscreening.com</a> (there is a $30 application fee that is refunded once the status of the assistance animal has been confirmed). If you do not submit an ESA profile, your application will be considered incomplete and can possibly be subordinated to other completed applications.
                </p>
              </div>
            </div>

            {/* Pet Policies */}
            <div id="pet-policies" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Pet Policies</h2>
              <div className="bg-card rounded-lg p-6 border">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Cats</h3>
                    <p className="text-muted-foreground">
                      If the property allows cats, and you are applying with a cat, please include 1) Cats Name 2) Cats breed 3) Cats Weight 4) Cats Age 5) recent photo of the cat. Please note: Property may require a pet rent or a pet deposit. Please verify pet terms and policy prior to submitting an application.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Dogs</h3>
                    <p className="text-muted-foreground">
                      If the property allows dogs, and you are applying with a dog, please include a recent photo of the dog along with documentation of the dog's date of birth (WE DO NOT ACCEPT DOGS UNDER 5 MONTHS OLD). Acceptable documentation can include immunization records or adoption papers. Please note: Property may require a pet rent or a pet deposit. Please verify pet terms and policy prior to submitting an application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approved Application */}
            <div id="approved-application" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Approved Application</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground">
                  If approved, we require the security deposit and first month's rent to be paid in full upon signing the lease. Applicants lease start date is a determining factor. The lease start date must be within 14 days from the date the property is available. Please check the available date listed on the property advertisement. If conditionally approved, you may be offered the rental with an increased deposit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ title="Frequently Asked Questions" items={faqItems} />
      </div>
    </>
  );
};

export default ApplyingFAQs;