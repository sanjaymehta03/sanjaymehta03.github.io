import React, { useState } from 'react';
import { BookOpen, Copy, Check, ExternalLink, Download, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { papersData } from '../data/papersData';

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedPaper, setExpandedPaper] = useState(null);
  const [bibtexModalPaper, setBibtexModalPaper] = useState(null);

  const categories = ['All', ...new Set(papersData.map(p => p.category))];

  const filteredPapers = selectedCategory === 'All'
    ? papersData
    : papersData.filter(p => p.category === selectedCategory);

  const handleCopyBibtex = (paper) => {
    navigator.clipboard.writeText(paper.bibtex);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Peer-Reviewed Publications & Preprints</span>
          <h2 className="section-title">Research Papers</h2>
          <p className="section-description">
            Peer-reviewed articles in computational biophysics, medicinal chemistry, and structural bioinformatics (JCIM, J. Med. Chem., Biophysical Journal) focusing on molecular dynamics and AI drug discovery.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Papers List */}
        <div className="papers-grid">
          {filteredPapers.map((paper) => {
            const isExpanded = expandedPaper === paper.id;
            const isCopied = copiedId === paper.id;

            return (
              <div key={paper.id} className="glass-card paper-card">
                <div className="paper-header">
                  <div className="paper-badges">
                    <span className="tag category-tag">{paper.category}</span>
                    <span className="venue-badge">{paper.venue}</span>
                  </div>
                  <span className="paper-year">{paper.year}</span>
                </div>

                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-authors">{paper.authors}</p>

                <div className="paper-abstract-container">
                  <p className={`paper-abstract ${isExpanded ? 'expanded' : 'truncated'}`}>
                    {paper.abstract}
                  </p>
                  <button
                    onClick={() => setExpandedPaper(isExpanded ? null : paper.id)}
                    className="toggle-abstract-btn"
                  >
                    {isExpanded ? (
                      <>Show Less <ChevronUp size={14} /></>
                    ) : (
                      <>Read Abstract <ChevronDown size={14} /></>
                    )}
                  </button>
                </div>

                <div className="paper-actions">
                  <button
                    onClick={() => handleCopyBibtex(paper)}
                    className={`btn btn-secondary btn-sm ${isCopied ? 'copied' : ''}`}
                    title="Copy BibTeX Citation"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isCopied ? 'Copied!' : 'BibTeX'}
                  </button>

                  <button
                    onClick={() => setBibtexModalPaper(paper)}
                    className="btn btn-secondary btn-sm"
                  >
                    <FileText size={14} /> View BibTeX
                  </button>

                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} /> DOI
                    </a>
                  )}

                  {paper.codeUrl && (
                    <a
                      href={paper.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BibTeX Modal */}
      {bibtexModalPaper && (
        <div className="modal-backdrop" onClick={() => setBibtexModalPaper(null)}>
          <div className="glass-card modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>BibTeX Citation</h3>
              <button className="modal-close" onClick={() => setBibtexModalPaper(null)}>×</button>
            </div>
            <p className="modal-subtitle">{bibtexModalPaper.title}</p>
            <pre className="bibtex-code">
              <code>{bibtexModalPaper.bibtex}</code>
            </pre>
            <div className="modal-actions">
              <button
                onClick={() => handleCopyBibtex(bibtexModalPaper)}
                className="btn btn-primary btn-sm"
              >
                <Copy size={15} /> Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
