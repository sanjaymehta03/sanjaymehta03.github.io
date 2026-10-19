import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="navbar-logo">
              <div className="logo-icon">{profileData.name.split(' ').map(n => n[0]).join('')}</div>
              <span className="logo-text">{profileData.name.split(' ').pop()}<span className="text-gradient">.ai</span></span>
            </a>
            <p className="footer-tagline">
              Open-source AI research & systems engineering. Hosted for <strong>$0</strong> on GitHub Pages.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#blog">Blog</a>
              <a href="#projects">Projects</a>
            </div>

            <div className="link-column">
              <h4>Connect</h4>
              <a href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profileData.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profileData.twitter} target="_blank" rel="noreferrer">Twitter / X</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
