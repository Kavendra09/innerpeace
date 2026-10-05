'use client';

import React, { useState } from 'react';
import InnerPeaceLogo from './InnerPeaceLogo';
import { ShieldCheck, ArrowRight, MessageCircle, Phone, Mail, Award, Lock } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1E122B] text-[#FAF8FC] pt-16 pb-12 border-t border-purple-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-purple-900/40">
          
          {/* Brand & Lineage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <InnerPeaceLogo variant="full" size="md" theme="dark" />

            <p className="text-xs sm:text-sm text-purple-200/80 max-w-sm leading-relaxed mt-3">
              Founded by Yogacharya Ashish. Bringing authentic Himalayan postural alignment, therapeutic biomechanics, and mindful breathwork directly to high-performing practitioners across the US, Canada, UK, and Europe.
            </p>

            <div className="space-y-2 pt-2 text-xs text-purple-200/70">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E5C287]" />
                <span>Yoga Alliance Registered (E-RYT 500 &amp; YACEP)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% HSA &amp; FSA Reimbursable Superbills</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-300" />
                <span>Encrypted HD 2-Way Video • HIPAA-Conscious</span>
              </div>
            </div>
          </div>

          {/* Clinical Protocols (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E5C287]">
              Specialized Yoga Programs
            </p>
            <ul className="space-y-2 text-purple-200/75">
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Back Pain, Cervical &amp; Sciatica</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Weight Loss &amp; Fat Burning</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Stress Relief &amp; Mind Relaxation</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Safe Prenatal &amp; Pregnancy Yoga</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Senior Citizen Guided Yoga</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">Meditation &amp; Pranayama Lineage</a></li>
            </ul>
          </div>

          {/* Quick Links & Platform (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E5C287]">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-purple-200/75">
              <li><a href="#our-plans" className="hover:text-white transition-colors">Our Plans (3-5 Days)</a></li>
              <li><a href="#choose-goal" className="hover:text-white transition-colors">9 Yoga Programs</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Reviews</a></li>
              <li><a href="#teachers" className="hover:text-white transition-colors">Master Faculty</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Concierge Contact & Free Guide (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#E5C287]">
                International Care Concierge
              </p>
              <div className="mt-2 space-y-1.5 text-xs text-purple-200/80">
                <a
                  href="https://wa.me/919901484500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: +91 99014 84500</span>
                </a>
                <p className="flex items-center gap-2 text-purple-200/70">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>support@innerpeaceyoga.com</span>
                </p>
                <p className="text-[11px] text-purple-300/60 pt-1">
                  Active across EST, PST, CST, MST, GMT &amp; CET
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-purple-900/40">
              <p className="text-[11px] font-bold text-[#E5C287]">
                Free Master Guide (PDF)
              </p>
              <p className="text-[11px] text-purple-200/80 leading-relaxed mt-1">
                Download Yogacharya Ashish&apos;s <span className="text-white font-medium">&ldquo;The 5-Minute Desk Spine Reset.&rdquo;</span>
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
                  <input
                    type="email"
                    required
                    placeholder="Work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl bg-purple-950/70 border border-purple-800/50 px-3 py-2 text-xs text-white placeholder-purple-300/40 outline-none focus:border-[#7D5A9B] flex-1"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-[#7D5A9B] hover:bg-[#684685] text-white px-3 py-2 text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Submit newsletter email"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
                  </button>
                </form>
              ) : (
                <p className="text-xs text-emerald-400 font-semibold mt-2">
                  ✓ Guide dispatched to your inbox!
                </p>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-purple-300/60">
          <p>© 2026 InnerPeace Live Yoga Inc. All rights reserved. Lineage of Yogacharya Ashish.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">HSA/FSA Superbill Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
