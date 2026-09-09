'use client';

import React from 'react';

interface InnerPeaceLogoProps {
  variant?: 'full' | 'icon' | 'badge';
  theme?: 'dark' | 'light' | 'purple';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function InnerPeaceLogo({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}: InnerPeaceLogoProps) {
  const isDark = theme === 'dark';
  const isPurple = theme === 'purple';

  const primaryColor = isDark
    ? '#FAF8FC'
    : isPurple
    ? '#FFFFFF'
    : '#3B2852';

  const secondaryColor = isDark
    ? '#C7B5DC'
    : isPurple
    ? '#E5DAF2'
    : '#6B5287';

  const accentColor = isPurple ? '#F6E5B8' : '#D4AF37';

  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  // The SVG Lotus + Yogi in Padmasana with raised hands & bindu
  const LogoIcon = (
    <svg
      viewBox="0 0 100 100"
      className={`${iconDimensions} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Glow / Subtle Aura */}
      <circle cx="50" cy="50" r="47" stroke={secondaryColor} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.4" />
      <circle cx="50" cy="50" r="44" stroke={secondaryColor} strokeWidth="1.5" opacity="0.7" />

      {/* The Crown Bindu / Golden Enlightenment Dot */}
      <circle cx="50" cy="19" r="3" fill={accentColor} />

      {/* Yogi Silhouette (Arms arched overhead in Anjali mudra, torso, and folded legs) */}
      {/* Head */}
      <circle cx="50" cy="27" r="4.2" fill={primaryColor} />

      {/* Arched arms overhead */}
      <path
        d="M50 21.5 C46 25, 41 33, 44 40 C46 38, 48 35, 50 33 C52 35, 54 38, 56 40 C59 33, 54 25, 50 21.5 Z"
        fill={primaryColor}
      />

      {/* Torso */}
      <path
        d="M45.5 39 C46.5 45, 47 50, 47 56 L53 56 C53 50, 53.5 45, 54.5 39 Z"
        fill={primaryColor}
      />

      {/* Folded Legs in Padmasana */}
      <path
        d="M34 60 C38 54, 46 54, 50 58 C54 54, 62 54, 66 60 C64 64, 58 64.5, 50 64 C42 64.5, 36 64, 34 60 Z"
        fill={primaryColor}
      />

      {/* Lotus Petals Base */}
      {/* Left Outer Petal */}
      <path
        d="M50 63 C40 62, 28 55, 24 44 C27 52, 38 59, 50 63 Z"
        fill={secondaryColor}
        opacity="0.85"
      />
      {/* Right Outer Petal */}
      <path
        d="M50 63 C60 62, 72 55, 76 44 C73 52, 62 59, 50 63 Z"
        fill={secondaryColor}
        opacity="0.85"
      />

      {/* Left Mid Petal */}
      <path
        d="M50 64 C43 64, 32 58, 30 50 C34 56, 42 61, 50 64 Z"
        fill={secondaryColor}
      />
      {/* Right Mid Petal */}
      <path
        d="M50 64 C57 64, 68 58, 70 50 C66 56, 58 61, 50 64 Z"
        fill={secondaryColor}
      />

      {/* Central Lotus Base Cradle */}
      <path
        d="M38 66 C44 69, 56 69, 62 66 C57 68.5, 43 68.5, 38 66 Z"
        fill={accentColor}
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{LogoIcon}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LogoIcon}
      <div className="flex flex-col text-left">
        <span
          className="font-serif text-lg sm:text-xl font-bold tracking-[0.12em] leading-tight"
          style={{ color: primaryColor }}
        >
          INNER PEACE
        </span>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span className="h-[1px] w-2.5 bg-current opacity-40" style={{ color: secondaryColor }} />
          <span
            className="text-[10px] tracking-[0.25em] font-medium uppercase"
            style={{ color: secondaryColor }}
          >
            YOGA
          </span>
          <span className="h-[1px] w-2.5 bg-current opacity-40" style={{ color: secondaryColor }} />
        </div>
        <span
          className="text-[8.5px] tracking-[0.16em] uppercase font-semibold text-[#8B6FAD] mt-0.5"
        >
          YOGACHARYA ASHISH
        </span>
      </div>
    </div>
  );
}
