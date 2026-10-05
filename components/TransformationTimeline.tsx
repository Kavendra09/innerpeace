'use client';

import React from 'react';
import { 
  Sparkles, 
  Activity, 
  Moon, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Clock
} from 'lucide-react';

interface TransformationTimelineProps {
  onOpenBooking: () => void;
}

export default function TransformationTimeline({ onOpenBooking }: TransformationTimelineProps) {
  const milestones = [
    {
      step: '01',
      timeframe: 'Day 1',
      badge: 'Free Demo Diagnostic',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'Spinal Alignment & Health Assessment',
      icon: Sparkles,
      iconBg: 'bg-[#EFE8F6] text-[#4A2E68]',
      highlight: 'First custom routine mapped out',
      description:
        'Your dedicated master analyzes your spinal curvature, pelvic tilt, and breath depth. You experience immediate postural relief during the very first 45-minute session.',
      bullet: 'No guessing. A routine 100% customized to your pain points.',
    },
    {
      step: '02',
      timeframe: 'Week 2',
      badge: 'Sessions 4–6',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      title: 'Stiffness Relief & Restorative Sleep',
      icon: Moon,
      iconBg: 'bg-indigo-50 text-indigo-700',
      highlight: 'Nervous system resets',
      description:
        'Targeted spinal traction frees compressed lumbar discs and releases trapped tension in the upper neck and shoulders. Evening breathwork activates deep, restorative REM sleep.',
      bullet: 'Reduced morning stiffness; no more waking up with back ache.',
    },
    {
      step: '03',
      timeframe: 'Month 1',
      badge: 'Sessions 12–16',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      title: 'Pain-Free Days & Core Activation',
      icon: Activity,
      iconBg: 'bg-amber-50 text-amber-700',
      highlight: '85%+ pain reduction reported',
      description:
        'Deep postural stabilizer muscles are activated. Daily activities like sitting at a desk, driving, or climbing stairs feel effortless without reaching for pain relief pills.',
      bullet: 'Sustained vitality through the afternoon with steady energy.',
    },
    {
      step: '04',
      timeframe: 'Month 3',
      badge: 'Permanent Transformation',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      title: 'Visible Posture & Sustainable Habit',
      icon: Trophy,
      iconBg: 'bg-rose-50 text-rose-700',
      highlight: 'Medicine-free long-term health',
      description:
        'Your shoulders sit back naturally, core strength supports your lumbar region, and flexibility is restored. Yoga becomes a joyful, effortless daily ritual for long-term health.',
      bullet: 'Visible posture change noticed by colleagues and family.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-3">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Measurable Health Trajectory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1B3D]">
            What You&apos;ll Feel in 90 Days
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A496E] leading-relaxed">
            Consistent 1-on-1 personal guidance produces anatomical shifts that generic video apps cannot replicate. Here is your week-by-week healing roadmap.
          </p>
        </div>

        {/* Timeline Grid (4 Stages) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#4A2E68]/10 via-[#7D5A9B]/20 to-[#4A2E68]/10 -translate-y-24 pointer-events-none" />

          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#FAF8FC] border border-[#3A244E]/15 p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#7D5A9B]/40 transition-all duration-300 relative group"
              >
                <div>
                  {/* Step number watermark & Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-extrabold text-[#7D5A9B]/30 group-hover:text-[#4A2E68]/50 transition-colors">
                      {item.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Timeframe */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D5A9B]">
                        {item.timeframe}
                      </span>
                      <p className="text-xs font-semibold text-[#2A1B3D]">
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2A1B3D] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-[#5A496E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Outcome bullet */}
                <div className="mt-5 pt-3 border-t border-[#3A244E]/10 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] font-medium text-[#2A1B3D] leading-snug">
                    {item.bullet}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout & Action Bar */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#3A244E] to-[#50346B] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold">
              Ready to start your Day 1 diagnostic?
            </h4>
            <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-md">
              Try a full 45-minute 1-on-1 session at your home or live on HD video. 100% free with Yogacharya Ashish&apos;s team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto rounded-full bg-[#E5C287] hover:bg-[#D4AF37] text-[#2A1B3D] px-6 py-3 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Book Free Day 1 Session</span>
              <ArrowRight className="w-4 h-4 text-[#2A1B3D]" />
            </button>

            <a
              href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20start%20my%20Day%201%20yoga%20transformation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about starting yoga"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
