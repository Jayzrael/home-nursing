import { ArrowLeft, Calendar, Clock, Share2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { AVON_HOME_NURSING_INFO } from '../data/nursingData';

interface ArticlePageProps {
  slug: string;
  onBack: () => void;
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

// Simple markdown-ish content renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n\n');
  return lines.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('### ')) {
      return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
    }

    // Table rendering
    if (trimmed.includes('|---|') || trimmed.startsWith('|')) {
      const rows = trimmed.split('\n').filter(r => r.trim() && !r.includes('|---|'));
      const headers = rows[0].split('|').filter(c => c.trim());
      const dataRows = rows.slice(1);
      return (
        <table key={i}>
          <thead>
            <tr>{headers.map((h, j) => <th key={j}>{h.trim()}</th>)}</tr>
          </thead>
          <tbody>
            {dataRows.map((row, j) => (
              <tr key={j}>
                {row.split('|').filter(c => c.trim()).map((cell, k) => (
                  <td key={k}>{cell.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.trim().startsWith('- '));
      return (
        <ul key={i}>
          {items.map((li, j) => <li key={j}>{li.replace(/^- /, '')}</li>)}
        </ul>
      );
    }

    if (/^\d+\./.test(trimmed)) {
      const items = trimmed.split('\n').filter(l => /^\d+\./.test(l.trim()));
      return (
        <ol key={i}>
          {items.map((li, j) => <li key={j}>{li.replace(/^\d+\.\s*/, '')}</li>)}
        </ol>
      );
    }

    return <p key={i}>{trimmed}</p>;
  });
}

export function ArticlePage({ slug, onBack, onSelectPost, onOpenBooking }: ArticlePageProps) {
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="section-py" style={{ textAlign: 'center' }}>
        <p>Article not found.</p>
        <button className="btn btn-primary" onClick={onBack} style={{ marginTop: '1rem' }}>← Back to Blog</button>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  const handleShare = () => {
    const url = `${window.location.href}#blog/${post.slug}`;
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url);
    }
  };

  return (
    <div className="article-page">
      {/* Hero */}
      <div className="article-hero">
        <div className="container">
          <button className="article-back-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Blog
          </button>

          <span className="article-cat-label">{post.category}</span>

          <h1 className="article-title">{post.title}</h1>

          <div className="article-meta-row">
            <div className="article-author-block">
              <img src={post.author.avatar} alt={post.author.name} className="article-author-avatar" />
              <div>
                <div className="article-author-name">{post.author.name}</div>
                <div className="article-author-role">{post.author.role}</div>
              </div>
            </div>
            <div className="article-meta-divider"></div>
            <div className="article-meta-item">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="article-meta-item">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={handleShare}
              className="btn btn-outline btn-sm"
              style={{ marginLeft: 'auto' }}
            >
              <Share2 size={14} /> Share
            </button>
          </div>

          <div className="article-hero-img-wrap">
            <img src={post.image} alt={post.title} className="article-hero-img" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className="article-layout">
          {/* Main content */}
          <div className="article-content">
            <div className="article-body">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="article-tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="article-tag">#{tag}</span>
              ))}
            </div>

            {/* CTA Banner */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-mid))', borderRadius: 'var(--radius-lg)', padding: '2rem', marginTop: '2.5rem', color: 'white' }}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.65rem' }}>
                Need Professional Home Nursing Care?
              </h3>
              <p style={{ opacity: 0.9, marginBottom: '1.25rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Book dedicated hospital-grade home nursing in the safety and
                comfort of your home across Ibadan, Oyo State.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-white" onClick={onOpenBooking}>
                  <Calendar size={16} /> Book a Nurse Now
                </button>
                <a
                  href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent('Hello TheSanitasNurse, I read your article and would like to enquire about home nursing care.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#25d366', color: 'white', border: 'none' }}
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* Book */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">Get Home Nursing Care</div>
              <button className="btn btn-primary sidebar-book-btn" onClick={onOpenBooking}>
                <Calendar size={15} /> Book a Nurse
              </button>
              <a
                href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent(AVON_HOME_NURSING_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn sidebar-book-btn sidebar-whatsapp"
              >
                <MessageSquare size={15} /> WhatsApp Triage
              </a>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                24/7 emergency dispatch available
              </div>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="sidebar-card">
                <div className="sidebar-card-title">Related Articles</div>
                <ul className="sidebar-related-list">
                  {related.map(r => (
                    <li key={r.id} className="sidebar-related-item">
                      <button className="sidebar-related-btn" onClick={() => onSelectPost(r.slug)}>
                        {r.title}
                      </button>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {r.readTime}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* All blog topics */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">Browse by Topic</div>
              <ul className="sidebar-related-list">
                {['Elderly Care', 'Wound Care', 'Maternal Health', 'Chronic Disease', 'Health Education'].map(cat => (
                  <li key={cat} className="sidebar-related-item">
                    <button className="sidebar-related-btn" onClick={onBack}>
                      {cat} →
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
