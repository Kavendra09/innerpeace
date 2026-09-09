'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InnerPeaceLogo from './InnerPeaceLogo';
import { Menu, X, Globe, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  timezone: string;
  setTimezone: (tz: string) => void;
}

export default function Navbar({ onOpenBooking, timezone, setTimezone }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timezones = [
    { label: 'New York (EST)', value: 'America/New_York' },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Paris/Berlin (CET)', value: 'Europe/Paris' },
    { label: 'San Francisco (PST)', value: 'America/Los_Angeles' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8FC]/95 backdrop-blur-md shadow-sm border-b border-[#3A244E]/10 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with authentic seal */}
        <Link href="/" className="group">
          <InnerPeaceLogo variant="full" size="md" theme="light" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#5A496E]">
          <a href="#why-live" className="hover:text-[#3A244E] transition-colors">
            Why Live?
          </a>
          <a href="#pillars" className="hover:text-[#3A244E] transition-colors">
            4 Pillars
          </a>
          <a href="#schedule" className="hover:text-[#3A244E] transition-colors flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#7D5A9B]" />
            <span>Live Schedule</span>
          </a>
          <a href="#founder" className="hover:text-[#3A244E] transition-colors">
            Yogacharya Ashish
          </a>
          <a href="#simulator" className="hover:text-[#3A244E] transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Live Demo</span>
          </a>
          <a href="#pricing" className="hover:text-[#3A244E] transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right Action Center */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Timezone Selector */}
          <div className="flex items-center gap-1.5 rounded-full bg-white/90 border border-[#3A244E]/10 px-3 py-1.5 text-xs text-[#5A496E] shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#7D5A9B]" />
            <select
              aria-label="Select local timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="bg-transparent border-none outline-none font-medium cursor-pointer text-[#3A244E]"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-full bg-[#3A244E] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#3A244E]/20 transition-all duration-200 hover:bg-[#50346B] hover:shadow-lg focus:outline-none cursor-pointer"
          >
            <span>Book Free Class</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E2BA6C]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#3A244E] px-3 py-1.5 text-xs font-semibold text-white cursor-pointer"
          >
            Free Class
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#3A244E] hover:text-[#7D5A9B]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3A244E]/10 bg-[#FAF8FC] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#3A244E]">
            <a href="#why-live" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              Why Live Practice?
            </a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              The 4 Pillars
            </a>
            <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              Live Schedule
            </a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              Yogacharya Ashish
            </a>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              Posture Correction Demo
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#7D5A9B]">
              Membership & Pricing
            </a>
          </nav>

          <div className="pt-4 border-t border-[#3A244E]/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#5A496E]">
              <span>Timezone:</span>
              <select
                aria-label="Select mobile timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="bg-white border border-[#3A244E]/15 rounded-lg px-2 py-1 font-medium text-[#3A244E]"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center rounded-full bg-[#3A244E] py-3 text-sm font-semibold text-white shadow-md cursor-pointer"
            >
              Book Your Free 1-on-1 Class
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
