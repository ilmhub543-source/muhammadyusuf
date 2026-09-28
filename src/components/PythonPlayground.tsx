import React, { useState } from 'react';
import { Play, RotateCcw, Terminal, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';
import { Language } from '../types.ts';
import { translations } from '../data/translations.ts';

interface PythonPlaygroundProps {
  lang: Language;
}

const SNIPPETS: Record<string, { title: string; code: string; mockOutput: string }> = {
  intro: {
    title: '1. Shaxsiy karta & Maqsadlarim',
    code: `# Abdullayev Muhammadyusuf — Yosh dasturchi
name = "Abdullayev Muhammadyusuf"
age = 11
status = "Maktab o'quvchisi"
academy = "Ilmhub (2 yillik ta'lim)"
goal = "Python tilini mukammal o'rganish va professional dasturchi bo'lish!"

print(f"Dasturchi: {name}")
print(f"Yoshi: {age} yosh")
print(f"Holati: {status}")
print(f"O'quv markazi: {academy}")
print(f"Bosh maqsad: {goal}")
print("--- Tayyor: 100% g'ayrat bilan olg'a! ---")`,
    mockOutput: `Dasturchi: Abdullayev Muhammadyusuf
Yoshi: 11 yosh
Holati: Maktab o'quvchisi
O'quv markazi: Ilmhub (2 yillik ta'lim)
Bosh maqsad: Python tilini mukammal o'rganish va professional dasturchi bo'lish!
--- Tayyor: 100% g'ayrat bilan olg'a! ---

[Jarayon muvaffaqiyatli yakunlandi. Chiqish kodi: 0]`
  },
  rover: {
    title: '2. Robot Sensor Tekshiruvi',
    code: `def check_obstacle(distance_cm):
    if distance_cm < 20:
        return "OGOHLANTIRISH: To'siq aniqlandi! O'ngga burilish buyrug'i."
    else:
        return "YO'L OCHIQ: Oldinga to'liq tezlikda harakat."

measurements = [45, 30, 18, 55, 12]
print("HC-SR04 Datchik ma'lumotlari tahlili:")

for dist in measurements:
    status = check_obstacle(dist)
    print(f"Masofa: {dist:2d} sm  --> {status}")`,
    mockOutput: `HC-SR04 Datchik ma'lumotlari tahlili:
Masofa: 45 sm  --> YO'L OCHIQ: Oldinga to'liq tezlikda harakat.
Masofa: 30 sm  --> YO'L OCHIQ: Oldinga to'liq tezlikda harakat.
Masofa: 18 sm  --> OGOHLANTIRISH: To'siq aniqlandi! O'ngga burilish buyrug'i.
Masofa: 55 sm  --> YO'L OCHIQ: Oldinga to'liq tezlikda harakat.
Masofa: 12 sm  --> OGOHLANTIRISH: To'siq aniqlandi! O'ngga burilish buyrug'i.

[Jarayon muvaffaqiyatli yakunlandi. Chiqish kodi: 0]`
  },
  ilmhub: {
    title: '3. Ilmhub 2 Yillik Statistikasi',
    code: `years_at_ilmhub = 2
days_learning = years_at_ilmhub * 365
topics = [
    "Ingliz tili (so'zlashuv va texnik lug'at)",
    "Scratch (algoritm va o'yinlar fizikasi)",
    "Robototexnika (sensorlar va motor drayverlar)",
    "Android (mobil ilovalar tuzilmasi)",
    "Prompt Engineering (sun'iy intellekt buyruqlari)",
    "Python (chuqur o'rganish boshlandi)"
]

print(f"Ilmhubda o'tgan vaqt: ~{days_learning}+ kun!")
print("Egallangan yo'nalishlar:")
for i, item in enumerate(topics, start=1):
    print(f" [{i}] {item}")`,
    mockOutput: `Ilmhubda o'tgan vaqt: ~730+ kun!
Egallangan yo'nalishlar:
 [1] Ingliz tili (so'zlashuv va texnik lug'at)
 [2] Scratch (algoritm va o'yinlar fizikasi)
 [3] Robototexnika (sensorlar va motor drayverlar)
 [4] Android (mobil ilovalar tuzilmasi)
 [5] Prompt Engineering (sun'iy intellekt buyruqlari)
 [6] Python (chuqur o'rganish boshlandi)

[Jarayon muvaffaqiyatli yakunlandi. Chiqish kodi: 0]`
  },
  agedays: {
    title: '4. 11 Yoshni Kunga O\'girish',
    code: `age_years = 11
days_per_year = 365.25
total_days = int(age_years * days_per_year)
total_hours = total_days * 24

print(f"Salom Dunyo! 11 yosh = {total_days:,} kun.")
print(f"Bu jami {total_hours:,} soatlik ajoyib hayot va bilim safari!")
print("Python tilini mukammal o'rganib, O'zbekistonning kuchli dasturchisi bo'laman!")`,
    mockOutput: `Salom Dunyo! 11 yosh = 4,017 kun.
Bu jami 96,408 soatlik ajoyib hayot va bilim safari!
Python tilini mukammal o'rganib, O'zbekistonning kuchli dasturchisi bo'laman!

[Jarayon muvaffaqiyatli yakunlandi. Chiqish kodi: 0]`
  }
};

export const PythonPlayground: React.FC<PythonPlaygroundProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedSnippetKey, setSelectedSnippetKey] = useState<string>('intro');
  const [currentCode, setCurrentCode] = useState<string>(SNIPPETS.intro.code);
  const [consoleLogs, setConsoleLogs] = useState<string>(SNIPPETS.intro.mockOutput);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const handleSnippetChange = (key: string) => {
    setSelectedSnippetKey(key);
    setCurrentCode(SNIPPETS[key].code);
    setConsoleLogs(SNIPPETS[key].mockOutput);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleLogs('>>> python3 main.py\nBajarilmoqda (Executing Python 3.12)...');

    setTimeout(() => {
      // If code was customized, output generic runner result or snippet result
      const snippet = SNIPPETS[selectedSnippetKey];
      if (snippet && currentCode.trim() === snippet.code.trim()) {
        setConsoleLogs(snippet.mockOutput);
      } else {
        setConsoleLogs(
          `>>> python3 main.py\nChiqish natijasi:\n${currentCode.split('\n')
            .filter(line => line.includes('print'))
            .map(line => line.replace(/print\(f?["'](.*)["']\)/, '$1').replace(/[()]/g, ''))
            .join('\n') || 'Dastur xatosiz bajarildi!'}\n\n[Jarayon muvaffaqiyatli yakunlandi. Chiqish kodi: 0]`
        );
      }
      setIsRunning(false);
    }, 450);
  };

  const handleReset = () => {
    const snippet = SNIPPETS[selectedSnippetKey];
    if (snippet) {
      setCurrentCode(snippet.code);
      setConsoleLogs(snippet.mockOutput);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="python" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            04. {t.pythonLab.sectionTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.pythonLab.sectionSubtitle}
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 italic">
            {t.pythonLab.pythonMotivation}
          </p>
        </div>

        {/* Snippet Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">
            {t.pythonLab.chooseSnippet}
          </span>
          {Object.entries(SNIPPETS).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handleSnippetChange(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                selectedSnippetKey === key
                  ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-white border-transparent shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* Interactive Editor & Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Code Editor Window */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-lg flex flex-col">
            
            {/* Editor Window Header */}
            <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  muhammadyusuf_main.py
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
                  title="Kodni nusxalash"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
                  title="Kodni qayta tiklash"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Code Textarea Area */}
            <div className="relative p-4 flex-1 flex font-mono text-xs sm:text-sm">
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                rows={12}
                className="w-full bg-transparent text-sky-200 focus:outline-none resize-none leading-relaxed font-mono selection:bg-sky-700"
                spellCheck={false}
              />
            </div>

            {/* Editor Footer with Run Button */}
            <div className="px-4 py-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Python 3.12 (Vite Playground)
              </span>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? t.pythonLab.runningBtn : t.pythonLab.runBtn}</span>
              </button>
            </div>

          </div>

          {/* Terminal Console Output */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 overflow-hidden shadow-lg flex flex-col">
            
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>{t.pythonLab.consoleOutput}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">STDOUT</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 font-mono text-xs overflow-y-auto whitespace-pre-wrap leading-relaxed text-emerald-400 bg-slate-950/90 min-h-[220px]">
              {consoleLogs}
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Online</span>
              <span className="text-sky-400">Encoding: UTF-8</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
