'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Users, 
  Trophy, 
  CalendarClock, 
  MessageCircle, 
  PhoneCall, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ChooseYourGoalSectionProps {
  onOpenBooking: () => void;
  onSelectGoal?: (goalTitle: string) => void;
}

export default function ChooseYourGoalSection({
  onOpenBooking,
  onSelectGoal,
}: ChooseYourGoalSectionProps) {
  const goalCards = [
    {
      id: 'general-fitness',
      title: 'General Fitness Yoga',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&auto=format&fit=crop&q=80',
      pills: ['Improves overall fitness', 'Increases flexibility', 'Builds strength'],
      desc: 'Customizable weekly plans (3–6 days) designed to fit your lifestyle and fitness goals',
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss Yoga',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80',
      pills: ['Supports fat loss', 'Boosts metabolism', 'Improves stamina'],
      desc: 'Fat-burning sessions (3–6 days/week) designed to help you lose weight naturally at home',
    },
    {
      id: 'back-pain',
      title: 'Back Pain, Cervical & Sciatica Yoga',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80',
      pills: ['Relieves back pain', 'Reduces cervical stiffness', 'Eases sciatica'],
      desc: 'Therapeutic yoga plans (3–6 days/week) focused on relieving pain and improving posture',
    },
    {
      id: 'stress-relief',
      title: 'Stress Relief & Mind Relaxation Yoga',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&auto=format&fit=crop&q=80',
      pills: ['Reduces stress', 'Calms the mind', 'Improves sleep quality'],
      desc: 'Relaxation-focused sessions (3–6 days/week) to reduce stress and calm your mind',
    },
    {
      id: 'kids-yoga',
      title: 'Kids Yoga',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=700&auto=format&fit=crop&q=80',
      pills: ['Improves concentration', 'Boosts flexibility', 'Enhances immunity'],
      desc: 'Fun and engaging yoga sessions (3–6 days/week) to improve focus, flexibility, and health',
    },
    {
      id: 'senior-yoga',
      title: 'Senior Citizen Yoga',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&auto=format&fit=crop&q=80',
      pills: ['Improves mobility', 'Enhances balance', 'Reduces joint pain'],
      desc: 'Safe and guided home yoga sessions (3–6 days/week) to enhance mobility, improve balance and support healthy aging.',
    },
    {
      id: 'pregnancy-yoga',
      title: 'Pregnancy Yoga',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=80',
      pills: ['Supports healthy pregnancy', 'Reduces back pain', 'Improves flexibility'],
      desc: 'Safe prenatal yoga sessions (3–6 days/week) for a healthy and comfortable pregnancy',
    },
    {
      id: 'meditation-pranayama',
      title: 'Meditation & Pranayama',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80',
      pills: ['Reduces stress', 'Calms the mind', 'Improves focus'],
      desc: 'Guided breathing and meditation (3–6 days/week) to enhance mental clarity and inner peace',
    },
    {
      id: 'power-yoga',
      title: 'Power Yoga',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=700&auto=format&fit=crop&q=80',
      pills: ['Builds strength', 'Burns calories', 'Boosts stamina'],
      desc: 'High energy yoga sessions (3–6 days/week) to build strength, stamina, and endurance',
    },
  ];

  const handleGoalSelect = (goalTitle: string) => {
    if (onSelectGoal) {
      onSelectGoal(goalTitle);
    } else {
      onOpenBooking();
    }
  };

  return (
    <section id="choose-goal" className="py-20 lg:py-24 bg-[#FAF8FC] text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Lotus Motif */}
        <div className="mx-auto max-w-3xl text-center">
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

          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            CHOOSE YOUR GOAL
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D] leading-tight">
            Practice Wherever You Want Whenever You Need
          </h2>
        </div>

        {/* Feature Hero Banner: Your Goals, Our Guidance */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-white via-[#FAF8FC] to-[#F3EBF9] border border-[#3A244E]/15 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E122B] tracking-tight">
                  Your Goals, <span className="font-serif italic font-normal text-[#7D5A9B]">Our Guidance</span>
                </h3>
                <p className="mt-2 text-sm sm:text-base font-semibold text-[#5A496E]">
                  Personalized Home Yoga Sessions to Keep You{' '}
                  <span className="text-[#3A244E] font-bold underline decoration-[#D4AF37] decoration-2 underline-offset-4">
                    Fit, Healthy &amp; Stress Free
                  </span>
                </p>
              </div>

              {/* 3 Pill Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3.5 bg-white/90 border border-[#3A244E]/10 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#2A1B3D]">
                    Highly Experienced &amp; Qualified Male &amp; Female Teacher Available
                  </p>
                </div>

                <div className="flex items-center gap-3.5 bg-white/90 border border-[#3A244E]/10 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center shrink-0 shadow-xs">
                    <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#2A1B3D]">
                    We Offer <span className="text-[#7D5A9B]">Best Price</span> in Market
                  </p>
                </div>

                <div className="flex items-center gap-3.5 bg-white/90 border border-[#3A244E]/10 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center shrink-0 shadow-xs">
                    <CalendarClock className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#2A1B3D]">
                    Book Now &amp; Book Your Session
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="md:col-span-5 relative min-h-[300px] sm:min-h-[360px] h-full overflow-hidden bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&auto=format&fit=crop&q=85"
                alt="Personalized home yoga guidance"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Cursive Tag */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-md border border-white/40">
                <p className="font-serif italic font-bold text-sm sm:text-base text-[#4A2E68] tracking-wide">
                  Yoga at Your Home ✦
                </p>
              </div>

              {/* Bottom live indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 text-center shadow-md">
                <span className="text-xs font-bold text-[#2A1B3D]">
                  ✦ 1-on-1 Personalized Live Teacher Feedback
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* The 9 Yoga Goal Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {goalCards.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-white border border-[#3A244E]/20 shadow-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#7D5A9B]/60 group"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Purple Title Banner Bar */}
              <div className="bg-[#4A2E68] text-white py-2.5 px-4 text-center">
                <h4 className="font-serif text-base sm:text-lg font-bold tracking-wide">
                  {card.title}
                </h4>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tag Pills with Carousel Indicators */}
                  <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 no-scrollbar">
                    <ChevronLeft className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {card.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-block px-2.5 py-1 rounded-full bg-[#EFE8F6] text-[#4A2E68] text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shadow-2xs"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#5A496E] leading-relaxed text-center font-medium min-h-[44px]">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom CTA Action Buttons: Green Chat Now & Navy Call Now */}
                <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919901484500?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(card.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl py-2.5 px-3 bg-[#107C41] hover:bg-[#0E6A38] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#107C41]" />
                    <span>Chat Now</span>
                  </a>

                  <button
                    onClick={() => handleGoalSelect(card.title)}
                    className="rounded-xl py-2.5 px-3 bg-[#0B5C9E] hover:bg-[#094B82] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Now</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
