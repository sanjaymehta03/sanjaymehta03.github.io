import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Download } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Experience({ onOpenResume }) {
  const [tab, setTab] = useState('experience');

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-description">
            Track record of leadership in research laboratories and high-growth engineering teams.
          </p>
        </div>

        <div className="tab-control-wrapper">
          <div className="tab-controls">
            <button
              onClick={() => setTab('experience')}
              className={`tab-btn ${tab === 'experience' ? 'active' : ''}`}
            >
              <Briefcase size={18} /> Professional Experience
            </button>
            <button
              onClick={() => setTab('education')}
              className={`tab-btn ${tab === 'education' ? 'active' : ''}`}
            >
              <GraduationCap size={18} /> Academic Degrees
            </button>
          </div>

          <button onClick={onOpenResume} className="btn btn-secondary btn-sm cv-quick-btn">
            <Download size={16} /> Download Full CV (PDF)
          </button>
        </div>

        {tab === 'experience' && (
          <div className="timeline">
            {profileData.experience.map((item, idx) => (
              <div key={idx} className="timeline-item glass-card">
                <div className="timeline-marker"></div>
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{item.role}</h3>
                    <span className="company-name text-gradient">{item.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="meta-badge"><Calendar size={14} /> {item.period}</span>
                    <span className="meta-badge"><MapPin size={14} /> {item.location}</span>
                  </div>
                </div>
                
                <p className="timeline-description">{item.description}</p>

                {item.achievements && (
                  <ul className="achievements-list">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>
                        <CheckCircle2 size={16} className="check-icon" /> {ach}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'education' && (
          <div className="timeline">
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="timeline-item glass-card">
                <div className="timeline-marker edu-marker"></div>
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{edu.degree}</h3>
                    <span className="company-name text-gradient">{edu.institution}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="meta-badge"><Calendar size={14} /> {edu.year}</span>
                  </div>
                </div>
                <p className="timeline-description">{edu.notes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
