'use client';

import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

export default function TrustMarquee() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#2A1B3D] via-[#3B2852] to-[#2A1B3D] py-2 text-white border-b border-[#8B6FAD]/30 shadow-inner z-50">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs">
        {/* Left Ticker Items */}
        <div className="flex items-center gap-6 overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider text-[#E5C287]">
              Live 1-on-1 & Small Group Sessions
            </span>
          </div>

          <span className="text-white/30 hidden sm:inline">•</span>

          <div className="hidden sm:flex items-center gap-1.5 text-purple-200/90 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% HSA &amp; FSA Eligible (Receipts with NPI codes provided)</span>
          </div>

          <span className="text-white/30 hidden md:inline">•</span>

          <div className="hidden md:flex items-center gap-1.5 text-purple-200/90 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Serving US (EST, CST, MST, PST), Canada, UK &amp; Europe</span>
          </div>
        </div>

        {/* Right Contact Concierge */}
        <div className="flex items-center gap-4 shrink-0 pl-4">
          <a
            href="https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20inquire%20about%20a%20live%201-on-1%20yoga%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Concierge</span>
          </a>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-[#E5C287] font-semibold hidden sm:inline">
            Free 1st Class • No Credit Card
          </span>
        </div>
      </div>
    </div>
  );
}
