'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ClipboardCheck, 
  Video, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Smartphone,
  Laptop
} from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenBooking: () => void;
}

export default function HowItWorksSection({ onOpenBooking }: HowItWorksSectionProps) {
  const steps = [
    {
      step: '01',
      title: '60-Second Health & Posture Intake',
      subtitle: 'Share your physiological goals & timezone',
      desc: 'Tell us about your stiff points (sciatica, cervical neck, tight hips), prior injuries, and preferred practice hours. We match you with an accredited Indian Yogacharya specialized in your exact anatomical needs.',
      badge: 'Zero Credit Card Required',
      icon: ClipboardCheck,
      details: [
        'Select focus: Back Pain, Stress, Flexibility, or Athletes',
        'Available in EST, PST, CST, MST, GMT, and CET',
        'Direct teacher matching within minutes',
      ],
    },
    {
      step: '02',
      title: 'Join Live 2-Way HD Video On Your Mat',
      subtitle: 'No special equipment — just laptop or phone',
      desc: 'Position your device 6–8 feet from your mat. Your master instructor observes your alignment from head to toe, noticing subtle shifts like knee collapsing or shoulder hiking, correcting your posture in real time.',
      badge: 'Max 8 Students or Private 1-on-1',
      icon: Video,
      details: [
        '2-way live interaction (not pre-recorded video)',
        'Real-time vocal feedback tailored to your bone structure',
        'Option for dual-angle view (front & side)',
      ],
    },
    {
      step: '03',
      title: 'Personalized Daily Roadmap & Progress',
      subtitle: 'Bespoke cues and dedicated WhatsApp mentorship',
      desc: 'After each session, receive custom postural takeaways, guided breathwork clips for bedtime, and direct WhatsApp concierge access to your teacher to track joint mobility and sleep recovery week after week.',
      badge: 'Continuous Transformation',
      icon: TrendingUp,
      details: [
        'Personalized alignment notes in your portal',
        'HSA & FSA itemized reimbursement receipts',
        'Pause, reschedule, or change times effortlessly',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Effortless 3-Step Experience
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Authentic Himalayan Mastery. <br />
            <span className="italic text-[#7D5A9B]">Directly in your living room.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            You don&apos;t need to battle traffic to crowded boutique studios or guess alone with passive workout apps. Here is how your live transformation begins:
          </p>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-[#FAF8FC] border border-[#3A244E]/10 p-8 flex flex-col justify-between hover:border-[#7D5A9B]/40 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#8B6FAD]/30 group-hover:text-[#7D5A9B] transition-colors">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border border-[#3A244E]/10 text-[#7D5A9B] shadow-xs">
                      <Icon className="w-5 h-5 text-[#7D5A9B]" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EFE8F6] text-[#7D5A9B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      {item.badge}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1B3D] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#7D5A9B] mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#5A496E] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 pt-5 border-t border-[#3A244E]/10 space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#2A1B3D]/85 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 flex items-center justify-between text-[11px] font-bold text-[#7D5A9B]">
                  <span>Step {item.step} of 03</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#2A1B3D] via-[#3B2852] to-[#2A1B3D] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C287] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Zero-Risk Guarantee</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">
              Start with a complimentary 1-on-1 diagnostic session.
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/90 mt-2 leading-relaxed">
              Experience authentic postural observation and personalized adjustments with Yogacharya Ashish before committing to a plan.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C287] text-[#2A1B3D] px-8 py-4 text-xs font-bold shadow-lg transition-all cursor-pointer"
            >
              <span>Claim Free 1-on-1 Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
