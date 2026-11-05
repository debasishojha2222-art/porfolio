import React, { useState, useMemo } from 'react';
import { Project, GALLERY_CATEGORIES } from '../data/portfolioData';
import { Eye, ArrowUpRight, Filter, Sparkles, Layers, SlidersHorizontal, X } from 'lucide-react';

interface ProjectsGalleryProps {
  projects: Project[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  activeSoftwareFilter: string | null;
  onClearSoftwareFilter: () => void;
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  projects,
  activeCategory,
  onSelectCategory,
  activeSoftwareFilter,
  onClearSoftwareFilter,
  onOpenProjectModal,
}) => {
  // Filter logic: apply both category tab filter and software skill filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Category check
      const matchesCategory =
        activeCategory === 'All Projects' ||
        project.category === activeCategory ||
        project.categories.includes(activeCategory);

      // 2. Software filter check (if user clicked a software logo in section 3)
      const matchesSoftware =
        !activeSoftwareFilter ||
        activeSoftwareFilter === 'ALL' ||
        project.software.some((s) =>
          s.toLowerCase().includes(activeSoftwareFilter.toLowerCase())
        ) ||
        (activeSoftwareFilter === 'Figma' && project.category === 'UI/UX Design') ||
        (activeSoftwareFilter === 'Premiere Pro' && project.category === 'Video Editing') ||
        (activeSoftwareFilter === 'CapCut' && project.category === 'Video Editing') ||
        (activeSoftwareFilter === 'DaVinci Resolve' && project.category === 'Video Editing') ||
        (activeSoftwareFilter === 'Photoshop' && (project.category === 'Graphic Design' || project.category === 'YouTube Thumbnails')) ||
        (activeSoftwareFilter === 'Picsart' && (project.category === 'Creative Projects' || project.category === 'YouTube Thumbnails'));

      return matchesCategory && matchesSoftware;
    });
  }, [projects, activeCategory, activeSoftwareFilter]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F7F7EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#356B3D]/15">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#356B3D] uppercase">
              <span className="w-6 h-[2px] bg-[#356B3D]" />
              <span>Curated Works</span>
              <span aria-hidden="true">·</span>
              <span>Original Artwork & Thumbnails</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E3A24] uppercase mt-1">
              MY PROJECTS
            </h2>
            <p className="text-base text-[#1C1D1B]/75 mt-2 max-w-xl font-normal">
              High-CTR YouTube thumbnails, digital campaign creatives, UI interfaces, and motion edits.
              Click any project to inspect the high-resolution artwork and design rationale.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-[#356B3D]/15 shadow-xs shrink-0">
            <div>
              <div className="font-heading text-2xl font-bold text-[#356B3D]">
                {filteredProjects.length}
              </div>
              <div className="text-[11px] font-semibold text-[#1E3A24]/70 uppercase tracking-wider">
                Displaying Works
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <div className="font-heading text-2xl font-bold text-[#1E3A24]">
                100%
              </div>
              <div className="text-[11px] font-semibold text-[#1E3A24]/70 uppercase tracking-wider">
                Original Artwork
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Tabs: Swipeable on mobile, wrapping on laptop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap max-w-full scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#356B3D] text-white shadow-xs scale-102'
                      : 'bg-white text-[#1E3A24] hover:bg-[#EBF3EA] border border-[#356B3D]/15'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Active Software Filter Pill if set */}
          {activeSoftwareFilter && activeSoftwareFilter !== 'ALL' && (
            <div className="flex items-center gap-2 self-start sm:self-auto bg-[#EBF3EA] border border-[#356B3D]/30 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1E3A24]">
              <span>Tool Filter: <strong>{activeSoftwareFilter}</strong></span>
              <button
                onClick={onClearSoftwareFilter}
                className="p-1 hover:bg-[#356B3D] hover:text-white rounded-full transition-colors"
                title="Clear software filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

        {/* Main Gallery Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 pt-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal(project)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#356B3D]/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Image Container with Proper Proportions */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#1E3A24]/10">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Artwork</span>
                      </span>
                      <span className="p-2 rounded-lg bg-white/20 backdrop-blur-xs hover:bg-white/40 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </span>
                    </div>
                  </div>

                  {/* Category Badge on top */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-lg bg-[#1E3A24]/80 text-white backdrop-blur-md shadow-xs">
                      {project.category}
                    </span>
                    {project.figmaUrl && (
                      <span className="px-2 py-1 text-[11px] font-bold rounded-lg bg-[#0ACF83] text-white backdrop-blur-md shadow-xs">
                        Figma
                      </span>
                    )}
                  </div>

                  {/* Performance metric badge if available */}
                  {project.metrics && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-emerald-600/90 text-white backdrop-blur-md shadow-xs">
                        {project.metrics.split(' ')[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Info Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#75A66B] uppercase tracking-wider">
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.client || 'Creative Showcase'}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold tracking-tight text-[#1E3A24] group-hover:text-[#356B3D] transition-colors mt-1 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Software used pills */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-0.5 text-[11px] font-medium text-slate-600 bg-slate-100 rounded-md"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-[#356B3D] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center rounded-2xl bg-white border border-[#356B3D]/15 my-8">
            <Layers className="w-10 h-10 text-[#75A66B] mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[#1E3A24]">
              No Projects Found in This Filter
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
              There are no projects matching both the selected category and software filter.
            </p>
            <button
              onClick={() => {
                onSelectCategory('All Projects');
                onClearSoftwareFilter();
              }}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#356B3D] rounded-xl hover:bg-[#2B5631] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
