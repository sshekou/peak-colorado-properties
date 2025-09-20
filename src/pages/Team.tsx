import { SEO } from "@/components/SEO";
import presidentImage from "@/assets/team-president.jpg";
import leasingImage from "@/assets/team-leasing.jpg";
import propertyManagementImage from "@/assets/team-property-management.jpg";
import accountantImage from "@/assets/team-accountant.jpg";
import maintenanceImage from "@/assets/team-maintenance.jpg";

const teamMembers = [
  {
    name: "Michael Richardson",
    role: "President",
    image: presidentImage,
    description: "With over 15 years in Boulder County real estate, Michael founded Peak Properties to bridge the gap between personal service and professional excellence. His vision drives our commitment to treating every property like our own."
  },
  {
    name: "David Chen",
    role: "Head of Leasing",
    image: leasingImage,
    description: "David's expertise in Boulder's rental market ensures maximum occupancy and quality tenants. He leverages cutting-edge marketing strategies and thorough screening processes to protect our owners' investments."
  },
  {
    name: "Mark Thompson",
    role: "Head of Property Management",
    image: propertyManagementImage,
    description: "Mark oversees all property operations with a focus on proactive maintenance and exceptional resident experience. His systematic approach keeps properties in top condition while maximizing long-term value."
  },
  {
    name: "James Anderson",
    role: "Staff Accountant",
    image: accountantImage,
    description: "James ensures transparent financial reporting and accurate accounting for all managed properties. His attention to detail and clear communication keeps owners informed about their investment performance."
  },
  {
    name: "Tony Martinez",
    role: "Head of Maintenance",
    image: maintenanceImage,
    description: "Tony leads our maintenance team with 12+ years of experience in residential property care. His quick response times and quality workmanship keep residents happy and properties well-maintained."
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="bg-card rounded-lg overflow-hidden shadow-elevated">
    <div className="aspect-square overflow-hidden">
      <img 
        src={member.image} 
        alt={`${member.name} - ${member.role}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="font-head text-xl mb-1">{member.name}</h3>
      <p className="text-primary font-medium mb-3">{member.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
    </div>
  </div>
);

const Team = () => (
  <>
    <SEO 
      title="Our Team | Peak Properties" 
      description="Meet the Boulder‑based team caring for your property and residents. Experienced professionals in leasing, management, maintenance, and accounting." 
      canonicalPath="/team" 
      type="Organization" 
    />
    
    {/* Hero Section */}
    <section className="bg-muted/30">
      <div className="container py-16">
        <h1 className="font-head text-4xl md:text-5xl mb-4">Meet Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Friendly faces with deep local know‑how. Our Boulder-based professionals are dedicated to 
          caring for your property and creating exceptional experiences for residents.
        </p>
      </div>
    </section>

    {/* Team Grid */}
    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-hero-gradient">
      <div className="container py-16 text-primary-foreground text-center">
        <h2 className="font-head text-3xl mb-4">Ready to work with our team?</h2>
        <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
          Get in touch to discuss how we can help you maximize your property investment.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-6 py-3 font-medium hover:bg-background/90 transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  </>
);
export default Team;
