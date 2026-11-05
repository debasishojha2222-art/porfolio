import React from 'react';
import { SOFTWARE_SKILLS, SoftwareSkill } from '../data/portfolioData';
import { SoftwareIcon } from './SoftwareIcons';
import { Sparkles, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface AboutAndSkillsProps {
  activeSoftwareFilter: string | null;
  onSelectSoftware: (softwareKey: string) => void;
}

export const AboutAndSkills: React.FC<AboutAndSkillsProps> = ({
  activeSoftwareFilter,
  onSelectSoftware,
}) => {
  return (
    <section id="about" className="relative bg-[#356B3D] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      
      {/* Subtle organic background textures */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#75A66B]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1E3A24]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: ABOUT ME */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A8D59F] uppercase">
              <span className="w-6 h-[2px] bg-[#75A66B]" />
              <span>Designer Profile</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none">
              ABOUT ME
            </h2>

            {/* Exact required introduction */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 shadow-inner">
              <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-emerald-50">
                "Hi, I'm <strong className="text-white font-semibold">Debasish Ojha</strong>, a passionate creative designer and freelancer specializing in <span className="text-[#A8D59F]">UI/UX design</span>, <span className="text-[#A8D59F]">graphic design</span>, and <span className="text-[#A8D59F]">video editing</span>. I enjoy transforming ideas into meaningful visual experiences through creative design and modern digital tools."
              </p>
            </div>

            {/* Core Values & Workflow Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#75A66B] shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-100/90 leading-normal">
                  <strong className="text-white">High-Converting Visuals:</strong> Proven track record crafting YouTube thumbnails with up to 14.2% CTR and 1.4M+ viral views.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#75A66B] shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-100/90 leading-normal">
                  <strong className="text-white">User-Centric UI/UX:</strong> Experience building responsive layouts, component architectures, and web products in Figma.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#75A66B] shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-100/90 leading-normal">
                  <strong className="text-white">Modern Video Editing:</strong> Seamless storytelling, dynamic cuts, color grading, and short-form pacing across Premiere, DaVinci & CapCut.
                </p>
              </div>
            </div>

            {/* Editorial Quick Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  14.2%
                </div>
                <div className="text-xs text-emerald-200 uppercase tracking-wider font-medium">
                  Peak CTR
                </div>
              </div>

              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  1.4M+
                </div>
                <div className="text-xs text-emerald-200 uppercase tracking-wider font-medium">
                  Video Reach
                </div>
              </div>

              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-emerald-200 uppercase tracking-wider font-medium">
                  Original Art
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SOFTWARE SKILLS */}
          <div id="skills" className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#A8D59F] uppercase">
                  <span className="w-6 h-[2px] bg-[#75A66B]" />
                  <span>Interactive Toolkit</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase mt-1">
                  SOFTWARE SKILLS
                </h2>
              </div>
              <p className="text-xs text-emerald-200 italic">
                * Click any tool to filter my portfolio
              </p>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Every tool represents production-tested proficiency. Select any software below to immediately view the corresponding portfolio projects and original designs.
            </p>

            {/* Software Logos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {SOFTWARE_SKILLS.map((skill: SoftwareSkill) => {
                const isSelected = activeSoftwareFilter === skill.filterKey;

                return (
                  <button
                    key={skill.name}
                    onClick={() => onSelectSoftware(skill.filterKey)}
                    className={`group relative text-left p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-4 border ${
                      isSelected
                        ? 'bg-white text-[#1C1D1B] border-white shadow-lg scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/15 text-white border-white/15 hover:border-white/30'
                    }`}
                  >
                    {/* Software Icon */}
                    <div className="shrink-0 pt-0.5">
                      <div className="p-2 rounded-lg bg-black/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                        <SoftwareIcon type={skill.logoType} size={32} />
                      </div>
                    </div>

                    {/* Software Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className={`font-heading text-lg font-bold tracking-wide uppercase truncate ${
                          isSelected ? 'text-[#1E3A24]' : 'text-white'
                        }`}>
                          {skill.name}
                        </h3>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-[#356B3D] text-white'
                            : 'bg-white/20 text-emerald-100'
                        }`}>
                          {skill.category}
                        </span>
                      </div>

                      <p className={`text-xs mt-1 line-clamp-2 ${
                        isSelected ? 'text-slate-600' : 'text-emerald-100/80'
                      }`}>
                        {skill.description}
                      </p>

                      <div className="mt-2 flex items-center justify-between text-[11px] font-semibold">
                        <span className={isSelected ? 'text-[#356B3D]' : 'text-[#A8D59F]'}>
                          {skill.proficiency} · {skill.experience}
                        </span>
                        <span className={`inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 ${
                          isSelected ? 'text-[#356B3D]' : 'text-white'
                        }`}>
                          <span>View Projects</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live External Workspaces: Figma & Premiere Pro Google Drive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              
              {/* Figma Workspace */}
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-lg bg-black/25 shrink-0 flex items-center justify-center">
                    <SoftwareIcon type="figma" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white uppercase tracking-wider truncate">
                      Figma Workspace
                    </div>
                    <div className="text-[11px] text-emerald-100/80 truncate">
                      UI/UX wireframes & layouts
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.figma.com/design/erjf8oop5CcTkBO6avvTH1/Untitled?node-id=0-1&t=1cJIs6wtuehiqgkP-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#19351C] hover:bg-emerald-50 text-[11px] font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  <span>Figma</span>
                  <ExternalLink className="w-3 h-3 text-[#356B3D]" />
                </a>
              </div>

              {/* Premiere Pro Video Projects Google Drive */}
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-lg bg-black/25 shrink-0 flex items-center justify-center">
                    <SoftwareIcon type="premiere" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white uppercase tracking-wider truncate">
                      Premiere Pro Videos
                    </div>
                    <div className="text-[11px] text-emerald-100/80 truncate">
                      Watch edited videos (Drive)
                    </div>
                  </div>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/18ZqMJ5Zk3o_WagRt85Rg9vu3H-KRF59X?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#9999FF] hover:bg-[#8888EE] text-[#00005B] text-[11px] font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  <span>Watch Videos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Clear Filter Prompt if Active */}
            {activeSoftwareFilter && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/15 border border-white/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-300" />
                  <span>Currently filtering portfolio by: <strong className="text-white underline">{activeSoftwareFilter}</strong></span>
                </div>
                <button
                  onClick={() => onSelectSoftware('ALL')}
                  className="px-2.5 py-1 text-xs font-semibold bg-white text-[#356B3D] rounded-md hover:bg-emerald-50 transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
