import React from 'react';
import { ArrowRight, Terminal, Instagram, Sparkles, BookOpen, Bot } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface HeroProps {
  lang: Language;
  onOpenDeployModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDeployModal }) => {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-sky-50/50 via-transparent to-transparent dark:from-sky-950/20 dark:via-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{t.hero.kicker}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-500 dark:text-slate-400">Ilmhub 2024–2026</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              {t.hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300">
                {t.hero.highlightName}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Unboxed Metadata Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 w-full max-w-xl border-y border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {t.hero.statAge}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.hero.statAgeLabel}
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {t.hero.statExp}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.hero.statExpLabel}
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  5 Tech
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Scratch, Robot, AI, Python
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-sky-600 dark:text-sky-400">
                  {t.hero.statGoal}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.hero.statGoalLabel}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 transition-colors shadow-sm"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDeployModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Terminal className="w-4 h-4 text-sky-500" />
                <span>{t.hero.openPromptGuide}</span>
              </button>

              <a
                href="https://instagram.com/muhammad_571_yusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/40 hover:bg-pink-100 dark:hover:bg-pink-900/60 transition-colors border border-pink-200 dark:border-pink-900/50"
              >
                <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span className="font-mono text-xs">@muhammad_571_yusuf</span>
              </a>
            </div>

            {/* Micro tag line */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.hero.tagline}</span>
            </div>

          </div>

          {/* Right Column: Visual Coder Boy Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-75" />

              {/* Main Avatar Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <img
                  src="/src/assets/images/avatar_coder_boy_1790568478775.jpg"
                  alt="Abdullaev Muhammadyusuf — 11 yoshli Coder Boy"
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Card */}
                <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>Abdullaev Muhammadyusuf</span>
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Coder Boy · Ilmhub 2 yillik tajriba
                      </p>
                    </div>

                    <a
                      href="https://instagram.com/muhammad_571_yusuf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Highlights row */}
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-sky-500" />
                      <span>Ingliz tili</span>
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="flex items-center gap-1">
                      <Bot className="w-3 h-3 text-blue-500" />
                      <span>Robototexnika</span>
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400 font-bold">
                      <Terminal className="w-3 h-3" />
                      <span>Python Pro</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
