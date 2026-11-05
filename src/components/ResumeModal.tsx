import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Code, Globe, Phone, Mail, MapPin, Eye, FileText, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'sheet' | 'text'>('sheet');
  const resumeImagePath = '/assets/aistudio/image_3063b351.png';
  const resumePdfPath = '/assets/aistudio/Debasish_Ojha_cv__1__557e2107.pdf';

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#356B3D]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#19351C] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#75A66B] shrink-0" />
            <div className="min-w-0">
              <h3 className="font-heading text-lg sm:text-xl font-bold tracking-wide uppercase text-white leading-tight truncate">
                Debasish Ojha · Resume & CV
              </h3>
              <p className="text-[11px] sm:text-xs text-emerald-200 truncate">
                UI/UX Designer, Graphic Designer & Video Editor (2026)
              </p>
            </div>
          </div>

          {/* Quick Download Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Download New Visual Resume Image */}
            <a
              href={resumeImagePath}
              download="Debasish_Ojha_Resume_2026.png"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#19351C] bg-[#A8D59F] hover:bg-[#96C78C] rounded-lg transition-colors shadow-xs"
              title="Download High-Resolution Resume Sheet"
            >
              <Download className="w-3.5 h-3.5 text-[#19351C]" />
              <span>Download Resume</span>
            </a>

            {/* Download PDF option */}
            <a
              href={resumePdfPath}
              download="Debasish_Ojha_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Download PDF version"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Switcher Sub-Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#EBF3EA] border-b border-[#356B3D]/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setViewMode('sheet')}
              className={`px-3 py-1 font-semibold rounded-lg transition-all cursor-pointer ${
                viewMode === 'sheet'
                  ? 'bg-[#356B3D] text-white shadow-xs'
                  : 'bg-white/70 text-[#1E3A24] hover:bg-white'
              }`}
            >
              Visual Resume Sheet
            </button>
            <button
              onClick={() => setViewMode('text')}
              className={`px-3 py-1 font-semibold rounded-lg transition-all cursor-pointer ${
                viewMode === 'text'
                  ? 'bg-[#356B3D] text-white shadow-xs'
                  : 'bg-white/70 text-[#1E3A24] hover:bg-white'
              }`}
            >
              Interactive Text CV
            </button>
          </div>

          <span className="hidden sm:inline-block text-[11px] text-slate-600 font-medium">
            Open to Work · Bhubaneswar, India
          </span>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F7F7EC]">
          {viewMode === 'sheet' ? (
            /* Visual Grid Resume Image Sheet */
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-md border border-[#356B3D]/20 overflow-hidden group">
                <img
                  src={resumeImagePath}
                  alt="Debasish Ojha - Official Resume Sheet"
                  className="w-full h-auto object-contain transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={resumeImagePath}
                  download="Debasish_Ojha_Resume_2026.png"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#356B3D] hover:bg-[#2B5631] rounded-xl shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PNG)</span>
                </a>

                <a
                  href={resumePdfPath}
                  download="Debasish_Ojha_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1E3A24] bg-white hover:bg-emerald-50 border border-[#356B3D]/20 rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#356B3D]" />
                  <span>Download PDF Format</span>
                </a>
              </div>
            </div>
          ) : (
            /* Structured Text CV */
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Strip */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#356B3D]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#1E3A24]">
                  <Phone className="w-4 h-4 text-[#356B3D]" />
                  <span className="font-semibold">+91 7862040387</span>
                </div>
                <div className="flex items-center gap-2 text-[#1E3A24]">
                  <Mail className="w-4 h-4 text-[#356B3D]" />
                  <span className="font-semibold">debasishojha2244@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#1E3A24]">
                  <MapPin className="w-4 h-4 text-[#356B3D]" />
                  <span className="font-semibold">Bhubaneswar, Odisha</span>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#356B3D]/15 space-y-2">
                <h4 className="font-heading text-lg font-bold text-[#1E3A24] uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#356B3D] rounded-full" />
                  <span>Profile</span>
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  UI/UX designer and video editor who also writes code. I design clean, user-friendly interfaces in Figma, create high-converting thumbnails and marketing creatives, and edit video content, with a front-end and AI-automation background (React.js, n8n, prompt engineering) that helps designs actually ship.
                </p>
              </div>

              {/* Work Experience */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#356B3D]/15 space-y-4">
                <h4 className="font-heading text-lg font-bold text-[#1E3A24] uppercase tracking-wide flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#356B3D]" />
                  <span>Experience</span>
                </h4>

                <div className="border-l-2 border-[#356B3D]/30 pl-4 py-1 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="text-sm font-bold text-[#1E3A24]">UI/UX Intern — Syntec Hub</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF3EA] text-[#356B3D]">
                      Current
                    </span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                    <li>Designing UI and interface layouts in Figma for digital campaigns.</li>
                    <li>Creating visual assets, thumbnails, and supporting marketing creatives.</li>
                  </ul>
                </div>
              </div>

              {/* Selected Work */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#356B3D]/15 space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#1E3A24] uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#356B3D]" />
                  <span>Selected Work</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#1E3A24] flex items-center justify-between">
                      <span>Tour & Travel UI</span>
                      <span className="text-[10px] text-[#356B3D] font-bold">FIGMA</span>
                    </div>
                    <p className="text-slate-600 mt-1">Responsive, user-friendly travel interface designed in Figma with clear layouts.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#1E3A24] flex items-center justify-between">
                      <span>Thumbnail Designs</span>
                      <span className="text-[10px] text-[#356B3D] font-bold">DESIGN</span>
                    </div>
                    <p className="text-slate-600 mt-1">Series of 7 thumbnail designs showcased in an online creative portfolio.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#1E3A24] flex items-center justify-between">
                      <span>NovaCart: E-commerce</span>
                      <span className="text-[10px] text-[#356B3D] font-bold">REACT.JS</span>
                    </div>
                    <p className="text-slate-600 mt-1">Responsive storefront with component-based UI for product listings & cart.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#1E3A24] flex items-center justify-between">
                      <span>AI Automation Workflow</span>
                      <span className="text-[10px] text-[#356B3D] font-bold">N8N · APIS</span>
                    </div>
                    <p className="text-slate-600 mt-1">Automated response flows, prompt-based chatbot interactions, and webhook tools.</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#356B3D]/15 space-y-3">
                <h4 className="font-heading text-lg font-bold text-[#1E3A24] uppercase tracking-wide flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#356B3D]" />
                  <span>Education</span>
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-[#1E3A24]">Full Stack Development Program (Python)</div>
                      <div className="text-slate-600">SkyySkill Academy</div>
                    </div>
                    <span className="text-slate-500 font-medium">2025 — Present</span>
                  </div>

                  <div className="flex justify-between items-start pt-2 border-t border-slate-100">
                    <div>
                      <div className="font-bold text-[#1E3A24]">Bachelor of Commerce (B.Com)</div>
                      <div className="text-slate-600">Shrinathji School and College</div>
                    </div>
                    <span className="text-slate-500 font-medium">Pursuing</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white p-4 rounded-2xl border border-[#356B3D]/15 flex items-center gap-2 text-xs">
                <Globe className="w-4 h-4 text-[#356B3D] shrink-0" />
                <span className="text-slate-500 font-medium">Languages:</span>
                <span className="font-semibold text-[#1E3A24]">English, Hindi, Odia, Gujarati, Marathi</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            Updated for 2026 · Debasish Ojha
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Close
            </button>
            <a
              href={resumeImagePath}
              download="Debasish_Ojha_Resume_2026.png"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#356B3D] hover:bg-[#2B5631] rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Sheet</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
