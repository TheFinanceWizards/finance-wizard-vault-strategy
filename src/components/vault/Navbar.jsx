import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className={`flex items-center gap-2 font-sans text-xl md:text-2xl font-semibold tracking-tight ${scrolled ? 'text-stone-800' : 'text-white'}`}>
          <span>The <span className="text-emerald-500 font-bold">Finance</span> Wizards</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Phone — desktop */}
          <a
            href="tel:+17867403445"
            className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-stone-600 hover:text-emerald-700' : 'text-stone-200 hover:text-white'}`}
          >
            <Phone className="w-4 h-4" />
            Free Consultations · +1 (786) 740-3445
          </a>

          {/* CTA button */}
          <a
            href={createPageUrl('QuoteFlow')}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-sm transition-colors duration-200 text-sm"
          >
            <span className="hidden sm:inline">GET A QUOTE</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}