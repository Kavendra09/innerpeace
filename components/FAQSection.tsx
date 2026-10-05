'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I get to choose between a male or female personal yoga teacher?',
      a: 'Yes, absolutely. We have highly qualified and certified male and female yoga masters available. You can specify your preference when booking your free demo session or messaging us on WhatsApp, and we will match you accordingly.',
    },
    {
      q: 'Is the first 1-on-1 demo session completely free?',
      a: 'Yes, 100% free! There is zero credit card required to book your demo. It includes a 45-minute personal posture diagnostic, gentle introductory practice, and personalized routine recommendation from our senior master trainer.',
    },
    {
      q: 'How do the 1-on-1 home sessions and online sessions work?',
      a: 'For home sessions, our certified personal yoga trainer visits your doorstep at your selected morning or evening hour with personalized attention. For online sessions, you join a direct 2-way HD video call where the trainer continuously observes your angles and corrects your posture in real time.',
    },
    {
      q: 'Can I choose my own timing and change it if my schedule varies?',
      a: 'Yes! All our 3-day, 4-day, and 5-day weekly plans are designed for busy professionals and families. You have complete flexibility to schedule morning or evening slots and can reschedule easily via direct WhatsApp coordination with your trainer.',
    },
    {
      q: 'I suffer from severe back pain / slip disc / cervical stiffness. Is it safe?',
      a: 'Yes. Our trainers are certified in therapeutic alignment and clinical yoga. We conduct an initial health assessment and eliminate any risky poses, focusing on gentle spinal traction, lumbar relief, and core strengthening that actively relieves pain.',
    },
    {
      q: 'What is included in the monthly plans?',
      a: 'Every plan includes dedicated one-to-one sessions (12, 16, or 20 classes per month depending on your chosen frequency), customized diet/lifestyle tips, flexible scheduling, and ongoing progress tracking.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2A1B3D]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A496E]">
            Quick clarity to help you book your first session with complete confidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 divide-y divide-[#3A244E]/10 border-y border-[#3A244E]/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-base sm:text-lg font-serif font-bold text-[#2A1B3D] hover:text-[#7D5A9B] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B6FAD] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#4A2E68]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#5A496E] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Fast Action WhatsApp Banner */}
        <div className="mt-12 rounded-2xl bg-[#FAF8FC] border border-[#3A244E]/15 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#2A1B3D]">
              Have a specific question about your location or timing?
            </h4>
            <p className="text-xs text-[#5A496E] mt-0.5">
              Talk directly with our senior yoga coordinator on WhatsApp for immediate support.
            </p>
          </div>

          <a
            href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20have%20a%20question%20about%20your%20home%20yoga%20plans"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-bold shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
