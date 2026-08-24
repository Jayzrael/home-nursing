import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/nursingData';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-py testimonials-section">
      <div className="container">
        
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="section-title">What Patients & Families Say</h2>
          <p className="section-subtitle">
            Real stories from individuals and families who rely on DhermHealthConnect for dedicated in-home nursing and virtual care.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-quote-icon">
                  <Quote size={28} />
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
              </div>

              <p className="testimonial-quote-text">
                "{t.quote}"
              </p>

              <div className="testimonial-footer">
                <div className="author-details">
                  <div className="testimonial-author-name">
                    <span>{t.author}</span>
                    <CheckCircle2 size={13} className="verified-badge-icon" />
                  </div>
                  <div className="testimonial-author-rel">{t.relationship}</div>
                </div>
                <div className="testimonial-service-tag">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="testimonials-trust-note">
          <Sparkles size={16} className="gold-accent-icon" />
          <span>Every review represents direct, licensed care delivered with the highest standards of medical ethics and compassion.</span>
        </div>

      </div>
    </section>
  );
}
