'use client';

import React, { useState } from 'react';
import TrustMarquee from '@/components/TrustMarquee';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccreditationStrip from '@/components/AccreditationStrip';
import OurPlansSection from '@/components/OurPlansSection';
import ChooseYourGoalSection from '@/components/ChooseYourGoalSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeacherRoster from '@/components/TeacherRoster';
import FAQSection from '@/components/FAQSection';
import ConversionCtaBanner from '@/components/ConversionCtaBanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingContactButtons from '@/components/FloatingContactButtons';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClassTitle, setSelectedClassTitle] = useState<string | undefined>();
  const [selectedTeacher, setSelectedTeacher] = useState<string | undefined>();
  const [timezone, setTimezone] = useState<string>('America/New_York');

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
        {/* 2. Hero Section (Lead Capture Form + Trust Card + Core Value Proposition) */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. Accreditations & Trust Badges Strip */}
        <AccreditationStrip />

        {/* 4. OUR PLANS (3 Days / 4 Days / 5 Days - Flexible Plans, 12/16/20 Classes) */}
        <OurPlansSection
          onSelectPlan={handleSelectPlan}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. CHOOSE YOUR GOAL (9 Target Programs: Back Pain, Weight Loss, Stress, Prenatal, Senior, etc.) */}
        <ChooseYourGoalSection
          onOpenBooking={handleOpenBooking}
          onSelectGoal={handleSelectGoal}
        />

        {/* 6. HOW IT WORKS (3 Effortless Steps to Start) */}
        <HowItWorksSection onOpenBooking={handleOpenBooking} />

        {/* 7. REVIEWS & RATINGS (4.98/5 Stars Google & Meta Proof + Verified Transformations) */}
        <TestimonialsSection onOpenBooking={handleOpenBooking} />

        {/* 8. CERTIFIED MASTER FACULTY (Experienced Male & Female Teachers) */}
        <TeacherRoster onSelectTeacher={handleSelectTeacher} />

        {/* 9. FREQUENTLY ASKED QUESTIONS (Objection Clearing: Trainer Gender, Timings, Free Demo) */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 10. FINAL HIGH-CONVERTING CLOSING CTA */}
        <ConversionCtaBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* 11. Comprehensive Clean Footer */}
      <Footer />

      {/* 12. Floating Action Controls (Call Now, WhatsApp Chat, Scroll-to-Top) */}
      <FloatingContactButtons onOpenBooking={handleOpenBooking} />

      {/* 13. Interactive 1-on-1 Demo Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedClassTitle={selectedClassTitle}
        selectedTeacher={selectedTeacher}
        timezone={timezone}
      />
    </div>
  );
}
