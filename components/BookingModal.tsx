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
  Video,
  Home,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import InnerPeaceLogo from './InnerPeaceLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClassTitle?: string;
  selectedTeacher?: string;
  timezone: string;
  prefillName?: string;
  prefillPhone?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedClassTitle,
  selectedTeacher,
  timezone,
  prefillName = '',
  prefillPhone = '',
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [goal, setGoal] = useState<string>('Spine & Back Pain Therapy');
  const [sessionType, setSessionType] = useState<'home' | 'online'>('home');
  const [trainerPreference, setTrainerPreference] = useState<'any' | 'female' | 'male'>('any');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 07:30 AM');
  const [name, setName] = useState<string>(prefillName);
  const [phone, setPhone] = useState<string>(prefillPhone);
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsConfirmed(false);
      // Pre-fill from hero form but don't overwrite if user already typed
      if (prefillName && !name) setName(prefillName);
      if (prefillPhone && !phone) setPhone(prefillPhone);
      if (selectedClassTitle) {
        setGoal(selectedClassTitle);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selectedClassTitle, prefillName, prefillPhone]);

  if (!isOpen) return null;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

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
    { title: 'Back Pain, Cervical & Sciatica Yoga', desc: 'Relieve spine compression, disk stiffness & sciatica' },
    { title: 'Weight Loss & Fat Burning Yoga', desc: 'High metabolism, core toning & natural fat loss' },
    { title: 'Stress Relief & Mind Relaxation', desc: 'Pranayama & nervous system reset for deep sleep' },
    { title: 'Safe Prenatal & Postnatal Care', desc: 'Gentle, certified maternal movement with female instructors' },
    { title: 'Senior Citizen Mobility & Joint Yoga', desc: 'Safe guided mobility for balance, knees & joint ease' },
    { title: 'General Fitness & Flexibility Flow', desc: 'Daily functional strength, energy & full-body balance' },
  ];

  const availableSlots = [
    'Tomorrow, 07:00 AM',
    'Tomorrow, 08:30 AM',
    'Tomorrow, 10:00 AM',
    'Tomorrow, 05:30 PM',
    'Tomorrow, 07:00 PM',
    'Flexible Weekend Slot',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF8FC] p-5 sm:p-8 shadow-2xl border border-[#3A244E]/15 text-[#2A1B3D] overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#5A496E] hover:text-[#2A1B3D] hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        {!isConfirmed && (
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7D5A9B]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Step {step} of 3 • Free 1-on-1 Demo Session</span>
              </div>
              <InnerPeaceLogo variant="icon" size="sm" />
            </div>
            
            {/* Step Progress Bar */}
            <div className="mt-2 w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#4A2E68] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {/* Selected item badge if passed from parent */}
            {selectedClassTitle && (
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8F6] border border-[#7D5A9B]/20 text-[11px] font-bold text-[#4A2E68]">
                <span>✓ Selected:</span>
                <span className="truncate max-w-[280px]">{selectedClassTitle}</span>
              </div>
            )}
          </div>
        )}

        {/* STEP 1: Goal & Program Selection */}
        {step === 1 && (
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#2A1B3D]">
              What is your primary yoga goal?
            </h3>
            <p className="mt-1 text-xs text-[#5A496E]">
              We match you with a certified master trainer specialized in your exact physical needs.
            </p>

            <div className="mt-4 space-y-2">
              {goals.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setGoal(item.title)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    goal.toLowerCase().includes(item.title.toLowerCase().split(' ')[0]) || goal === item.title
                      ? 'bg-white border-[#4A2E68] shadow-sm ring-1 ring-[#4A2E68]'
                      : 'bg-white/70 border-[#3A244E]/10 hover:bg-white'
                  }`}
                >
                  <div className="pr-2">
                    <p className="text-xs sm:text-sm font-bold text-[#2A1B3D]">{item.title}</p>
                    <p className="text-[11px] text-[#5A496E]">{item.desc}</p>
                  </div>
                  {(goal.toLowerCase().includes(item.title.toLowerCase().split(' ')[0]) || goal === item.title) && (
                    <div className="w-5 h-5 rounded-full bg-[#4A2E68] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="rounded-full bg-[#4A2E68] hover:bg-[#5E3A85] text-white px-7 py-3 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Continue: Choose Location &amp; Time</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Session Format, Teacher Preference & Slot */}
        {step === 2 && (
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#2A1B3D]">
              Session Details &amp; Preferred Time
            </h3>
            <p className="mt-1 text-xs text-[#5A496E]">
              Customize where and when you want your free 1-on-1 session.
            </p>

            {/* 1. Location Format: Home Visit vs Online */}
            <div className="mt-4">
              <label className="text-xs font-bold text-[#2A1B3D] block mb-1.5">
                Preferred Mode:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSessionType('home')}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center ${
                    sessionType === 'home'
                      ? 'bg-white border-[#4A2E68] shadow-sm ring-1 ring-[#4A2E68]'
                      : 'bg-white/70 border-stone-200'
                  }`}
                >
                  <Home className={`w-5 h-5 mb-1 ${sessionType === 'home' ? 'text-[#4A2E68]' : 'text-stone-400'}`} />
                  <span className="text-xs font-bold text-[#2A1B3D]">Home Yoga</span>
                  <span className="text-[10px] text-[#7D5A9B] font-semibold">At Your Doorstep</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('online')}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center ${
                    sessionType === 'online'
                      ? 'bg-white border-[#4A2E68] shadow-sm ring-1 ring-[#4A2E68]'
                      : 'bg-white/70 border-stone-200'
                  }`}
                >
                  <Video className={`w-5 h-5 mb-1 ${sessionType === 'online' ? 'text-[#4A2E68]' : 'text-stone-400'}`} />
                  <span className="text-xs font-bold text-[#2A1B3D]">Online 1-on-1</span>
                  <span className="text-[10px] text-[#7D5A9B] font-semibold">Live 2-Way HD Video</span>
                </button>
              </div>
            </div>

            {/* 2. Teacher Gender Preference (Major Value Prop) */}
            <div className="mt-4">
              <label className="text-xs font-bold text-[#2A1B3D] block mb-0.5">
                Your Comfort Preference:
              </label>
              <p className="text-[11px] text-[#5A496E] mb-2">
                We respect and honor your choice — male or female trainers assigned with zero friction.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'any', label: 'Any Certified Master' },
                  { id: 'female', label: 'Female Teacher' },
                  { id: 'male', label: 'Male Teacher' },
                ].map((pref) => (
                  <button
                    key={pref.id}
                    type="button"
                    onClick={() => setTrainerPreference(pref.id as any)}
                    className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer text-center ${
                      trainerPreference === pref.id
                        ? 'bg-[#4A2E68] text-white border-[#4A2E68]'
                        : 'bg-white text-[#5A496E] border-stone-200 hover:border-[#4A2E68]'
                    }`}
                  >
                    {pref.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Slot Picker */}
            <div className="mt-4">
              <label className="text-xs font-bold text-[#2A1B3D] block mb-1.5">
                Select Convenient Slot:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`p-2 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      selectedDate === slot
                        ? 'bg-[#4A2E68] text-white border-[#4A2E68]'
                        : 'bg-white text-[#2A1B3D] border-stone-200'
                    }`}
                  >
                    <Clock className="w-3 h-3 inline mr-1 opacity-70" />
                    <span className="text-[11px]">{slot}</span>
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
                className="rounded-full bg-[#4A2E68] hover:bg-[#5E3A85] text-white px-7 py-3 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Next: Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Instant Confirmation */}
        {step === 3 && (
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#2A1B3D]">
              Confirm Your Free Demo Class
            </h3>
            <p className="mt-1 text-xs text-[#5A496E]">
              Zero cost • No credit card needed • Instant confirmation via WhatsApp &amp; Call.
            </p>

            <form onSubmit={handleCompleteBooking} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#2A1B3D] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#3A244E]/20 px-3.5 py-2.5 text-sm outline-none focus:border-[#4A2E68] focus:ring-1 focus:ring-[#4A2E68]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A1B3D] mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#3A244E]/20 px-3.5 py-2.5 text-sm outline-none focus:border-[#4A2E68] focus:ring-1 focus:ring-[#4A2E68]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2A1B3D] mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white border border-[#3A244E]/20 px-3.5 py-2.5 text-sm outline-none focus:border-[#4A2E68] focus:ring-1 focus:ring-[#4A2E68]"
                />
              </div>

              {/* Reservation Summary Box */}
              <div className="rounded-xl bg-[#EFE8F6] border border-[#7D5A9B]/20 p-3 text-xs text-[#2A1B3D] space-y-1">
                <p className="font-bold flex items-center justify-between">
                  <span>Summary:</span>
                  <span className="text-emerald-700 font-bold">100% Free Demo</span>
                </p>
                <p>• Mode: {sessionType === 'home' ? 'Home Yoga (Doorstep)' : 'Online HD 2-Way'}</p>
                <p>• Instructor: {selectedTeacher || (trainerPreference === 'female' ? 'Female Master' : trainerPreference === 'male' ? 'Male Master' : 'Yogacharya Ashish / Senior Faculty')}</p>
                <p>• Timing: {selectedDate}</p>
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
                  className="rounded-full bg-[#4A2E68] hover:bg-[#5E3A85] text-white px-7 py-3 text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? 'Securing Slot...' : 'Confirm Free 1-on-1 Class'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4: Success Confirmation */}
        {step === 4 && (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#7D5A9B]">
              Slot Reserved Successfully!
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2A1B3D] mt-1">
              Namaste, {name ? name.split(' ')[0] : 'Friend'}!
            </h3>
            <p className="mt-1 text-xs text-[#5A496E] max-w-sm mx-auto">
              Our yoga coordinator is confirming your slot and teacher allocation for <strong className="text-[#2A1B3D]">{phone}</strong>.
            </p>

            <div className="mt-5 rounded-2xl bg-white border border-[#3A244E]/10 p-4 text-left shadow-xs max-w-sm mx-auto space-y-1.5 text-xs text-[#2A1B3D]">
              <p><span className="text-stone-400">Class:</span> Free 1-on-1 Diagnostic Demo</p>
              <p><span className="text-stone-400">Instructor:</span> {selectedTeacher || 'Yogacharya Ashish / Faculty'}</p>
              <p><span className="text-stone-400">Focus:</span> {goal}</p>
              <p><span className="text-stone-400">Mode:</span> {sessionType === 'home' ? 'Home Doorstep Session' : 'Online HD Session'}</p>
              <p><span className="text-stone-400">Time:</span> {selectedDate}</p>
            </div>

            {/* Direct WhatsApp Instant Connect Button */}
            <div className="mt-5 space-y-2 max-w-sm mx-auto">
              <a
                href={`https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20just%20booked%20a%20free%20demo%20session%20for%20${encodeURIComponent(name)}%20(${encodeURIComponent(phone)}).%20Please%20confirm%20my%20slot!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Chat on WhatsApp for Instant Confirmation</span>
              </a>

              <button
                onClick={onClose}
                className="w-full rounded-full bg-stone-100 hover:bg-stone-200 text-[#2A1B3D] py-2.5 px-4 text-xs font-bold transition-all cursor-pointer"
              >
                Done &amp; Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
