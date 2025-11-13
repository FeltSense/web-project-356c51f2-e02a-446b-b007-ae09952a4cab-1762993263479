'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-red-600">FIT</span>FORCE
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}