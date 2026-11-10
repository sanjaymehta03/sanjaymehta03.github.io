import React from 'react';
import { Card } from '@astryxdesign/core/Card';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { VStack } from '@astryxdesign/core/VStack';
import { HStack } from '@astryxdesign/core/HStack';
import { profileData } from '../data/profileData';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col transition-colors duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <Heading level={4} weight="semibold">
              Curriculum Vitae — Sanjay Mehta
            </Heading>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="./resume.pdf"
              download="Sanjay_Mehta_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
          
          {/* Header Summary */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{profileData.name}</h2>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">{profileData.title}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {profileData.location} • {profileData.email} • {profileData.github}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {profileData.skills.map((skillGroup, idx) => (
                <div key={idx} className="p-2.5 rounded border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60">
                  <span className="font-semibold text-xs text-neutral-900 dark:text-white block mb-1">{skillGroup.category}</span>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Professional Experience</h3>
            <div className="space-y-4">
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500 pl-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white text-sm">{exp.role}</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">{exp.company} • {exp.location}</div>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="mt-1.5 space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-1.5">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">Education</h3>
            <div className="space-y-2">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start p-2 rounded bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-neutral-850">
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white text-xs">{edu.degree}</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">{edu.institution}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5">{edu.notes}</div>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            PDF automatically updated with latest research metrics
          </span>
          <Button
            label="Close"
            variant="secondary"
            size="sm"
            onClick={onClose}
          />
        </div>

      </div>
    </div>
  );
}
