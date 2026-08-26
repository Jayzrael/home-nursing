import { ArrowLeft, Calendar, Clock, Share2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

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
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
          The article you are looking for does not exist or has been moved.
        </p>
        <button className="btn btn-primary" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Patient Resources
        </button>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="article-page">
      {/* Header */}
      <div className="article-hero">
        <div className="container">
          <button className="article-back-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Resources
          </button>

          <span className="article-cat-badge">{post.category}</span>
          <h1 className="article-hero-title">{post.title}</h1>

          <div className="article-meta-row">
            <div className="article-meta-item">
              <Calendar size={13} />
              <span>{post.date}</span>
            </div>
            <div className="article-meta-sep">·</div>
            <div className="article-meta-item">
              <Clock size={13} />
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
                Book dedicated hospital-grade home nursing or schedule an online consultation with Nurse Emmanuel Damilola Mary (RN, RM, BLS, BNSc).
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-gold" onClick={onOpenBooking}>
                  <Calendar size={16} /> Book an Appointment
                </button>
                <a
                  href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Nurse Emmanuel Damilola Mary, I read your health education article and would like to inquire about nursing care.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} /> WhatsApp Direct
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* Book */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">Need Clinical Support?</div>
              <button className="btn btn-primary sidebar-book-btn" onClick={onOpenBooking}>
                <Calendar size={15} /> Book an Appointment
              </button>
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn sidebar-book-btn sidebar-whatsapp"
              >
                <MessageSquare size={15} /> WhatsApp Triage
              </a>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                Direct Phone: {DHERM_HEALTH_INFO.phone}
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
