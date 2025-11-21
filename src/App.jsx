import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { EducationSection } from '@/components/education/EducationSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { SVGBackgroundMorph } from '@/components/effects/SVGBackgroundMorph';
import { useTheme } from '@/hooks/useTheme';

function App() {
  // Initialize theme
  useTheme();

  return (
    <div className="relative min-h-screen bg-bg-1000 text-text-primary transition-colors duration-300 overflow-x-hidden selection:bg-accent-primary/30 selection:text-white">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SVGBackgroundMorph />
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
