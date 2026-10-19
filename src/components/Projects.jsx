import React from 'react';
import { FolderGit2, Star, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Open Source & Engineering</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Open-source molecular dynamics pipelines, binding affinity calculators, and machine learning drug discovery toolkits.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-card-header">
                <div className="project-icon-box">
                  <FolderGit2 size={24} className="project-icon" />
                </div>
                <div className="project-header-actions">
                  {project.stars && (
                    <span className="star-badge">
                      <Star size={14} className="star-icon" /> {project.stars}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={15} /> Repository
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
