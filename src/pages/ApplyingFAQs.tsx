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
                <li><a href="#required-documents" className="text-primary hover:underline">2. Required Documents</a></li>
                <li><a href="#application-process" className="text-primary hover:underline">3. Application Process</a></li>
                <li><a href="#co-applicants" className="text-primary hover:underline">4. Co-Applicants</a></li>
                <li><a href="#cosigners" className="text-primary hover:underline">5. Cosigners & Guarantors</a></li>
                <li><a href="#pets" className="text-primary hover:underline">6. Pet Policies</a></li>
                <li><a href="#service-animals" className="text-primary hover:underline">7. Service Animals & ESAs</a></li>
                <li><a href="#approval" className="text-primary hover:underline">8. After Approval</a></li>
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
                <h3 className="font-semibold text-lg mb-4 text-destructive">Reasons Applications May Be Declined</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Income less than 3x monthly rent</li>
                  <li>• Credit score below 650</li>
                  <li>• Any eviction judgments within the last 7 years</li>
                  <li>• Non-discharged bankruptcies</li>
                  <li>• Negative landlord references</li>
                  <li>• Move-in date too far in the future</li>
                  <li>• Incomplete application materials</li>
                  <li>• Pets under 6 months old or aggressive breeds</li>
                </ul>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm"><strong>Note:</strong> We do not process incomplete applications. Please ensure all required materials are included before submitting.</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div id="required-documents" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Required Documents</h2>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-4">Essential Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Required for All Applicants:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Proof of lawful, verifiable income</li>
                      <li>• Government-issued photo ID</li>
                      <li>• Rental history for previous 3 years</li>
                      <li>• Employment verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Additional Information (if applicable):</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pet documentation and photos</li>
                      <li>• Service animal certification</li>
                      <li>• Co-applicant information</li>
                      <li>• Cosigner documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div id="application-process" className="scroll-mt-24">
              <h2 className="font-head text-3xl mb-6">Application Process</h2>
              <div className="bg-card rounded-lg p-6 border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">1</div>
                    <h3 className="font-semibold mb-2">View Property</h3>
                    <p className="text-sm text-muted-foreground">Schedule and attend a property viewing. In-person viewings are strongly encouraged.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">2</div>
                    <h3 className="font-semibold mb-2">Submit Application</h3>
                    <p className="text-sm text-muted-foreground">Complete the online application with all required documents and information.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">3</div>
                    <h3 className="font-semibold mb-2">Screening & Approval</h3>
                    <p className="text-sm text-muted-foreground">We review applications using our qualified scoring system and notify approved applicants.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm"><strong>Important:</strong> Income verification must match employer information exactly. Applications are processed based on qualification, not on a first-come, first-served basis.</p>
                </div>
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