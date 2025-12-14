import React from 'react';
import { Shield, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-display text-2xl font-bold">RakshaMarg</span>
              </div>
              <p className="text-primary-foreground/70 mb-6 max-w-md">
                Empowering women to travel safely with route awareness and informed decision-making. 
                Know your route. Travel with confidence.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary/30 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Check Route</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Safety Tips</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-display font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} RakshaMarg. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/40 text-center md:text-right max-w-md">
                Disclaimer: RakshaMarg provides informational assistance only. Always trust your instincts 
                and contact local authorities in case of emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
