'use client';

import React from 'react';
import { Calendar, Check, Star, ArrowRight, MessageCircle } from 'lucide-react';

interface OurPlansSectionProps {
  onSelectPlan?: (planName: string) => void;
  onOpenBooking?: () => void;
}

export default function OurPlansSection({ onSelectPlan, onOpenBooking }: OurPlansSectionProps) {
  const plans = [
    {
      id: '3-days',
      badge: '★ MOST POPULAR',
      badgeClass: 'bg-[#D4AF37] text-white',
      days: '3 DAYS',
      subDays: 'PER WEEK',
      classes: '12 CLASSES',
      subClasses: 'PER MONTH',
      themeColor: '#4A2E68',
      headerGradient: 'from-[#3A244E] via-[#4E3167] to-[#603B80]',
      pillBg: 'bg-[#4A2E68]',
      checkColor: 'text-[#4A2E68]',
      features: [
        'One-to-One Yoga Sessions',
        'Personalized Yoga Plan',
        'Flexible Timing',
        'Track Your Progress',
      ],
      popular: true,
    },
    {
      id: '4-days',
      badge: null,
      days: '4 DAYS',
      subDays: 'PER WEEK',
      classes: '16 CLASSES',
      subClasses: 'PER MONTH',
      themeColor: '#0284C7',
      headerGradient: 'from-[#0369A1] via-[#0284C7] to-[#38BDF8]',
      pillBg: 'bg-[#0369A1]',
      checkColor: 'text-[#0284C7]',
      features: [
        'One-to-One Yoga Sessions',
        'Personalized Yoga Plan',
        'Flexible Timing',
        'Better Results',
      ],
      popular: false,
    },
    {
      id: '5-days',
      badge: 'MOST MAXIMUM RESULTS ★',
      badgeClass: 'bg-[#D4AF37] text-white',
      days: '5 DAYS',
      subDays: 'PER WEEK',
      classes: '20 CLASSES',
      subClasses: 'PER MONTH',
      themeColor: '#701A75',
      headerGradient: 'from-[#581C87] via-[#701A75] to-[#A21CAF]',
      pillBg: 'bg-[#701A75]',
      checkColor: 'text-[#701A75]',
      features: [
        'One-to-One Yoga Sessions',
        'Personalized Yoga Plan',
        'Flexible Timing',
        'Most Maximum Results',
      ],
      popular: true,
    },
  ];

  const handlePlanClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section id="our-plans" className="py-20 lg:py-24 bg-[#FAF8FC] text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Lotus & Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-12 sm:w-16 bg-[#7D5A9B]/40" />
            <svg
              viewBox="0 0 40 24"
              className="w-8 h-5 text-[#7D5A9B]"
              fill="currentColor"
            >
              <path d="M20 0 C18 6 12 12 4 14 C12 16 18 20 20 24 C22 20 28 16 36 14 C28 12 22 6 20 0 Z" opacity="0.9" />
              <path d="M20 4 C18 9 14 14 8 15 C14 17 18 20 20 22 C22 20 26 17 32 15 C26 14 22 9 20 4 Z" fill="#D4AF37" />
            </svg>
            <span className="h-[1px] w-12 sm:w-16 bg-[#7D5A9B]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1B3D]">
            OUR PLANS
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wide text-[#7D5A9B] flex items-center justify-center gap-2">
            <span>✈</span>
            <span>Flexible Plans. Personal Attention. Real Results.</span>
            <span>✈</span>
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl bg-white border border-[#3A244E]/15 shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative ${
                plan.popular ? 'ring-2 ring-[#7D5A9B]/30' : ''
              }`}
            >
              {/* Card Top Banner with Yogi Watermark */}
              <div className={`relative bg-gradient-to-b ${plan.headerGradient} pt-6 pb-12 px-6 text-white text-center overflow-hidden`}>
                
                {/* Subtle Yogi Silhouette Watermark */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
                >
                  <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white">
                    <circle cx="50" cy="22" r="8" />
                    <path d="M50 32 C40 32 30 42 30 54 C30 60 35 65 42 66 L38 80 C36 84 40 86 44 84 L50 78 L56 84 C60 86 64 84 62 80 L58 66 C65 65 70 60 70 54 C70 42 60 32 50 32 Z" />
                  </svg>
                </div>

                {/* Badge if present */}
                {plan.badge ? (
                  <div className="inline-flex items-center gap-1 rounded-full px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider shadow-sm uppercase mb-3 bg-[#D4AF37] text-white">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                ) : (
                  <div className="h-[27px] mb-3" />
                )}

                {/* White Circle with Calendar Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white/40">
                  <Calendar className="w-8 h-8 text-[#3A244E]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between -mt-6">
                <div>
                  {/* Days per week title */}
                  <div className="text-center bg-white rounded-2xl p-3 shadow-xs border border-stone-100">
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: plan.themeColor }}>
                      {plan.days}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#5A496E]">
                      {plan.subDays}
                    </p>
                  </div>

                  {/* Classes per month pill */}
                  <div className="mt-4 flex justify-center">
                    <div className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-white shadow-sm ${plan.pillBg}`}>
                      {/* Mini yogi icon */}
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
                        <circle cx="12" cy="5" r="2.5" />
                        <path d="M12 9 C8.5 9 6 12 6 15 C6 17 8 18 10 18 L9 22 C9 23 11 23 12 22 L13 22 C14 23 16 23 16 22 L15 18 C17 18 19 17 19 15 C19 12 16.5 9 12 9 Z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-bold tracking-wide">
                        {plan.classes} {plan.subClasses}
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#2A1B3D]/90 px-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EFE8F6] flex items-center justify-center shrink-0">
                          <Check className={`w-3.5 h-3.5 stroke-[3] ${plan.checkColor}`} />
                        </div>
                        <span className="font-medium text-[#2A1B3D]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4 border-t border-stone-100 space-y-2">
                  <button
                    onClick={() => handlePlanClick(`${plan.days} Plan (${plan.classes})`)}
                    className="w-full rounded-full py-3.5 px-6 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 hover:shadow-lg"
                    style={{ backgroundColor: plan.themeColor }}
                  >
                    <span>Book Free Demo Session</span>
                    <ArrowRight className="w-4 h-4 text-[#E5C287]" />
                  </button>

                  <a
                    href={`https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.days)}%20(${encodeURIComponent(plan.classes)})%20plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full py-2.5 px-4 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Value reassurance note */}
        <div className="mt-12 text-center text-xs text-[#5A496E]">
          <p>
            * All plans include 1-on-1 personalized posture diagnostics, flexible scheduling, and direct teacher guidance.
          </p>
        </div>

      </div>
    </section>
  );
}
