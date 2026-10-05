'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Star } from 'lucide-react';

interface ConversionCtaBannerProps {
  onOpenBooking: () => void;
}

export default function ConversionCtaBanner({ onOpenBooking }: ConversionCtaBannerProps) {
  return (
    <section className="py-16 bg-[#FAF8FC] text-[#2A1B3D]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#2A1B3D] via-[#4A2E68] to-[#2A1B3D] p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#8B6FAD] blur-[120px] opacity-30" 
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#E5C287] uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Limited Free Demo Slots Available This Week</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Begin Your 1-on-1 Personalized Yoga Journey Today
            </h2>

            <p className="mt-4 text-sm sm:text-base text-purple-200/90 leading-relaxed max-w-2xl mx-auto">
              Skip the commute. Enjoy tailored one-to-one home sessions with certified master trainers for pain relief, weight loss, or inner peace.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C287] text-[#2A1B3D] px-8 py-4 text-sm font-extrabold shadow-xl transition-all duration-200 cursor-pointer hover:scale-105"
              >
                <span>Book Free Demo Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20book%20a%20free%201-on-1%20yoga%20demo%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-sm font-extrabold shadow-xl transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-purple-200/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span>4.98/5.0 Rated (1,850+ Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E5C287]" />
                <span>Male &amp; Female Teachers Available</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
