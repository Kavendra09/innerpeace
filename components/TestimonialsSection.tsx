'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export default function TestimonialsSection({ onOpenBooking }: TestimonialsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'pain' | 'fitness' | 'mental'>('all');

  const reviews = [
    {
      name: 'Pooja Agarwal',
      role: 'IT Project Manager',
      location: 'Bangalore / Remote',
      category: 'pain',
      condition: 'Severe Lower Back Pain & Sciatica',
      plan: '★ 3 Days/Week Home Plan',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Google Review',
      headline: '“Within 3 weeks of 1-on-1 home sessions, my 2-year back stiffness vanished.”',
      quote: 'Sitting 10 hours daily had ruined my spine. The personal trainer comes to my home on time, checks my posture in real time, and corrects every stretch. I was amazed at how gentle yet effective the alignment therapy was. Worth every rupee.',
      outcome: '100% Pain-Free • Better Posture',
    },
    {
      name: 'Vikram & Sunita Malhotra',
      role: 'Chartered Accountant & Homemaker',
      location: 'Mumbai',
      category: 'fitness',
      condition: 'Weight Loss & Couple Fitness',
      plan: '★ 4 Days/Week Couple Plan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Meta Verified Review',
      headline: '“Lost 7 kgs in 2 months with personalized home sessions!”',
      quote: 'We chose the 4 Days Per Week plan for both of us. Having a dedicated master teacher at home keeps us disciplined. The trainer created custom fat-burning flows without stressful gym workouts. Highly recommend their demo session!',
      outcome: 'Lost 7 kgs • Higher Energy & Stamina',
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Expecting Mother',
      location: 'Pune',
      category: 'fitness',
      condition: 'Safe Prenatal & Pelvic Yoga',
      plan: '★ 1-on-1 Prenatal Protocol',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Google Review',
      headline: '“A female certified teacher who made my second trimester comfortable.”',
      quote: 'I requested an experienced female teacher for prenatal yoga. The trainer is exceptionally knowledgeable and patient. Every pose relieves round ligament tension and pelvic pain safely. Booking the free demo was the best decision.',
      outcome: 'Relieved Pelvic Pain • Safe Trimester Flow',
    },
    {
      name: 'Rajesh K. Sharma',
      role: 'Senior Citizen (Age 64)',
      location: 'Delhi NCR',
      category: 'pain',
      condition: 'Knee Osteoarthritis & Joint Mobility',
      plan: '★ 3 Days/Week Joint Therapy',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Google Review',
      headline: '“I can climb stairs without knee pain now. Authentic master guidance.”',
      quote: 'Doctors had advised knee surgery, but my son booked the 3 Days Per Week plan. The teacher adapted micro-stretches and joint therapy right in my living room. After 45 days, my swelling has reduced and walking is effortless.',
      outcome: 'No Surgery Needed • Restored Knee Mobility',
    },
    {
      name: 'Dr. Neha Verma',
      role: 'Resident Physician',
      location: 'Hyderabad',
      category: 'mental',
      condition: 'Work Exhaustion & Chronic Insomnia',
      plan: '★ 1-on-1 with Yogacharya Ashish',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Meta Verified Review',
      headline: '“Pranayama and deep relaxation reset my chaotic sleep cycle.”',
      quote: 'Irregular night hospital shifts left my nervous system in sympathetic overdrive. The evening 1-on-1 meditation & breathwork sessions helped me sleep soundly without sedatives. Authentic Indian lineage guidance at its best.',
      outcome: 'Deep 7-Hour Sleep • Calmer Nervous System',
    },
    {
      name: 'Amitabh Sengupta',
      role: 'Director, Financial Advisory',
      location: 'Kolkata',
      category: 'mental',
      condition: 'High Blood Pressure & Stress Management',
      plan: '★ 5 Days/Week Executive Health',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      source: 'Google Review',
      headline: '“Resting BP normalized within 6 weeks. 10/10 personal attention.”',
      quote: 'My cardiologist recommended lifestyle correction. Having a private personal trainer ensures no injury and 100% focused attention. Flexible timings mean even with late client calls, my yoga session is never missed.',
      outcome: 'Blood Pressure Controlled • Stress Relieved',
    },
  ];

  const filtered = filter === 'all' ? reviews : reviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#FAF8FC] text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Proof Stats Banner: Google & Meta Reviews Badge */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#3A244E]/15 shadow-xl p-6 sm:p-8 text-center relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            
            {/* Overall Rating Block */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-[#3A244E]">
                <span>4.98</span>
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-[#5A496E] mt-1">
                Average Rating (1,850+ Reviews)
              </p>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center gap-3 border-l border-r border-stone-200 px-6 sm:px-8">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-600 text-lg">
                G
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#2A1B3D]">Google Verified</p>
                <p className="text-[11px] text-[#5A496E]">98% 5-Star Feedback</p>
              </div>
            </div>

            {/* Meta / Facebook Reviews */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-emerald-600 text-lg">
                M
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-extrabold text-[#2A1B3D]">Meta Ads Verified</p>
                <p className="text-[11px] text-[#5A496E]">15,000+ Happy Clients</p>
              </div>
            </div>

          </div>

          <p className="mt-4 pt-4 border-t border-stone-100 text-xs text-[#5A496E] max-w-xl mx-auto">
            Trusted by families, corporate leaders, doctors, and seniors across cities since 2002.
          </p>
        </div>

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mt-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Real Results • Real People
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1B3D]">
            What Our Clients Say About Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A496E]">
            See how personalized 1-on-1 home yoga transformed health, relieved pain, and brought lasting fitness.
          </p>

          {/* Quick Category Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: 'All Reviews (6)', val: 'all' },
              { label: 'Back Pain & Therapy', val: 'pain' },
              { label: 'Weight Loss & Fitness', val: 'fitness' },
              { label: 'Stress & Sleep', val: 'mental' },
            ].map((f) => (
              <button
                key={f.val}
                onClick={() => setFilter(f.val as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === f.val
                    ? 'bg-[#4A2E68] text-white shadow-xs'
                    : 'bg-white text-[#5A496E] border border-[#3A244E]/15 hover:bg-[#FAF8FC]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#3A244E]/15 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* User info & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#7D5A9B]/40 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-[#2A1B3D]">
                          {item.name}
                        </h4>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <p className="text-[11px] text-[#5A496E]">{item.role}</p>
                      <p className="text-[10px] text-[#7D5A9B] font-semibold">📍 {item.location}</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {item.source}
                  </span>
                </div>

                {/* Star rating & condition */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#4A2E68] bg-[#EFE8F6] px-2.5 py-0.5 rounded-full">
                    {item.condition}
                  </span>
                </div>

                {/* Plan Badge */}
                <div className="mt-2 flex items-center">
                  <span className="text-[10px] font-bold text-[#7D5A9B] bg-[#FAF8FC] border border-[#7D5A9B]/25 px-2.5 py-0.5 rounded-md">
                    {item.plan}
                  </span>
                </div>

                {/* Review Headline & Body */}
                <h5 className="font-serif text-sm sm:text-base font-bold text-[#2A1B3D] mt-3 leading-snug">
                  {item.headline}
                </h5>

                <p className="text-xs text-[#5A496E] mt-2 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Outcome Highlight Box */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2 bg-[#FAF8FC] rounded-xl p-2.5 text-xs font-bold text-[#2A1B3D]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-[11px]">{item.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-full bg-[#4A2E68] hover:bg-[#5E3A85] text-white px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-[#4A2E68]/25 transition-all cursor-pointer"
          >
            <span>Book Your Free 1-on-1 Demo Session</span>
            <ArrowRight className="w-4 h-4 text-[#E5C287]" />
          </button>

          <a
            href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20saw%20your%20reviews%20and%20want%20to%20book%20a%20free%20demo%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
