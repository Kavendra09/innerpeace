'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, CreditCard, HeartHandshake } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'Discovery Diagnostic Trial',
      tagline: 'Experience live 2-way correction 100% risk-free',
      price: '$0',
      period: 'first 1-on-1 session',
      popular: false,
      ctaText: 'Claim Free Diagnostic Class',
      badge: 'Zero Risk',
      features: [
        '1x 45-min Live 1-on-1 with Yogacharya Ashish or Senior Master',
        'Real-time webcam posture & biomechanical spinal assessment',
        'Personalized alignment correction report & injury notes',
        'Zero credit card required to book',
        'Flexible times across EST, PST, CST, MST, and GMT',
      ],
    },
    {
      name: 'Small Group Membership',
      tagline: 'Intimate boutique studio depth with zero commute',
      price: billingCycle === 'annual' ? '$59' : '$69',
      period: 'per month',
      popular: true,
      ctaText: 'Start 14-Day Trial',
      badge: 'Most Popular for US & Canada',
      features: [
        'Unlimited live sessions (Strictly capped at 8 students per room)',
        'Real-time posture and breathing feedback from live masters',
        'Access to all therapeutic styles: Spine Therapy, Pranayama, Yin',
        'Personal alignment notes saved in your member portal',
        'HD 2-way video with optional dual-angle view',
        '100% HSA/FSA eligible receipt provided monthly',
        'Pause or cancel anytime with 1 click',
      ],
    },
    {
      name: 'Private 1-on-1 Concierge',
      tagline: 'The ultimate bespoke master mentorship',
      price: billingCycle === 'annual' ? '$159' : '$189',
      period: 'per month',
      popular: false,
      ctaText: 'Apply For Concierge',
      badge: 'Executive Level',
      features: [
        '4x 60-min dedicated private 1-on-1 sessions with Yogacharya Ashish',
        'Everything in Small Group Membership included',
        'Direct WhatsApp concierge access to your lead master',
        'Bespoke biomechanical rehab & posture protocol',
        'Priority booking across all global timezones',
        'Itemized insurance superbill for maximum HSA/FSA reimbursement',
        'Complimentary guest pass for spouse or partner',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF8FC] text-[#2A1B3D] border-t border-[#3A244E]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE8F6] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7D5A9B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent Global Investment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            World-class master instruction for less than a single boutique studio class.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            New York, London, and San Francisco studios charge $150–$250 for a single private session. InnerPeace connects you with authentic Himalayan Yogacharyas with zero commute friction.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white border border-[#3A244E]/10 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#3A244E] text-white shadow-sm'
                  : 'text-[#5A496E] hover:text-[#2A1B3D]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#3A244E] text-white shadow-sm'
                  : 'text-[#5A496E] hover:text-[#2A1B3D]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#EFE8F6] text-[#3A244E] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? 'bg-white border-2 border-[#7D5A9B] shadow-2xl scale-105 z-10'
                  : 'bg-white border border-[#3A244E]/10 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7D5A9B] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2A1B3D]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-xs text-[#5A496E] min-h-[32px]">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 pb-6 border-b border-stone-100 flex items-baseline gap-1.5">
                  <span className="font-serif text-5xl font-bold text-[#2A1B3D]">
                    {tier.price}
                  </span>
                  <span className="text-xs font-medium text-[#5A496E]">
                    /{tier.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3.5 text-xs text-[#2A1B3D]/90">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#7D5A9B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full rounded-full py-3.5 px-6 text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-[#3A244E] text-white hover:bg-[#50346B] shadow-[#3A244E]/25'
                      : 'bg-[#FAF8FC] text-[#2A1B3D] hover:bg-[#3A244E] hover:text-white border border-[#3A244E]/10'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C287]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* HSA/FSA and 30-Day Guarantee Dual Trust Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HSA / FSA Card Trust */}
          <div className="rounded-2xl bg-white border border-[#3A244E]/10 p-6 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE8F6] flex items-center justify-center text-[#7D5A9B] shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[#2A1B3D]">
                  HSA &amp; FSA Eligible Receipts
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  US &amp; Canada
                </span>
              </div>
              <p className="mt-1 text-xs text-[#5A496E] leading-relaxed">
                Many US and Canadian employer health plans cover yoga therapy for chronic pain, posture, or mental wellness. We issue itemized superbills with NPI codes for seamless reimbursement.
              </p>
            </div>
          </div>

          {/* 30-Day Money Back Guarantee */}
          <div className="rounded-2xl bg-white border border-[#3A244E]/10 p-6 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#EFE8F6] flex items-center justify-center text-[#7D5A9B] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2A1B3D]">
                30-Day &ldquo;Feel The Alignment Shift&rdquo; Guarantee
              </h4>
              <p className="mt-1 text-xs text-[#5A496E] leading-relaxed">
                If you don&apos;t feel noticeably more grounded, flexible, and restored within your first 30 days of practice, message us on{' '}
                <a
                  href="https://wa.me/919368871615?text=Hello%20InnerPeace%20team,%20I%20have%20a%20question%20about%20your%20guarantee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 underline"
                >
                  WhatsApp
                </a>{' '}
                or email for an immediate 100% refund.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
