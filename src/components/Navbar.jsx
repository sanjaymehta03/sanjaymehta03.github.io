import React, { useState } from 'react';
import { TopNav, TopNavHeading, TopNavItem } from '@astryxdesign/core/TopNav';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { HStack } from '@astryxdesign/core/HStack';
import { GithubIcon } from './Icons';
import { Menu, X, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background-surface,#ffffff)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle,#e5e7eb)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TopNav
          label="Sanjay Mehta Portfolio Navigation"
          heading={
            <TopNavHeading
              logo={
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-sm shadow-sm">
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
                className="md:hidden p-1.5 rounded-md hover:bg-neutral-100 text-neutral-600 transition-colors"
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
          <div className="md:hidden py-3 border-t border-neutral-200 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex gap-2">
              <Button
                label="View Resume"
                variant="secondary"
                size="sm"
                width="100%"
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
