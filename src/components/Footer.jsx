import React from 'react';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { HStack } from '@astryxdesign/core/HStack';
import { VStack } from '@astryxdesign/core/VStack';
import { Badge } from '@astryxdesign/core/Badge';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, ScholarIcon } from './Icons';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-900 tracking-tight">🧬 {profileData.name}</span>
              <Badge label="React 19 • Astryx" variant="neutral" size="sm" />
            </div>
            <p className="text-xs text-neutral-500">
              Computational Biology • Molecular Dynamics • Structure-Based Drug Design
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              © {new Date().getFullYear()} Sanjay Mehta. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.scholar}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-blue-600 transition-colors"
              aria-label="Google Scholar"
            >
              <ScholarIcon className="w-5 h-5" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-xs font-medium text-neutral-700 transition-colors"
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
