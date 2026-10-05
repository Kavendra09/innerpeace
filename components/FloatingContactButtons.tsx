'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

interface FloatingContactButtonsProps {
  onOpenBooking: () => void;
}

export default function FloatingContactButtons({ onOpenBooking }: FloatingContactButtonsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
      {/* 1. Phone Call Floating Button (Teal) - hidden on mobile since sticky bar has Call */}
      <a
        href="tel:+919368871615"
        aria-label="Call InnerPeace at +91 93688 71615"
        title="Call Now (+91 93688 71615)"
        className="hidden md:flex w-14 h-14 rounded-full bg-[#1B7086] hover:bg-[#155A6D] text-white shadow-xl items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border-2 border-white/40"
      >
        <Phone className="w-6 h-6 transition-transform group-hover:rotate-12" />
        <span className="sr-only">Call Us</span>
      </a>

      {/* 2. WhatsApp Floating Button - hidden on mobile since sticky bar has WhatsApp */}
      <a
        href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20know%20more%20about%20your%20home%20yoga%20classes."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with InnerPeace on WhatsApp"
        title="Chat on WhatsApp"
        className="hidden md:flex w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border-2 border-white/40"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="sr-only">WhatsApp Chat</span>
      </a>

      {/* 3. Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title="Scroll to top"
          className="w-10 h-10 rounded-lg bg-[#0E73BC] hover:bg-[#0C619E] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5]" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
}
