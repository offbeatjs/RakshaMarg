import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container px-4">
        <div className={`mx-auto max-w-7xl rounded-full transition-all duration-500 px-6 h-16 flex items-center justify-between ${
          isScrolled 
            ? 'bg-brand-dark/80 backdrop-blur-xl border border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-purple/20 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-brand-purple" />
            </div>
            <span className="font-display text-xl font-bold text-white">
              Raksha<span className="text-brand-purple">Marg</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Check Route', 'How It Works'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/check-route">
              <Button className="bg-white text-brand-dark hover:bg-brand-teal hover:text-white font-semibold rounded-full px-6 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;