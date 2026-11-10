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
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--app-surface)]/90 backdrop-blur-md border-b border-[var(--app-border)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TopNav
          label="Sanjay Mehta Portfolio Navigation"
          heading={
            <TopNavHeading
              logo={
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-sm shadow-sm">
                  🧬
                </span>
              }
              heading="Sanjay Mehta"
              subheading="AI Drug Discovery"
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
              {/* Desktop & Tablet Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleMode}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-subtle)] text-[var(--app-text)] hover:bg-[var(--app-border-subtle)] transition-all text-xs font-medium"
                aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {mode === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="hidden sm:inline">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-500" />
                    <span className="hidden sm:inline">Dark</span>
                  </>
                )}
              </button>

              <Button
                label="Resume"
                variant="secondary"
                size="sm"
                onClick={onOpenResume}
              />

              <div className="hidden lg:inline-flex">
                <Button
                  label="GitHub"
                  variant="ghost"
                  size="sm"
                  href="https://github.com/sanjaymehta03"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                className="md:hidden p-1.5 rounded-md hover:bg-[var(--app-surface-subtle)] text-[var(--app-text)] transition-colors"
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
          <div className="md:hidden py-3 border-t border-[var(--app-border)] flex flex-col gap-2 bg-[var(--app-surface)]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--app-text)] hover:bg-[var(--app-surface-subtle)] transition-colors"
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--app-border)] flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMode}
                className="flex-1 py-2 px-3 rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-subtle)] text-[var(--app-text)] text-xs font-semibold flex items-center justify-center gap-2"
              >
                {mode === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Switch to Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-500" />
                    <span>Switch to Dark Mode</span>
                  </>
                )}
              </button>

              <Button
                label="CV / Resume"
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
