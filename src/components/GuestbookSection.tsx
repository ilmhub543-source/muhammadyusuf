import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, Sparkles, Smile } from 'lucide-react';
import { Language, GuestbookMessage } from '../types.ts';
import { translations } from '../data/translations.ts';

interface GuestbookSectionProps {
  lang: Language;
}

const INITIAL_MESSAGES: GuestbookMessage[] = [
  {
    id: 'msg-1',
    name: 'Azizbek Ustoz (Ilmhub)',
    message: "Muhammadyusuf, sening tirishqoqliging va dasturlashga bo'lgan qiziqishing tahsinga loyiq! 2 yillik mehnating o'z samarasini bermoqda. Python tilini ham albatta mukammal o'zlashtirasan, olg'a!",
    date: '2026-03-24',
    avatarEmoji: '👨‍🏫',
    likes: 14,
  },
  {
    id: 'msg-2',
    name: 'Malika (Sinfdoshi)',
    message: "11 yoshda shunday kuchli robot va vebsayt yasash ajoyib natija! Dasturchi bo'lishingga ishonaman!",
    date: '2026-03-25',
    avatarEmoji: '✨',
    likes: 9,
  },
  {
    id: 'msg-3',
    name: 'Tech Explorer (Friend)',
    message: "Learning English, Robotics and starting Python at 11 years old is fantastic! Keep building the future!",
    date: '2026-03-26',
    avatarEmoji: '🚀',
    likes: 12,
  },
];

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('⭐');
  const [submitted, setSubmitted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('muhammadyusuf_guestbook');
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        setMessages(INITIAL_MESSAGES);
        localStorage.setItem('muhammadyusuf_guestbook', JSON.stringify(INITIAL_MESSAGES));
      }
    } catch {
      setMessages(INITIAL_MESSAGES);
    }
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage: GuestbookMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().split('T')[0],
      avatarEmoji: selectedEmoji,
      likes: 1,
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem('muhammadyusuf_guestbook', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLike = (id: string) => {
    const updated = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, likes: msg.likes + 1 };
      }
      return msg;
    });
    setMessages(updated);
    try {
      localStorage.setItem('muhammadyusuf_guestbook', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const emojis = ['⭐', '🚀', '💡', '🤖', '🔥', '👏', '🏆', '💻'];

  return (
    <section id="guestbook" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            07. {t.guestbook.sectionTitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t.guestbook.sectionSubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-500" />
              <span>{t.guestbook.sectionTitle}</span>
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  {t.guestbook.inputName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masalan: Jasur (Dasturchi)"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Avatar belgisi:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {emojis.map(e => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setSelectedEmoji(e)}
                      className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all ${
                        selectedEmoji === e
                          ? 'bg-sky-500 text-white scale-110 shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  {t.guestbook.inputMessage}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Muhammadyusufga samimiy tilak yoki maslahatingizni yozing..."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:scale-95 transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>{t.guestbook.submitBtn}</span>
              </button>

              {submitted && (
                <p className="text-xs text-center font-medium text-emerald-600 dark:text-emerald-400 animate-in fade-in">
                  ✓ {t.guestbook.thankYou}
                </p>
              )}
            </form>
          </div>

          {/* Right: Message Stream */}
          <div className="lg:col-span-7 space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {messages.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                {t.guestbook.emptyList}
              </p>
            ) : (
              messages.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
                        {item.avatarEmoji || '⭐'}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-400">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleLike(item.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-colors"
                      title="Yoqdi"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span className="tabular-nums">{item.likes}</span>
                    </button>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.message}
                  </p>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
