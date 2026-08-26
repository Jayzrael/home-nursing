import { HeartHandshake, Phone, Mail, ArrowUp, MessageSquare, ShieldCheck } from 'lucide-react';
import { DHERM_HEALTH_INFO, HOME_NURSING_SERVICES } from '../data/nursingData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export function Footer({ onNavigate, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Col */}
          <div className="footer-brand-col">
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', cursor: 'pointer' }}
              onClick={() => nav('home')}
            >
              <div className="logo-icon">
                <HeartHandshake size={22} />
              </div>
              <div>
                <div className="footer-brand-name">DhermHealthConnect</div>
                <div className="footer-brand-sub">{DHERM_HEALTH_INFO.nurseName} ({DHERM_HEALTH_INFO.nurseQualifications})</div>
              </div>
            </div>

            <p className="footer-bio">
              {DHERM_HEALTH_INFO.motto} Bringing hospital-grade clinical nursing care, chronic condition monitoring, and midwife-led maternal support straight to your home.
            </p>

            <div style={{ marginTop: '1.25rem' }}>
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} /> Direct WhatsApp Triage
              </a>
            </div>
          </div>

          {/* 7 Core Services */}
          <div>
            <div className="footer-col-title">Our 7 Services</div>
            <ul className="footer-links-list">
              {HOME_NURSING_SERVICES.map(s => (
                <li key={s.id}>
                  <button className="footer-link-btn" onClick={() => nav('services')}>
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links-list">
              <li><button className="footer-link-btn" onClick={() => nav('home')}>Home</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('about')}>About Nurse Emmanuel Damilola Mary</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>All Services</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('blog')}>Patient Resources</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('contact')}>Contact</button></li>
              <li><button className="footer-link-btn" onClick={onOpenPrivacy}>Privacy Policy</button></li>
              <li><button className="footer-link-btn" onClick={onOpenTerms}>Terms of Service</button></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="footer-col-title">Contact & Inquiries</div>

            <div className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <a href={`tel:${DHERM_HEALTH_INFO.phones[0].link}`}>
                <span style={{ fontSize: '0.78rem', display: 'block', opacity: 0.7 }}>Direct Phone</span>
                {DHERM_HEALTH_INFO.phone}
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <a href={`mailto:${DHERM_HEALTH_INFO.email}`}>
                <span style={{ fontSize: '0.78rem', display: 'block', opacity: 0.7 }}>Email Support</span>
                {DHERM_HEALTH_INFO.email}
              </a>
            </div>

            <div className="footer-contact-item">
              <ShieldCheck size={15} className="footer-contact-icon" />
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>Credentials Verified</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.75 }}>RN, RM, BLS, BNSc Certified</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 DhermHealthConnect. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <button className="footer-link-btn" onClick={onOpenPrivacy}>Privacy Policy</button>
            <span className="footer-dot-sep">·</span>
            <button className="footer-link-btn" onClick={onOpenTerms}>Terms of Service</button>
            <span className="footer-dot-sep">·</span>
            <button className="footer-link-btn" onClick={() => nav('contact')}>Contact Information</button>
            <button
              className="footer-scroll-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
