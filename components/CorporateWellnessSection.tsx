'use client';

import React from 'react';
import { Building2, Laptop, HeartPulse, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CorporateWellnessProps {
  onOpenBooking: () => void;
}

export default function CorporateWellnessSection({ onOpenBooking }: CorporateWellnessProps) {
  const perks = [
    '20-Minute Live Desk Spine & Ergonomic Resets',
    'Executive 1-on-1 Confidential Stress & Vagus Nerve Protocol',
    'Customized Timezones for Distributed US, Canada & Global Teams',
    'Direct Corporate Wellness Stipend & HSA Itemized Invoicing',
  ];

  return (
    <section id="corporate" className="py-20 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#FAF8FC] via-[#F5EFF9] to-[#FAF8FC] border border-[#3A244E]/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          
          {/* Subtle Glows */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-[#ECE3F5] rounded-full blur-[100px] opacity-70"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#3A244E]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-4 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Executive &amp; Corporate Wellness</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D] leading-tight">
                Empower your leadership &amp; teams with mindful resilience.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#5A496E] leading-relaxed">
                Burnout and screen fatigue cost North American companies billions annually in lost focus and medical claims. InnerPeace provides live, low-friction postural and breathing resets that restore cognitive clarity and prevent chronic back pain.
              </p>

              {/* Perks Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </div>
                    <span className="text-xs font-medium text-[#2A1B3D]/90 leading-snug">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-7 py-3.5 text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>Inquire for Corporate &amp; Executive Passes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
                </button>
                <span className="text-xs text-[#5A496E] text-center sm:text-left">
                  Custom group quotes delivered within 24 hours
                </span>
              </div>
            </div>

            {/* Right Card / Trusted Teams Proof (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#3A244E]/10 p-6 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7D5A9B]">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Trusted by Leaders From</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#FAF8FC] border border-[#3A244E]/10 text-xs font-bold text-[#2A1B3D]">
                    Tech &amp; SaaS Founders
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8FC] border border-[#3A244E]/10 text-xs font-bold text-[#2A1B3D]">
                    Surgeons &amp; Physicians
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8FC] border border-[#3A244E]/10 text-xs font-bold text-[#2A1B3D]">
                    Law &amp; Finance Partners
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8FC] border border-[#3A244E]/10 text-xs font-bold text-[#2A1B3D]">
                    Distributed Remote Teams
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#3A244E]/10 bg-[#FAF8FC] p-4 rounded-xl">
                  <p className="text-xs italic text-[#5A496E] leading-relaxed">
                    &ldquo;The 20-minute midday desk reset has become our team&apos;s favorite weekly ritual. Afternoon brain fog vanished, and everyone feels genuinely cared for.&rdquo;
                  </p>
                  <p className="mt-2 text-[11px] font-bold text-[#2A1B3D]">
                    — Chief People Officer, Series-B Fintech (San Francisco &amp; New York)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
