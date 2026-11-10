import React, { useState, useEffect } from 'react';
import { Theme } from '@astryxdesign/core/theme';
import { themes, defaultThemeSlug } from './astryx-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'dark' || saved === 'light') return saved;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Theme theme={themes[defaultThemeSlug]} mode={mode}>
      <div className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-200">
        {/* Top Navigation with Dark Mode Toggle */}
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Sections */}
        <main className="flex flex-col">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Footer with secondary quick theme toggle */}
        <Footer mode={mode} toggleMode={toggleMode} />

        {/* Interactive Resume / CV Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </Theme>
  );
}
