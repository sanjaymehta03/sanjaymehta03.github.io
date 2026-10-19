import React, { useState } from 'react';
import { Search, Clock, Calendar, Tag, ArrowRight, X, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activePost, setActivePost] = useState(null);

  // Collect all unique tags across posts
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Writings & Insights</span>
          <h2 className="section-title">Blog & Technical Articles</h2>
          <p className="section-description">
            Articles on GPU molecular dynamics acceleration, alchemical free energy calculations (FEP), and geometric deep learning for drug discovery.
          </p>
        </div>

        {/* Search & Tag Bar */}
        <div className="blog-controls">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search articles by title, topic, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className="tags-filter-bar">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="no-results glass-card">
            <p>No articles found matching "{searchTerm}". Try another search term.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="glass-card blog-card">
                <div className="blog-card-meta">
                  <span className="tag category-tag">{post.category}</span>
                  <div className="blog-time">
                    <span><Calendar size={13} /> {post.date}</span>
                    <span><Clock size={13} /> {post.readTime}</span>
                  </div>
                </div>

                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>

                <div className="blog-card-footer">
                  <div className="post-tags-list">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="small-tag">#{t}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePost(post)}
                    className="read-article-btn"
                  >
                    Read Post <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div className="modal-backdrop" onClick={() => setActivePost(null)}>
          <div className="glass-card article-reader-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reader-header">
              <div className="reader-meta">
                <span className="tag category-tag">{activePost.category}</span>
                <span><Calendar size={14} /> {activePost.date}</span>
                <span><Clock size={14} /> {activePost.readTime}</span>
              </div>
              <button className="modal-close" onClick={() => setActivePost(null)}>×</button>
            </div>

            <h1 className="reader-title">{activePost.title}</h1>

            <div className="reader-tags">
              {activePost.tags.map((t) => (
                <span key={t} className="tag">#{t}</span>
              ))}
            </div>

            <hr className="reader-divider" />

            <div className="reader-body">
              {activePost.content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return <h3 key={pIdx} className="reader-h3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={pIdx} className="reader-ul">
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
                    <pre key={pIdx} className="reader-code-block">
                      <div className="code-lang-tag">{lang || 'code'}</div>
                      <code>{code}</code>
                    </pre>
                  );
                }
                return <p key={pIdx} className="reader-p">{paragraph}</p>;
              })}
            </div>

            <div className="reader-footer">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
                className="btn btn-secondary btn-sm"
              >
                <Share2 size={15} /> Share Article
              </button>
              <button onClick={() => setActivePost(null)} className="btn btn-primary btn-sm">
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
