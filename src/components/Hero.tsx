import React from 'react';
import { ArrowDownRight, MapPin, Download } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProjectById?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const profileImage = '/assets/aistudio/retouch_2026071300350587.jpg_e52b4190.jpeg';

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-subtle-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Condensed Typography & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#356B3D] uppercase">
              <span className="w-6 h-[2px] bg-[#356B3D]" />
              <span>Personal Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>2026</span>
            </div>

            {/* Main Headline Stack: Bold Condensed Typography */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#1E3A24] leading-[0.95] uppercase">
                PORTFOLIO
              </h1>
              <div className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#356B3D] leading-[0.95] uppercase">
                DEBASISH OJHA
              </div>
            </div>

            {/* Sub-Specializations Stack as requested */}
            <div className="pt-2 pb-1 space-y-1.5 border-y border-[#356B3D]/15">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-[#356B3D] shrink-0" />
                <span className="font-heading text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#1E3A24] uppercase">
                  UI/UX DESIGNER
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-[#75A66B] shrink-0" />
                <span className="font-heading text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#1E3A24]/90 uppercase">
                  GRAPHIC DESIGNER
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-[#356B3D] shrink-0" />
                <span className="font-heading text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#1E3A24]/80 uppercase">
                  VIDEO EDITOR
                </span>
              </div>
            </div>

            {/* Brief Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-[#1C1D1B]/80 font-normal leading-relaxed max-w-xl">
              Specialized in crafting pixel-perfect digital interfaces, high-converting visual branding,
              and cinematic video edits. Blending creative design taste with modern workflow tools to turn
              complex ideas into memorable digital experiences.
            </p>

            {/* Location Metadata */}
            <div className="flex items-center text-xs sm:text-sm text-[#1E3A24]/75 pt-1">
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#356B3D] shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#356B3D] rounded-xl hover:bg-[#2B5631] transition-all shadow-md hover:shadow-lg active:scale-98 text-center"
              >
                <span>Explore My Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1E3A24] bg-white border border-[#356B3D]/25 rounded-xl hover:bg-[#EBF3EA] hover:border-[#356B3D] transition-all shadow-xs text-center cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#356B3D]" />
                <span>View Resume / CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Original Profile Photograph in Clean Circular Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">

              {/* Decorative Subtle Organic Backdrop Halo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#75A66B]/25 blur-3xl -z-10 pointer-events-none" />

              {/* Circular Frame - Responsive and compact on mobile */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-76 lg:h-76 aspect-square rounded-full p-2 sm:p-2.5 bg-gradient-to-br from-[#356B3D] via-[#2B5631] to-[#1E3A24] shadow-xl border-4 border-white transition-all">
                
                {/* Inner Circle Window */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1E3A24]">
                  
                  {/* Real photograph of Debasish Ojha */}
                  <img
                    src={profileImage}
                    alt="Debasish Ojha - Creative Designer and Video Editor"
                    className="w-full h-full object-cover object-[42%_18%] transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle gradient scrim at bottom to ensure contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Status Pill beneath circle */}
              <div className="mt-4 py-1.5 px-4 rounded-full bg-white/95 border border-[#356B3D]/15 inline-flex items-center gap-2 shadow-xs text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-medium text-[#1E3A24]">Available for Freelance & Roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
