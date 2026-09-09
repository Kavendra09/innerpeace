'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InnerPeaceLogo from './InnerPeaceLogo';
import { 
  CheckCircle2, 
  Sparkles, 
  Video, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Shield,
  Activity,
  Heart,
  Globe2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-[#F5EFF9] to-[#FAF8FC] pt-28 pb-20 lg:pt-36 lg:pb-28 text-[#2A1B3D]">
      
      {/* Background Lavender Mountain Mist & Sunrise Ambient Glows */}
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
        
        {/* Top Banner Tagline Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#3A244E]/10 text-xs font-semibold text-[#5A496E]">
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
            <span>Worldwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High-Converting Copy (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Real-time Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A244E]/10 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5A496E]">
                Live 2-Way Interactive Yoga • No Pre-Recorded Videos
              </span>
            </div>

            {/* Script Intro Line */}
            <p className="font-serif italic text-2xl sm:text-3xl text-[#7D5A9B] font-normal mb-1">
              Find Your
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#2A1B3D] leading-[1.12]">
              INNER PEACE <br />
              <span className="italic font-light text-[#7D5A9B]">
                THROUGH YOGA.
              </span>
            </h1>

            {/* Slogan */}
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-[#7D5A9B]">
              Yoga for a Healthier, Happier You — Yogacharya Ashish
            </p>

            {/* Sub-headline */}
            <p className="mt-4 text-base sm:text-lg text-[#5A496E] max-w-2xl font-normal leading-relaxed">
              Step onto your mat at home and receive real-time posture correction, mindful breathwork, and personalized alignment from authentic masters. Tailored for busy professionals across the US, UK, and Europe.
            </p>

            {/* 4 Pillars Mini Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#2A1B3D]">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#3A244E]/10 shadow-sm flex items-center gap-1.5">
                <span className="text-[#7D5A9B]">✦</span> BALANCE
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#3A244E]/10 shadow-sm flex items-center gap-1.5">
                <span className="text-[#7D5A9B]">✦</span> STRENGTH
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#3A244E]/10 shadow-sm flex items-center gap-1.5">
                <span className="text-[#7D5A9B]">✦</span> FLEXIBILITY
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#3A244E]/10 shadow-sm flex items-center gap-1.5">
                <span className="text-[#7D5A9B]">✦</span> MINDFULNESS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center rounded-full bg-[#3A244E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3A244E]/25 transition-all duration-300 hover:bg-[#50346B] hover:shadow-xl focus:outline-none cursor-pointer"
              >
                <span>Book Your Free 1-on-1 Class</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#E2BA6C] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-full border border-[#3A244E]/15 bg-white/80 px-7 py-4 text-base font-medium text-[#2A1B3D] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[#3A244E]/30 shadow-sm"
              >
                <Clock className="mr-2 h-4 w-4 text-[#7D5A9B]" />
                <span>Today&apos;s Live Broadcasts</span>
              </a>
            </div>

            {/* Friction Reducer */}
            <p className="mt-3 text-xs text-[#5A496E]/90">
              *Zero credit card required. Includes 15-min posture diagnostic with Yogacharya Ashish.
            </p>

            {/* Social Proof Strip */}
            <div className="mt-8 pt-6 border-t border-[#3A244E]/10 flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8FC] bg-stone-300 overflow-hidden relative shadow-sm"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        i === 1 ? '1534528741775-53994a69daeb' :
                        i === 2 ? '1507003211169-0a1dd7228f2d' :
                        i === 3 ? '1517841905240-472988babdf9' :
                                  '1539571696357-5a69c17a67c6'
                      }?w=80&h=80&fit=crop&crop=faces&q=80`}
                      alt="InnerPeace student"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-[#2A1B3D]">4.98 / 5.0</span>
                </div>
                <p className="text-[11px] text-[#5A496E]">
                  Trusted by 2,400+ mindful practitioners in London, New York & Zurich
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visual Live Video Demonstration (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Video Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-[#1E122B] border-4 border-white shadow-2xl shadow-[#3A244E]/20 aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1000&auto=format&fit=crop&q=85"
                alt="Live 1-on-1 yoga alignment session with Yogacharya Ashish"
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
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-20 right-4 max-w-[220px] rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-xl border border-purple-100"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold text-[#2A1B3D]">Yogacharya Ashish</p>
                      <span className="text-[9px] text-[#7D5A9B] font-bold uppercase">Now</span>
                    </div>
                    <p className="text-[11px] text-[#5A496E] leading-snug mt-0.5">
                      &quot;Relax the neck, Sarah. Draw your floating ribs in and lengthen through your crown.&quot;
                    </p>
                  </div>
                </div>
              </motion.div>

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
                      <p className="text-[11px] text-[#5A496E]">Lead Master • Himalayan Lineage</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFE8F6] text-[10px] font-semibold text-[#3A244E]">
                      Observing Live
                    </span>
                    <p className="text-[10px] text-stone-500 mt-1">2-Way View Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Metric Card */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden sm:flex absolute -bottom-5 -left-6 rounded-2xl bg-white p-3.5 shadow-xl border border-[#3A244E]/10 items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE8F6] flex items-center justify-center text-[#7D5A9B]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2A1B3D]">Zero Injury Risk</p>
                <p className="text-[11px] text-[#5A496E]">Real-time anatomical safety</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
