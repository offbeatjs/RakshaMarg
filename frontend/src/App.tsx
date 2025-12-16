import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from '@studio-freight/react-lenis';
import Index from "./pages/Index";
import CheckRoute from "./pages/CheckRoute";
import NotFound from "./pages/NotFound";
import Inspiration from "./pages/Inspiration";
// 1. IMPORT THE HELPER
import ScrollToAnchor from "./components/ScrollToAnchor"; 

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* 2. ADD IT HERE (Inside Router, so it can see useLocation) */}
            <ScrollToAnchor /> 
            
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/check-route" element={<CheckRoute />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ReactLenis>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;