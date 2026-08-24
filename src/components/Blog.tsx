import { useState, useMemo } from 'react';
import { Search, Clock, X, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

interface BlogProps {
  onSelectPost: (slug: string) => void;
}

export function Blog({ onSelectPost }: BlogProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(p => {
      const matchCat = category === 'All' || p.category === category;
      const q = query.toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some(t => t.includes(q));
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <section id="blog" className="section-py blog-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Patient Resources & Education</span>
          </div>
          <h1 className="section-title">Health Literacy & Wellness Guides</h1>
          <p className="section-subtitle">
            Educational articles and clinical guides covering chronic illness self-care, wound management, maternal health, and family caregiving.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="blog-filter-bar">
          <div className="blog-search-row">
            <Search size={17} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search articles: wound care, blood pressure, diabetes, maternal..."
              className="blog-search-input"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}>
                <X size={16} />
              </button>
            )}
          </div>
          <div className="blog-cats">
            {BLOG_CATEGORIES.map(c => (
              <button
                key={c}
                className={`blog-cat-btn${category === c ? ' active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="blog-results-count">
          Showing <strong>{filtered.length}</strong> of <strong>{BLOG_POSTS.length}</strong> resources
          {query && <> matching "<strong>{query}</strong>"</>}
        </p>

        {filtered.length > 0 ? (
          <div className="blog-grid">
            {filtered.map(post => (
              <article
                key={post.id}
                className="blog-card"
                onClick={() => onSelectPost(post.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onSelectPost(post.slug)}
              >
                <div className="blog-card-body">
                  <span className="blog-card-cat">{post.category}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-card-meta">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              No resources found for <strong>"{query}"</strong> in <strong>{category}</strong>.
            </p>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => { setQuery(''); setCategory('All'); }}
            >
              <X size={15} /> Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
