import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Owners from "./pages/Owners";
import Leasing from "./pages/Leasing";
import Maintenance from "./pages/Maintenance";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Team from "./pages/Team";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceAreaDetail from "./pages/ServiceAreaDetail";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import OwnerPortal from "./pages/OwnerPortal";
import ResidentPortal from "./pages/ResidentPortal";
import OwnerFAQ from "./pages/OwnerFAQ";
import RenterFAQ from "./pages/RenterFAQ";
import Availability from "./pages/Availability";
import { SiteLayout } from "@/components/layout/SiteLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}> 
            <Route index element={<Index />} />
            <Route path="services" element={<Services />} />
            <Route path="owners" element={<Owners />} />
            <Route path="availability" element={<Availability />} />
            <Route path="leasing" element={<Leasing />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="service-areas" element={<ServiceAreas />} />
            <Route path="service-areas/:slug" element={<ServiceAreaDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="resources" element={<Resources />} />
            <Route path="contact" element={<Contact />} />
            <Route path="owner-portal" element={<OwnerPortal />} />
            <Route path="owner-faq" element={<OwnerFAQ />} />
            <Route path="renter-faq" element={<RenterFAQ />} />
            <Route path="resident-portal" element={<ResidentPortal />} />
          </Route>
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
