'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does real-time posture correction actually work via webcam?',
      a: 'When you place your laptop, tablet, or phone 6–8 feet from your mat, our master instructors observe your side profile, joint angles, and spinal alignment. Because our classes are capped at only 8 students (or 1-on-1), the instructor watches you continuously, offering precise vocal cues (“Sarah, soften your left knee,” “Michael, lengthen your lumbar spine”) so you never push into injury.',
    },
    {
      q: 'What if my apartment/living room is small or not studio-perfect?',
      a: 'You only need enough space to roll out a standard yoga mat and step back so your whole body is in frame. Our students practice from New York apartments, London flats, and hotel rooms. Teachers are accustomed to normal living spaces—we care about your spine, not your background furniture.',
    },
    {
      q: 'What equipment or props do I need to get started?',
      a: 'All you need is a yoga mat and any device with a camera (laptop, iPad, or smartphone). For restorative or therapeutic sessions, a couch pillow, a folded blanket, or a belt can easily substitute for traditional yoga bolsters and straps.',
    },
    {
      q: 'What if an unexpected client meeting or work call forces me to miss class?',
      a: 'We understand the demands of high-pressure corporate and consulting careers. You can reschedule or cancel any session up to 2 hours before start time directly through your member portal with zero penalty or loss of class credit.',
    },
    {
      q: 'Why is this superior to pre-recorded apps like Peloton or Alo Moves?',
      a: 'Pre-recorded apps are one-way entertainment. If you have tight hamstrings and tuck your pelvis in a forward fold, an app will never warn you that you are herniating a disc. InnerPeace restores the ancient guru-shishya parampara (direct teacher-to-student lineage) with modern low-latency video.',
    },
  ];

  return (
    <section className="py-24 bg-white text-[#242E25]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C97A58]">
            Clarity & Guidance
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-[#242E25]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5B4C]">
            Everything you need to know about stepping onto your live virtual mat.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 divide-y divide-[#242E25]/10 border-y border-[#242E25]/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-base sm:text-lg font-serif font-medium text-[#242E25] hover:text-[#C97A58] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8E9F8A] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#C97A58]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[#4A5B4C] leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
