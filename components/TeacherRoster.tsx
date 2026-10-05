'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Award, MapPin, ArrowRight, Sparkles, Clock } from 'lucide-react';

interface TeacherRosterProps {
  onSelectTeacher: (teacherName: string) => void;
}

export default function TeacherRoster({ onSelectTeacher }: TeacherRosterProps) {
  const teachers = [
    {
      name: 'Yogacharya Ashish',
      title: 'Founder & Lead Yogacharya',
      credentials: 'Traditional Himalayan Gurukul Lineage • E-RYT 500',
      location: 'Rishikesh & International Hubs',
      rating: '5.0',
      reviewCount: 1240,
      timezones: 'EST • PST • GMT • CET',
      specialty: 'Ashtanga Alignment, Spine Traction & Mind Decompression',
      quote: '“Posture is merely the doorway. Once the spine is straight and the breath is long, inner peace arises effortlessly.”',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=85',
      badge: 'Founder & Master Guide',
    },
    {
      name: 'Acharya Devraj',
      title: 'Himalayan Pranayama & Vagus Nerve Master',
      credentials: '20+ Years Traditional Lineage • Gurukul Master',
      location: 'Uttarkashi & New York Virtual Hub',
      rating: '4.99',
      reviewCount: 780,
      timezones: 'EST • CST • GMT',
      specialty: 'Parasympathetic Down-Regulation, Anxiety & Sleep',
      quote: '“Calm the frantic breath, and the overwhelmed modern mind settles. We do not force calm—we breathe it into being.”',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85',
      badge: 'Breathwork Specialist',
    },
    {
      name: 'Dr. Meenakshi Sharma',
      title: 'Therapeutic Yoga & Ayurvedic Doctor',
      credentials: 'BAMS (Ayurvedic Medicine) • M.Sc. Yoga Therapy',
      location: 'New Delhi & California Virtual Hub',
      rating: '4.98',
      reviewCount: 620,
      timezones: 'PST • MST • EST • GMT',
      specialty: 'Sciatica, Women’s Hormonal Health (PCOS) & Digestion',
      quote: '“True yoga therapy treats the unique constitutional dosha and spinal structure of each human being.”',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85',
      badge: 'Clinical Yoga Doctor',
    },
    {
      name: 'Maya Chen',
      title: 'Senior Biomechanist & Iyengar Specialist',
      credentials: 'E-RYT 500 • Certified Iyengar & Posture Specialist',
      location: 'San Francisco & London Virtual Hub',
      rating: '4.98',
      reviewCount: 540,
      timezones: 'PST • EST • GMT • CET',
      specialty: 'Desk Posture Decompression & Sacroiliac Alignment',
      quote: '“Most practitioners force their bodies into shapes. We intelligently sculpt each posture around your skeletal framework.”',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
      badge: 'Anatomy Director',
    },
  ];

  return (
    <section id="teachers" className="py-24 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Top 1% Accredited Faculty</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Learn from authentic masters rooted in original traditions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            Every InnerPeace teacher holds at least a decade of clinical teaching experience, E-RYT 500 credentials, and rigorous clinical anatomy qualifications to guide North American and international practitioners safely.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#FAF8FC] border border-[#3A244E]/10 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#7D5A9B]/40 transition-all duration-300 group"
            >
              <div>
                {/* Photo & Overlays */}
                <div className="relative h-72 w-full bg-stone-900 overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B3D]/80 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold text-[#3A244E] flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{teacher.badge}</span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-2.5 py-1 text-xs font-bold text-white flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    <span>{teacher.rating}</span>
                    <span className="text-stone-300 font-normal text-[10px]">({teacher.reviewCount})</span>
                  </div>

                  {/* Location & Timezones */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E5C287]" />
                      <span className="truncate">{teacher.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#2A1B3D]">
                      {teacher.name}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-semibold text-[#7D5A9B] mt-0.5">
                    {teacher.title}
                  </p>
                  
                  <p className="text-[11px] text-[#5A496E] font-medium mt-1">
                    {teacher.credentials}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#5A496E] bg-[#EFE8F6]/60 rounded-lg px-2.5 py-1">
                    <Clock className="w-3 h-3 text-[#7D5A9B]" />
                    <span><strong>Active in:</strong> {teacher.timezones}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#3A244E]/10">
                    <span className="text-[10px] uppercase font-bold text-[#7D5A9B] tracking-wider">
                      Specialty
                    </span>
                    <p className="text-xs font-semibold text-[#2A1B3D] mt-0.5 leading-snug">
                      {teacher.specialty}
                    </p>
                  </div>

                  <p className="mt-4 text-xs italic text-[#5A496E] leading-relaxed line-clamp-3">
                    {teacher.quote}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectTeacher(teacher.name)}
                  className="w-full rounded-full bg-white hover:bg-[#3A244E] text-[#2A1B3D] hover:text-white border border-[#3A244E]/15 py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Book 1-on-1 with {teacher.name === 'Yogacharya Ashish' ? 'Yogacharya Ashish' : teacher.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
