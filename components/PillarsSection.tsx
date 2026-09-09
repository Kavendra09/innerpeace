'use client';

import React from 'react';
import { 
  Heart, 
  Sparkles, 
  User, 
  Laptop, 
  Home as HomeIcon, 
  Globe2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface PillarsSectionProps {
  onOpenBooking: () => void;
}

export default function PillarsSection({ onOpenBooking }: PillarsSectionProps) {
  // The 4 Core Pillars from the official Inner Peace brand banner
  const pillars = [
    {
      title: 'BALANCE',
      subtitle: 'Sthira & Sukham',
      desc: 'Harmony of mind, breath, and nervous equilibrium. Ground your center through rooted alignment.',
      icon: (
        <svg className="w-6 h-6 text-[#7D5A9B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2C7 6 5 11 5 16a7 7 0 0 0 14 0c0-5-2-10-7-14z" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      ),
    },
    {
      title: 'STRENGTH',
      subtitle: 'Core Resilience',
      desc: 'Build functional stability and postural integrity without brute tension or joint wear.',
      icon: (
        <svg className="w-6 h-6 text-[#7D5A9B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
          <path d="M12 14v7" />
        </svg>
      ),
    },
    {
      title: 'FLEXIBILITY',
      subtitle: 'Open & Fluid',
      desc: 'Release chronic fascial adhesions, decompress vertebrae, and invite safe range of motion.',
      icon: (
        <svg className="w-6 h-6 text-[#7D5A9B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: 'MINDFULNESS',
      subtitle: 'Dhyana & Peace',
      desc: 'Cultivate deep meditative presence. Quiet the incessant chatter and step into serene clarity.',
      icon: (
        <svg className="w-6 h-6 text-[#7D5A9B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c3 3 5 6 5 9s-2 6-5 9" />
          <path d="M12 3c-3 3-5 6-5 9s2 6 5 9" />
        </svg>
      ),
    },
  ];

  // The 4 Modalities from the official banner
  const modalities = [
    {
      label: 'PERSONAL SESSIONS',
      sub: 'Dedicated 1-on-1 bespoke coaching',
      icon: User,
    },
    {
      label: 'ONLINE YOGA',
      sub: 'Live 2-way interactive studio feeds',
      icon: Laptop,
    },
    {
      label: 'HOME SESSIONS',
      sub: 'Practice serenely in your living room',
      icon: HomeIcon,
    },
    {
      label: 'WORLDWIDE',
      sub: 'Accessible across US, UK & Europe timezones',
      icon: Globe2,
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-white text-[#2A1B3D] border-y border-[#3A244E]/10 relative overflow-hidden">
      {/* Decorative Lavender Mist Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#EFE8F6] blur-[100px] opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with script accent */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Authentic Yogic Foundation
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            The Four Sacred Pillars of Inner Peace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            Founded on classical tradition under Yogacharya Ashish. Each live practice harmonizes mind, body, and breath through four integrated dimensions.
          </p>
        </div>

        {/* 4 Pillars Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-[#FAF8FC] p-7 border border-[#3A244E]/10 hover:border-[#7D5A9B]/50 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Icon in delicate circular badge */}
                <div className="w-13 h-13 rounded-2xl bg-white border border-[#3A244E]/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>

                <div className="mt-6">
                  <h3 className="font-serif text-xl font-bold tracking-wider text-[#2A1B3D]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#7D5A9B] mt-0.5 uppercase tracking-wide">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#5A496E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3A244E]/5 flex items-center justify-between text-xs text-[#7D5A9B] font-semibold">
                <span>Integrated in every class</span>
                <span className="text-[#D4AF37]">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Modalities Strip (Exact representation of banner bottom bar) */}
        <div className="mt-16 rounded-3xl bg-[#FAF8FC] border border-[#3A244E]/10 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#3A244E]/10">
            {modalities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                  <div className="w-11 h-11 rounded-full bg-[#EFE8F6] text-[#3A244E] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#2A1B3D]">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-[#5A496E] mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
