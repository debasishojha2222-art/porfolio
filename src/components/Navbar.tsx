import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F7EC]/90 backdrop-blur-md border-b border-[#356B3D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#356B3D] transition-transform group-hover:scale-125" />
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A24] uppercase">
            Debasish Ojha
          </span>
          <span className="hidden sm:inline-block text-xs font-medium text-[#75A66B] uppercase tracking-wider pl-2 border-l border-[#356B3D]/20">
            Portfolio
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#1E3A24]/80">
          <a
            href="#about"
            className="hover:text-[#356B3D] transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#356B3D] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#356B3D] transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#gallery"
            className="hover:text-[#356B3D] transition-colors whitespace-nowrap shrink-0"
          >
            Showcase
          </a>
          <a
            href="#contact"
            className="hover:text-[#356B3D] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Resume */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1E3A24] bg-white border border-[#356B3D]/20 rounded-lg hover:border-[#356B3D] hover:bg-[#EBF3EA] transition-all whitespace-nowrap shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#356B3D]" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#356B3D] rounded-lg hover:bg-[#2B5631] transition-all shadow-xs whitespace-nowrap hover:shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-xs font-semibold text-[#1E3A24] bg-white border border-[#356B3D]/20 rounded-lg"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-[#356B3D]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1E3A24] hover:bg-[#EBF3EA] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#356B3D]/10 bg-[#F7F7EC] px-6 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-[#1E3A24]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#356B3D] transition-colors"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#356B3D] transition-colors"
            >
              Software Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#356B3D] transition-colors"
            >
              My Projects
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#356B3D] transition-colors"
            >
              Infinite Showcase
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#356B3D] transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-[#356B3D]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#1E3A24] bg-white border border-[#356B3D]/20 rounded-lg"
            >
              View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#356B3D] rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
