'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import ComparisonSection from '@/components/ComparisonSection';
import MasterSpotlight from '@/components/MasterSpotlight';
import UseCasesSection from '@/components/UseCasesSection';
import InteractiveClassDemo from '@/components/InteractiveClassDemo';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

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

  const handleSelectClass = (title: string, _time: string, teacher: string) => {
    setSelectedClassTitle(title);
    setSelectedTeacher(teacher);
    setIsBookingOpen(true);
  };

  const handleSelectTier = (_tierName: string) => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FC]">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        timezone={timezone}
        setTimezone={setTimezone}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Find Your Inner Peace Through Yoga • Move • Breathe • Be) */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 2. The 4 Sacred Pillars (Balance, Strength, Flexibility, Mindfulness) + 4 Modalities */}
        <PillarsSection onOpenBooking={handleOpenBooking} />

        {/* 3. Founder & Master Spotlight: Yogacharya Ashish */}
        <MasterSpotlight onOpenBooking={handleOpenBooking} />

        {/* 4. Why Inner Peace Live? Comparison Matrix vs Studios vs Apps */}
        <ComparisonSection onOpenBooking={handleOpenBooking} />

        {/* 5. Physiological Goals (Posture, Athletic Recovery, Vagus Nerve) */}
        <UseCasesSection onOpenBooking={handleOpenBooking} />

        {/* 6. Interactive Live Posture Alignment Demo */}
        <InteractiveClassDemo onOpenBooking={handleOpenBooking} />

        {/* 7. Live Schedule with Timezone Selector (EST, GMT, CET, PST) */}
        <ScheduleSection
          onSelectClass={handleSelectClass}
          timezone={timezone}
          setTimezone={setTimezone}
        />

        {/* 8. Transparent Memberships & 30-Day Guarantee */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Multi-Step Booking Modal */}
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
