import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, BookOpen, GraduationCap, Briefcase, Mail, Code } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link tracker
      const sections = ['home', 'about', 'experience', 'research', 'blog', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: GraduationCap },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Research', href: '#research', icon: BookOpen },
    { name: 'Blog', href: '#blog', icon: FileText },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">{profileData.name.split(' ').map(n => n[0]).join('')}</div>
          <span className="logo-text">{profileData.name.split(' ').pop()}<span className="text-gradient">.ai</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}

          <button onClick={onOpenResume} className="btn btn-secondary btn-sm nav-cv-btn">
            <FileText size={15} /> Resume
          </button>

          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn mobile-theme-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={18} /> {link.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary btn-sm mobile-cv-btn"
            >
              <FileText size={16} /> View Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
