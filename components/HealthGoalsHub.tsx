'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Activity, 
  BrainCircuit, 
  HeartPulse, 
  Baby, 
  Sparkles, 
  Users, 
  Dumbbell, 
  ArrowRight, 
  Check, 
  Calendar,
  Clock
} from 'lucide-react';

interface HealthGoalsHubProps {
  onSelectGoal: (goalTitle: string) => void;
}

interface GoalCategory {
  id: string;
  tabLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  headline: string;
  description: string;
  reliefTimeline: string;
  cadence: string;
  leadTeacher: string;
  protocols: string[];
  metrics: string;
  image: string;
}

export default function HealthGoalsHub({ onSelectGoal }: HealthGoalsHubProps) {
  const [activeTab, setActiveTab] = useState<string>('backpain');

  const goals: GoalCategory[] = [
    {
      id: 'backpain',
      tabLabel: 'Lower Back & Sciatica',
      icon: Activity,
      tagline: 'Targeted Lumbar & Sacroiliac Decompression',
      headline: 'Alleviate L4–L5 disc pressure, piriformis spasm, and chronic stiffness.',
      description: 'Prolonged sitting shortens hip flexors, tilts the pelvis, and jams lumbar vertebrae together. Yogacharya Ashish and senior alignment specialists examine your camera view to diagnose anterior pelvic tilt, guiding gentle axial traction that restores space between vertebrae without aggravating pinched nerves.',
      reliefTimeline: 'Immediate ease in session 1; lasting structural relief in 4–6 weeks',
      cadence: '2 to 3 live sessions / week',
      leadTeacher: 'Yogacharya Ashish & Maya Chen',
      protocols: [
        'Gentle supine lumbar traction & psoas lengthening',
        'Sacroiliac joint stabilization & pelvic leveling',
        'Deep piriformis release without spinal twisting',
        'Gluteal & core activation to support the spine',
      ],
      metrics: '94% of members report significant reduction in daily back pain',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=85',
    },
    {
      id: 'techneck',
      tabLabel: 'Desk Neck & Posture',
      icon: HeartPulse,
      tagline: 'Upper Cervical & Thoracic Opening',
      headline: 'Reverse 8+ hours of laptop hunching, rounded shoulders, and tension headaches.',
      description: 'When the head tilts forward over a computer screen, cervical muscles must support up to 60 lbs of head weight. Our live biomechanical cues adjust your camera perspective to correct forward head posture, retract scapular winging, and decompress the thoracic spine.',
      reliefTimeline: 'Noticeable tension release in 10 minutes; upright posture in 3 weeks',
      cadence: '15-min daily micro-reset or 2x 45-min weekly sessions',
      leadTeacher: 'Maya Chen (Iyengar Specialist)',
      protocols: [
        'Cervical spine gentle traction & suboccipital release',
        'Rhomboid and mid-trapezius neuromuscular re-education',
        'Thoracic extension over gentle bolsters',
        'Wrist and forearm mobility for repetitive keyboard strain',
      ],
      metrics: '89% experience fewer tension headaches and improved lung capacity',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=85',
    },
    {
      id: 'stress',
      tabLabel: 'Insomnia & Vagus Nerve',
      icon: BrainCircuit,
      tagline: 'Himalayan Pranayama & Parasympathetic Activation',
      headline: 'Down-regulate high cortisol spikes into restorative, uninterrupted REM sleep.',
      description: 'High-stakes executive and corporate lifestyles trap your nervous system in sympathetic fight-or-flight overdrive. Acharya Devraj and senior masters guide ancient breath cadences (Anulom Vilom, Brahmari, and slow-ratio exhalations) that stimulate the vagus nerve and slow heart rate within minutes.',
      reliefTimeline: 'Deep restorative sleep within 2 days of regular evening practice',
      cadence: '3x evening 30-min wind-down sessions / week',
      leadTeacher: 'Acharya Devraj (Himalayan Lineage)',
      protocols: [
        '4-7-8 and extended exhalation parasympathetic cadence',
        'Vagus nerve tonification through audible acoustic hums',
        'Restorative Yin holds that calm adrenal output',
        'Yoga Nidra guided somatic decompression before bed',
      ],
      metrics: 'Over 45 extra minutes of deep REM sleep measured by wearables',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&auto=format&fit=crop&q=85',
    },
    {
      id: 'prenatal',
      tabLabel: 'Prenatal & Postnatal',
      icon: Baby,
      tagline: 'Nurturing Maternal Health & Pelvic Floor Recovery',
      headline: 'Safe, doctor-aligned movement for expecting and postpartum mothers.',
      description: 'Every trimester introduces profound biomechanical shifts to your center of gravity and sacroiliac ligaments. Certified maternal yoga therapists ensure postures avoid abdominal pressure, relieve pelvic girdle pain, and nurture calm connection with baby.',
      reliefTimeline: 'Immediate relief from lower back & round ligament discomfort',
      cadence: '2 to 3 gentle 45-min sessions / week',
      leadTeacher: 'Dr. Meenakshi Sharma & Faculty',
      protocols: [
        'Pelvic floor toning, gentle release & birth preparation',
        'Side-lying spine lengthening & supported squats',
        'Cooling breathwork for gestational temperature regulation',
        'Gentle diastasis recti safe postpartum core recovery',
      ],
      metrics: 'Safe, trimester-adapted sequences backed by OB-GYN guidelines',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=85',
    },
    {
      id: 'hormonal',
      tabLabel: 'PCOS & Thyroid Balance',
      icon: Sparkles,
      tagline: 'Endocrine Flow & Metabolic Harmony',
      headline: 'Support hormonal balance, reduce inflammation, and enhance vitality.',
      description: 'Stress-induced cortisol directly disrupts insulin sensitivity and ovarian function. Our therapeutic routines combine gentle inversions, abdominal massage asanas, and targeted cooling pranayama to calm adrenal stress and support natural endocrine regulation.',
      reliefTimeline: 'Reduced cycle discomfort & enhanced energy within 6–8 weeks',
      cadence: '3 live sessions / week',
      leadTeacher: 'Dr. Meenakshi Sharma (Ayurveda & Yoga)',
      protocols: [
        'Pelvic circulation boosters (Baddha Konasana, Supta Virasana)',
        'Thyroid-stimulating gentle throat lock (Jalandhara Bandha)',
        'Gentle twists that enhance digestive agni and lymph drainage',
        'Deep somatic grounding to normalize stress hormones',
      ],
      metrics: 'Holistic approach uniting authentic yoga with lifestyle guidance',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=85',
    },
    {
      id: 'athletes',
      tabLabel: 'Athletic Recovery & Mobility',
      icon: Dumbbell,
      tagline: 'Fascia Hydration & Functional Joint Range',
      headline: 'Open tight hamstrings and hips to run, cycle, and train injury-free.',
      description: 'For marathoners, CrossFitters, golfers, and triathletes. Rigid lifting without mobility creates micro-tears in ligaments. Our masters provide live joint tracking so you lengthen muscles under neurological safety, eliminating runner’s knee and tight IT bands.',
      reliefTimeline: 'Measurable hip mobility increase in 2 weeks; faster workout recovery',
      cadence: '2x 45-min post-training recovery sessions / week',
      leadTeacher: 'Elena Rostova (M.Sc. Kinesiology)',
      protocols: [
        'Hamstring and hip flexor active mobility sequences',
        'Thoracic rotational drills for golfers and tennis players',
        'Foot and ankle dorsiflexion mobility for runners',
        'Down-regulation breathwork to speed lactic acid clearance',
      ],
      metrics: '36% increase in functional hip range-of-motion measured in 6 weeks',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=85',
    },
  ];

  const activeGoal = goals.find((g) => g.id === activeTab) || goals[0];

  return (
    <section id="health-goals" className="py-24 bg-[#FAF8FC] text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Targeted Clinical Health Protocols
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            What brings you to your mat today?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            Generic YouTube videos and apps ignore your medical history. InnerPeace matches your exact physiological need with certified Indian masters who adapt every posture in real time.
          </p>
        </div>

        {/* Interactive Condition Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = activeTab === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setActiveTab(goal.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#3A244E] text-white shadow-md shadow-[#3A244E]/20 scale-105'
                    : 'bg-white text-[#5A496E] border border-[#3A244E]/10 hover:border-[#7D5A9B]/40 hover:bg-[#FAF8FC]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E5C287]' : 'text-[#7D5A9B]'}`} />
                <span>{goal.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Protocol Detailed Card */}
        <div className="mt-10 rounded-3xl bg-white border border-[#3A244E]/10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Image & Badges (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[520px] bg-stone-900 overflow-hidden">
              <Image
                src={activeGoal.image}
                alt={activeGoal.headline}
                fill
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B3D]/90 via-[#2A1B3D]/30 to-transparent" />

              {/* Tag overlay */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 text-xs font-bold text-[#2A1B3D] flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{activeGoal.tagline}</span>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md rounded-2xl p-4 text-white border border-white/15">
                <p className="text-[11px] uppercase tracking-wider text-[#E5C287] font-bold">
                  Documented Outcome
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-0.5">
                  {activeGoal.metrics}
                </p>
              </div>
            </div>

            {/* Right Column: Clinical Blueprint & Action (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7D5A9B]">
                  <span>Dedicated Master Guidance</span>
                  <span>•</span>
                  <span>{activeGoal.leadTeacher}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A1B3D] mt-2 leading-snug">
                  {activeGoal.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#5A496E] mt-4 leading-relaxed">
                  {activeGoal.description}
                </p>

                {/* Protocol Checklist */}
                <div className="mt-6 pt-6 border-t border-[#3A244E]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A1B3D]">
                    Core Therapeutic Elements:
                  </h4>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeGoal.protocols.map((protocol, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#EFE8F6] text-[#7D5A9B] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </div>
                        <span className="text-xs text-[#2A1B3D]/90 leading-snug font-medium">
                          {protocol}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cadence & Timeline badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8FC] border border-[#8B6FAD]/20 text-[#5A496E]">
                    <Calendar className="w-3.5 h-3.5 text-[#7D5A9B]" />
                    <span><strong>Cadence:</strong> {activeGoal.cadence}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8FC] border border-[#8B6FAD]/20 text-[#5A496E]">
                    <Clock className="w-3.5 h-3.5 text-[#7D5A9B]" />
                    <span><strong>Timeline:</strong> {activeGoal.reliefTimeline}</span>
                  </div>
                </div>
              </div>

              {/* Action Strip */}
              <div className="mt-8 pt-6 border-t border-[#3A244E]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#2A1B3D]">
                    Ready to resolve this condition?
                  </p>
                  <p className="text-[11px] text-[#5A496E]">
                    First diagnostic class is 100% free with no credit card required.
                  </p>
                </div>

                <button
                  onClick={() => onSelectGoal(activeGoal.tabLabel)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-6 py-3 text-xs font-bold shadow-md shadow-[#3A244E]/20 transition-all cursor-pointer"
                >
                  <span>Book Free {activeGoal.tabLabel.split(' ')[0]} Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
