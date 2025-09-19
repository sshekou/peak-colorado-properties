import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Plus } from "lucide-react";
import propertyManagerProfessional from "@/assets/property-manager-professional.jpg";

const PropertyManagementProcess = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const processSteps = [
    { id: 1, title: "Property Preparation", active: true },
    { id: 2, title: "Property Marketing", active: false },
    { id: 3, title: "Rent Leasing", active: false },
    { id: 4, title: "Rent Collection", active: false },
    { id: 5, title: "Tenant Support", active: false },
    { id: 6, title: "Property Maintenance", active: false },
    { id: 7, title: "Financials Documents", active: false },
    { id: 8, title: "Annual Inspection", active: false },
    { id: 9, title: "Lease Renewal", active: false },
    { id: 10, title: "Move Out", active: false },
  ];

  const processItems = [
    "Initial Walk Through",
    "Communicate Findings with Owner", 
    "Coordinate Work Needed",
    "Complete Painting, Repairs, and Cleaning",
    "Rent Ready Check"
  ];

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
                The Peak Properties Proven Process™
              </h1>
              
              {/* Process Flow */}
              <div className="flex flex-wrap justify-center gap-2 mb-16">
                {processSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <button
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        step.active
                          ? 'bg-coral-500 text-white relative'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {step.title}
                      {step.active && (
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-coral-500"></div>
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 1 Details */}
        <section className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <span className="text-gray-600 font-medium text-lg">
                    Step 1
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6 leading-tight">
                    We prepare your property to be move-in <span className="text-coral-500">ready</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The initial step in our established process is getting your property ready to rent. This includes conducting maintenance and performing quality control assurance in our walk throughs. Continue reading the steps below to delve deeper into our process.
                  </p>
                </div>

                {/* Expandable Items */}
                <div className="space-y-3">
                  {processItems.map((item, index) => (
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
                        src={propertyManagerProfessional} 
                        alt="Professional property manager representing Peak Properties proven process"
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