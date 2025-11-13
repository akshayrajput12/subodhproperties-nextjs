'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Search, Building2 } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact us' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 px-4 pt-4">
      <nav
        className={`
          bg-white transition-all duration-300 mx-auto
          ${scrolled 
            ? 'max-w-6xl rounded-full shadow-lg py-3 px-6' 
            : 'max-w-full rounded-2xl shadow-sm py-4 px-6 border border-gray-100'
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-heading font-bold text-text hover:text-peach transition-colors duration-300 group"
          >
            <Building2 
              size={28} 
              className="text-text group-hover:text-peach group-hover:scale-110 transition-all duration-300" 
            />
            <span className={`transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              SubodhProperties
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-text text-sm font-medium transition-all duration-300 hover:text-peach group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-peach transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button 
              className="text-text hover:text-peach hover:scale-110 transition-all duration-300" 
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button className="rounded-full px-6 hover:scale-105 transition-transform duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-2xl shadow-lg mt-2 mx-auto max-w-full animate-in slide-in-from-top-5 duration-300">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-peach hover:translate-x-2 transition-all duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full hover:scale-105 transition-transform duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
