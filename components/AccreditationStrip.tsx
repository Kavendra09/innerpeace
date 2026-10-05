'use client';

import React from 'react';
import { ShieldCheck, Award, HeartPulse, Lock, Star, CheckCircle } from 'lucide-react';

export default function AccreditationStrip() {
  const accreditations = [
    {
      title: 'Yoga Alliance Accredited',
      subtitle: 'E-RYT 500 & YACEP Certified Faculty',
      icon: Award,
    },
    {
      title: 'HSA & FSA Reimbursable',
      subtitle: 'Itemized superbills with NPI codes',
      icon: ShieldCheck,
    },
    {
      title: 'IAYT Member Lineage',
      subtitle: 'Clinical & therapeutic alignment protocols',
      icon: HeartPulse,
    },
    {
      title: 'Encrypted HD 2-Way Video',
      subtitle: 'HIPAA-conscious privacy & 1-on-1 intimacy',
      icon: Lock,
    },
  ];

  return (
    <section className="relative bg-white border-y border-[#3A244E]/10 py-10 text-[#2A1B3D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-8 border-b border-[#3A244E]/10">
          {accreditations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF8FC] border border-[#8B6FAD]/20 text-[#7D5A9B] shrink-0 mt-0.5 shadow-xs">
                  <Icon className="w-5 h-5 text-[#7D5A9B]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2A1B3D] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A496E] mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Evidence & Benchmark Bar (Inspired by Harvard/NIH stats on Shvasa & MyYogaTeacher) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 bg-[#FAF8FC] border border-[#8B6FAD]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="max-w-md">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7D5A9B]">
              Clinical Evidence &amp; Measured Health Outcomes
            </span>
            <p className="text-xs sm:text-sm text-[#5A496E] mt-1 leading-relaxed">
              Long-term research published in peer-reviewed journals demonstrates that consistent, live-guided yoga creates measurable anatomical change:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1B3D]">
                43%
              </span>
              <span className="text-[11px] font-semibold text-[#7D5A9B] uppercase tracking-wider">
                Fewer Doctor Visits
              </span>
              <span className="text-[10px] text-stone-400">Harvard Medical Study</span>
            </div>

            <div className="h-10 w-px bg-[#3A244E]/10 hidden sm:block" />

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1B3D]">
                31%
              </span>
              <span className="text-[11px] font-semibold text-[#7D5A9B] uppercase tracking-wider">
                Cortisol Reduction
              </span>
              <span className="text-[10px] text-stone-400">Within 8 weeks of Pranayama</span>
            </div>

            <div className="h-10 w-px bg-[#3A244E]/10 hidden sm:block" />

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1B3D]">
                94%
              </span>
              <span className="text-[11px] font-semibold text-[#7D5A9B] uppercase tracking-wider">
                Relief From Back Pain
              </span>
              <span className="text-[10px] text-stone-400">Reported by 2,400+ members</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
