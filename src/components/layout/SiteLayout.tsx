import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { CookieNotice } from "@/components/CookieNotice";
import { useAnalytics } from "@/hooks/useAnalytics";
import logo from "/lovable-uploads/12faef5c-e620-4661-bf01-9a07ede7ee41.png";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/owners", label: "Owners" },
  { to: "/leasing", label: "Leasing" },
  { to: "/maintenance", label: "Maintenance" },
  { to: "/pricing", label: "Pricing" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
];

export const SiteLayout = () => {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img src={logo} alt="Peak Properties logo" className="h-8 w-auto" loading="eager" />
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild variant="outline">
              <Link to="/owner-portal">Owner Portal</Link>
            </Button>
            <Button asChild>
              <Link to="/resident-portal">Resident Portal</Link>
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" onClick={() => setOpen(true)} aria-label="Open menu">Menu</Button>
          </div>
        </div>
        {/* Simple mobile drawer */}
        {open && (
          <div className="md:hidden border-t animate-slide-in-right">
            <div className="container py-4 grid gap-3">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2">
                  {n.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-2">
                <Button asChild variant="outline" className="flex-1"><Link to="/owner-portal" onClick={() => setOpen(false)}>Owner Portal</Link></Button>
                <Button asChild className="flex-1"><Link to="/resident-portal" onClick={() => setOpen(false)}>Resident Portal</Link></Button>
              </div>
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