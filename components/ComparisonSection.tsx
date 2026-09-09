'use client';

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export default function ComparisonSection({ onOpenBooking }: ComparisonSectionProps) {
  const comparisons = [
    {
      feature: 'Real-Time Posture Correction',
      desc: 'Master teacher actively watches your alignment and gives immediate vocal & visual guidance',
      innerPeace: 'Dedicated 2-way live video feedback',
      studio: 'Rare (teacher is occupied with 30+ people)',
      apps: 'None (Passive 1-way video)',
    },
    {
      feature: 'Class Size & Individual Focus',
      desc: 'Intimacy and personalized pacing for your unique anatomy',
      innerPeace: 'Intimate (Max 8 students or 1-on-1)',
      studio: 'Crowded (25 to 40 mats per room)',
      apps: 'Zero interaction (Pre-recorded stream)',
    },
    {
      feature: 'Commute & Travel Friction',
      desc: 'Transit, parking, locker rooms, and travel stress',
      innerPeace: '0 Minutes (Unroll mat in living room)',
      studio: '45 to 60 minutes roundtrip',
      apps: '0 Minutes',
    },
    {
      feature: 'Injury Prevention & Modifications',
      desc: 'Real-time cues for scoliosis, disc issues, knee pain, or stiff hips',
      innerPeace: 'Bespoke modifications every pose',
      studio: 'Generic modifications shouted to the room',
      apps: 'High injury risk (No eyes on you)',
    },
    {
      feature: 'Teacher Lineage & Pedigree',
      desc: 'Instructor qualifications, lineage, and teaching depth',
      innerPeace: 'Led by Yogacharya Ashish & Masters',
      studio: 'Varies wildly by gym schedule',
      apps: 'Influencer-first / Performance focused',
    },
    {
      feature: 'Cost Per Session',
      desc: 'Value for authentic personal instruction',
      innerPeace: 'From $14 / class or free trial',
      studio: '$35 to $50 per single class',
      apps: '$20/mo (85% abandoned by month 2)',
    },
  ];

  return (
    <section id="why-live" className="py-24 bg-white text-[#2A1B3D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            The Honest Truth About Yoga Practice
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Why pre-recorded apps fail, and boutique studios drain your day.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            Yoga was historically taught one-to-one through direct guru-shishya transmission. Inner Peace bridges authentic instruction with modern live video convenience.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-[#3A244E]/10 bg-[#FAF8FC] shadow-sm">
          <div className="grid grid-cols-12 bg-[#FAF8FC] p-6 border-b border-[#3A244E]/10 text-sm font-semibold text-[#2A1B3D]">
            <div className="col-span-5 text-base">Key Practice Dimensions</div>
            <div className="col-span-2 text-center text-stone-500 hidden sm:block">Pre-Recorded Apps</div>
            <div className="col-span-2 text-center text-stone-600 hidden sm:block">Local Boutique Studios</div>
            <div className="col-span-7 sm:col-span-3 text-right sm:text-center font-bold text-[#3A244E] flex items-center justify-end sm:justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Inner Peace Live</span>
            </div>
          </div>

          <div className="divide-y divide-[#3A244E]/10">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 items-center p-6 text-sm hover:bg-white/70 transition-colors"
              >
                {/* Feature Title & Description */}
                <div className="col-span-12 sm:col-span-5 mb-3 sm:mb-0">
                  <p className="font-bold text-[#2A1B3D] text-base">{row.feature}</p>
                  <p className="text-xs text-[#5A496E] mt-0.5">{row.desc}</p>
                </div>

                {/* Pre-recorded Apps */}
                <div className="col-span-4 sm:col-span-2 text-center text-xs sm:text-sm text-stone-500 flex flex-col items-center justify-center gap-1 sm:px-2">
                  <span className="sm:hidden text-[10px] uppercase font-bold text-stone-400">Apps:</span>
                  <span>{row.apps}</span>
                </div>

                {/* Traditional Studio */}
                <div className="col-span-4 sm:col-span-2 text-center text-xs sm:text-sm text-stone-600 flex flex-col items-center justify-center gap-1 sm:px-2">
                  <span className="sm:hidden text-[10px] uppercase font-bold text-stone-400">Studio:</span>
                  <span>{row.studio}</span>
                </div>

                {/* Inner Peace Live */}
                <div className="col-span-4 sm:col-span-3 text-center text-xs sm:text-sm font-semibold text-[#3A244E] bg-[#EFE8F6]/60 sm:bg-transparent rounded-xl p-2 sm:p-0 flex flex-col items-center justify-center gap-1">
                  <span className="sm:hidden text-[10px] uppercase font-bold text-[#7D5A9B]">Inner Peace:</span>
                  <div className="flex items-center gap-1.5 text-[#3A244E]">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="font-bold">{row.innerPeace}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 rounded-3xl bg-[#3A244E] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -right-10 top-0 w-80 h-80 bg-[#7D5A9B] rounded-full blur-[100px] opacity-40"
          />
          <div className="space-y-1.5 text-center sm:text-left relative z-10">
            <p className="text-xs uppercase tracking-widest text-[#E2BA6C] font-bold">Experience The Difference</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">Ready to feel real alignment in your first session?</h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Join a free 1-on-1 alignment consult with Yogacharya Ashish or a senior master.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#E2BA6C] hover:bg-[#D4AF37] text-[#2A1B3D] px-8 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all flex-shrink-0 cursor-pointer relative z-10"
          >
            Claim Your Free Session →
          </button>
        </div>

      </div>
    </section>
  );
}
