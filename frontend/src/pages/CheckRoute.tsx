import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Navigation, Search, Shield, AlertTriangle, CheckCircle, Info, Clock, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const safetyTips = [
  "Share your live location with a trusted contact.",
  "Keep emergency contacts easily accessible.",
  "Prefer well-lit and populated routes.",
  "Trust your instincts — if something feels wrong, seek help.",
  "Keep your phone charged and carry a power bank.",
  "Note landmarks along your route for easier navigation.",
];

const CheckRoute = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCheckRoute = () => {
    if (!fromLocation || !toLocation) return;
    
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const resetSearch = () => {
    setFromLocation('');
    setToLocation('');
    setShowResults(false);
  };

  return (
    <>
      <Helmet>
        <title>Check Route Safety | RakshaMarg</title>
        <meta name="description" content="Check the safety of your travel route before you go." />
      </Helmet>

      {/* Main Background: Dark Brand Color */}
      <div className="min-h-screen bg-brand-dark flex flex-col font-sans text-white">
        <Navbar />
        
        <main className="flex-1 pt-24 md:pt-32 pb-20">
          
          {/* Header Section */}
          <section className="container px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal/10 rounded-2xl mb-6 border border-brand-teal/20"
              >
                <Shield className="w-8 h-8 text-brand-teal" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Check Route Safety
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60"
              >
                Analyze your journey for potential risks, lighting conditions, and crowd density.
              </motion.p>
            </div>
          </section>

          {/* INPUT SECTION */}
          <section className="container px-4 mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <div className="space-y-6">
                  
                  {/* From Input */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-purple group-focus-within:text-brand-teal transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter starting location"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      className="pl-12 h-16 text-lg bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:border-transparent rounded-2xl transition-all"
                    />
                  </div>

                  {/* Connector Line */}
                  <div className="flex items-center justify-center -my-2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-brand-purple/50 to-brand-teal/50 rounded-full" />
                  </div>

                  {/* To Input */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal group-focus-within:text-brand-purple transition-colors">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter destination"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      className="pl-12 h-16 text-lg bg-black/20 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:border-transparent rounded-2xl transition-all"
                    />
                  </div>

                  {/* Action Button */}
                  <Button 
                    size="xl" 
                    className="w-full h-16 text-lg font-bold rounded-2xl bg-gradient-to-r from-brand-purple to-brand-teal text-white hover:opacity-90 transition-all shadow-lg hover:shadow-brand-teal/20"
                    onClick={handleCheckRoute}
                    disabled={!fromLocation || !toLocation || isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Scanning Route...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Search className="w-5 h-5" />
                        <span>Analyze Safety</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* RESULTS SECTION */}
          {showResults && (
            <section className="container px-4 mb-16 animate-fade-in">
              <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-6">
                
                {/* Map Preview */}
                <div className="lg:col-span-3 bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-lg">
                  <div className="p-6 border-b border-white/5 bg-white/5">
                    <h2 className="font-display text-xl font-bold flex items-center gap-2 text-white">
                      <MapPin className="w-5 h-5 text-brand-teal" />
                      Route Visualization
                    </h2>
                  </div>
                  
                  {/* Dark Map Placeholder */}
                  <div className="aspect-[4/3] bg-black/40 flex items-center justify-center relative">
                    <div className="text-center z-10">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <Navigation className="w-8 h-8 text-brand-purple" />
                      </div>
                      <p className="text-white font-medium">Route Preview</p>
                      <p className="text-sm text-white/50 mt-1">
                        {fromLocation} → {toLocation}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="w-4 h-4 text-brand-teal" />
                        <span>~25 min</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin className="w-4 h-4 text-brand-teal" />
                        <span>~8.5 km</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety Score Panel */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-lg">
                    <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-purple" />
                      Safety Analysis
                    </h3>
                    
                    <div className="bg-brand-teal/10 rounded-2xl p-4 mb-4 border border-brand-teal/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-brand-teal" />
                        </div>
                        <div>
                          <p className="font-bold text-brand-teal">Moderate Safety</p>
                          <p className="text-xs text-white/60">Score: 78/100</p>
                        </div>
                      </div>
                      <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                        <div className="h-full w-[78%] bg-brand-teal rounded-full shadow-[0_0_10px_#2dd4bf]" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <Info className="w-4 h-4 text-brand-purple mt-0.5" />
                        <p className="text-sm text-white/70">
                          Route has good street lighting coverage (85%).
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                         <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                         <p className="text-sm text-white/70">
                           Low crowd density expected on 2nd Avenue.
                         </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10 h-12 rounded-xl" onClick={resetSearch}>
                    Check Another Route
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Safety Tips */}
          <section className="container px-4">
             <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-purple/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-brand-purple" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-white">
                    Smart Travel Tips
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {safetyTips.map((tip, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-black/20 rounded-2xl border border-white/5"
                    >
                      <div className="w-6 h-6 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-brand-teal">{index + 1}</span>
                      </div>
                      <p className="text-sm text-white/70">{tip}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default CheckRoute;