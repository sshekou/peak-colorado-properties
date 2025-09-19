import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Plus } from "lucide-react";
import propertyPreparation from "@/assets/property-preparation.jpg";
import processMarketing from "@/assets/process-marketing.webp";
import processLeasing from "@/assets/process-leasing.webp";
import processCollection from "@/assets/process-collection.webp";
import processSupport from "@/assets/process-support.webp";
import processMaintenance from "@/assets/process-maintenance.webp";
import processFinancials from "@/assets/process-financials.webp";
import processInspection from "@/assets/process-inspection.webp";
import processRenewal from "@/assets/process-renewal.webp";
import processMoveout from "@/assets/process-moveout.webp";

const PropertyManagementProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Image mapping for each process step
  const stepImages = {
    1: propertyPreparation,
    2: processMarketing,
    3: processLeasing,
    4: processCollection,
    5: processSupport,
    6: processMaintenance,
    7: processFinancials,
    8: processInspection,
    9: processRenewal,
    10: processMoveout
  };

  const processSteps = [
    { 
      id: 1, 
      title: "Property Preparation",
      items: [
        "Initial Walk Through",
        "Communicate Findings with Owner", 
        "Coordinate Work Needed",
        "Complete Painting, Repairs, and Cleaning",
        "Rent Ready Check"
      ],
      description: "The initial step in our established process is getting your property ready to rent. This includes conducting maintenance and performing quality control assurance in our walk throughs.",
      subtitle: "We prepare your property to be move-in ready"
    },
    { 
      id: 2, 
      title: "Property Marketing",
      items: [
        "Professional Photography",
        "Create Marketing Materials",
        "List on Multiple Platforms",
        "Social Media Promotion",
        "Schedule Showings"
      ],
      description: "We create compelling marketing materials and list your property across multiple platforms to attract qualified tenants quickly.",
      subtitle: "We market your property to attract quality tenants"
    },
    { 
      id: 3, 
      title: "Rent Leasing",
      items: [
        "Screen Potential Tenants",
        "Background & Credit Checks",
        "Income Verification",
        "Lease Agreement Preparation",
        "Move-in Coordination"
      ],
      description: "Our thorough tenant screening process ensures we find reliable, qualified renters for your property.",
      subtitle: "We find and screen qualified tenants"
    },
    { 
      id: 4, 
      title: "Rent Collection",
      items: [
        "Online Payment Portal",
        "Monthly Rent Collection",
        "Late Payment Follow-up",
        "Payment Processing",
        "Financial Reporting"
      ],
      description: "We handle all aspects of rent collection with convenient online payment options and proactive follow-up.",
      subtitle: "We collect rent and manage payments"
    },
    { 
      id: 5, 
      title: "Tenant Support",
      items: [
        "24/7 Emergency Response",
        "Maintenance Request Portal",
        "Tenant Communication",
        "Issue Resolution",
        "Satisfaction Surveys"
      ],
      description: "We provide comprehensive support to tenants, ensuring their needs are met promptly and professionally.",
      subtitle: "We provide ongoing tenant support"
    },
    { 
      id: 6, 
      title: "Property Maintenance",
      items: [
        "Regular Inspections",
        "Preventive Maintenance",
        "Repair Coordination",
        "Vendor Management",
        "Quality Assurance"
      ],
      description: "We maintain your property through regular inspections, preventive maintenance, and prompt repairs.",
      subtitle: "We maintain your property's condition"
    },
    { 
      id: 7, 
      title: "Financials Documents",
      items: [
        "Monthly Financial Reports",
        "Expense Tracking",
        "Tax Documentation",
        "Owner Statements",
        "Profit & Loss Reports"
      ],
      description: "We provide detailed financial reporting and documentation to keep you informed about your investment.",
      subtitle: "We provide detailed financial reporting"
    },
    { 
      id: 8, 
      title: "Annual Inspection",
      items: [
        "Comprehensive Property Review",
        "Maintenance Assessment",
        "Safety Compliance Check",
        "Tenant Interview",
        "Improvement Recommendations"
      ],
      description: "We conduct thorough annual inspections to ensure your property remains in excellent condition.",
      subtitle: "We conduct comprehensive annual reviews"
    },
    { 
      id: 9, 
      title: "Lease Renewal",
      items: [
        "Lease Renewal Negotiation",
        "Market Rate Analysis",
        "Tenant Retention Strategies",
        "Lease Documentation",
        "Renewal Coordination"
      ],
      description: "We work to retain quality tenants through strategic lease renewals and market-competitive pricing.",
      subtitle: "We manage lease renewals and retention"
    },
    { 
      id: 10, 
      title: "Move Out",
      items: [
        "Move-out Inspection",
        "Security Deposit Assessment",
        "Property Restoration",
        "Final Documentation",
        "Transition Preparation"
      ],
      description: "We handle the entire move-out process, ensuring your property is ready for the next tenant.",
      subtitle: "We manage the move-out process"
    }
  ];

  const currentStep = processSteps.find(step => step.id === activeStep) || processSteps[0];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <SEO 
        title="Property Management Process - Peak Properties"
        description="Discover Peak Properties' proven 10-step property management process. From preparation to lease renewal, we handle every aspect of managing your rental property."
        canonicalPath="/property-management-process"
      />
      
      <div className="min-h-screen bg-slate-100">
        {/* Hero Section */}
        <section className="bg-slate-100 py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="font-head text-4xl md:text-5xl lg:text-6xl mb-16 text-gray-800">
                The Peak Properties Process
              </h1>
              
              {/* Vertical Timeline Process Flow */}
              <div className="flex justify-center mb-16">
                <div className="relative">
                  {/* Vertical Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                  <div className="absolute left-6 top-0 w-0.5 bg-coral-500 transition-all duration-500" 
                       style={{ height: `${(activeStep / processSteps.length) * 100}%` }}></div>
                  
                  {/* Process Steps */}
                  <div className="space-y-6">
                    {processSteps.map((step) => (
                      <div key={step.id} className="flex items-center relative z-10">
                        <button
                          onClick={() => setActiveStep(step.id)}
                          className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                            activeStep === step.id
                              ? 'bg-coral-500 border-coral-500 text-white'
                              : activeStep > step.id
                              ? 'bg-coral-500 border-coral-500 text-white'
                              : 'bg-white border-gray-300 text-gray-500 hover:border-coral-400'
                          }`}
                        >
                          {step.id}
                        </button>
                        <span className={`ml-4 text-lg font-medium ${
                          activeStep === step.id ? 'text-coral-600' : 'text-gray-600'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step Details */}
        <section className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="text-gray-600 font-medium text-lg">
                    Step {activeStep}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6 leading-tight">
                    {currentStep.subtitle.split(' ').map((word, index) => 
                      word === 'ready' || word === 'tenants' || word === 'qualified' || word === 'payments' || word === 'support' || word === 'condition' || word === 'reporting' || word === 'reviews' || word === 'retention' || word === 'process' ? (
                        <span key={index} className="text-coral-500">{word} </span>
                      ) : (
                        word + ' '
                      )
                    )}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Expandable Items */}
                <div className="space-y-3">
                  {currentStep.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                      <button
                        onClick={() => toggleExpanded(index + 1)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">
                          {index + 1}. {item}
                        </span>
                        <Plus 
                          className={`h-5 w-5 text-coral-500 transition-transform ${
                            expandedItems.includes(index + 1) ? 'rotate-45' : ''
                          }`} 
                        />
                      </button>
                      {expandedItems.includes(index + 1) && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <p className="text-gray-600 pt-3">
                            Detailed information about the {item.toLowerCase()} process and what it involves for your property management experience.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                {/* Circular Image with Background */}
                <div className="relative">
                  {/* Large circular background */}
                  <div className="w-80 h-80 bg-coral-500 rounded-full flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={stepImages[activeStep as keyof typeof stepImages]} 
                        alt={`Professional representing ${currentStep.title} process`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative dotted circles and elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-gray-400 rounded-full"></div>
                  <div className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-dashed border-gray-400 rounded-full"></div>
                  <div className="absolute top-8 -left-12 w-8 h-8 border-2 border-dashed border-gray-400 rounded-full"></div>
                  
                  {/* Small decorative dots */}
                  <div className="absolute top-12 right-16 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-16 right-8 w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="absolute bottom-12 left-12 w-4 h-4 bg-gray-400 rounded-full"></div>
                  
                  {/* Icon-like decorative elements */}
                  <div className="absolute top-20 right-12">
                    <div className="w-8 h-8 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-20 left-8">
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground mt-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-head text-3xl md:text-4xl mb-6">
                Ready to Experience Our Proven Process?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Let us handle your property management with our comprehensive, time-tested approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/owners" 
                  className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-slate-100"
                >
                  Start Managing Your Property
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-8 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PropertyManagementProcess;