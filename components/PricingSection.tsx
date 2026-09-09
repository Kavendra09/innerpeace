'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'Discovery Trial',
      tagline: 'Experience live 2-way correction risk-free',
      price: '$0',
      period: 'first session',
      popular: false,
      ctaText: 'Claim Your Free Class',
      features: [
        '1x 45-min Live 1-on-1 with Yogacharya Ashish or Senior Master',
        'Webcam Posture & Biomechanical Assessment',
        'Personalized alignment correction report',
        'Zero credit card required to book',
        'Compatible with US, UK, and European timezones',
      ],
    },
    {
      name: 'Small Group Membership',
      tagline: 'Boutique studio quality at half the price',
      price: billingCycle === 'annual' ? '$59' : '$69',
      period: 'per month',
      popular: true,
      ctaText: 'Start 14-Day Free Trial',
      badge: 'Most Popular',
      features: [
        'Unlimited live sessions (Max 8 students per room)',
        'Real-time posture and breathing feedback',
        'Access to all styles: Pranayama, Spine Therapy, Hatha Flow, Yin',
        'Personal alignment notes saved in your member portal',
        'HD 2-way video & crystal-clear audio',
        'Pause or cancel anytime in 1 click',
      ],
    },
    {
      name: 'Private 1-on-1 Concierge',
      tagline: 'The ultimate bespoke wellness mentorship',
      price: billingCycle === 'annual' ? '$159' : '$189',
      period: 'per month',
      popular: false,
      ctaText: 'Apply For Concierge',
      features: [
        '4x 60-min dedicated private 1-on-1 sessions with Yogacharya Ashish',
        'Everything in Small Group Membership included',
        'Direct WhatsApp/Slack access to Yogacharya Ashish',
        'Custom biomechanical injury rehab & posture roadmap',
        'Flexible priority booking across all global timezones',
        'Guest pass for a partner or family member',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF8FC] text-[#2A1B3D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7D5A9B]">
            Transparent Investment In Your Longevity
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2A1B3D]">
            Less than the cost of a single local private lesson.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A496E] leading-relaxed">
            Local studios charge $150 to $200 for a single private class. Inner Peace provides direct master instruction at home with no commute friction.
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
                      <Check className="w-4 h-4 text-[#7D5A9B] flex-shrink-0 mt-0.5" />
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
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2BA6C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Satisfaction Guarantee Callout */}
        <div className="mt-16 mx-auto max-w-2xl rounded-2xl bg-white border border-[#3A244E]/10 p-6 flex items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#EFE8F6] flex items-center justify-center text-[#7D5A9B] flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#2A1B3D]">
              30-Day &ldquo;Feel The Alignment Shift&rdquo; Guarantee
            </h4>
            <p className="mt-1 text-xs text-[#5A496E] leading-relaxed">
              If you don&apos;t feel noticeably more grounded, flexible, and restored within your first 30 days, message us for an immediate 100% refund.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
