import React, { useState } from 'react';
import { Sun, Moon, Globe, Terminal, Menu, X, Instagram } from 'lucide-react';
import { Language, Theme } from '../types.ts';
import { translations } from '../data/translations.ts';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  onOpenDeployModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  onOpenDeployModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: "🇺🇿" },
    { code: 'uz_cyr', label: "Ўзбекча", flag: "🇺🇿" },
    { code: 'ru', label: "Русский", flag: "🇷🇺" },
    { code: 'en', label: "English", flag: "🇬🇧" },
  ];

  const currentLangLabel = languages.find(l => l.code === lang)?.label || "O'zbekcha";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-200 bg-white/90 dark:bg-slate-950/90 border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Wordmark / Brand title (single text element) */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            AY
          </span>
          <span className="font-semibold">Abdullaev Muhammadyusuf</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.about}
          </a>
          <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.projects}
          </a>
          <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.skills}
          </a>
          <a href="#robotics" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.robotics}
          </a>
          <a href="#python" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.pythonLab}
          </a>
          <a href="#journey" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.nav.journey}
          </a>
        </nav>

        {/* Zone 3: Actions (Language, Theme, Deploy Modal CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              title="Tilni o'zgartirish / Change language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden sm:inline">{currentLangLabel}</span>
              <span className="sm:hidden uppercase">{lang === 'uz_cyr' ? 'ЎЗ' : lang}</span>
            </button>

            {langMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 transition-colors ${
                      lang === item.code
                        ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Yorug\' rejimga o\'tish' : 'Tungi rejimga o\'tish'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Promt & GitHub / Vercel Deploy Guide Button */}
          <button
            onClick={onOpenDeployModal}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm whitespace-nowrap"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI Promt & Deploy</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.projects}
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.skills}
            </a>
            <a
              href="#robotics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.robotics}
            </a>
            <a
              href="#python"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.pythonLab}
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {t.nav.journey}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-sky-600 hover:bg-sky-500"
            >
              <Terminal className="w-4 h-4" />
              <span>Google AI Studio Promt & Deploy</span>
            </button>
            
            <a
              href="https://instagram.com/muhammad_571_yusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Instagram: @muhammad_571_yusuf</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
