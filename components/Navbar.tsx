'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InnerPeaceLogo from './InnerPeaceLogo';
import { Menu, X, Globe, ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';

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
    { label: 'Chicago (CST)', value: 'America/Chicago' },
    { label: 'Denver (MST)', value: 'America/Denver' },
    { label: 'Los Angeles (PST)', value: 'America/Los_Angeles' },
    { label: 'London (GMT)', value: 'Europe/London' },
    { label: 'Paris (CET)', value: 'Europe/Paris' },
    { label: 'India (IST)', value: 'Asia/Kolkata' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8FC]/95 backdrop-blur-md shadow-sm border-b border-[#3A244E]/10 py-2 sm:py-2.5'
          : 'bg-white/80 backdrop-blur-md border-b border-[#3A244E]/5 py-3 sm:py-3.5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="group shrink-0 flex items-center">
          <InnerPeaceLogo variant="full" size="md" theme="light" className="scale-90 sm:scale-100 origin-left" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-bold text-[#5A496E]">
          <a
            href="#our-plans"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1"
          >
            Our Plans
          </a>
          <a
            href="#choose-goal"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1"
          >
            Yoga Programs
          </a>
          <a
            href="#how-it-works"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1"
          >
            How It Works
          </a>
          <a
            href="#reviews"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1 flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Reviews &amp; Ratings</span>
          </a>
          <a
            href="#teachers"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1"
          >
            Our Masters
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap hover:text-[#3A244E] transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Right Action Center */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          
          {/* Compact Timezone Selector (Visible on large desktop) */}
          <div className="hidden xl:flex items-center gap-1.5 rounded-full bg-white border border-[#3A244E]/15 px-3 py-1.5 text-xs text-[#5A496E] shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#7D5A9B] shrink-0" />
            <select
              aria-label="Select local timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="bg-transparent border-none outline-none font-semibold cursor-pointer text-[#3A244E] text-xs max-w-[130px]"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          {/* WhatsApp Direct Concierge */}
          <a
            href="https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20inquire%20about%20a%20live%201-on-1%20yoga%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center transition-all shadow-2xs shrink-0 hover:scale-105"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-emerald-600 text-emerald-600" />
            <span className="sr-only">WhatsApp</span>
          </a>

          {/* Primary High-Converting CTA Button (Never wraps) */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3A244E] hover:bg-[#50346B] px-5 xl:px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#3A244E]/20 transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book Free Class</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5C287] shrink-0" />
          </button>
        </div>

        {/* Mobile Right Actions Bar (Fully responsive, perfectly aligned) */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Quick WhatsApp Tap on Mobile */}
          <a
            href="https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20inquire%20about%20a%20live%201-on-1%20yoga%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0"
            title="WhatsApp"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-500" />
            <span className="sr-only">WhatsApp</span>
          </a>

          {/* Primary Mobile CTA Button */}
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#3A244E] hover:bg-[#50346B] px-3.5 sm:px-4 py-2 text-xs font-bold text-white shadow-xs whitespace-nowrap shrink-0 cursor-pointer active:scale-95 transition-transform"
          >
            Free Demo
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-[#3A244E] hover:text-[#7D5A9B] hover:bg-stone-100 rounded-xl shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#3A244E]/10 bg-[#FAF8FC] px-5 py-6 space-y-4 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-2.5 text-sm font-bold text-[#3A244E]">
            <a
              href="#our-plans"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors"
            >
              Our Plans (3, 4, 5 Days/Week)
            </a>
            <a
              href="#choose-goal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors"
            >
              Yoga Programs (9 Specialized Goals)
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors flex items-center justify-between"
            >
              <span>Reviews &amp; Ratings</span>
              <span className="text-[10px] font-extrabold bg-[#EFE8F6] text-[#7D5A9B] px-2 py-0.5 rounded-full">
                4.98★ (1,850+ Reviews)
              </span>
            </a>
            <a
              href="#teachers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors"
            >
              Our Master Faculty
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-white hover:text-[#7D5A9B] transition-colors"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-4 border-t border-[#3A244E]/10 space-y-3">
            
            {/* Mobile Timezone Selector */}
            <div className="flex items-center justify-between text-xs text-[#5A496E] bg-white p-2.5 rounded-xl border border-[#3A244E]/10">
              <span className="font-semibold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#7D5A9B]" />
                Timezone:
              </span>
              <select
                aria-label="Select mobile timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="bg-transparent border-none outline-none font-bold text-[#3A244E] text-xs cursor-pointer"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20inquire%20about%20a%20live%201-on-1%20yoga%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 py-2.5 text-xs font-bold text-white shadow-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919901484500"
                className="rounded-xl bg-[#1B7086] hover:bg-[#155A6D] py-2.5 text-xs font-bold text-white shadow-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Full Width Primary Demo Booking Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center rounded-full bg-[#3A244E] hover:bg-[#50346B] py-3 text-sm font-bold text-white shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
            >
              <span>Book Your Free 1-on-1 Class</span>
              <ArrowRight className="w-4 h-4 text-[#E5C287]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
