import React from 'react';
import { Project } from '../data/portfolioData';
import { Eye, Sparkles } from 'lucide-react';

interface InfiniteMarqueeProps {
  projects: Project[];
  onOpenProjectModal: (project: Project) => void;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  projects,
  onOpenProjectModal,
}) => {
  // Use all 7 unique projects for the rows
  const rowOneProjects = projects.slice(0, 4);
  const rowTwoProjects = [...projects.slice(4), ...projects.slice(0, 2)];

  // Quadruple items to guarantee seamless looping without any gaps on ultra-wide screens
  const rowOneItems = [...rowOneProjects, ...rowOneProjects, ...rowOneProjects, ...rowOneProjects];
  const rowTwoItems = [...rowTwoProjects, ...rowTwoProjects, ...rowTwoProjects, ...rowTwoProjects];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white border-y border-[#356B3D]/10 overflow-hidden relative">
      
      {/* Background Soft Sage Radial Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#75A66B]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#356B3D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#356B3D] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual-Direction Reel</span>
            <span aria-hidden="true">·</span>
            <span>Hover to Pause</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E3A24] uppercase">
            Infinite Design Showcase
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Moving stream of YouTube thumbnails, brand graphics, and digital artwork.
            Click any thumbnail to open full-resolution preview.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with Pause on Hover */}
      <div className="marquee-container space-y-4 sm:space-y-5 select-none">
        
        {/* Row 1: Left to Right (Compact Sleek Cards) */}
        <div className="relative overflow-hidden w-full py-0.5">
          {/* Subtle gradient edge scrims */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-ltr-slow gap-3.5 sm:gap-4 flex items-center">
            {rowOneItems.map((project, idx) => (
              <div
                key={`r1-${project.id}-${idx}`}
                onClick={() => onOpenProjectModal(project)}
                className="group relative w-44 sm:w-56 lg:w-64 aspect-video shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-[#356B3D]/20 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 sm:p-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 uppercase tracking-wider truncate">
                      {project.category}
                    </span>
                    <Eye className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
                  </div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold tracking-tight text-white line-clamp-1 mt-0.5">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (Opposite Direction, Compact Sleek Cards) */}
        <div className="relative overflow-hidden w-full py-0.5">
          {/* Subtle gradient edge scrims */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-rtl-slow gap-3.5 sm:gap-4 flex items-center">
            {rowTwoItems.map((project, idx) => (
              <div
                key={`r2-${project.id}-${idx}`}
                onClick={() => onOpenProjectModal(project)}
                className="group relative w-44 sm:w-56 lg:w-64 aspect-video shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-[#356B3D]/20 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 sm:p-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-300 uppercase tracking-wider truncate">
                      {project.category}
                    </span>
                    <Eye className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
                  </div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold tracking-tight text-white line-clamp-1 mt-0.5">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Caption */}
      <div className="mt-6 text-center text-xs text-slate-500 font-medium">
        <span>Dual-direction infinite streaming</span>
        <span aria-hidden="true" className="mx-2">·</span>
        <span>Original artwork thumbnails by Debasish Ojha</span>
      </div>

    </section>
  );
};
