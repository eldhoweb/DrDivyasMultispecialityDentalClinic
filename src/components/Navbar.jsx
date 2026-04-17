import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-tight" onClick={closeMenu}>
          <span className="font-extrabold text-teal-700 text-base sm:text-lg">
            Dr. Divya's
          </span>
          <span className="font-semibold text-slate-600 text-[11px] sm:text-xs tracking-wide">
            Multispeciality Dental Clinic
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8593824501"
            className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-menu-toggle"
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-teal-50 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}
      >
        <div className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 font-medium text-slate-700 hover:text-teal-600 border-b border-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8593824501"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 rounded-xl"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
