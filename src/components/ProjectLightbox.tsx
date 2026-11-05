import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { SoftwareIcon } from './SoftwareIcons';
import { X, ChevronLeft, ChevronRight, Layers, Sparkles, ExternalLink, Calendar, User, BarChart3 } from 'lucide-react';

interface ProjectLightboxProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  allProjects,
  onClose,
  onNavigate,
}) => {
  // Handle keyboard events (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const total = allProjects.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Container - Click inside does not close */}
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-white rounded-2xl sm:rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#356B3D]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all hover:scale-110 shadow-lg cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Arrow Left */}
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1E3A24] transition-all hover:scale-110 shadow-lg cursor-pointer hidden sm:flex items-center justify-center border border-slate-200"
          title="Previous project (Left arrow)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1E3A24] transition-all hover:scale-110 shadow-lg cursor-pointer hidden sm:flex items-center justify-center border border-slate-200"
          title="Next project (Right arrow)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Left Side: High-Resolution Media Viewer */}
        <div className="relative md:w-3/5 bg-[#121814] flex items-center justify-center overflow-hidden min-h-[220px] sm:min-h-[320px] md:min-h-full shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[50vh] md:max-h-[85vh] p-2"
            referrerPolicy="no-referrer"
          />

          {/* Bottom scrim on image preview */}
          <div className="absolute bottom-2 left-3 text-[11px] font-mono text-emerald-300/80 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
            {currentIndex + 1} / {total} · Original 1080p
          </div>
        </div>

        {/* Right Side: Project Data & Rationale */}
        <div className="md:w-2/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-none md:max-h-[85vh] bg-[#F7F7EC]">
          <div className="space-y-4">
            
            {/* Category & Year */}
            <div className="flex items-center justify-between text-xs font-semibold text-[#75A66B] uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-lg bg-[#356B3D] text-white">
                {project.category}
              </span>
              <span>{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1E3A24] leading-tight">
              {project.title}
            </h3>

            {/* Key Metadata Points */}
            <div className="space-y-2 py-3 border-y border-[#356B3D]/15 text-xs text-[#1C1D1B]">
              {project.client && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Client / Context:</span>
                  <span className="font-semibold text-[#1E3A24]">{project.client}</span>
                </div>
              )}
              {project.metrics && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Impact / Metric:</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {project.metrics}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-[#356B3D] uppercase tracking-wider mb-1">
                Design & Creative Rationale
              </h4>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Performance Stats Cards */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-2 pt-2">
                {project.stats.map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white border border-[#356B3D]/10 text-center">
                    <div className="font-heading text-lg font-bold text-[#356B3D]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium uppercase truncate">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Software Used */}
            <div>
              <h4 className="text-xs font-bold text-[#1E3A24] uppercase tracking-wider mb-2">
                Software & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.software.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-[#356B3D]/20 text-[#1E3A24]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Figma File Link if available */}
            {project.figmaUrl && (
              <div className="pt-1">
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0ACF83] hover:bg-[#09B974] text-white font-semibold text-xs transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <SoftwareIcon type="figma" size={16} />
                  <span>Open Live Figma Design File</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Google Drive Video Link if available */}
            {project.videoUrl && (
              <div className="pt-1">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#592288] hover:bg-[#4E1C77] text-white font-semibold text-xs transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <SoftwareIcon type="premiere" size={16} />
                  <span>Watch Edited Video Project (Drive)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-100"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* Navigation Controls on Mobile */}
          <div className="pt-6 mt-4 border-t border-[#356B3D]/15 flex items-center justify-between">
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onNavigate('prev')}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-[#1E3A24]"
              >
                Previous
              </button>
              <button
                onClick={() => onNavigate('next')}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-[#1E3A24]"
              >
                Next
              </button>
            </div>

            <div className="text-xs text-slate-500 font-medium hidden sm:block">
              Use <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px]">→</kbd> keys to browse
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#356B3D] hover:bg-[#2B5631] rounded-xl transition-colors ml-auto"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
