import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'How It Works', href: '#showcase' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-4 z-50 bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-full shadow-lg" style={{
      left: '15vw',
      right: '15vw'
    }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/Untitled__50_x_20_mm_-removebg-preview.png" 
              alt="EV Managers Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="absolute top-full left-0 right-0 mt-2 px-4 pt-4 pb-6 space-y-2 bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-4 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;