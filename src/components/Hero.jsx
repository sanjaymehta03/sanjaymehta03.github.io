import React from 'react';
import { ArrowRight, BookOpen, Download, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="status-dot"></span>
            <span>{profileData.badge}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{profileData.name}</span>
          </h1>
          
          <h2 className="hero-subtitle">
            {profileData.title}
          </h2>

          <p className="hero-bio">
            {profileData.bio}
          </p>

          <div className="hero-actions">
            <a href="#research" className="btn btn-primary">
              <BookOpen size={18} /> View Research Papers
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <Download size={18} /> Download Resume
            </button>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            {profileData.github && (
              <a href={profileData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
                <Github size={20} />
              </a>
            )}
            {profileData.scholar && (
              <a href={profileData.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar" className="social-link">
                <Sparkles size={20} />
              </a>
            )}
            {profileData.linkedin && (
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
            )}
            {profileData.twitter && (
              <a href={profileData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-link">
                <Twitter size={20} />
              </a>
            )}
            {profileData.email && (
              <a href={`mailto:${profileData.email}`} aria-label="Email" className="social-link">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack animate-float">
            <div className="hero-code-card glass-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-title">molecular_docking.py</span>
              </div>
              <pre className="code-body">
                <code>
<span className="code-keyword">class</span> <span className="code-class">MolecularDrugDesign</span>:
    <span className="code-keyword">def</span> <span className="code-func">__init__</span>(self, target_pdb):
        self.receptor = openmm.load(<span className="code-str">"target_kinase.pdb"</span>)
        self.focus = [<span className="code-str">"FEP Calculations"</span>, <span className="code-str">"MD Dynamics"</span>]
    
    <span className="code-keyword">def</span> <span className="code-func">screen_binding_affinity</span>(self, ligand):
        trajectory = openmm.simulate(steps=<span className="code-num">500_000</span>)
        <span className="code-keyword">return</span> compute_delta_g(trajectory, ligand)
                </code>
              </pre>
            </div>
            
            <div className="floating-stat-badge glass-card">
              <span className="stat-number">60+ µs</span>
              <span className="stat-label">MD Trajectories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
