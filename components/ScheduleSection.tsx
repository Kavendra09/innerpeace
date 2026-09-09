'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Clock, 
  Users, 
  ChevronRight, 
  Globe,
  Sparkles
} from 'lucide-react';

interface ScheduleSectionProps {
  onSelectClass: (className: string, time: string, teacher: string) => void;
  timezone: string;
  setTimezone: (tz: string) => void;
}

interface ClassItem {
  id: string;
  title: string;
  style: 'Spine Therapy' | 'Hatha Flow' | 'Pranayama' | 'Restorative Yin';
  level: 'All Levels' | 'Intermediate' | 'Therapeutic';
  duration: '45 min' | '60 min';
  spotsLeft: number;
  teacher: {
    name: string;
    avatar: string;
    lineage: string;
  };
  timeMap: {
    'America/New_York': string;
    'Europe/London': string;
    'Europe/Paris': string;
    'America/Los_Angeles': string;
  };
}

const scheduleData: ClassItem[] = [
  {
    id: '1',
    title: 'Himalayan Morning Pranayama & Spine Awakening',
    style: 'Pranayama',
    level: 'All Levels',
    duration: '45 min',
    spotsLeft: 2,
    teacher: {
      name: 'Yogacharya Ashish',
      avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop&crop=faces&q=80',
      lineage: 'Founder • Traditional Gurukul Lineage',
    },
    timeMap: {
      'America/New_York': '07:00 AM EST',
      'Europe/London': '12:00 PM GMT',
      'Europe/Paris': '01:00 PM CET',
      'America/Los_Angeles': '04:00 AM PST',
    },
  },
  {
    id: '2',
    title: 'Biomechanical Posture & Pelvic Alignment',
    style: 'Spine Therapy',
    level: 'Therapeutic',
    duration: '60 min',
    spotsLeft: 3,
    teacher: {
      name: 'Maya Chen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80',
      lineage: 'E-RYT 500 • Iyengar Alignment',
    },
    timeMap: {
      'America/New_York': '09:00 AM EST',
      'Europe/London': '02:00 PM GMT',
      'Europe/Paris': '03:00 PM CET',
      'America/Los_Angeles': '06:00 AM PST',
    },
  },
  {
    id: '3',
    title: 'Vagus Nerve Reset & Deep Somatic Yin',
    style: 'Restorative Yin',
    level: 'All Levels',
    duration: '60 min',
    spotsLeft: 1,
    teacher: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&q=80',
      lineage: 'M.Sc. Kinesiology • Somatic Master',
    },
    timeMap: {
      'America/New_York': '12:30 PM EST',
      'Europe/London': '05:30 PM GMT',
      'Europe/Paris': '06:30 PM CET',
      'America/Los_Angeles': '09:30 AM PST',
    },
  },
  {
    id: '4',
    title: 'Dynamic Ashtanga Flow for Mental Fortitude',
    style: 'Hatha Flow',
    level: 'Intermediate',
    duration: '60 min',
    spotsLeft: 4,
    teacher: {
      name: 'Yogacharya Ashish',
      avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop&crop=faces&q=80',
      lineage: 'Founder • Traditional Gurukul Lineage',
    },
    timeMap: {
      'America/New_York': '03:00 PM EST',
      'Europe/London': '08:00 PM GMT',
      'Europe/Paris': '09:00 PM CET',
      'America/Los_Angeles': '12:00 PM PST',
    },
  },
  {
    id: '5',
    title: 'Evening Deep Release: Hip & Lumbar Traction',
    style: 'Restorative Yin',
    level: 'All Levels',
    duration: '45 min',
    spotsLeft: 2,
    teacher: {
      name: 'Maya Chen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80',
      lineage: 'E-RYT 500 • Iyengar Alignment',
    },
    timeMap: {
      'America/New_York': '06:30 PM EST',
      'Europe/London': '11:30 PM GMT',
      'Europe/Paris': '12:30 AM CET',
      'America/Los_Angeles': '03:30 PM PST',
    },
  },
];

export default function ScheduleSection({ onSelectClass, timezone, setTimezone }: ScheduleSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Pranayama', 'Spine Therapy', 'Hatha Flow', 'Restorative Yin'];

  const filteredClasses = scheduleData.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.style === selectedFilter;
  });

  const getDisplayTime = (item: ClassItem) => {
    return item.timeMap[timezone as keyof typeof item.timeMap] || item.timeMap['America/New_York'];
  };

  return (
    <section id="schedule" className="py-24 bg-[#FAF8FC] text-[#2A1B3D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#3A244E]/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7D5A9B] mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Today&apos;s Live Broadcasts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2A1B3D]">
              Intimate Live Classes, Capped at 8 Mats.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5A496E] max-w-xl">
              Never get lost in a crowd. Every student gets active vocal feedback and alignment attention.
            </p>
          </div>

          {/* Timezone Switcher */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-[#3A244E]/10 shadow-sm self-start md:self-auto">
            <Globe className="w-4 h-4 text-[#7D5A9B]" />
            <div className="text-xs">
              <p className="text-stone-400 font-medium">Displaying In:</p>
              <select
                aria-label="Filter schedule timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="bg-transparent font-bold text-[#2A1B3D] outline-none cursor-pointer"
              >
                <option value="America/New_York">New York (EST)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris/Berlin (CET)</option>
                <option value="America/Los_Angeles">San Francisco (PST)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#3A244E] text-white shadow-sm'
                  : 'bg-white/80 text-[#5A496E] hover:bg-white border border-[#3A244E]/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Class Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((item) => {
            const timeString = getDisplayTime(item);
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 border border-[#3A244E]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Time & Spots Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A1B3D] bg-[#FAF8FC] px-3 py-1.5 rounded-full border border-[#3A244E]/10">
                      <Clock className="w-3.5 h-3.5 text-[#7D5A9B]" />
                      <span>{timeString}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <Users className="w-3 h-3" />
                      <span>Only {item.spotsLeft} spots left</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#2A1B3D] group-hover:text-[#7D5A9B] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Meta Badges */}
                  <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-[#5A496E]">
                    <span className="px-2.5 py-1 rounded-lg bg-stone-100 font-medium">
                      {item.level}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-stone-100 font-medium">
                      {item.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#EFE8F6] text-[#3A244E] font-semibold">
                      {item.style}
                    </span>
                  </div>

                  {/* Teacher Information */}
                  <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-stone-200">
                      <Image
                        src={item.teacher.avatar}
                        alt={item.teacher.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2A1B3D]">{item.teacher.name}</p>
                      <p className="text-[11px] text-[#5A496E] line-clamp-1">{item.teacher.lineage}</p>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4">
                  <button
                    onClick={() => onSelectClass(item.title, timeString, item.teacher.name)}
                    className="w-full rounded-2xl bg-[#FAF8FC] hover:bg-[#3A244E] text-[#2A1B3D] hover:text-white font-semibold text-xs py-3 px-4 border border-[#3A244E]/10 hover:border-[#3A244E] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Free Mat (Live)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Bottom Link */}
        <div className="mt-12 text-center text-xs text-[#5A496E]">
          Need a specific morning or evening slot?{' '}
          <button 
            onClick={() => onSelectClass('Custom 1-on-1 Consultation', 'Flexible Time', 'Yogacharya Ashish')}
            className="text-[#7D5A9B] font-bold underline underline-offset-4 hover:text-[#3A244E] cursor-pointer"
          >
            Request a private session slot with Yogacharya Ashish →
          </button>
        </div>

      </div>
    </section>
  );
}
