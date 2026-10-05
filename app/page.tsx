'use client';

import React, { useState } from 'react';
import TrustMarquee from '@/components/TrustMarquee';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccreditationStrip from '@/components/AccreditationStrip';
import InteractiveClassDemo from '@/components/InteractiveClassDemo';
import OurPlansSection from '@/components/OurPlansSection';
import ChooseYourGoalSection from '@/components/ChooseYourGoalSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TransformationTimeline from '@/components/TransformationTimeline';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MasterSpotlight from '@/components/MasterSpotlight';
import TeacherRoster from '@/components/TeacherRoster';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ConversionCtaBanner from '@/components/ConversionCtaBanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClassTitle, setSelectedClassTitle] = useState<string | undefined>();
  const [selectedTeacher, setSelectedTeacher] = useState<string | undefined>();
  const [timezone, setTimezone] = useState<string>('America/New_York');

  // Lifted from HeroSection so BookingModal can pre-fill name & phone
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');

  const handleOpenBooking = () => {
    setSelectedClassTitle(undefined);
    setSelectedTeacher(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectGoal = (goalTitle: string) => {
    setSelectedClassTitle(`Yoga Protocol: ${goalTitle}`);
    setSelectedTeacher(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedClassTitle(`Plan Selection: ${planName}`);
    setSelectedTeacher(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectTeacher = (teacherName: string) => {
    setSelectedClassTitle(`Private 1-on-1 Session with ${teacherName}`);
    setSelectedTeacher(teacherName);
    setIsBookingOpen(true);
  };

  const handleSelectClass = (className: string, time: string, teacher: string) => {
    setSelectedClassTitle(`${className} — ${time}`);
    setSelectedTeacher(teacher);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FC]">
      {/* 0. Top Announcement & Trust Marquee */}
      <TrustMarquee />

      {/* 1. Global Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        timezone={timezone}
        setTimezone={setTimezone}
      />

      {/* Main High-Converting Ads Landing Page Funnel */}
      <main className="flex-1">
        {/* 2. Hero Section — with lifted name/phone state for modal pre-fill */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onLeadCapture={(name, phone, goal) => {
            setHeroName(name);
            setHeroPhone(phone);
            if (goal) setSelectedClassTitle(`Yoga Protocol: ${goal}`);
          }}
        />

        {/* 3. Accreditations & Trust Badges Strip */}
        <AccreditationStrip />

        {/* 4. Interactive Class Demo — builds trust before pricing */}
        <InteractiveClassDemo onOpenBooking={handleOpenBooking} />

        {/* 5. OUR PLANS (3 Days / 4 Days / 5 Days) */}
        <OurPlansSection
          onSelectPlan={handleSelectPlan}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. CHOOSE YOUR GOAL (9 Specialized Programs) */}
        <ChooseYourGoalSection
          onOpenBooking={handleOpenBooking}
          onSelectGoal={handleSelectGoal}
        />

        {/* 7. HOW IT WORKS (3-Step Experience) */}
        <HowItWorksSection onOpenBooking={handleOpenBooking} />

        {/* 8. 90-DAY TRANSFORMATION TIMELINE (Measurable Health Trajectory) */}
        <TransformationTimeline onOpenBooking={handleOpenBooking} />

        {/* 9. COMPARISON TABLE — InnerPeace vs Apps vs Studios */}
        <ComparisonSection onOpenBooking={handleOpenBooking} />

        {/* 9. REVIEWS & RATINGS (4.98★ Google & Meta Proof) */}
        <TestimonialsSection onOpenBooking={handleOpenBooking} />

        {/* 10. FOUNDER SPOTLIGHT — Yogacharya Ashish deep-trust section */}
        <MasterSpotlight onOpenBooking={handleOpenBooking} />

        {/* 11. CERTIFIED MASTER FACULTY */}
        <TeacherRoster onSelectTeacher={handleSelectTeacher} />

        {/* 12. LIVE SCHEDULE — class slots with timezone & urgency */}
        <ScheduleSection
          onSelectClass={handleSelectClass}
          timezone={timezone}
          setTimezone={setTimezone}
        />

        {/* 13. TRANSPARENT PRICING (Free / $59 Group / $159 Concierge) */}
        <PricingSection onSelectTier={handleSelectPlan} />

        {/* 14. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 15. FINAL HIGH-CONVERTING CLOSING CTA */}
        <ConversionCtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* 16. Comprehensive Clean Footer */}
      <Footer />

      {/* 17. Floating Action Controls (Call, WhatsApp, Scroll-to-Top) */}
      <FloatingContactButtons onOpenBooking={handleOpenBooking} />

      {/* 18. Mobile Sticky Bottom CTA Bar — only visible on small screens */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[#3A244E]/15 shadow-2xl shadow-[#3A244E]/20 flex items-stretch">
        <a
          href="tel:+919368871615"
          aria-label="Call us now"
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 text-[#1B7086] hover:bg-stone-50 transition-colors border-r border-stone-100"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
        </a>
        <a
          href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20would%20like%20to%20book%20a%20free%20demo%20session"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 text-[#25D366] hover:bg-stone-50 transition-colors border-r border-stone-100"
        >
          <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
          <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
        </a>
        <button
          onClick={handleOpenBooking}
          className="flex-[2] flex items-center justify-center gap-2 py-2.5 bg-[#4A2E68] hover:bg-[#5E3A85] text-white transition-colors cursor-pointer"
        >
          <span className="text-xs font-extrabold tracking-wide">Book Free Class</span>
          <ArrowRight className="w-4 h-4 text-[#E5C287]" />
        </button>
      </div>

      {/* Extra bottom padding on mobile so sticky bar doesn't overlap content */}
      <div className="h-14 md:hidden" aria-hidden="true" />

      {/* 19. Interactive 1-on-1 Demo Booking Modal — pre-filled from Hero */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedClassTitle={selectedClassTitle}
        selectedTeacher={selectedTeacher}
        timezone={timezone}
        prefillName={heroName}
        prefillPhone={heroPhone}
      />
    </div>
  );
}
