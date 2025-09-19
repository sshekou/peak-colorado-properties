import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { CookieNotice } from "@/components/CookieNotice";
import { useAnalytics } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/12faef5c-e620-4661-bf01-9a07ede7ee41.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, BarChart3, DollarSign, Calendar, ArrowRight, Phone } from "lucide-react";

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

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                  About <ChevronDown className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-80">
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link to="/about" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">About Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Learn about our company and mission
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/team" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Our Team</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Meet the Peak Properties team
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                  Services <ChevronDown className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-6 w-[800px]">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Left Column - Navigation Links */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">Our Services</h4>
                      <NavigationMenuLink asChild>
                        <Link to="/services" className="block text-sm font-medium hover:text-primary transition-colors">
                          Our Process
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/service-areas" className="block text-sm font-medium hover:text-primary transition-colors">
                          Areas We Serve
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/leasing" className="block text-sm font-medium hover:text-primary transition-colors">
                          Leasing Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/maintenance" className="block text-sm font-medium hover:text-primary transition-colors">
                          Maintenance Management
                        </Link>
                      </NavigationMenuLink>
                    </div>

                    {/* Right Columns - Service Cards */}
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <NavigationMenuLink asChild>
                        <Link to="/leasing" className="block select-none rounded-lg border p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:border-primary/50 group">
                          <div className="flex items-center justify-between mb-2">
                            <Users className="h-5 w-5 text-primary" />
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="text-sm font-medium leading-none mb-1">Tenant Placement</div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Get help placing a tenant in your rental.
                          </p>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <button onClick={() => setLeadOpen(true)} className="block select-none rounded-lg border p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:border-primary/50 group text-left w-full">
                          <div className="flex items-center justify-between mb-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="text-sm font-medium leading-none mb-1">Rent Analysis</div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Get your instant Rent Estimate
                          </p>
                        </button>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link to="/pricing" className="block select-none rounded-lg border p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:border-primary/50 group">
                          <div className="flex items-center justify-between mb-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="text-sm font-medium leading-none mb-1">Pricing</div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Our transparent pricing structure
                          </p>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="block select-none rounded-lg border p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:border-primary/50 group">
                          <div className="flex items-center justify-between mb-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="text-sm font-medium leading-none mb-1">Schedule a Call</div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Schedule a free consultation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                  Resources <ChevronDown className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-80">
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link to="/blog" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Latest property management insights
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/resources" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Resources</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Helpful guides and resources
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/availability" className={navigationMenuTriggerStyle()}>
                    Vacancies
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                  Owners <ChevronDown className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-80">
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link to="/owner-faq" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Management Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Learn about our management approach
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent-vs-sell-calculator" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Rent vs. Sell Calculator</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Calculate your best financial option
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="https://aptlysandbox.rentvine.com/portals/owner/" target="_blank" rel="noopener noreferrer" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Owner Portal Login</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Access your owner dashboard
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                  Tenants <ChevronDown className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-80">
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link to="/renter-faq" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Renter FAQ</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Common renter questions answered
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="https://aptlysandbox.rentvine.com/portals/resident/" target="_blank" rel="noopener noreferrer" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tenant Portal</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          Access your tenant dashboard
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Phone number for larger screens */}
          <div className="hidden xl:flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <span>(303) 555-PEAK</span>
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