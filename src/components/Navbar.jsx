import React, { useState } from 'react';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { HStack } from '@astryxdesign/core/HStack';
import { GithubIcon } from './Icons';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ mode, toggleMode, onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TopNav
          label="Sanjay Mehta Portfolio Navigation"
          heading={
            <TopNavHeading
              logo={
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold text-sm shadow-sm ring-1 ring-emerald-600/10 dark:ring-emerald-400/20">
                  🧬
                </span>
              }
              heading="Sanjay Mehta"
              subheading="AI Drug Discovery & Biophysics"
              headingHref="#hero"
            />
          }
          startContent={
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <TopNavItem
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  isSelected={activeSection === item.id}
                  onClick={() => setActiveSection(item.id)}
                />
              ))}
            </div>
          }
          endContent={
            <HStack gap={2} vAlign="center">
              <div className="hidden sm:inline-flex">
                <Badge
                  label="React 19 • Astryx"
                  variant="neutral"
                  size="sm"
                />
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleMode}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all shadow-sm flex items-center justify-center"
                aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {mode === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-600" />
                )}
              </button>

              <Button
                label="Resume"
                variant="secondary"
                size="sm"
                onClick={onOpenResume}
              />

              <Button
                label="GitHub"
                variant="ghost"
                size="sm"
                href="https://github.com/sanjaymehta03"
                target="_blank"
                rel="noreferrer"
              />

              {/* Mobile menu trigger */}
              <button
                type="button"
                className="md:hidden p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </HStack>
          }
        />

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMode}
                className="flex-1 py-1.5 px-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium flex items-center justify-center gap-2"
              >
                {mode === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-neutral-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <Button
                label="View Resume"
                variant="secondary"
                size="sm"
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
