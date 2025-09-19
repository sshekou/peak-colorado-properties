import { SEO } from "@/components/SEO";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import propertyManagerProfessional from "@/assets/property-manager-professional.jpg";
import propertyPreparation from "@/assets/property-preparation.jpg";
import propertyMarketing from "@/assets/property-marketing.jpg";
import tenantSupport from "@/assets/tenant-support.jpg";

const PropertyManagementProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);

  const processSteps = [
    { id: 1, title: "Property Preparation", color: "bg-coral-500" },
    { id: 2, title: "Property Marketing", color: "bg-slate-200" },
    { id: 3, title: "Tenant Screening", color: "bg-slate-200" },
    { id: 4, title: "Lease Signing", color: "bg-slate-200" },
    { id: 5, title: "Rent Collection", color: "bg-slate-200" },
    { id: 6, title: "Tenant Support", color: "bg-slate-200" },
    { id: 7, title: "Property Maintenance", color: "bg-slate-200" },
    { id: 8, title: "Financial Reporting", color: "bg-slate-200" },
    { id: 9, title: "Annual Inspection", color: "bg-slate-200" },
    { id: 10, title: "Lease Renewal", color: "bg-slate-200" },
  ];

  const stepDetails = {
    1: {
      title: "We prepare your property to be move-in ready",
      description: "The initial step in our established process is getting your property ready to rent. This includes conducting maintenance and performing quality control assurance in our walk throughs. Continue reading the steps below to delve deeper into our process.",
      image: propertyPreparation,
      items: [
        {
          title: "Initial Property Assessment",
          details: "Comprehensive evaluation of property condition, identifying needed repairs and improvements to maximize rental potential."
        },
        {
          title: "Maintenance Coordination",
          details: "Professional coordination of all necessary repairs, upgrades, and maintenance work with our trusted contractor network."
        },
        {
          title: "Deep Cleaning Service",
          details: "Professional deep cleaning to ensure the property meets our high standards for tenant move-in readiness."
        },
        {
          title: "Safety & Compliance Check",
          details: "Thorough inspection to ensure all safety features and local housing compliance requirements are met."
        },
        {
          title: "Final Walk-Through",
          details: "Complete property inspection with detailed documentation and photos for our records and marketing materials."
        }
      ]
    },
    2: {
      title: "We market your property for maximum exposure",
      description: "Our comprehensive marketing strategy ensures your property reaches qualified tenants quickly through multiple channels and professional presentation.",
      image: propertyMarketing,
      items: [
        {
          title: "Professional Photography",
          details: "High-quality photos showcasing your property's best features to attract premium tenants."
        },
        {
          title: "Multi-Platform Listing",
          details: "Listing on major rental platforms including Zillow, Apartments.com, and our website for maximum visibility."
        },
        {
          title: "Competitive Market Analysis",
          details: "Research-based pricing strategy to ensure optimal rental rates while minimizing vacancy time."
        },
        {
          title: "Virtual Tours",
          details: "360-degree virtual tours and video walkthroughs to give prospective tenants a comprehensive view."
        }
      ]
    },
    6: {
      title: "We provide comprehensive tenant support",
      description: "Our dedicated tenant support ensures positive relationships and prompt resolution of any issues that arise during the tenancy.",
      image: tenantSupport,
      items: [
        {
          title: "24/7 Maintenance Requests",
          details: "Online portal and phone system for tenants to submit maintenance requests at any time."
        },
        {
          title: "Move-in Coordination",
          details: "Smooth transition process including key handover, utility setup assistance, and property orientation."
        },
        {
          title: "Ongoing Communication",
          details: "Regular check-ins and open communication channels to address concerns before they become problems."
        },
        {
          title: "Emergency Response",
          details: "24/7 emergency response system for urgent issues affecting tenant safety or property security."
        }
      ]
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    if (stepDetails[stepId as keyof typeof stepDetails]) {
      setExpandedItems([1]); // Reset expanded items when switching steps
    }
  };

  const currentStepData = stepDetails[activeStep as keyof typeof stepDetails];

  return (
    <>
      <SEO 
        title="Property Management Process - Peak Properties"
        description="Discover Peak Properties' proven 10-step property management process. From preparation to lease renewal, we handle every aspect of managing your rental property."
        canonicalPath="/property-management-process"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="font-head text-4xl md:text-5xl lg:text-6xl mb-6">
                The Peak Properties Proven Process™
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Our comprehensive 10-step approach to professional property management
              </p>
              
              {/* Process Flow */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  {processSteps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`p-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeStep === step.id
                          ? 'bg-primary text-primary-foreground transform scale-105'
                          : step.color + ' text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      {step.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Step Details */}
        {currentStepData && (
          <section className="container py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="mb-6">
                    <span className="text-primary font-semibold text-lg">
                      Step {activeStep}
                    </span>
                    <h2 className="font-head text-3xl md:text-4xl mt-2 mb-6">
                      {currentStepData.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {currentStepData.description}
                    </p>
                  </div>

                  {/* Expandable Items */}
                  <div className="space-y-4">
                    {currentStepData.items.map((item, index) => (
                      <div key={index} className="border border-border rounded-lg">
                        <button
                          onClick={() => toggleExpanded(index + 1)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-medium">
                            {index + 1}. {item.title}
                          </span>
                          {expandedItems.includes(index + 1) ? (
                            <ChevronDown className="h-5 w-5 text-primary" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                        {expandedItems.includes(index + 1) && (
                          <div className="px-4 pb-4">
                            <p className="text-muted-foreground">
                              {item.details}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={currentStepData.image} 
                      alt={`Step ${activeStep}: ${currentStepData.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements could be added here */}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Professional Image Section */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-head text-3xl mb-6">
                    Professional Property Management You Can Trust
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our experienced team handles every aspect of property management with precision and care. From initial preparation to ongoing tenant relations, we ensure your investment is protected and profitable.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/owners" 
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      Learn More About Our Services
                    </a>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={propertyManagerProfessional} 
                      alt="Professional property manager representing Peak Properties"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
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