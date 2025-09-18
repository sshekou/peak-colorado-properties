import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <>
    <SEO title="Contact | Peak Properties" description="Schedule a consultation or ask a question—Boulder team, ready to help." canonicalPath="/contact" type="ContactPage" />
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Company Information */}
          <div>
            <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Peak Properties</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">2030 17th Street</p>
                      <p className="text-muted-foreground">Boulder, CO 80302</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="tel:+1-303-555-0123" className="hover:text-primary transition-colors">
                      303.555.0123
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:sales@getaptly.com" className="hover:text-primary transition-colors">
                      sales@getaptly.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Office Hours:</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday:</span>
                    <span className="text-muted-foreground">9am-5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tuesday:</span>
                    <span className="text-muted-foreground">9am-5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wednesday:</span>
                    <span className="text-muted-foreground">9am-5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday:</span>
                    <span className="text-muted-foreground">9am-5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday:</span>
                    <span className="text-muted-foreground">9am-5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="flex justify-between col-span-2">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Maintenance and Repairs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For urgent maintenance requests after hours, please use our online portal or call our emergency line. 
                  We work with trusted local contractors to ensure your property is well-maintained and your tenants are comfortable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 italic">Drop Us a Line!</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;