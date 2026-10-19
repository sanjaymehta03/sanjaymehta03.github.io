import React, { useState } from 'react';
import { Award, Code2, Cpu, Database, Wrench } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const allSkills = profileData.skills;
  const categories = ['All', ...allSkills.map(s => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Biography & Expertise</span>
          <h2 className="section-title">About & Technical Skills</h2>
          <p className="section-description">
            Combining academic rigor with production engineering experience to solve high-complexity computational challenges.
          </p>
        </div>

        {/* Key Statistics Grid */}
        <div className="stats-grid">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <h3 className="stat-value text-gradient">{stat.value}</h3>
              <p className="stat-name">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Breakdown */}
        <div className="skills-container">
          <div className="skills-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((group, idx) => (
              <div key={idx} className="glass-card skill-group-card">
                <div className="skill-group-header">
                  <Cpu className="skill-icon" size={22} />
                  <h4>{group.category}</h4>
                </div>
                <div className="skill-tags">
                  {group.items.map((skill, sIdx) => (
                    <span key={sIdx} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
