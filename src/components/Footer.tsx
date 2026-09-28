import React from 'react';
import { ArrowUp, Instagram, Mail, Heart } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface FooterProps {
  lang: Language;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDeployModal }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Dedication */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-900 dark:text-white">
              <span className="w-6 h-6 rounded bg-sky-600 text-white flex items-center justify-center text-xs font-mono">
                AY
              </span>
              <span>Abdullaev Muhammadyusuf</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              {t.footer.builtWith}
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
            <a
              href="https://instagram.com/muhammad_571_yusuf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>@muhammad_571_yusuf</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>

            <a
              href="mailto:ilmhub543@gmail.com"
              className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              <span>ilmhub543@gmail.com</span>
            </a>

            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>

            <button
              onClick={onOpenDeployModal}
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              AI Studio Promt
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Abdullaev Muhammadyusuf. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            <span>{t.footer.dedication}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
