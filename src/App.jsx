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
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode') || localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    localStorage.setItem('theme', mode);
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
        
        {/* Navigation Bar */}
        <Navbar
          mode={mode}
          toggleMode={toggleMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Content */}
        <main className="flex flex-col">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer mode={mode} toggleMode={toggleMode} />

        {/* Floating Always-Visible Dark/Light Toggle (bottom-right) */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            type="button"
            onClick={toggleMode}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] hover:scale-105 active:scale-95 transition-all text-xs font-semibold backdrop-blur-md"
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={`Current theme: ${mode}. Click to switch.`}
          >
            {mode === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-500" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </Theme>
  );
}
