'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Check, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Video
} from 'lucide-react';
import InnerPeaceLogo from './InnerPeaceLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClassTitle?: string;
  selectedTeacher?: string;
  timezone: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedClassTitle,
  selectedTeacher,
  timezone,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [goal, setGoal] = useState<string>('Spine Decompression & Posture Therapy');
  const [format, setFormat] = useState<'1-on-1' | 'group'>('1-on-1');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 07:30 AM');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsConfirmed(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      setStep(4);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3A244E', '#7D5A9B', '#D4AF37', '#E5DAF2'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const goals = [
    { title: 'Spine Decompression & Posture Therapy', desc: 'Reverse desk hunch, alleviate lumbar fatigue, restore natural curves' },
    { title: 'Athletic Recovery & Deep Joint Mobility', desc: 'Safe hip opening, hamstring lengthening, joint protection' },
    { title: 'Pranayama & Nervous System Reset', desc: 'Vagus nerve breathwork to dissolve chronic stress & anxiety' },
    { title: 'Full Alignment Diagnostic Review', desc: 'Yogacharya Ashish evaluates your posture and biomechanics' },
  ];

  const availableSlots = [
    'Tomorrow, 07:30 AM',
    'Tomorrow, 09:00 AM',
    'Tomorrow, 12:30 PM',
    'Tomorrow, 05:30 PM',
    'Thursday, 08:00 AM',
    'Thursday, 06:00 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#FAF8FC] p-6 sm:p-8 shadow-2xl border border-[#3A244E]/15 text-[#2A1B3D] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#5A496E] hover:text-[#2A1B3D] hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        {!isConfirmed && (
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7D5A9B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Step {step} of 3 • Complimentary Discovery Class</span>
              </div>
              <InnerPeaceLogo variant="icon" size="sm" />
            </div>
            <div className="mt-2 w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#7D5A9B] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Goal Selection */}
        {step === 1 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2A1B3D]">
              What is your primary wellness focus?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5A496E]">
              Yogacharya Ashish or your assigned master will tailor your live session specifically to this goal.
            </p>

            <div className="mt-5 space-y-2.5">
              {goals.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setGoal(item.title)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between ${
                    goal === item.title
                      ? 'bg-white border-[#7D5A9B] shadow-md ring-1 ring-[#7D5A9B]'
                      : 'bg-white/70 border-[#3A244E]/10 hover:bg-white hover:border-[#3A244E]/20'
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold text-[#2A1B3D]">{item.title}</p>
                    <p className="text-xs text-[#5A496E] mt-0.5">{item.desc}</p>
                  </div>
                  {goal === item.title && (
                    <div className="w-5 h-5 rounded-full bg-[#7D5A9B] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2BA6C]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Format & Slot */}
        {step === 2 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2A1B3D]">
              Choose Format & Time Slot
            </h3>
            <p className="mt-1 text-xs text-[#5A496E]">
              Times auto-adjusted to your timezone: <span className="font-bold text-[#2A1B3D]">{timezone}</span>
            </p>

            {/* Format Picker */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div
                onClick={() => setFormat('1-on-1')}
                className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                  format === '1-on-1'
                    ? 'bg-white border-[#7D5A9B] shadow-sm ring-1 ring-[#7D5A9B]'
                    : 'bg-white/70 border-[#3A244E]/10 hover:bg-white'
                }`}
              >
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#EFE8F6] text-[10px] font-bold text-[#3A244E] mb-1">
                  Most Popular
                </span>
                <p className="text-xs font-bold text-[#2A1B3D]">Private 1-on-1</p>
                <p className="text-[11px] text-[#5A496E]">Personal master attention</p>
              </div>

              <div
                onClick={() => setFormat('group')}
                className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                  format === 'group'
                    ? 'bg-white border-[#7D5A9B] shadow-sm ring-1 ring-[#7D5A9B]'
                    : 'bg-white/70 border-[#3A244E]/10 hover:bg-white'
                }`}
              >
                <span className="inline-block px-2 py-0.5 rounded-full bg-stone-100 text-[10px] font-bold text-stone-600 mb-1">
                  Max 8 Mats
                </span>
                <p className="text-xs font-bold text-[#2A1B3D]">Small Group Flow</p>
                <p className="text-[11px] text-[#5A496E]">Community harmony</p>
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="mt-4">
              <label className="text-xs font-bold text-[#2A1B3D] block mb-2">
                Select Your Available Slot:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      selectedDate === slot
                        ? 'bg-[#3A244E] text-white border-[#3A244E]'
                        : 'bg-white text-[#2A1B3D] border-stone-200 hover:border-[#7D5A9B]'
                    }`}
                  >
                    <Clock className="w-3 h-3 inline mr-1.5 opacity-70" />
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-[#5A496E] hover:text-[#2A1B3D] flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-6 py-3 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Final Step</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2BA6C]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Confirm */}
        {step === 3 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2A1B3D]">
              Where should we send your private video link?
            </h3>
            <p className="mt-1 text-xs text-[#5A496E]">
              Zero credit card required. Preparation guidelines from Yogacharya Ashish sent immediately.
            </p>

            <form onSubmit={handleCompleteBooking} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#2A1B3D] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#3A244E]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#7D5A9B] focus:ring-1 focus:ring-[#7D5A9B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A1B3D] mb-1">
                  Email Address (For Live Stream Access)
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#3A244E]/15 px-3.5 py-2.5 text-sm outline-none focus:border-[#7D5A9B] focus:ring-1 focus:ring-[#7D5A9B]"
                />
              </div>

              {/* Reservation Pill */}
              <div className="rounded-xl bg-[#EFE8F6] border border-[#7D5A9B]/20 p-3 text-xs text-[#2A1B3D] space-y-1">
                <p className="font-bold">Reservation Summary:</p>
                <p>• {format === '1-on-1' ? '1-on-1 Private Assessment' : 'Small Group Flow'}</p>
                <p>• Slot: {selectedDate} ({timezone})</p>
                <p>• Guide: {selectedTeacher || 'Yogacharya Ashish'}</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-[#5A496E] hover:text-[#2A1B3D] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#3A244E] hover:bg-[#50346B] text-white px-7 py-3 text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Securing Mat...' : 'Confirm Free Mat Reservation'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4: Success */}
        {step === 4 && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#7D5A9B]">
              Mat Reserved Successfully
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#2A1B3D] mt-1">
              You&apos;re Set, {name ? name.split(' ')[0] : 'Friend'}!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A496E] max-w-md mx-auto">
              Your private 2-way live video invitation has been sent to <span className="font-bold text-[#2A1B3D]">{email || 'your email'}</span>.
            </p>

            <div className="mt-6 rounded-2xl bg-white border border-[#3A244E]/10 p-5 text-left shadow-sm max-w-md mx-auto space-y-2">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-[#2A1B3D]">Inner Peace Live Stream #108</span>
                </div>
                <span className="text-[11px] font-bold text-[#7D5A9B] bg-[#EFE8F6] px-2 py-0.5 rounded-full">
                  Confirmed
                </span>
              </div>
              <p className="text-xs text-[#2A1B3D]"><span className="text-stone-400">Time:</span> {selectedDate} ({timezone})</p>
              <p className="text-xs text-[#2A1B3D]"><span className="text-stone-400">Guide:</span> {selectedTeacher || 'Yogacharya Ashish'}</p>
              <p className="text-xs text-[#2A1B3D]"><span className="text-stone-400">Focus:</span> {goal}</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto rounded-full bg-[#3A244E] text-white px-7 py-3 text-xs font-bold hover:bg-black transition-all cursor-pointer"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
