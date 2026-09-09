'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Activity, HeartPulse, BrainCircuit } from 'lucide-react';

interface UseCasesSectionProps {
  onOpenBooking: () => void;
}

export default function UseCasesSection({ onOpenBooking }: UseCasesSectionProps) {
  const useCases = [
    {
      icon: Activity,
      tag: 'Posture & Spine Therapy',
      title: 'Decompress after 9 hours of screen compression.',
      desc: 'Sitting folds your hip flexors and rounds your thoracic spine. Yogacharya Ashish and senior masters examine your camera angle, detect anterior pelvic tilt, and guide live traction sequences that relieve neck, lumbar, and shoulder tension.',
      metric: '94% reported reduced neck & back pain',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: HeartPulse,
      tag: 'Athletic Recovery & Fascia',
      title: 'Open stiff hips, protect joints, and run or train injury-free.',
      desc: 'For high-performing runners, cyclists, and strength athletes. Static stretching without alignment often strains tendons instead of lengthening muscle bellies. Our biomechanical adjustments protect your labrum and meniscus.',
      metric: '36% increase in functional hip ROM',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: BrainCircuit,
      tag: 'Nervous System & Vagus Activation',
      title: 'Down-regulate chronic cortisol spikes into restorative REM sleep.',
      desc: 'High-pressure careers keep your sympathetic nervous system locked in fight-or-flight. Through live-paced Himalayan Pranayama and restorative Yin holds, instructors monitor your breath cadence and guide you into lasting stillness.',
      metric: 'Deep REM sleep +45 mins/night',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Targeted Physiological Restoration
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Target the root cause of stiffness, fatigue, and mental exhaustion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E]">
            Generic video workouts follow a static script. Inner Peace masters assess what your body needs today and adapt the flow live on screen.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl bg-[#FAF8FC] overflow-hidden border border-[#3A244E]/10 flex flex-col justify-between hover:border-[#7D5A9B]/40 transition-all hover:shadow-xl"
              >
                {/* Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                  <Image
                    src={uc.image}
                    alt={uc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8FC] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-bold text-[#2A1B3D] flex items-center gap-1.5 shadow-sm border border-[#3A244E]/10">
                    <Icon className="w-3.5 h-3.5 text-[#7D5A9B]" />
                    <span>{uc.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#2A1B3D] leading-tight">
                      {uc.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5A496E] leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#3A244E]/10 flex items-center justify-between">
                    <div className="text-xs font-semibold text-[#7D5A9B]">
                      ✓ {uc.metric}
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center text-xs font-bold text-[#3A244E] group-hover:text-[#7D5A9B] cursor-pointer"
                    >
                      <span>Explore this goal</span>
                      <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
