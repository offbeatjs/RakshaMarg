import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Navigation, Search, Shield, AlertTriangle, CheckCircle, Info, Share2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import mapImage from '@/assets/map.png';

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

    // Simulate analysis delay
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
        <meta name="description" content="Prioritize safety over speed. Analyze route safety with RakshaMarg." />
      </Helmet>

      <div className="min-h-screen bg-brand-dark flex flex-col font-sans text-white selection:bg-brand-teal/30">
        <Navbar />

        <main className="flex-1 pt-24 md:pt-32 pb-20">

          {/* Header Section */}
          <section className="container px-4 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-sm font-medium mb-6"
              >
                <Shield className="w-4 h-4" />
                <span>Safety First Navigation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Not just the fastest route <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">
                  — the safest one.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 max-w-2xl mx-auto mb-8"
              >
                Lighting  •  Crowd presence  •  Area risk patterns  •  Time of travel
              </motion.p>
            </div>
          </section>

          {/* New Input Section (Timeline without Time) */}
          <section className="container px-4 mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

                <div className="space-y-8">
                  {/* Timeline UI */}
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[1.65rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-teal/50 via-white/10 to-brand-purple/50 md:left-8" />

                    {/* Start Location */}
                    <div className="relative flex items-center gap-4 md:gap-6 mb-8">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 z-10">
                        <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs uppercase tracking-wider text-white/40 font-bold mb-2 block ml-1">Start Location</label>
                        <Input
                          type="text"
                          placeholder="Where are you starting from?"
                          value={fromLocation}
                          onChange={(e) => setFromLocation(e.target.value)}
                          className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-1 focus-visible:ring-brand-teal rounded-xl text-lg"
                        />
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 z-10">
                        <MapPin className="w-6 h-6 text-brand-purple" />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs uppercase tracking-wider text-white/40 font-bold mb-2 block ml-1">Destination</label>
                        <Input
                          type="text"
                          placeholder="Where do you want to go?"
                          value={toLocation}
                          onChange={(e) => setToLocation(e.target.value)}
                          className="h-14 bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-1 focus-visible:ring-brand-purple rounded-xl text-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="pt-4">
                    <Button
                      size="xl"
                      className="w-full h-16 text-lg font-bold rounded-2xl bg-gradient-to-r from-brand-purple to-brand-teal text-white hover:opacity-90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
                      onClick={handleCheckRoute}
                      disabled={!fromLocation || !toLocation || isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Analysing Safety Patterns...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Search className="w-5 h-5" />
                          <span>Analyze Route Safety</span>
                        </div>
                      )}
                    </Button>
                    <div className="flex items-center justify-center gap-4 mt-4 text-[10px] uppercase tracking-widest text-white/30 font-medium">
                      <span>Takes ~3 seconds</span>
                      <span>•</span>
                      <span>Privacy-first</span>
                      <span>•</span>
                      <span>No live tracking stored</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Results Section (Restored Map Layout) */}
          {showResults && (
            <section className="container px-4 mb-16 animate-fade-in scroll-mt-24" id="results">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6">

                {/* Map Section (Restored) */}
                <div className="lg:col-span-3 bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-lg flex flex-col relative group">
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-teal" />
                    <span className="text-xs font-bold text-white">Route Preview</span>
                  </div>

                  {/* Map Container */}
                  <div className="flex-1 min-h-[400px] relative bg-black/40">
                    <img
                      src={mapImage}
                      alt="Route Map"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />

                    {/* Overlay Route Line (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 4px #2dd4bf)' }}>
                      <path d="M 150 300 Q 250 250 400 150 T 600 100" stroke="#2dd4bf" strokeWidth="4" fill="none" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
                    </svg>

                    {/* Overlay Route Info */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm mb-0.5">{fromLocation}</p>
                        <div className="w-0.5 h-2 bg-white/20 ml-1.5 my-0.5" />
                        <p className="text-brand-purple font-bold text-sm">{toLocation}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-brand-teal font-bold text-lg">~25 min</p>
                        <p className="text-white/50 text-xs">Safe Route</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety Analysis Sidebar */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Safety Score Card */}
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Shield className="w-24 h-24 text-white" />
                    </div>

                    <h3 className="font-display text-lg font-bold text-white/80 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-purple" />
                      Safety Analysis
                    </h3>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                        <span className="text-xl font-bold text-white">78</span>
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-yellow-500 opacity-20" />
                          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-yellow-500" strokeDasharray="175.9" strokeDashoffset={175.9 - (175.9 * 78) / 100} strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-500">MODERATE</div>
                        <div className="text-sm text-white/50">Caution Advised</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <Info className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                        <p className="text-sm text-white/70">Route has good street lighting (85%).</p>
                      </div>
                      <div className="flex gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                        <p className="text-sm text-white/70">Low crowd density on 2nd Avenue.</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid gap-3">
                    <Button className="w-full h-14 bg-white text-brand-dark hover:bg-white/90 rounded-2xl text-base font-bold shadow-lg">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        <span>View Safer Alternative</span>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full h-14 border-white/10 text-white hover:bg-white/10 rounded-2xl text-base font-bold">
                      <div className="flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        <span>Share Live Details</span>
                      </div>
                    </Button>
                  </div>
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