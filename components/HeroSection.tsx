'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Video, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Shield, 
  Activity, 
  Users, 
  Award, 
  Calendar,
  CheckCircle2,
  Phone
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onLeadCapture?: (name: string, phone: string, goal: string) => void;
}

export default function HeroSection({ onOpenBooking, onLeadCapture }: HeroSectionProps) {
  const [activeRightTab, setActiveRightTab] = useState<'form' | 'video'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalChips = [
    { label: '🦴 Back Pain', value: 'Back Pain, Cervical & Sciatica Yoga' },
    { label: '⚖️ Weight Loss', value: 'Weight Loss Yoga' },
    { label: '🧘 Stress Relief', value: 'Stress Relief & Mind Relaxation Yoga' },
    { label: '💪 General Fitness', value: 'General Fitness Yoga' },
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setIsSubmitted(true);
      if (onLeadCapture) onLeadCapture(name, phone, selectedGoal);
      setTimeout(() => {
        onOpenBooking();
      }, 1200);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-[#F5EFF9] to-[#FAF8FC] pt-24 pb-16 lg:pt-32 lg:pb-24 text-[#2A1B3D]">
      
      {/* Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-[#ECE3F5] blur-[140px] opacity-80" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 left-0 w-[500px] h-[500px] rounded-full bg-[#FCEFE9] blur-[160px] opacity-60" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E5DAF2] blur-[120px] opacity-50" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#3A244E]/10 text-xs font-semibold text-[#5A496E]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7D5A9B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7D5A9B]"></span>
            </span>
            <span className="uppercase tracking-widest text-[#7D5A9B] font-bold">
              Move • Breathe • Be
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#5A496E]">
            <span>Personal Sessions</span>
            <span>•</span>
            <span>Online Yoga</span>
            <span>•</span>
            <span>Home Sessions</span>
            <span>•</span>
            <span>Certified Masters</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Stats Card (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Real-time Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A244E]/10 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5A496E]">
                Personalized 1-on-1 Sessions At Your Doorstep &amp; Online
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-bold tracking-tight text-[#2A1B3D] leading-[1.15]">
              Your Personal Yoga Trainer, <br />
              <span className="italic font-normal text-[#7D5A9B]">
                Right at Your Doorstep
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-base sm:text-lg text-[#5A496E] max-w-2xl font-normal leading-relaxed">
              Skip the travel and enjoy expert one-to-one yoga classes in the comfort of your home. Tailored routines for flexibility, back pain, stress relief, and lifelong vitality.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center rounded-full bg-[#3A244E] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#3A244E]/25 transition-all duration-300 hover:bg-[#50346B] hover:shadow-xl focus:outline-none cursor-pointer"
              >
                <span>Book Free 1-on-1 Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#E5C287] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#our-plans"
                className="inline-flex items-center justify-center rounded-full border border-[#3A244E]/15 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#2A1B3D] backdrop-blur-xs transition-all duration-200 hover:bg-white hover:border-[#3A244E]/30 shadow-xs"
              >
                <Clock className="mr-2 h-4 w-4 text-[#7D5A9B]" />
                <span>View Plans &amp; Timings</span>
              </a>
            </div>

            {/* STATS CARD with 3 Columns & Bottom Purple Banner */}
            <div className="mt-8 w-full max-w-xl rounded-3xl bg-white border border-[#3A244E]/15 shadow-xl overflow-hidden">
              
              {/* 3 Stats Columns */}
              <div className="p-5 sm:p-6 grid grid-cols-3 divide-x divide-[#3A244E]/10 text-center">
                
                {/* 1. Market Since */}
                <div className="px-2 sm:px-3 flex flex-col items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8FC] border border-[#7D5A9B]/20 flex items-center justify-center text-[#7D5A9B] mb-2 shadow-xs">
                    <Calendar className="w-5 h-5 text-[#4A2E68]" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5A496E]">
                    IN MARKET SINCE
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3A244E] mt-1 font-serif">
                    2002
                  </p>
                  <span className="text-[10px] text-[#7D5A9B] font-semibold mt-0.5">✦ Verified Lineage</span>
                </div>

                {/* 2. Served Over */}
                <div className="px-2 sm:px-3 flex flex-col items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8FC] border border-[#7D5A9B]/20 flex items-center justify-center text-[#7D5A9B] mb-2 shadow-xs">
                    <Users className="w-5 h-5 text-[#4A2E68]" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5A496E]">
                    SERVED OVER
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3A244E] mt-1 font-serif">
                    15,000+
                  </p>
                  <div className="mt-1 px-2 py-0.5 rounded-full bg-[#4A2E68] text-white text-[8px] sm:text-[9px] font-bold uppercase">
                    HAPPY CLIENTS
                  </div>
                </div>

                {/* 3. Certified Yoga Teachers */}
                <div className="px-2 sm:px-3 flex flex-col items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8FC] border border-[#7D5A9B]/20 flex items-center justify-center text-[#7D5A9B] mb-2 shadow-xs">
                    <Award className="w-5 h-5 text-[#4A2E68]" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5A496E]">
                    CERTIFIED TEACHERS
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3A244E] mt-1 font-serif">
                    8+ YEARS
                  </p>
                  <div className="mt-1 px-2 py-0.5 rounded-full bg-[#4A2E68] text-white text-[8px] sm:text-[9px] font-bold uppercase">
                    TEACHER EXPERIENCE
                  </div>
                </div>

              </div>

              {/* Bottom Purple Ribbon */}
              <div className="bg-[#4A2E68] text-white py-2.5 px-4 flex flex-wrap items-center justify-around gap-2 text-[10px] sm:text-[11px] font-bold tracking-wider">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5C287]" />
                  <span>TRUSTED SINCE 2002</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E5C287]" />
                  <span>THOUSANDS OF HAPPY CLIENTS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#E5C287]" />
                  <span>EXPERIENCED. QUALIFIED. TRUSTED.</span>
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT COLUMN: Book Free Demo Form & Live Preview (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* View Switcher Tabs */}
            <div className="flex justify-center mb-3">
              <div className="inline-flex rounded-full bg-white p-1 border border-[#3A244E]/10 shadow-xs">
                <button
                  onClick={() => setActiveRightTab('form')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeRightTab === 'form'
                      ? 'bg-[#4A2E68] text-white shadow-xs'
                      : 'text-[#5A496E] hover:text-[#2A1B3D]'
                  }`}
                >
                  Book Free Demo Form
                </button>
                <button
                  onClick={() => setActiveRightTab('video')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeRightTab === 'video'
                      ? 'bg-[#4A2E68] text-white shadow-xs'
                      : 'text-[#5A496E] hover:text-[#2A1B3D]'
                  }`}
                >
                  Live Alignment Preview
                </button>
              </div>
            </div>

            {/* 1. BOOK FREE DEMO FORM CARD */}
            {activeRightTab === 'form' ? (
              <div className="rounded-3xl bg-white border border-[#3A244E]/15 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="text-center pb-4 border-b border-stone-100">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4A2E68] tracking-tight">
                    Claim Your Free 1-on-1 Session
                  </h3>
                  <p className="mt-1 text-xs text-[#5A496E]">
                    Personalized yoga — at your doorstep or online. Zero cost.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleQuickSubmit} className="mt-5 space-y-4">

                    {/* Goal Chip Selector */}
                    <div>
                      <label className="block text-xs font-bold text-[#2A1B3D] mb-2">
                        What do you need most? <span className="text-[#7D5A9B] font-normal">(optional)</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {goalChips.map((chip) => (
                          <button
                            key={chip.value}
                            type="button"
                            onClick={() => setSelectedGoal(selectedGoal === chip.value ? '' : chip.value)}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-left ${
                              selectedGoal === chip.value
                                ? 'bg-[#EFE8F6] border-[#7D5A9B] text-[#4A2E68] shadow-sm'
                                : 'bg-[#FAF8FC] border-[#3A244E]/15 text-[#5A496E] hover:border-[#7D5A9B]/40'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2A1B3D] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl bg-[#FAF8FC] border border-[#3A244E]/20 px-4 py-3 text-sm text-[#2A1B3D] placeholder-[#5A496E]/50 outline-none focus:border-[#4A2E68] focus:ring-2 focus:ring-[#7D5A9B]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2A1B3D] mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl bg-[#FAF8FC] border border-[#3A244E]/20 px-4 py-3 text-sm text-[#2A1B3D] placeholder-[#5A496E]/50 outline-none focus:border-[#4A2E68] focus:ring-2 focus:ring-[#7D5A9B]/20 transition-all"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full rounded-xl py-3.5 px-6 text-sm font-bold text-white bg-[#4A2E68] hover:bg-[#5E3A85] shadow-lg shadow-[#4A2E68]/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Get My Free Demo Session →</span>
                        <ArrowRight className="w-4 h-4 text-[#E5C287]" />
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-[11px] text-[#5A496E]">
                        🔒 100% Free • No credit card • No lock-in contract
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-[#2A1B3D]">Demo Request Received!</h4>
                    <p className="text-xs text-[#5A496E] max-w-xs mx-auto">
                      Thank you, <strong className="text-[#2A1B3D]">{name}</strong>. Our senior yoga counselor is opening your schedule confirmation...
                    </p>
                  </div>
                )}

                {/* Direct Call / WhatsApp quick helper strip */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#5A496E]">
                  <span>Prefer instant connect?</span>
                  <a
                    href="https://wa.me/919368871615"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>WhatsApp Us Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              /* 2. LIVE VIDEO INTERACTIVE PREVIEW */
              <div className="relative rounded-3xl overflow-hidden bg-[#1E122B] border-4 border-white shadow-2xl shadow-[#3A244E]/20 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&auto=format&fit=crop&q=85"
                  alt="Live 1-on-1 yoga alignment session"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.92]"
                />

                {/* Glassmorphic Top Status Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-white border border-white/15">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wide">LIVE 1-ON-1</span>
                    <span className="text-xs text-stone-300 font-mono">18:42</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-white text-xs border border-white/15">
                    <Video className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2-Way HD Video</span>
                  </div>
                </div>

                {/* Real-time Alignment Correction Overlay Callout */}
                <div className="absolute top-20 right-4 max-w-[220px] rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-xl border border-purple-100">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-full bg-[#EFE8F6] text-[#7D5A9B] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold text-[#2A1B3D]">Yogacharya Ashish</p>
                        <span className="text-[9px] text-[#7D5A9B] font-bold uppercase">Now</span>
                      </div>
                      <p className="text-[11px] text-[#5A496E] leading-snug mt-0.5">
                        &quot;Relax the shoulders, keep your spine tall and take a deep breath.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Biometrics Alignment Indicator Tag */}
                <div className="absolute top-44 left-4 bg-black/45 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 text-[11px] text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Spine Traction: Optimal (96%)</span>
                </div>

                {/* Bottom Master Teacher Profile Banner */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#7D5A9B]">
                        <Image
                          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=120&h=120&fit=crop&crop=faces&q=80"
                          alt="Yogacharya Ashish"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-bold text-[#2A1B3D]">Yogacharya Ashish</p>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <p className="text-[11px] text-[#5A496E]">Lead Yoga Master &amp; Founder</p>
                      </div>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="px-3 py-1.5 rounded-full bg-[#4A2E68] text-white text-xs font-bold shadow-xs cursor-pointer hover:bg-[#5E3A85]"
                    >
                      Book Free Demo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
