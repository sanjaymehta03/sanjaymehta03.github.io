import React from 'react';
import { Heading } from '@astryxdesign/core/Heading';
import { Button } from '@astryxdesign/core/Button';
import { profileData } from '../data/profileData';
import { X, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[var(--app-card-bg)] text-[var(--app-text)] rounded-xl shadow-2xl border border-[var(--app-border)] overflow-hidden flex flex-col transition-colors duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--app-border)] bg-[var(--app-surface-subtle)]">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--app-text)] text-[var(--app-bg)] text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--app-text-subtle)] hover:bg-[var(--app-border)] hover:text-[var(--app-text)] transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[var(--app-text)]">
          
          {/* Header Summary */}
          <div className="border-b border-[var(--app-border)] pb-4">
            <h2 className="text-xl font-bold text-[var(--app-text)]">{profileData.name}</h2>
            <p className="text-emerald-700 dark:text-emerald-400 font-semibold">{profileData.title}</p>
            <p className="text-xs text-[var(--app-text-subtle)] mt-1 font-mono">
              {profileData.location} • {profileData.email} • {profileData.github}
            </p>
            <p className="text-xs text-[var(--app-text-muted)] mt-2 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--app-text-subtle)] mb-2">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {profileData.skills.map((skillGroup, idx) => (
                <div key={idx} className="p-2.5 rounded border border-[var(--app-border)] bg-[var(--app-surface-subtle)]">
                  <span className="font-semibold text-xs text-[var(--app-text)] block mb-1.5">{skillGroup.category}</span>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="text-[11px] bg-[var(--app-tag-bg)] text-[var(--app-tag-text)] border border-[var(--app-border)] px-1.5 py-0.5 rounded font-mono font-medium">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--app-text-subtle)] mb-3">Professional Experience</h3>
            <div className="space-y-4">
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500 pl-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-[var(--app-text)] text-sm">{exp.role}</div>
                      <div className="text-xs text-[var(--app-text-muted)] font-medium">{exp.company} • {exp.location}</div>
                    </div>
                    <span className="text-xs text-[var(--app-text-subtle)] font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[var(--app-text-muted)] mt-1">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="mt-1.5 space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-[var(--app-text-muted)] flex items-start gap-1.5">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--app-text-subtle)] mb-2">Education</h3>
            <div className="space-y-2">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start p-2.5 rounded bg-[var(--app-surface-subtle)] border border-[var(--app-border)]">
                  <div>
                    <div className="font-semibold text-[var(--app-text)] text-xs">{edu.degree}</div>
                    <div className="text-xs text-[var(--app-text-muted)]">{edu.institution}</div>
                    <div className="text-[11px] text-[var(--app-text-subtle)] mt-0.5">{edu.notes}</div>
                  </div>
                  <span className="text-xs text-[var(--app-text-subtle)] font-mono">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--app-border)] bg-[var(--app-surface-subtle)]">
          <span className="text-xs text-[var(--app-text-subtle)]">
            PDF formatted and ready for download
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
