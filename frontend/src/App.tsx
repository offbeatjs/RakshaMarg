import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from '@studio-freight/react-lenis';

import ScrollToAnchor from "./components/ScrollToAnchor";

const Index = lazy(() => import("./pages/Index"));
const CheckRoute = lazy(() => import("./pages/CheckRoute"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Inspiration = lazy(() => import("./pages/Inspiration"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToAnchor />

            <Suspense fallback={
              <div className="h-screen w-screen flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/check-route" element={<CheckRoute />} />
                <Route path="/inspiration" element={<Inspiration />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ReactLenis>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;