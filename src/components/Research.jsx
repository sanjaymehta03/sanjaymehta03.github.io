import React, { useState } from 'react';
import { Copy, Check, ExternalLink, FileText, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { papersData } from '../data/papersData';

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedPaper, setExpandedPaper] = useState(null);

  const categories = ['All', ...new Set(papersData.map(p => p.category))];

  const filteredPapers = selectedCategory === 'All'
    ? papersData
    : papersData.filter(p => p.category === selectedCategory);

  const handleCopyBibtex = (paper) => {
    navigator.clipboard.writeText(paper.bibtex);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'AI Drug Discovery': return 'teal';
      case 'Molecular Dynamics & FEP': return 'green';
      case 'Structural Biophysics': return 'purple';
      case 'Generative Chemistry': return 'orange';
      default: return 'blue';
    }
  };

  return (
    <section id="research" className="notion-section">
      <div className="notion-page-container">
        <hr className="notion-divider" />

        <div className="notion-section-header">
          <div>
            <h2 className="notion-section-title">
              <span className="section-icon">📚</span> Publications & Preprints
            </h2>
            <p className="notion-section-desc">
              Peer-reviewed articles in computational biophysics, structural bioinformatics, and machine learning for molecular design.
            </p>
          </div>
        </div>

        {/* Notion Category Filter Pills */}
        <div className="notion-filter-bar">
          <span className="notion-filter-label">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`notion-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notion Database Items List */}
        <div className="notion-database-list">
          {filteredPapers.map((paper) => {
            const isExpanded = expandedPaper === paper.id;
            const isCopied = copiedId === paper.id;

            return (
              <div key={paper.id} className="notion-paper-item">
                <div className="notion-paper-header">
                  <div className="notion-paper-title-row">
                    <span className="notion-doc-icon">📄</span>
                    <h3 className="notion-paper-title">{paper.title}</h3>
                  </div>
                  <div className="notion-paper-tags">
                    <span className={`notion-tag ${getCategoryColor(paper.category)}`}>
                      {paper.category}
                    </span>
                    <span className="notion-tag gray">
                      {paper.venue}
                    </span>
                  </div>
                </div>

                <p className="notion-paper-authors">{paper.authors}</p>

                {/* Collapsible Abstract Toggle */}
                <div className="notion-toggle-block">
                  <button
                    onClick={() => setExpandedPaper(isExpanded ? null : paper.id)}
                    className="notion-toggle-btn"
                  >
                    {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                    <span>Abstract</span>
                  </button>

                  {isExpanded && (
                    <div className="notion-toggle-content">
                      <p>{paper.abstract}</p>
                    </div>
                  )}
                </div>

                {/* Action Bar */}
                <div className="notion-item-actions">
                  <button
                    onClick={() => handleCopyBibtex(paper)}
                    className={`notion-btn notion-btn-sm ${isCopied ? 'copied' : ''}`}
                    title="Copy BibTeX Citation to Clipboard"
                  >
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                    {isCopied ? 'Copied to Clipboard' : 'Copy BibTeX'}
                  </button>

                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="notion-btn notion-btn-sm"
                    >
                      <ExternalLink size={13} /> DOI Link
                    </a>
                  )}

                  {paper.codeUrl && (
                    <a
                      href={paper.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="notion-btn notion-btn-sm"
                    >
                      <FileText size={13} /> Code Repository
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
