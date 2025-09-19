import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { CookieNotice } from "@/components/CookieNotice";
import { useAnalytics } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/12faef5c-e620-4661-bf01-9a07ede7ee41.png";
import handshakeImage from "@/assets/handshake.jpg";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, BarChart3, DollarSign, Calendar, ArrowRight } from "lucide-react";

// simplified navigation handled inline with NavigationMenu

export const SiteLayout = () => {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b">
        <div className="container flex h-[95px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img src={logo} alt="Peak Properties logo" className="h-12 w-auto" loading="eager" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {/* About */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                About <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="w-full">Our Team</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services - Mega Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[600px] p-6">
                <div className="grid grid-cols-3 gap-6">
                  {/* Left Column - Navigation Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold mb-3">Services</h4>
                    <div className="space-y-2">
                      <Link to="/services" className="block text-sm hover:text-primary transition-colors">
                        Our Process
                      </Link>
                      <Link to="/service-areas" className="block text-sm hover:text-primary transition-colors">
                        Areas We Serve
                      </Link>
                      <Link to="/leasing" className="block text-sm hover:text-primary transition-colors">
                        Multi-Family Management
                      </Link>
                      <Link to="/maintenance" className="block text-sm hover:text-primary transition-colors">
                        Military Partnership
                      </Link>
                    </div>
                  </div>

                  {/* Right Columns - Service Cards */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Link to="/leasing" className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="h-5 w-5 text-primary" />
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-sm font-medium mb-1">Tenant Placement</div>
                      <p className="text-xs text-muted-foreground">
                        Get help placing a tenant in your rental.
                      </p>
                    </Link>

                    <button onClick={() => setLeadOpen(true)} className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-accent transition-all group text-left w-full">
                      <div className="flex items-center justify-between mb-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-sm font-medium mb-1">Rent Analysis</div>
                      <p className="text-xs text-muted-foreground">
                        Get your instant Rent Estimate
                      </p>
                    </button>

                    <Link to="/pricing" className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-sm font-medium mb-1">Pricing</div>
                      <p className="text-xs text-muted-foreground">
                        Our Pricing
                      </p>
                    </Link>

                    <Link to="/contact" className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="text-sm font-medium mb-1">Schedule a Call</div>
                      <p className="text-xs text-muted-foreground">
                        Schedule a free consultation
                      </p>
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources" className="w-full">Resources</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Vacancies */}
            <Link to="/availability" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Vacancies
            </Link>

            {/* Owners */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Owners <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[700px] p-6 relative overflow-hidden">
                {/* Background Image with fade effect */}
                <div 
                  className="absolute bottom-0 left-0 w-80 h-48 opacity-50 pointer-events-none"
                  style={{
                    backgroundImage: `url(${handshakeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
                  }}
                />
                <div className="grid grid-cols-[200px_1fr] gap-8 relative z-10">
                  {/* Left Column - Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold mb-3 text-primary">Prospective Tenants</h4>
                    <div className="space-y-2">
                      <button onClick={() => setLeadOpen(true)} className="block text-sm hover:text-primary transition-colors text-left">
                        Rent to Income Calculator
                      </button>
                      <Link to="/rent-vs-sell-calculator" className="block text-sm hover:text-primary transition-colors">
                        Rent vs. Sell Calculator
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://aptlysandbox.rentvine.com/portals/owner/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Owner Portal</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Access your owner portal
                      </p>
                    </a>

                    <Link to="/owner-faq" className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Owner FAQ</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Check out our Frequently Asked Questions
                      </p>
                    </Link>

                    <Link to="/resources" className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Tools & Resources</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Free tools, expert tips
                      </p>
                    </Link>

                    <button onClick={() => setLeadOpen(true)} className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group text-left w-full">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Vacancy Calculator</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Discover the best price for your rental
                      </p>
                    </button>

                    <Link to="/resources" className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Landlord Checklist</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Check out our complete landlord checklist
                      </p>
                    </Link>

                    <Link to="/resources" className="block p-4 rounded-lg border bg-card hover:border-primary/50 hover:bg-accent transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">Client Guide</div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Download our Client Guide
                      </p>
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tenants */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Tenants <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/renter-faq" className="w-full">Renter FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://aptlysandbox.rentvine.com/portals/resident/" target="_blank" rel="noopener noreferrer" className="w-full">
                    Tenant Portal
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact */}
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone number */}
          <div className="hidden xl:flex items-center text-sm font-medium">
            (303) 555-PEAK
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button variant="outline" onClick={() => setOpen(true)} aria-label="Open menu">Menu</Button>
          </div>
        </div>
        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden border-t animate-slide-in-right">
            <div className="container py-4 grid gap-3">
              <div className="pt-2 font-medium">About</div>
              <div className="pl-4 grid">
                <NavLink to="/about" onClick={() => setOpen(false)} className="py-2">About Us</NavLink>
                <NavLink to="/team" onClick={() => setOpen(false)} className="py-2">Our Team</NavLink>
              </div>

              <div className="pt-2 font-medium">Services</div>
              <div className="pl-4 grid">
                <NavLink to="/services" onClick={() => setOpen(false)} className="py-2">Our Process</NavLink>
                <NavLink to="/service-areas" onClick={() => setOpen(false)} className="py-2">Areas We Serve</NavLink>
                <NavLink to="/leasing" onClick={() => setOpen(false)} className="py-2">Leasing Services</NavLink>
                <NavLink to="/maintenance" onClick={() => setOpen(false)} className="py-2">Maintenance Management</NavLink>
              </div>

              <div className="pt-2 font-medium">Resources</div>
              <div className="pl-4 grid">
                <NavLink to="/blog" onClick={() => setOpen(false)} className="py-2">Blog</NavLink>
                <NavLink to="/resources" onClick={() => setOpen(false)} className="py-2">Resources</NavLink>
              </div>

              <NavLink to="/availability" onClick={() => setOpen(false)} className="py-2">Vacancies</NavLink>

              <div className="pt-2 font-medium">Owners</div>
              <div className="pl-4 grid">
                <NavLink to="/owner-faq" onClick={() => setOpen(false)} className="py-2">Management Services</NavLink>
                <NavLink to="/rent-vs-sell-calculator" onClick={() => setOpen(false)} className="py-2">Rent vs. Sell Calculator</NavLink>
                <a href="https://aptlysandbox.rentvine.com/portals/owner/" target="_blank" rel="noopener noreferrer" className="py-2">Owner Portal Login</a>
              </div>

              <div className="pt-2 font-medium">Tenants</div>
              <div className="pl-4 grid">
                <NavLink to="/renter-faq" onClick={() => setOpen(false)} className="py-2">Renter FAQ</NavLink>
                <a href="https://aptlysandbox.rentvine.com/portals/resident/" target="_blank" rel="noopener noreferrer" className="py-2">Tenant Portal</a>
              </div>

              <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</NavLink>

              <Button variant="hero" onClick={() => { setOpen(false); setLeadOpen(true); }}>Get Rent Estimate</Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <Button variant="hero" size="lg" onClick={() => setLeadOpen(true)} aria-label="Open rent estimate form">
          Get Rent Estimate
        </Button>
      </div>

      <CookieNotice />
      <LeadCaptureModal open={leadOpen} onOpenChange={setLeadOpen} />
    </div>
  );
};

import { Link as RLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Peak Properties logo small" className="h-6 w-auto" />
            <span className="font-head">Peak Properties</span>
          </div>
          <p className="text-sm text-muted-foreground">Modern property management across Boulder County.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><RLink to="/about" className="story-link">About</RLink></li>
            <li><RLink to="/team" className="story-link">Our Team</RLink></li>
            <li><RLink to="/blog" className="story-link">Blog</RLink></li>
            <li><RLink to="/contact" className="story-link">Contact</RLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><RLink to="/services" className="story-link">Overview</RLink></li>
            <li><RLink to="/owners" className="story-link">Property Management</RLink></li>
            <li><RLink to="/leasing" className="story-link">Leasing</RLink></li>
            <li><RLink to="/maintenance" className="story-link">Maintenance</RLink></li>
            <li><RLink to="/pricing" className="story-link">Pricing</RLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            <li><RLink to="/service-areas/boulder" className="story-link">Boulder</RLink></li>
            <li><RLink to="/service-areas/longmont" className="story-link">Longmont</RLink></li>
            <li><RLink to="/service-areas/louisville" className="story-link">Louisville</RLink></li>
            <li><RLink to="/service-areas/lafayette" className="story-link">Lafayette</RLink></li>
            <li><RLink to="/service-areas/superior" className="story-link">Superior</RLink></li>
            <li><RLink to="/service-areas/broomfield" className="story-link">Broomfield</RLink></li>
            <li><RLink to="/service-areas/erie" className="story-link">Erie</RLink></li>
            <li><RLink to="/service-areas/niwot" className="story-link">Niwot</RLink></li>
            <li><RLink to="/service-areas/gunbarrel" className="story-link">Gunbarrel</RLink></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Peak Properties. All rights reserved.
      </div>
    </footer>
  );
}