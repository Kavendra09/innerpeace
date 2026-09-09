'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Award, MapPin, ArrowRight } from 'lucide-react';

interface TeacherRosterProps {
  onSelectTeacher: (teacherName: string) => void;
}

export default function TeacherRoster({ onSelectTeacher }: TeacherRosterProps) {
  const teachers = [
    {
      name: 'Maya Chen',
      title: 'Senior Alignment & Iyengar Specialist',
      credentials: 'E-RYT 500 • 14 Years Teaching',
      location: 'San Francisco & Bali Hub',
      rating: '4.99',
      reviewCount: 420,
      specialty: 'Spinal Decompression & Posture Therapy',
      quote: '“Most practitioners force poses into shapes. We sculpt the shape around your individual skeletal structure.”',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Acharya Devraj',
      title: 'Himalayan Pranayama & Ashtanga Master',
      credentials: 'Traditional Gurukul Lineage • 18 Years',
      location: 'Rishikesh, India',
      rating: '5.0',
      reviewCount: 680,
      specialty: 'Breath Mastery, Vagus Nerve & Nervous System',
      quote: '“Calm the breath, and the frantic Western mind naturally settles. Posture is merely the seat for the breath.”',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Elena Rostova',
      title: 'Biomechanist & Somatic Yin Director',
      credentials: 'M.Sc. Kinesiology • E-RYT 500',
      location: 'Zurich & London Hub',
      rating: '4.98',
      reviewCount: 310,
      specialty: 'Deep Fascia Recovery & Athletic Longevity',
      quote: '“Stretching cold muscles causes micro-tears. True flexibility comes from neurological safety and intelligent breathing.”',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    },
    {
      name: 'Marcus Vance',
      title: 'Dynamic Mobility & High-Performance Flow',
      credentials: 'Former Pro Athlete • 500hr Ashtanga',
      location: 'New York City Hub',
      rating: '4.97',
      reviewCount: 295,
      specialty: 'Core Stability & Hip Mobility for Athletes',
      quote: '“Yoga isn’t just flexibility—it’s full-range strength. We build a body that feels resilient in everyday life.”',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="teachers" className="py-24 bg-white text-[#242E25]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C97A58]">
            Vetted Pedagogical Excellence
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242E25]">
            Learn from the top 1% of authentic global instructors.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5B4C] leading-relaxed">
            Every InnerPeace teacher has taught for at least a decade, completed 500+ hours of clinical anatomy training, and passed our stringent 4-tier live screen presence audit.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#FAF7F2] border border-[#242E25]/10 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-72 w-full bg-stone-200 overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-2.5 py-1 text-xs font-bold text-[#242E25] flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
                    <span>{teacher.rating}</span>
                    <span className="text-stone-400 font-normal">({teacher.reviewCount})</span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md rounded-lg px-2.5 py-1 text-[11px] text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8E9F8A]" />
                    <span>{teacher.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-xl font-bold text-[#242E25]">
                      {teacher.name}
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  
                  <p className="text-xs font-semibold text-[#C97A58] mt-1">
                    {teacher.title}
                  </p>
                  
                  <p className="text-[11px] text-[#4A5B4C] font-mono mt-0.5">
                    {teacher.credentials}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#242E25]/10">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Specialty
                    </span>
                    <p className="text-xs font-semibold text-[#242E25] mt-0.5">
                      {teacher.specialty}
                    </p>
                  </div>

                  <p className="mt-4 text-xs italic text-[#4A5B4C] leading-relaxed">
                    {teacher.quote}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectTeacher(teacher.name)}
                  className="w-full rounded-full bg-white hover:bg-[#242E25] text-[#242E25] hover:text-white border border-[#242E25]/15 py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request 1-on-1 with {teacher.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
