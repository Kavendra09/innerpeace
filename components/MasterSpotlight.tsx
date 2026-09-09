'use client';

import React from 'react';
import Image from 'next/image';
import InnerPeaceLogo from './InnerPeaceLogo';
import { ShieldCheck, Award, HeartHandshake, ArrowRight, Sparkles, Star } from 'lucide-react';

interface MasterSpotlightProps {
  onOpenBooking: () => void;
}

export default function MasterSpotlight({ onOpenBooking }: MasterSpotlightProps) {
  return (
    <section id="founder" className="py-24 bg-[#FAF8FC] text-[#2A1B3D] relative overflow-hidden">
      {/* Soft Ethereal Background Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-[#ECE3F5] rounded-full blur-[120px] opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Portrait & Authentic Seal (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Master Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-900 border-4 border-white shadow-2xl shadow-[#3A244E]/15">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=85"
                alt="Yogacharya Ashish in peaceful meditation"
                fill
                className="object-cover object-top"
              />

              {/* Ambient Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B3D]/90 via-transparent to-transparent opacity-80" />

              {/* Verified Lineage Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-sm border border-[#3A244E]/10">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-[#2A1B3D]">Traditional Gurukul Master</span>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif italic text-sm sm:text-base leading-relaxed text-[#FAF8FC]">
                  &ldquo;Yoga is not about touching your toes—it is about what you learn on the way down. Find your breath, and peace will follow.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-xs">
                  <span className="font-bold tracking-wider uppercase text-[#E2BA6C]">Yogacharya Ashish</span>
                  <span className="text-stone-300">Founder & Master Teacher</span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Stamp */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl border border-[#3A244E]/10 items-center gap-3">
              <InnerPeaceLogo variant="icon" size="sm" />
              <div>
                <p className="text-xs font-bold text-[#2A1B3D]">15+ Years Direct Lineage</p>
                <p className="text-[10px] text-[#5A496E]">Over 12,000 live sessions taught</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Master Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Meet Your Guide</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D] leading-tight">
              Move. Breathe. Be. <br />
              <span className="italic text-[#7D5A9B]">
                Guided by Yogacharya Ashish
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#5A496E] leading-relaxed">
              Trained in the sacred foothills of the Himalayas and seasoned through over a decade of teaching discerning practitioners in London, New York, and Zurich. Yogacharya Ashish unites the classical depth of Patanjali&apos;s Ashtanga with modern biomechanical precision.
            </p>

            {/* Core Tenets Checklist */}
            <div className="mt-6 space-y-3.5 text-sm text-[#2A1B3D]/90">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span><strong>Individual Anatomical Adaptation:</strong> No rigid dogmas. Every posture is modified to honor your individual spine, hips, and energy levels.</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span><strong>Pranayama for Nervous Down-Regulation:</strong> Specific breath ratios to turn off the sympathetic fight-or-flight response and induce lasting mental tranquility.</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span><strong>Real-Time Vocal Feedback:</strong> You are never left to guess. In live sessions, Ashish observes your screen and guides micro-adjustments that prevent strain.</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-7 py-3.5 text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request 1-on-1 Consultation with Ashish</span>
                <ArrowRight className="w-4 h-4 text-[#E2BA6C]" />
              </button>

              <a
                href="#schedule"
                className="rounded-full border border-[#3A244E]/20 bg-white/80 hover:bg-white text-[#2A1B3D] px-6 py-3.5 text-xs sm:text-sm font-semibold transition-all text-center"
              >
                View Live Group Schedule
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
