/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { SkillsGrid } from './components/SkillsGrid.tsx';
import { RoboticsLab } from './components/RoboticsLab.tsx';
import { PythonPlayground } from './components/PythonPlayground.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { GuestbookSection } from './components/GuestbookSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PromptAndDeployModal } from './components/PromptAndDeployModal.tsx';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('muhammadyusuf_lang');
      if (saved === 'uz' || saved === 'uz_cyr' || saved === 'ru' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'uz';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('muhammadyusuf_theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // ignore
    }
    return 'dark';
  });

  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  // Sync theme with HTML root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('muhammadyusuf_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Persist language selection
  useEffect(() => {
    try {
      localStorage.setItem('muhammadyusuf_lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang === 'uz_cyr' ? 'uz' : lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans">
      
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenDeployModal={() => setIsDeployModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenDeployModal={() => setIsDeployModalOpen(true)}
        />

        <About lang={lang} />

        <SkillsGrid lang={lang} />

        <RoboticsLab lang={lang} />

        <PythonPlayground lang={lang} />

        <ProjectsSection lang={lang} />

        <TimelineSection lang={lang} />

        <GuestbookSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenDeployModal={() => setIsDeployModalOpen(true)}
      />

      {/* AI Studio Prompt & GitHub / Vercel Deploy Modal */}
      <PromptAndDeployModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
