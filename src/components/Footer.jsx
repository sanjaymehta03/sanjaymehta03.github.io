import React from 'react';
import { Badge } from '@astryxdesign/core/Badge';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, ScholarIcon } from './Icons';
import { ArrowUp, Sun, Moon } from 'lucide-react';

export default function Footer({ mode, toggleMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-surface)] py-12 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--app-text)] tracking-tight">🧬 {profileData.name}</span>
              <Badge label="React 19 • Astryx" variant="neutral" size="sm" />
            </div>
            <p className="text-xs text-[var(--app-text-muted)]">
              Computational Biology • Molecular Dynamics • Structure-Based Drug Design
            </p>
            <p className="text-xs text-[var(--app-text-subtle)] mt-1">
              © {new Date().getFullYear()} Sanjay Mehta. All rights reserved.
            </p>
          </div>

          {/* Social Links, Theme Toggle & Back to top */}
          <div className="flex items-center gap-3">
            {toggleMode && (
              <button
                type="button"
                onClick={toggleMode}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-subtle)] hover:bg-[var(--app-border)] text-[var(--app-text)] text-xs font-medium transition-colors"
                aria-label="Toggle dark mode"
                title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {mode === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            )}

            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--app-text-subtle)] hover:text-[var(--app-text)] transition-colors p-1"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.scholar}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--app-text-subtle)] hover:text-blue-500 transition-colors p-1"
              aria-label="Google Scholar"
            >
              <ScholarIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--app-text-subtle)] hover:text-blue-600 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-subtle)] hover:bg-[var(--app-border)] text-xs font-medium text-[var(--app-text)] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Top
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
