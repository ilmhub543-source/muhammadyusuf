import React from 'react';
import { Calendar, CheckCircle2, Award, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface TimelineSectionProps {
  lang: Language;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const milestones = [
    {
      year: '2024',
      title: t.journey.year2024Title,
      subtitle: t.journey.year2024Subtitle,
      desc: t.journey.year2024Desc,
      icon: BookOpen,
      tags: ['Ilmhub', 'English Grammar', 'Computer Architecture', 'Logic 101'],
      isHighlight: false,
    },
    {
      year: '2025',
      title: t.journey.year2025Title,
      subtitle: t.journey.year2025Subtitle,
      desc: t.journey.year2025Desc,
      icon: Award,
      tags: ['Scratch 3.0', 'Game Physics', 'Robotics Hardware', 'HC-SR04 Sensors'],
      isHighlight: false,
    },
    {
      year: '2025 (late)',
      title: t.journey.year2025lateTitle,
      subtitle: t.journey.year2025lateSubtitle,
      desc: t.journey.year2025lateDesc,
      icon: Sparkles,
      tags: ['Android Studio', 'Mobile UX', 'Google Gemini', 'Prompt Engineering'],
      isHighlight: false,
    },
    {
      year: '2026 (Now)',
      title: t.journey.year2026Title,
      subtitle: t.journey.year2026Subtitle,
      desc: t.journey.year2026Desc,
      icon: CheckCircle2,
      tags: ['Python 3.12', 'Algorithms', 'Data Structures', 'Future Software Engineer'],
      isHighlight: true,
    },
  ];

  return (
    <section id="journey" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            06. {t.journey.sectionTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.journey.sectionSubtitle}
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-200 dark:border-slate-800 space-y-10">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                
                {/* Node Dot on Timeline Line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    item.isHighlight
                      ? 'bg-sky-500 border-white dark:border-slate-950 shadow-md ring-4 ring-sky-500/20'
                      : 'bg-slate-200 dark:bg-slate-800 border-white dark:border-slate-950'
                  }`}
                />

                {/* Milestone Content Box */}
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    item.isHighlight
                      ? 'bg-white dark:bg-slate-900 border-sky-400 dark:border-sky-600 ring-2 ring-sky-500/10 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                        {item.year}
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {item.subtitle}
                      </span>
                    </div>

                    {item.isHighlight && (
                      <span className="self-start sm:self-auto text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        FAOL BOSQICH (ACTIVE)
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Clean unboxed tags with dots */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
