import React, { useState } from 'react';
import { Search, Clock, Calendar, ArrowRight, X, Share2, Check, FileText } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activePost, setActivePost] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);

  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="notion-section">
      <div className="notion-page-container">
        <hr className="notion-divider" />

        <div className="notion-section-header">
          <div>
            <h2 className="notion-section-title">
              <span className="section-icon">📝</span> Technical Essays & Research Notes
            </h2>
            <p className="notion-section-desc">
              In-depth write-ups on molecular dynamics optimization, alchemical free energy calculations (FEP), and geometric diffusion.
            </p>
          </div>
        </div>

        {/* Notion Search & Tags Control Bar */}
        <div className="notion-search-bar">
          <div className="notion-search-wrapper">
            <Search className="notion-search-icon" size={15} />
            <input
              type="text"
              placeholder="Quick search across notes, topics, or code snippets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="notion-search-input"
            />
            {searchTerm && (
              <button className="notion-clear-btn" onClick={() => setSearchTerm('')}>
                <X size={14} />
              </button>
            )}
          </div>

          <div className="notion-tag-filter-row">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`notion-filter-btn ${selectedTag === tag ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Notion Database Grid */}
        {filteredPosts.length === 0 ? (
          <div className="notion-empty-state">
            <p>No notes found matching "{searchTerm}".</p>
          </div>
        ) : (
          <div className="notion-blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="notion-blog-card" onClick={() => setActivePost(post)}>
                <div className="notion-blog-card-top">
                  <span className="notion-doc-icon">📄</span>
                  <div className="notion-blog-meta-right">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="notion-blog-card-title">{post.title}</h3>
                <p className="notion-blog-card-summary">{post.summary}</p>

                <div className="notion-blog-card-footer">
                  <div className="notion-card-tags">
                    {post.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="notion-tag gray">#{t}</span>
                    ))}
                  </div>
                  <span className="notion-read-more">Read note ↗</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Notion Full Document Reading Modal */}
      {activePost && (
        <div className="notion-modal-backdrop" onClick={() => setActivePost(null)}>
          <div className="notion-document-modal" onClick={(e) => e.stopPropagation()}>
            <div className="notion-modal-topbar">
              <div className="notion-modal-breadcrumbs">
                <span className="notion-crumb-icon">📄</span>
                <span>Notes</span>
                <span>/</span>
                <span className="current-note-name">{activePost.title}</span>
              </div>
              <button className="notion-close-btn" onClick={() => setActivePost(null)}>×</button>
            </div>

            <div className="notion-document-content">
              <div className="notion-doc-header">
                <div className="notion-doc-icon-large">📄</div>
                <h1 className="notion-doc-title">{activePost.title}</h1>

                <div className="notion-doc-properties">
                  <div className="notion-doc-prop">
                    <span className="prop-name">Category:</span>
                    <span className="notion-tag green">{activePost.category}</span>
                  </div>
                  <div className="notion-doc-prop">
                    <span className="prop-name">Date:</span>
                    <span className="prop-val">{activePost.date}</span>
                  </div>
                  <div className="notion-doc-prop">
                    <span className="prop-name">Estimated:</span>
                    <span className="prop-val">{activePost.readTime}</span>
                  </div>
                </div>
              </div>

              <hr className="notion-doc-divider" />

              <div className="notion-doc-body">
                {activePost.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={pIdx} className="notion-doc-h3">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={pIdx} className="notion-doc-ul">
                        {paragraph.split('\n').map((item, iIdx) => (
                          <li key={iIdx}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    const lines = paragraph.split('\n');
                    const lang = lines[0].replace('```', '');
                    const code = lines.slice(1, -1).join('\n');
                    return (
                      <div key={pIdx} className="notion-code-frame">
                        <div className="notion-code-header">
                          <span className="code-lang">{lang || 'code'}</span>
                        </div>
                        <pre className="notion-code-body">
                          <code>{code}</code>
                        </pre>
                      </div>
                    );
                  }
                  return <p key={pIdx} className="notion-doc-p">{paragraph}</p>;
                })}
              </div>

              <div className="notion-doc-footer">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShareCopied(true);
                    setTimeout(() => setShareCopied(false), 2200);
                  }}
                  className="notion-btn notion-btn-sm"
                >
                  {shareCopied ? <Check size={14} /> : <Share2 size={14} />}
                  {shareCopied ? 'Link Copied to Clipboard!' : 'Share Note'}
                </button>
                <button onClick={() => setActivePost(null)} className="notion-btn notion-btn-primary notion-btn-sm">
                  Close Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
