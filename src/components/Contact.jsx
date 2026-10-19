import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open default mail client with pre-filled content to ensure message delivery
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Hi Sanjay,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            Interested in discussing computational biology, drug design collaborations, or consulting projects? Reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left info panel */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-text">
                Feel free to reach out for research discussions, academic collaborations, or conference speaking inquiries.
              </p>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <div className="email-copy-wrapper">
                      <a href={`mailto:${profileData.email}`} className="method-value">{profileData.email}</a>
                      <button onClick={handleCopyEmail} className="copy-icon-btn" title="Copy Email">
                        {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <span className="contact-note-badge">Collaborations & Consulting</span>
              <p>Available for structural biophysics discussions, pipeline development, and target modeling.</p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Draft Opened in Mail Client!</h3>
                <p>Your message has been prepared. If your email application didn't open automatically, you can email directly at <strong>{profileData.email}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="sarah@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Research Collaboration / In Silico Screening"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your project, inquiry, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <Send size={18} /> Send Message via Email
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
