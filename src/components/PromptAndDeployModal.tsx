import React, { useState } from 'react';
import { X, Copy, Check, Terminal, GitBranch, Globe, FileText, Download } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface PromptAndDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PromptAndDeployModal: React.FC<PromptAndDeployModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'prompt' | 'github' | 'vercel' | 'readme'>('prompt');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const longGoogleAiStudioPrompt = `### GOOGLE AI STUDIO BUILD — MASTER SYSTEM PROMPT
### PROJECT: ABDULLAEV MUHAMMADYUSUF — CODER BOY PORTFOLIO & TECH SHOWCASE

Build a premier, production-grade, responsive personal portfolio website for:
- Name: Abdullaev Muhammadyusuf (Abdullayev Muhammadyusuf)
- Age: 11 years old ("maktab o'quvchisiman" / school student coder)
- Instagram: muhammad_571_yusuf (https://instagram.com/muhammad_571_yusuf)
- Education: 2 years studying English and software development at "Ilmhub" academy
- Core Skill Stack: Scratch (2D Games & Algorithms), Robotics (HC-SR04 ultrasonic sensors, motor drivers, obstacle avoidance rovers), Android (mobile apps & UI basics), Prompt Engineering (Google Gemini & LLMs), Computer hardware & literacy.
- Current Major Goal: Starting Python and aiming to master it thoroughly ("Python tilini o'rganishni boshladim va mukammal o'rganishni maqsad qilganman").

MANDATORY FUNCTIONAL & AESTHETIC SPECIFICATIONS:

1. MULTILINGUAL ARCHITECTURE (4 LANGUAGES SUPPORTED):
   - Uzbek Latin (O'zbekcha)
   - Uzbek Cyrillic (Ўзбекча)
   - Russian (Русский)
   - English (English)
   - Implement an instant, seamless language switcher with zero reload. Every bio, project, skill, and interaction must be translated fluently.

2. LIGHT & DARK THEME SYSTEM:
   - Provide a persistent Light / Dark mode switcher with system-preference detection and localStorage memory.
   - High-contrast, sleek modern palette: deep dark slate (#090d16) for dark mode and crisp off-white for light mode, accented with electric tech cyan/cobalt.

3. CODER BOY IDENTITY & HIGH-RES AVATAR:
   - Digital portrait avatar of 11-year-old smart programmer with gaming headphones, tech hoodie, and soft ambient rim lighting.
   - Live status indicator: "Active Coder Boy · Ilmhub 2 yillik tajriba".
   - Direct Instagram button linking to @muhammad_571_yusuf.

4. INTERACTIVE VIRTUAL ROBOTICS LAB:
   - Interactive 2D rover canvas simulation where users can drive the rover (Forward, Backward, Turn Left, Turn Right, Scan Sonar Waves, Beep audio horn, Reset).
   - Real-time telemetry: Distance to obstacle in cm, Heading angle in degrees, Battery percentage, and Command log stream.

5. INTERACTIVE PYTHON PLAYGROUND & CONSOLE:
   - In-browser interactive Python runner with preloaded snippets (Muhammadyusuf's bio card, Robot sensor obstacle logic, Ilmhub 2-year statistics, 11-years to days calculator).
   - Users can run, test, edit, and clear console output.

6. BENTO PROJECTS GALLERY WITH RICH MODAL VIEWER:
   - Filterable projects across Scratch, Robotics, Android, AI Prompt Engineering, and Python.
   - Deep-dive interactive modal dialog for each project displaying overview, key features, tech stack, and learnings.

7. ILMHUB LEARNING JOURNEY TIMELINE:
   - 2024: Step into Ilmhub (English & Computer fundamentals)
   - 2025: Scratch games & Hardware robotics rovers
   - 2025 (late): Android concepts & Prompt engineering
   - 2026 (Present): Python era — Deep programming mastery

8. GUESTBOOK & COMMUNITY ENCOURAGEMENT:
   - Interactive message board allowing visitors to post kind notes and likes to Muhammadyusuf, saved in localStorage.

9. GITHUB & VERCEL DEPLOYMENT READY:
   - Clean Vite + React 19 + TypeScript + Tailwind CSS structure.
   - Favicon SVG with coder headphones emblem.
   - Comprehensive metadata, OpenGraph tags, and responsive layout for iPhone, iPad, Android, and PC displays.`;

  const githubCommands = `# 1. Loyihani terminalda oching
cd my-portfolio-app

# 2. Git omborini ishga tushiring
git init

# 3. Barcha fayllarni indeksga qo'shing
git add .

# 4. Birinchi commitni yarating
git commit -m "feat: Abdullaev Muhammadyusuf Coder Boy Portfolio initial release"

# 5. Asosiy tarmoqni main ga o'zgartiring
git branch -M main

# 6. GitHub da yangi 'muhammadyusuf-portfolio' nomli repozitoriy oching va unga ulang:
# (O'zingizning GitHub username ingizni yozing)
git remote add origin https://github.com/USERNAME/muhammadyusuf-portfolio.git

# 7. Kodni GitHub ga yuklang (push)
git push -u origin main`;

  const vercelSteps = `VERCEL GA BEPUL DEPLOY QILISH QADAMLARI:

1. https://vercel.com saytiga kiring va GitHub hisobingiz orqali kiring (Sign in with GitHub).
2. Bosh sahifada "Add New..." -> "Project" tugmasini bosing.
3. GitHub omborlaringiz ro'yxatidan 'muhammadyusuf-portfolio' loyihasini toping va "Import" tugmasini bosing.
4. Loyiha sozlamalari avtomatik aniqlanadi:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: dist
5. Pastdagi ko'k "Deploy" tugmasini bosing.
6. 1 daqiqa ichida vebsaytingiz tayyor bo'ladi va sizga bepul '.vercel.app' havolasi beriladi (Masalan: muhammadyusuf-coder.vercel.app).
7. Ushbu havolani Instagram profilingizga (bio) qo'yishingiz mumkin!`;

  const readmeTemplate = `# Abdullaev Muhammadyusuf — Coder Boy Portfolio 🚀

> 11-yoshli dasturchi va robototexnik Abdullaev Muhammadyusufning shaxsiy portfolio vebsayti.

[![Instagram](https://img.shields.io/badge/Instagram-@muhammad__571__yusuf-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/muhammad_571_yusuf)
[![Ilmhub](https://img.shields.io/badge/Academy-Ilmhub-0284c7?style=for-the-badge)](https://ilmhub.uz)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Python-emerald?style=for-the-badge)](#)

---

## 🌟 Men haqimda
- **Ismim:** Abdullayev Muhammadyusuf
- **Yoshim:** 11 yosh (maktab o'quvchisi)
- **Ta'lim:** 2 yildan beri "Ilmhub"da ingliz tili va dasturlashni o'rganmoqdaman.
- **Yo'nalishlarim:** Scratch, Robototexnika, Android, Prompt Engineering, Kompyuter asoslari.
- **Katta maqsadim:** Hozirda **Python** dasturlash tilini boshladim va uni mukammal o'rganib, O'zbekistonning kuchli dasturchisi bo'lishni maqsad qilganman!

---

## 🛠️ Loyihani kompyuterda ishga tushirish

\`\`\`bash
# 1. Repozitoriyani yuklab olish
git clone https://github.com/USERNAME/muhammadyusuf-portfolio.git

# 2. Papkaga kirish
cd muhammadyusuf-portfolio

# 3. Paketlarni o'rnatish
npm install

# 4. Dasturni ishga tushirish
npm run dev
\`\`\`

---

## 📬 Bog'lanish
- Instagram: [@muhammad_571_yusuf](https://instagram.com/muhammad_571_yusuf)
- Email: ilmhub543@gmail.com
`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-500" />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.deployModal.modalTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.deployModal.modalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'prompt'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.deployModal.tabPrompt}</span>
          </button>

          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'github'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>{t.deployModal.tabGithub}</span>
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className={`pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'vercel'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.deployModal.tabVercel}</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`pb-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'readme'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.deployModal.tabReadme}</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
          
          {/* Tab 1: AI Studio Master Prompt */}
          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
                  {t.deployModal.promptExplanation}
                </p>
                <button
                  onClick={() => copyToClipboard(longGoogleAiStudioPrompt, 'prompt')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm shrink-0"
                >
                  {copiedType === 'prompt' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'prompt' ? t.deployModal.copied : t.deployModal.copyPromptBtn}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-sky-200 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all max-h-[350px]">
                {longGoogleAiStudioPrompt}
              </div>
            </div>
          )}

          {/* Tab 2: GitHub Guide */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
                  {t.deployModal.githubStepsTitle}
                </p>
                <button
                  onClick={() => copyToClipboard(githubCommands, 'github')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm shrink-0"
                >
                  {copiedType === 'github' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'github' ? t.deployModal.copied : 'Buyruqlarni nusxalash'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                {githubCommands}
              </div>
            </div>
          )}

          {/* Tab 3: Vercel Deploy Guide */}
          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
                  {t.deployModal.vercelStepsTitle}
                </p>
                <button
                  onClick={() => copyToClipboard(vercelSteps, 'vercel')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm shrink-0"
                >
                  {copiedType === 'vercel' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'vercel' ? t.deployModal.copied : 'Qo\'llanmani nusxalash'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-sky-300 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                {vercelSteps}
              </div>
            </div>
          )}

          {/* Tab 4: README.md */}
          {activeTab === 'readme' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
                  GitHub repozitoriyangiz uchun to'liq README.md hujjati:
                </p>
                <button
                  onClick={() => copyToClipboard(readmeTemplate, 'readme')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm shrink-0"
                >
                  {copiedType === 'readme' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'readme' ? t.deployModal.copied : 'README.md ni nusxalash'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all max-h-[350px]">
                {readmeTemplate}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50">
          <span className="text-[11px] text-slate-500 font-sans">
            Abdullaev Muhammadyusuf · Ilmhub Coder Boy
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {t.projects.closeModal}
          </button>
        </div>

      </div>
    </div>
  );
};
