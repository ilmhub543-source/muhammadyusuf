import React, { useState } from 'react';
import { Gamepad2, Bot, Smartphone, Sparkles, Code2, ArrowUpRight, X, Check, Calendar, ExternalLink } from 'lucide-react';
import { Language, ProjectItem } from '../types.ts';
import { translations } from '../data/translations.ts';
import { projectsList } from '../data/projects.ts';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'scratch', label: t.projects.filterScratch },
    { id: 'robotics', label: t.projects.filterRobotics },
    { id: 'android', label: t.projects.filterAndroid },
    { id: 'prompt', label: t.projects.filterPrompt },
    { id: 'python', label: t.projects.filterPython },
  ];

  const filteredProjects = projectsList.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'scratch': return Gamepad2;
      case 'robotics': return Bot;
      case 'android': return Smartphone;
      case 'prompt': return Sparkles;
      case 'python': return Code2;
      default: return Code2;
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              05. {t.projects.sectionTitle}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
              {t.projects.sectionSubtitle}
            </h2>
          </div>

          {/* Category Tabs (Segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-white dark:bg-sky-500 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-400 dark:hover:border-sky-600 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                {/* Optional Media Thumbnail */}
                {project.image && (
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.titleKey}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-white/90">
                      <span className="capitalize">{project.category}</span>
                      <span>·</span>
                      <span>{project.date}</span>
                    </div>
                  </div>
                )}

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (NO pills) */}
                    {!project.image && (
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                        <Icon className="w-4 h-4 text-sky-500" />
                        <span className="capitalize font-semibold text-slate-700 dark:text-slate-300">
                          {project.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.date}</span>
                        {project.badgeKey && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-sky-600 dark:text-sky-400">{project.badgeKey}</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Project Title */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {project.titleKey}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                      {project.descKey}
                    </p>
                  </div>

                  {/* Tech stack metadata (clean unboxed text with dots) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Tech:</span>{' '}
                    {project.techStack.join(' · ')}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category & Title */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                <span className="capitalize font-semibold text-sky-600 dark:text-sky-400">
                  {selectedProject.category}
                </span>
                <span>·</span>
                <span>{selectedProject.date}</span>
                {selectedProject.badgeKey && (
                  <>
                    <span>·</span>
                    <span>{selectedProject.badgeKey}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {selectedProject.titleKey}
              </h2>

              {/* Full Description */}
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.fullDescKey}
              </p>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  {t.projects.keyFeatures}
                </h4>
                <div className="space-y-2">
                  {selectedProject.featuresKey.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  {t.projects.technologiesUsed}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer action in modal */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 transition-colors"
                >
                  {t.projects.closeModal}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
