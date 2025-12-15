import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhySection from '@/components/WhySection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import { Experience } from '@/components/Experience'; // Import the 3D scene

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RakshaMarg - Women Safety Route Awareness | Know Your Route, Travel Safe</title>
        <meta name="description" content="RakshaMarg helps women evaluate route safety before traveling. Check your route, get safety awareness, and travel with confidence - day or night." />
        <meta name="keywords" content="women safety, route safety, travel safety, safe routes, India travel safety" />
      </Helmet>
      
      {/* THE 3D BACKGROUND LAYER */}
      <Experience />

      {/* MAIN CONTENT - Removed bg-background to let 3D show through */}
      <div className="min-h-screen relative z-10">
        <Navbar />
        <main>
          {/* Note: Ensure HeroSection and other components have transparent backgrounds 
              or glassmorphism styles so the 3D city is visible behind them. */}
          <HeroSection />
          <ProblemSection />
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          <WhySection />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;