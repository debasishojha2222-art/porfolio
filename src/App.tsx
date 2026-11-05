/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_PROJECTS, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndSkills } from './components/AboutAndSkills';
import { ProjectsGallery } from './components/ProjectsGallery';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [activeSoftwareFilter, setActiveSoftwareFilter] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Handle clicking a software logo in section 3
  const handleSelectSoftware = (softwareKey: string) => {
    if (softwareKey === 'ALL') {
      setActiveSoftwareFilter(null);
      setActiveCategory('All Projects');
    } else {
      setActiveSoftwareFilter(softwareKey);
      // Automatically scroll down to the Projects section
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleClearSoftwareFilter = () => {
    setActiveSoftwareFilter(null);
  };

  // Lightbox navigation between projects
  const handleNavigateModal = (direction: 'prev' | 'next') => {
    if (!activeModalProject) return;
    const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === activeModalProject.id);
    if (currentIndex === -1) return;

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= ALL_PROJECTS.length) newIndex = 0;
    if (newIndex < 0) newIndex = ALL_PROJECTS.length - 1;

    setActiveModalProject(ALL_PROJECTS[newIndex]);
  };

  const handleSelectProjectById = (id: string) => {
    const found = ALL_PROJECTS.find((p) => p.id === id);
    if (found) {
      setActiveModalProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7EC] text-[#1C1D1B] flex flex-col font-sans selection:bg-[#356B3D] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 2: Header / Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onSelectProjectById={handleSelectProjectById}
        />

        {/* Section 3: About Me + Software Skills (Full-width Green Section) */}
        <AboutAndSkills
          activeSoftwareFilter={activeSoftwareFilter}
          onSelectSoftware={handleSelectSoftware}
        />

        {/* Section 4: Main Projects Gallery */}
        <ProjectsGallery
          projects={ALL_PROJECTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeSoftwareFilter={activeSoftwareFilter}
          onClearSoftwareFilter={handleClearSoftwareFilter}
          onOpenProjectModal={(project) => setActiveModalProject(project)}
        />

        {/* Section 5: Infinite Moving Design Gallery (Left-to-Right scrolling) */}
        <InfiniteMarquee
          projects={ALL_PROJECTS}
          onOpenProjectModal={(project) => setActiveModalProject(project)}
        />

        {/* Section 7: Contact Section & Footer */}
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Section 6: Project Lightbox Interaction Modal */}
      <ProjectLightbox
        project={activeModalProject}
        allProjects={ALL_PROJECTS}
        onClose={() => setActiveModalProject(null)}
        onNavigate={handleNavigateModal}
      />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
