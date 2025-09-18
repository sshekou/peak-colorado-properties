import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { CookieNotice } from "@/components/CookieNotice";
import { useAnalytics } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/12faef5c-e620-4661-bf01-9a07ede7ee41.png";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

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

          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-56">
                      <li>
                        <NavLink to="/service-areas" className="block rounded-md p-2 hover:bg-accent" end>
                          Service Areas
                        </NavLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>I'm an Owner</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-64">
                      <li>
                        <NavLink to="/owner-faq" className="block rounded-md p-2 hover:bg-accent" end>
                          Owner FAQs
                        </NavLink>
                      </li>
                      <li>
                        <a href="https://aptlysandbox.rentvine.com/portals/owner/" target="_blank" rel="noopener noreferrer" className="block rounded-md p-2 hover:bg-accent">
                          Owner Portal Login
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* I'm a Renter dropdown aligned to its trigger */}
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger className={navigationMenuTriggerStyle()}>I'm a Renter</DropdownMenuTrigger>
                    <DropdownMenuContent align="start" sideOffset={8}>
                      <DropdownMenuItem asChild>
                        <NavLink to="/renter-faq" className="rounded-md px-2 py-1.5 hover:bg-accent" end>
                          Renter FAQ
                        </NavLink>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="https://aptlysandbox.rentvine.com/portals/resident/" target="_blank" rel="noopener noreferrer" className="rounded-md px-2 py-1.5 hover:bg-accent">
                          Renters Portal
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <NavigationMenuItem>
                  <NavLink to="/availability" className={({ isActive }) => `text-sm ${isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`} end>
                    Availability
                  </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink to="/about" className={({ isActive }) => `text-sm ${isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`} end>
                    About Us
                  </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink to="/contact" className={({ isActive }) => `text-sm ${isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`} end>
                    Contact
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" onClick={() => setOpen(true)} aria-label="Open menu">Menu</Button>
          </div>
        </div>
        {/* Simple mobile drawer */}
        {open && (
          <div className="md:hidden border-t animate-slide-in-right">
            <div className="container py-4 grid gap-3">
              <NavLink to="/services" onClick={() => setOpen(false)} className="py-2">
                Services
              </NavLink>
              <div className="pl-4">
                <NavLink to="/service-areas" onClick={() => setOpen(false)} className="py-2">
                  Service Areas
                </NavLink>
              </div>

              <div className="pt-2 font-medium">I'm an Owner</div>
              <div className="pl-4 grid">
                <NavLink to="/owner-faq" onClick={() => setOpen(false)} className="py-2">Owner FAQs</NavLink>
                <a href="https://aptlysandbox.rentvine.com/portals/owner/" target="_blank" rel="noopener noreferrer" className="py-2">Owner Portal Login</a>
              </div>

              <div className="pt-2 font-medium">I'm a Renter</div>
              <div className="pl-4 grid">
                <NavLink to="/renter-faq" onClick={() => setOpen(false)} className="py-2">Renter FAQ</NavLink>
                <a href="https://aptlysandbox.rentvine.com/portals/resident/" target="_blank" rel="noopener noreferrer" className="py-2">Renters Portal</a>
              </div>

              <NavLink to="/availability" onClick={() => setOpen(false)} className="py-2">Availability</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className="py-2">About Us</NavLink>
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
      <div className="md:hidden fixed bottom-4 right-4">
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

function setLeadOpen(v: boolean) {}
let leadOpen = false;