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
            <a href={profileData.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
              <Github size={20} />
            </a>
            <a href={profileData.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar" className="social-link">
              <Sparkles size={20} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href={profileData.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="social-link">
              <Twitter size={20} />
            </a>
            <a href={`mailto:${profileData.email}`} aria-label="Email" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack animate-float">
            <div className="hero-code-card glass-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-title">research_focus.py</span>
              </div>
              <pre className="code-body">
                <code>
<span className="code-keyword">class</span> <span className="code-class">ResearchAgent</span>:
    <span className="code-keyword">def</span> <span className="code-func">__init__</span>(self):
        self.focus = [<span className="code-str">"LLM Alignment"</span>, <span className="code-str">"SubQuadratic Attn"</span>]
        self.location = <span className="code-str">"{profileData.location}"</span>
    
    <span className="code-keyword">def</span> <span className="code-func">optimize_inference</span>(self, model):
        <span className="code-keyword">return</span> model.quantize(bits=<span className="code-num">4</span>).compile()
                </code>
              </pre>
            </div>
            
            <div className="floating-stat-badge glass-card">
              <span className="stat-number">450+</span>
              <span className="stat-label">Citations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
