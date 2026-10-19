import React from 'react';
import { X, Download, Printer, ExternalLink, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="glass-card resume-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-bar">
          <div className="bar-title">
            <Award size={18} /> Curriculum Vitae (CV) - {profileData.name}
          </div>
          <div className="bar-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} /> Print / Save PDF
            </button>
            <a href="resume.pdf" download="resume.pdf" className="btn btn-primary btn-sm">
              <Download size={15} /> Download PDF
            </a>
            <button className="modal-close-btn" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="resume-document">
          {/* Resume Header */}
          <div className="cv-header">
            <div>
              <h1 className="cv-name">{profileData.name}</h1>
              <p className="cv-subtitle">{profileData.title}</p>
            </div>
            <div className="cv-contact-info">
              <p>{profileData.email}</p>
              <p>{profileData.location}</p>
              <p><a href={profileData.github} target="_blank" rel="noreferrer">github.com/sanjaymehta03</a></p>
            </div>
          </div>

          <hr className="cv-hr" />

          {/* Bio Summary */}
          <section className="cv-section">
            <h2 className="cv-heading">Executive Summary</h2>
            <p className="cv-text">{profileData.bio}</p>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h2 className="cv-heading">Education</h2>
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-head">
                  <strong>{edu.degree}</strong>
                  <span>{edu.year}</span>
                </div>
                <div className="cv-item-sub">{edu.institution}</div>
                <p className="cv-item-notes">{edu.notes}</p>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h2 className="cv-heading">Professional Experience</h2>
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="cv-item">
                <div className="cv-item-head">
                  <strong>{exp.role} — <span className="cv-company">{exp.company}</span></strong>
                  <span>{exp.period}</span>
                </div>
                <div className="cv-item-sub">{exp.location}</div>
                <p className="cv-item-notes">{exp.description}</p>
                {exp.achievements && (
                  <ul className="cv-bullet-list">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {/* Technical Skills Matrix */}
          <section className="cv-section">
            <h2 className="cv-heading">Technical Skills & Expertise</h2>
            <div className="cv-skills-grid">
              {profileData.skills.map((s, idx) => (
                <div key={idx} className="cv-skill-row">
                  <strong>{s.category}:</strong> {s.items.join(', ')}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
