import React, { useState } from 'react';
import { Gamepad2, Bot, Smartphone, Sparkles, Code2, HardDrive, Languages, Check } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface SkillsGridProps {
  lang: Language;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'code' | 'hardware' | 'ai'>('all');

  const skillsData = [
    {
      id: 'scratch',
      title: t.skills.scratchTitle,
      desc: t.skills.scratchDesc,
      icon: Gamepad2,
      category: 'code',
      level: t.skills.statusMastered,
      levelColor: 'text-emerald-600 dark:text-emerald-400',
      highlights: ['2D Games', 'Sprite Logic', 'Physics Engine', 'Events Loop'],
      progress: 95,
    },
    {
      id: 'robotics',
      title: t.skills.roboticsTitle,
      desc: t.skills.roboticsDesc,
      icon: Bot,
      category: 'hardware',
      level: t.skills.statusMastered,
      levelColor: 'text-emerald-600 dark:text-emerald-400',
      highlights: ['HC-SR04 Ultrasonic', 'L298N Motors', 'Obstacle Avoidance', 'IR Sensors'],
      progress: 90,
    },
    {
      id: 'python',
      title: t.skills.pythonTitle,
      desc: t.skills.pythonDesc,
      icon: Code2,
      category: 'code',
      level: t.skills.statusTarget,
      levelColor: 'text-sky-600 dark:text-sky-400 font-bold',
      highlights: ['Syntax & Variables', 'Loops & Conditions', 'Functions', 'Data Structures'],
      progress: 55,
      isSpecial: true,
    },
    {
      id: 'prompt',
      title: t.skills.promptTitle,
      desc: t.skills.promptDesc,
      icon: Sparkles,
      category: 'ai',
      level: t.skills.statusMastered,
      levelColor: 'text-emerald-600 dark:text-emerald-400',
      highlights: ['Gemini 2.5/Flash', 'Structured Prompts', 'Role Prompting', 'Few-shot Logic'],
      progress: 88,
    },
    {
      id: 'android',
      title: t.skills.androidTitle,
      desc: t.skills.androidDesc,
      icon: Smartphone,
      category: 'code',
      level: t.skills.statusActive,
      levelColor: 'text-amber-600 dark:text-amber-400',
      highlights: ['UI Layouts', 'Touch UX', 'Component Views', 'App Structure'],
      progress: 75,
    },
    {
      id: 'hardware',
      title: t.skills.hardwareTitle,
      desc: t.skills.hardwareDesc,
      icon: HardDrive,
      category: 'hardware',
      level: t.skills.statusMastered,
      levelColor: 'text-emerald-600 dark:text-emerald-400',
      highlights: ['PC Assembly', 'Operating Systems', 'Terminal / CLI', 'Cyber Basics'],
      progress: 85,
    },
    {
      id: 'english',
      title: t.skills.englishTitle,
      desc: t.skills.englishDesc,
      icon: Languages,
      category: 'code',
      level: t.skills.statusActive,
      levelColor: 'text-sky-600 dark:text-sky-400',
      highlights: ['Ilmhub 2 Years', 'Technical Vocab', 'Docs Reading', 'Spoken Practice'],
      progress: 80,
    },
  ];

  const filteredSkills = skillsData.filter(skill => {
    if (selectedFilter === 'all') return true;
    return skill.category === selectedFilter;
  });

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              02. {t.skills.sectionTitle}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
              {t.skills.sectionSubtitle}
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional button element with segmented style) */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 self-start md:self-auto shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 dark:bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hammasi
            </button>
            <button
              onClick={() => setSelectedFilter('code')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedFilter === 'code'
                  ? 'bg-slate-900 dark:bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Dasturlash
            </button>
            <button
              onClick={() => setSelectedFilter('hardware')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedFilter === 'hardware'
                  ? 'bg-slate-900 dark:bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Robot & Apparat
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedFilter === 'ai'
                  ? 'bg-slate-900 dark:bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI & Promt
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className={`p-6 rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-900 flex flex-col justify-between ${
                  skill.isSpecial
                    ? 'border-sky-300 dark:border-sky-700 ring-2 ring-sky-500/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar: Icon and Status Text (NO pill capsules) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className={`font-semibold ${skill.levelColor}`}>{skill.level}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Sub-features list */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {skill.highlights.map((h, i) => (
                      <span key={i} className="flex items-center gap-1 font-mono">
                        <Check className="w-3 h-3 text-sky-500" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                      <span>Tajriba</span>
                      <span className="tabular-nums">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.isSpecial ? 'bg-sky-500' : 'bg-slate-700 dark:bg-sky-600'
                        }`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
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
