'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Video, 
  RotateCcw,
  Volume2,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface InteractiveClassDemoProps {
  onOpenBooking: () => void;
}

export default function InteractiveClassDemo({ onOpenBooking }: InteractiveClassDemoProps) {
  const [selectedPose, setSelectedPose] = useState<'warrior' | 'dog' | 'tree'>('warrior');
  const [isCorrected, setIsCorrected] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const poses = {
    warrior: {
      name: 'Warrior II (Virabhadrasana II)',
      studentImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
      flawText: 'Knee collapsing inward past ankle; shoulders raised toward neck.',
      flawScore: 68,
      cueText: '“Sarah, stack your front knee directly over your heel and soften your trap muscles. Breathe into the heart space.”',
      cueTeacher: 'Yogacharya Ashish • Lead Master',
      correctedText: 'Pelvis leveled, knee safely tracking over second toe, effortless breath.',
      correctedScore: 98,
    },
    dog: {
      name: 'Downward Facing Dog (Adho Mukha Svanasana)',
      studentImg: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
      flawText: 'Excess rounding in lumbar spine; dumping weight heavily into wrists.',
      flawScore: 71,
      cueText: '“Micro-bend your knees, root into your index finger bases, and send your sit bones skyward.”',
      cueTeacher: 'Yogacharya Ashish • Lead Master',
      correctedText: 'Spine fully decompressed, weight distributed evenly across palms.',
      correctedScore: 96,
    },
    tree: {
      name: 'Tree Pose (Vrksasana)',
      studentImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
      flawText: 'Foot resting directly against lateral knee joint; hip swaying outward.',
      flawScore: 64,
      cueText: '“Place your foot on the inner thigh or calf—never on the knee joint. Press foot and thigh into each other with equal grace.”',
      cueTeacher: 'Yogacharya Ashish • Lead Master',
      correctedText: 'Joint integrity protected, core engaged, gaze steady at drishti point.',
      correctedScore: 99,
    },
  };

  const current = poses[selectedPose];

  const handleSimulateCorrection = () => {
    setIsCorrected(true);
    setAudioPlayed(true);
  };

  const handleReset = () => {
    setIsCorrected(false);
    setAudioPlayed(false);
  };

  return (
    <section id="simulator" className="py-24 bg-[#FAF8FC] text-[#2A1B3D] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Real-Time Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Experience Real-Time Alignment In Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            See the life-changing difference between guessing alone with an app versus having Yogacharya Ashish observe your alignment in real time.
          </p>
        </div>

        {/* Pose Selector Tabs */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {(['warrior', 'dog', 'tree'] as const).map((poseKey) => (
            <button
              key={poseKey}
              onClick={() => {
                setSelectedPose(poseKey);
                handleReset();
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedPose === poseKey
                  ? 'bg-[#3A244E] text-white shadow-md'
                  : 'bg-white text-[#5A496E] border border-[#3A244E]/10 hover:bg-stone-50'
              }`}
            >
              {poses[poseKey].name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Classroom Mockup Frame */}
        <div className="mt-10 rounded-3xl bg-[#1E122B] text-white p-6 sm:p-8 shadow-2xl border border-purple-900/40 relative">
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-purple-200">
                Inner Peace Live Room #108 • 2-Way Alignment Feed
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs bg-purple-900/60 text-purple-200 border border-purple-700/50 px-3 py-1 rounded-full">
                ✓ 2-Way Encryption Active
              </span>
              <div className="p-2 rounded-lg bg-stone-800 text-stone-300">
                <Video className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Screen Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Student Webcam View */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-stone-900 border border-white/15 shadow-inner">
              <Image
                src={current.studentImg}
                alt="Student posture preview"
                fill
                className="object-cover"
              />

              {/* Simulated Alignment Guides */}
              <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-white border border-white/10 flex items-center gap-2">
                    <span className="text-stone-400">Pose:</span>
                    <span className="text-white font-bold">{current.name}</span>
                  </div>

                  <div className={`px-3 py-1 rounded-lg text-xs font-mono font-bold backdrop-blur-md border ${
                    isCorrected 
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50' 
                      : 'bg-amber-950/80 text-amber-300 border-amber-500/50'
                  }`}>
                    Alignment Score: {isCorrected ? `${current.correctedScore}%` : `${current.flawScore}%`}
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-md self-start px-2.5 py-1 rounded text-[11px] text-stone-300 border border-white/10">
                  Student Cam: Sarah M. (London, UK)
                </div>
              </div>
            </div>

            {/* Instructor Console & Feedback */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-black/40 rounded-2xl p-6 border border-white/10 space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#7D5A9B] flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=120&h=120&fit=crop&crop=faces&q=80"
                    alt="Yogacharya Ashish"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-white">Live Vocal Adjustment</p>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-purple-300">{current.cueTeacher}</p>
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-stone-400">
                  Observation Status:
                </span>
                <p className={`mt-1 text-xs leading-relaxed ${isCorrected ? 'text-emerald-300 font-medium' : 'text-amber-300 font-medium'}`}>
                  {isCorrected ? `✓ ${current.correctedText}` : `⚠ ${current.flawText}`}
                </p>
              </div>

              <div className="rounded-xl bg-black/50 border border-white/10 p-4 relative">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Volume2 className="w-3.5 h-3.5 text-[#E2BA6C]" />
                    <span>Real-time voice cue</span>
                  </span>
                  {audioPlayed && <span className="text-emerald-400 text-[10px] font-bold">● ACTIVE CUE</span>}
                </div>
                <p className="text-xs sm:text-sm text-stone-200 italic font-serif leading-relaxed">
                  {current.cueText}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {!isCorrected ? (
                  <button
                    onClick={handleSimulateCorrection}
                    className="flex-1 rounded-xl bg-[#7D5A9B] hover:bg-[#684685] text-white py-3 px-4 text-xs font-bold transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#E2BA6C]" />
                    <span>Simulate Master Correction</span>
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="flex-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 py-3 px-4 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset Pose Demo</span>
                  </button>
                )}

                <button
                  onClick={onOpenBooking}
                  className="rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white py-3 px-4 text-xs font-bold transition-all cursor-pointer"
                >
                  Try With Ashish →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
