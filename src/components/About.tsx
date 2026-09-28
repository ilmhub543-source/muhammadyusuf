import React from 'react';
import { School, Award, Target, Instagram, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            01. {t.about.sectionTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.about.sectionSubtitle}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              {t.about.storyParagraph1}
            </p>
            <p>
              {t.about.storyParagraph2}
            </p>
            <p>
              {t.about.storyParagraph3}
            </p>

            {/* Current Focus Highlight Box */}
            <div className="mt-6 p-5 rounded-xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/70 dark:bg-sky-950/30">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.about.currentFocusTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t.about.currentFocusText}
                  </p>
                </div>
              </div>
            </div>

            {/* Ilmhub Badge Box */}
            <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.about.ilmhubBadgeTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t.about.ilmhubBadgeText}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Information Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Card 1: School */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.about.cardSchool}
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.about.cardSchoolVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Center */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.about.cardCenter}
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.about.cardCenterVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Target */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.about.cardGoal}
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.about.cardGoalVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Instagram */}
            <a
              href="https://instagram.com/muhammad_571_yusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-pink-300 dark:hover:border-pink-800 transition-colors group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {t.about.cardInsta}
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {t.about.cardInstaVal}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-pink-600 dark:text-pink-400 font-medium group-hover:underline">
                  Ochish →
                </span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
