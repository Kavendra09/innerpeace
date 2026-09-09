'use client';

import React, { useState } from 'react';
import InnerPeaceLogo from './InnerPeaceLogo';
import { ShieldCheck, ArrowRight } from 'lucide-react';

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
    <footer className="bg-[#1E122B] text-[#FAF8FC] pt-16 pb-12 border-t border-purple-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-purple-900/40">
          
          {/* Brand & Lineage (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <InnerPeaceLogo variant="full" size="md" theme="dark" />

            <p className="text-xs sm:text-sm text-purple-200/80 max-w-sm leading-relaxed mt-3">
              Founded by Yogacharya Ashish. Dedicated to bringing authentic Himalayan alignment, mindful breathwork, and deep spiritual peace into modern homes worldwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-purple-200/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Yoga Alliance Accredited (E-RYT 500 & YACEP)</span>
            </div>
          </div>

          {/* Practice Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E2BA6C]">
              Practice
            </p>
            <ul className="space-y-2 text-purple-200/70">
              <li><a href="#why-live" className="hover:text-white transition-colors">Why 2-Way Live?</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">The 4 Pillars</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Live Schedule</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Yogacharya Ashish</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Memberships</a></li>
            </ul>
          </div>

          {/* Global Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E2BA6C]">
              Worldwide Hubs
            </p>
            <ul className="space-y-1.5 text-purple-200/70">
              <li>London (GMT)</li>
              <li>New York (EST)</li>
              <li>Zurich / Berlin (CET)</li>
              <li>San Francisco (PST)</li>
              <li className="pt-2 text-purple-300/60 text-[11px]">Rishikesh Gurukul Sanctuary</li>
            </ul>
          </div>

          {/* Complimentary Guide (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E2BA6C]">
              Complimentary Guide
            </p>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              Download Yogacharya Ashish&apos;s illustrated PDF: <span className="text-white font-semibold">&ldquo;The 5-Minute Desk Spine Reset.&rdquo;</span>
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl bg-purple-950/70 border border-purple-800/50 px-3 py-2 text-xs text-white placeholder-purple-300/40 outline-none focus:border-[#7D5A9B] flex-1"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#7D5A9B] hover:bg-[#684685] text-white px-3 py-2 text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Submit newsletter email"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2BA6C]" />
                </button>
              </form>
            ) : (
              <p className="text-xs text-emerald-400 font-semibold">
                ✓ Guide dispatched to your inbox!
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-4">
          <p>© {new Date().getFullYear()} Inner Peace Yoga by Yogacharya Ashish. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Practice</a>
            <a href="#" className="hover:text-white">Lineage Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
